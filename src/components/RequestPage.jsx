import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import EditRequestModal from "../components/EditRequestModal";
import MapComponent from "../components/MapComponent";
import { FiEdit } from "react-icons/fi";
import { differenceInHours } from "date-fns";
import { useUser } from "../contexts/UserContext";
import "../index.css";

const fetchRequestDetails = async (jobId, token) => {
  return axios
    .get(`http://localhost:4000/requests/${jobId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

const RequestPage = () => {
  const { jobId } = useParams();
  const { user, token } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRequester, setIsRequester] = useState(false);
  

  const [editFields, setEditFields] = useState({
    title: "",
    description: "",
    location: "",
    lat: 51.505,
    lng: -0.09,
  });
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });

  const {
    data: request,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(
    ["requestDetails", jobId, token],
    () => fetchRequestDetails(jobId, token),
    {
      enabled: !!token,
      onSuccess: (data) => {
        setLocation({ lat: data.latitude, lng: data.longitude });
        setIsRequester(data.isRequester);
        setEditFields({
          title: data.title,
          description: data.description,
          location: data.location,
          lat: data.latitude,
          lng: data.longitude,
        });
      },
    }
  );

  // useMemo to create a jobs array from the request data
  const jobs = useMemo(() => {
    if (request) {
      return [
        {
          id: request.id,
          title: request.title,
          taskType: request.taskType, // this should match the task type property in your request object
          description: request.description,
          location: request.location,
          latitude: Number(request.latitude),
          longitude: Number(request.longitude),
          // ... include any other properties required by the MapComponent for the popup
        },
      ];
    }
    return [];
  }, [request]);

  useEffect(() => {
    if (request && user) {
      console.log("Request object:", request);
      setIsRequester(request.isRequester);
      setEditFields({
        title: request.title,
        description: request.description,
        location: request.location,
      });
      // Ensure latitude and longitude are numbers and not undefined
      const lat = parseFloat(request.latitude);
      const lng = parseFloat(request.longitude);
      console.log("Parsed latitude:", lat);
      console.log("Parsed longitude:", lng);
      if (!isNaN(lat) && !isNaN(lng)) {
        setLocation({ lat, lng });
        console.log("Updated location state:", { lat, lng });
      } else {
        // Set to default location if undefined
        setLocation({ lat: 51.505, lng: -0.09 });
        console.log("Using default location:", { lat: 51.505, lng: -0.09 });
      }
    }
  }, [request, user]);

  const updateMapMarker = (newLatitude, newLongitude) => {
    setLocation({ lat: newLatitude, lng: newLongitude });
  };

  const handleSaveChanges = async (editFields) => {
    // Headers must include 'Content-Type': 'application/json' for JSON payloads
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    setEditFields(editFields);
    setLocation({ lat: editFields.lat, lng: editFields.lng });
    // Stringify the updated fields to send as the request body
    const updatedFields = JSON.stringify({
      title: editFields.title,
      description: editFields.description,
      location: editFields.location,
      lat: editFields.lat,
      long: editFields.lng,
    });

    try {
      // Ensure the correct URL and pass the stringified body and headers
      const response = await axios.patch(
        `http://localhost:4000/users/${user.id}/requests/${jobId}`,
        updatedFields,
        { headers }
      );
      console.log("Save successful:", response.data);
      setIsModalOpen(false); // Assuming you want to close the modal on successful save
    } catch (error) {
      console.error("Failed to save changes:", error);
    }
  };

  // Handle republish logic
  const republishRequest = async () => {
    try {
      await axios.post(
        `http://localhost:4000/requests/${jobId}/republish`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // Add any follow-up action here, like refetching request details
    } catch (error) {
      console.error("Failed to republish request", error);
    }
  };

  // Handle volunteer sign-up logic
  const volunteerForRequest = async () => {
    try {
      await axios.post(
        `http://localhost:4000/requests/${jobId}/volunteer`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      await refetch();
    } catch (error) {
      console.error(
        "Failed to volunteer for request",
        error.response?.data?.message || error.message
      );
      alert("Failed to volunteer for the request.");
    }
  };

  const handleMapClick = (newLocation) => {
    if (isRequester) {
      setLocation(newLocation);
      // You might want to open the modal here to confirm the new location
      setIsModalOpen(true);
      // Update the editFields state to include the new location
      setEditFields((prevFields) => ({
        ...prevFields,
        location: `${newLocation.lat}, ${newLocation.lng}`,
      }));
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const handleRepublish = () => {
    republishRequest();
  };

  const handleVolunteerClick = () => {
    volunteerForRequest();
  };

  const jobUrgency = () => {
    if (!request || !request.last_published_at) return "Unknown urgency";
    const hoursSincePublished = differenceInHours(
      new Date(),
      new Date(request.last_published_at)
    );
    if (hoursSincePublished < 24) return "High Urgency";
    if (hoursSincePublished < 48) return "Moderate Urgency";
    return "Low Urgency";
  };

  return (
    <div className="flex flex-col items-center bg-white mt-3 px-5 py-12 lg:px-16 border shadow-3xl rounded-md">
      {/* Job title and subheading section */}
      <div className="flex justify-center items-center bg-white mt-3 px-5 py-12 lg:px-16 border shadow-3xl rounded-xl w-full">
        <div className="text-center w-full lg:w-3/4">
          <div className="flex justify-center items-center flex-col lg:flex-row">
            <h1 className="text-3xl font-bold text-black mb-3 lg:mb-0">
              {editFields.title}
            </h1>
            {isRequester && (
              <FiEdit
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer lg:ml-4"
                size={20}
                color="#3B82F6"
              />
            )}
          </div>
          <p className="text-lg text-black">
            Volunteer and start making a difference in your community.
          </p>
          <EditRequestModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            updateMapMarker={updateMapMarker}
            editFields={editFields}
            setEditFields={setEditFields}
            onSave={handleSaveChanges}
          />
        </div>
      </div>

      {/* Focused Map and Job Details */}
      <div className="mt-6 flex flex-col md:flex-row justify-center items-stretch w-full px-4 md:px-0">
        <div className="flex flex-col justify-center gap-5 p-6 border border-black shadow-lg shadow-[#7d7d7d] rounded-2xl w-full max-w-4xl mx-auto">
          <div className="flex text-lg font-bold flex-row">
            Volunteer Request Details:
            {isRequester && (
              <FiEdit
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: "pointer" }}
                size={20}
                color="#3B82F6"
                className="ml-2" // Added margin left for spacing
              />
            )}
          </div>
          {/* Keep this on top */}
          <div className="flex flex-col md:flex-row justify-center gap-5 w-full ">
            {/* Map container */}
            <div className="leaflet-container leaflet-control-attribution w-full md:w-1/2 md:order-2 border border-black shadow-md shadow-[#7d7d7d] rounded-2xl">
              {location.lat !== undefined &&
              location.lng !== undefined &&
              !isNaN(location.lat) &&
              !isNaN(location.lng) ? (
                <MapComponent
                  position={[location.lat, location.lng]}
                  zoomLevel={13}
                  onMapClick={handleMapClick}
                  selectionMode={isRequester}
                  jobs={jobs}
                />
              ) : (
                <div>Loading map...</div>
              )}
            </div>
            {/* Description container */}
            <div className="w-full md:w-1/2 md:order-1">
              <div className="text-xl font-bold pt-3">{editFields.title}</div>
              <div className="mt-6 text-md leading-relaxed text-black shadow-md shadow-[#7d7d7d] border border-black rounded-2xl p-3">
                {editFields.description}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Request Fulfillment Section */}
      <div className="mt-6 w-full pt-6">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full">
          <div className="text-black text-center sm:text-left">
            <div className="text-2xl font-bold p-3">
              Job Urgency: {jobUrgency()}
            </div>
          </div>
          {isRequester ? (
            <button
              onClick={handleRepublish}
              className="px-6 py-2 text-white bg-blue-500 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
            >
              Re-publish
            </button>
          ) : (
            <button
              onClick={handleVolunteerClick}
              className="px-6 py-2 text-white bg-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
            >
              Volunteer to Help
            </button>
          )}
        </div>
      </div>

      {/* Displaying the number of volunteers and their profiles */}
      <div className="m-3 p-12">
        <div className="text-center mb-4 hidden sm:block">
          <div className="text-3xl font-bold text-black">
            Volunteers ({request?.volunteers?.length || 0})
          </div>
        </div>

        {/* For larger screens: Display individual volunteer cards */}
        <div className="hidden sm:flex justify-center gap-5 flex-wrap">
          {request?.volunteers?.slice(0, 5).map((volunteer) => (
            <div
              key={volunteer.id}
              className="flex flex-col items-center p-3 rounded-2xl shadow-lg shadow-[#7d7d7d] border border-black"
              style={{ width: "130px" }} // Fixed width for individual cards
            >
              <img
                loading="lazy"
                src={volunteer.profilePic || "//placehold.it/100"}
                alt={`${volunteer.name}'s profile`}
                className="w-24 h-24 object-cover border border-black rounded-full shadow-md shadow-[#7d7d7d]"
              />
              <div className="mt-2 font-semibold text-black text-center">
                {volunteer.name}
              </div>
              <div className="text-sm text-black text-center">
                {volunteer.role}
              </div>
            </div>
          ))}
          {request?.volunteers?.length > 5 && (
            <div
              className="flex flex-col items-center justify-center p-3 rounded-2xl shadow-lg shadow-[#7d7d7d] border border-black"
              style={{ width: "130px", minHeight: "170px" }}
            >
              <span className="text-lg font-semibold">
                +{request.volunteers.length - 5} more
              </span>
            </div>
          )}
        </div>

        {/* For smaller screens: Display only the "+ more" card showing total volunteers */}
        <div className="sm:hidden flex justify-center">
          <div
            className="flex flex-col items-center justify-center p-3 rounded-2xl shadow-lg shadow-[#7d7d7d] border border-black"
            style={{ width: "130px", minHeight: "170px" }} // Ensure the card has enough space to display its content without wrapping
          >
            <span className="text-lg font-semibold text-center">
              Volunteers
            </span>
            <span className="text-lg font-semibold text-center">
              ({request?.volunteers?.length || 0})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
