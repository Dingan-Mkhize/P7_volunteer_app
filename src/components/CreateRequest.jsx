import { useState, useEffect, useRef } from "react";
import { useUser } from "../contexts/UserContext";
import { useMutation } from "react-query";
import axios from "axios";
import Logo from "../assets/LogoImg.png";
import MapComponent from "./MapComponent";
import "leaflet/dist/leaflet.css";
import "../index.css";
import AutoCompleteModal from "./AutoCompleteModal";
import { useAutocomplete } from "../hooks/useAutocomplete";

const CreateRequest = () => {
  const { user, token } = useUser();
  const [title, setTitle] = useState("");
  const [locationDescription, setLocationDescription] = useState("");
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });
  const [latitude, setLatitude] = useState(location.lat);
  const [longitude, setLongitude] = useState(location.lng)
  console.log("Initial position state:", location);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [taskType, setTaskType] = useState("");
  const [description, setDescription] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [descriptionError, setDescriptionError] = useState("");
  const { suggestions, setInput } = useAutocomplete();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      inputRef.current?.focus();
    }
  }, [isModalOpen]);

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    const words = text.match(/\S+/g);
    const wordCount = words ? words.length : 0;

    if (wordCount <= 300) {
      setDescription(text);
      setWordCount(wordCount);
      setDescriptionError("");
    } else {
      setDescriptionError("Description must not exceed 300 words.");
    }
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    setInput(value); 
    if (value.trim().length > 2) {
      if (!isModalOpen) setIsModalOpen(true);
    } else {
      if (isModalOpen) setIsModalOpen(false);
    }
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocationDescription(value);
    setSearchValue(value); 
    setInput(value); 
    if (value.trim().length > 2) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    console.log("Suggestion selected:", suggestion);
    setLocationDescription(suggestion.name);
    console.log("Location Description set to:", suggestion.name);
    setLocation({ lat: suggestion.lat, lng: suggestion.lon });
    setLatitude(suggestion.lat);
    setLongitude(suggestion.lon);
    console.log("Location set to:", {
      lat: suggestion.lat,
      lng: suggestion.lon,
    });
    setIsModalOpen(false);
    setSearchValue("");
    setInput("");
  };

  const submitRequestMutation = useMutation(
    (newRequestData) => {
      return axios.post(
        `${import.meta.env.VITE_API_URL}/users/${user.id}/requests`,
        newRequestData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    },
    {
      onSuccess: () => {
        setTitle("");
        setLocationDescription("");
        setLocation({ lat: 51.505, lng: -0.09 }); // Reset to default or clear
        setDate("");
        setTime("");
        setTaskType("");
        setDescription("");
        setWordCount(0);
      },
      onError: (error) => {
        alert(`Error: ${error.response?.data?.message || error.message}`);
      },
    }
  );

  const handleSubmit = (event) => {
  event.preventDefault();
  if (wordCount > 300) {
    setDescriptionError("Description must not exceed 300 words.");
    return;
  }

  const formData = {
    title,
    location: locationDescription,
    latitude: location.lat,
    longitude: location.lng,
    date,
    time,
    taskType,
    description,
  };

  submitRequestMutation.mutate(formData);
};

  const handleMapClick = (latlng) => {
    console.log("Map clicked:", latlng);
    setLocation(latlng);
    setLatitude(latlng.lat);
    setLongitude(latlng.lng);
    setLocationDescription(`${latlng.lat}, ${latlng.lng}`);
  };

  return (
    <div className="flex flex-col items-stretch mt-3 p-9 border shadow-3xl rounded-md">
      <div className="flex flex-col items-center text-center text-black bg-white max-md:px-5 max-md:max-w-full mb-6 pt-6 border border-black shadow-lg shadow-[#7d7d7d] rounded-2xl">
        <div className="flex justify-center">
          <img
            loading="lazy"
            src={Logo}
            alt="Hands United Logo"
            className="object-contain object-center w-[130px] h-[130px] overflow-hidden border border-black rounded-full shadow-lg shadow-[#7d7d7d]"
          />
        </div>
        <div className="mt-6 text-6xl font-bold leading-[67.2px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Hands United
        </div>
        <div className="mt-3 mb-6 text-lg leading-7 max-md:max-w-full">
          A helping hand, to unite community.
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full border border-black shadow-lg shadow-[#7d7d7d] rounded-2xl">
        <div className="flex flex-col mt-6 mb-10 max-w-full w-[768px] max-md:mt-10 p-12 border shadow-lg shadow-[#7d7d7d] rounded-2xl">
          <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Create Your Request
          </div>
          <div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
            Reach out to the community. We are here to help!
          </div>
          <div className="Z-0 leaflet-container leaflet-control-attribution border border-black shadow-md shadow-[#7d7d7d] rounded-xl my-4">
            <MapComponent
              position={[latitude, longitude]}
              zoomLevel={13}
              onMapClick={handleMapClick}
              selectionMode={true}
              title={title || "Your location"}
            />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex gap-5 justify-between mt-12 leading-6 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col flex-1">
                <label htmlFor="title" className="block">
                  Request Title (required):
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="shrink-0 mt-2 h-12 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl px-4 w-full"
                  required
                />
              </div>
              <div className="flex flex-col flex-1">
                <label
                  htmlFor="locationDescription"
                  className="block"
                >
                  Location Description:
                </label>
                <input
                  id="locationDescription"
                  type="text"
                  value={locationDescription}
                  onChange={handleLocationChange}
                  className="shrink-0 mt-2 h-12 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl px-4 w-full"
                  placeholder="Enter a location description"
                />
                {/* Invoke the AutocompleteModal here */}
                <AutoCompleteModal
                  isOpen={isModalOpen}
                  searchValue={searchValue}
                  onSearchChange={handleSearchChange}
                  inputRef={inputRef}
                  suggestions={suggestions}
                  onSelectSuggestion={handleSelectSuggestion}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>
            </div>

            <div className="flex gap-5 justify-between mt-6 text-base leading-6 text-black max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col flex-1">
                <label htmlFor="date" className="block">
                  Date:
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="shrink-0 mt-2 h-12 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl px-4 w-full"
                />
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="time" className="block">
                  Time:
                </label>
                <input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="shrink-0 mt-2 h-12 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl px-4"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="taskType"
                className="block text-base leading-6 text-black"
              >
                Choose your task type (One time task or Material need):
              </label>
              <select
                id="taskType"
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
                className="mt-2 p-3 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl w-full"
              >
                <option value="">Select Task Type</option>
                <option value="one-time">One-time Task</option>
                <option value="material-need">Material Need</option>
              </select>
            </div>
            <div className="mt-10">
              <label
                htmlFor="description"
                className="block text-base leading-6 text-black"
              >
                Give your request a full description:
              </label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
                className="mt-2 p-3 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-xl w-full h-48"
                placeholder="Type your description (max 300 words)..."
              ></textarea>
              {descriptionError && (
                <p className="text-red-500 text-xs italic">
                  {descriptionError}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="justify-center self-center px-6 py-3 mt-6 text-base leading-6 text-white whitespace-nowrap bg-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full max-md:px-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
