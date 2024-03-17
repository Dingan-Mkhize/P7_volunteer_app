import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import EditRequestModal from "../components/EditRequestModal";
import MessageVolunteersModal from "../components/MessageVolunteersModal";
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
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isRequester, setIsRequester] = useState(false);
  
  const [editFields, setEditFields] = useState({
    title: "",
    description: "",
    location: "",
  });
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 });

  const {
    data: request,
    isLoading,
    isError,
    error,
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
        });
      },
    }
  );

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

  const handleSaveChanges = async () => {
    // Headers must include 'Content-Type': 'application/json' for JSON payloads
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    // Stringify the updated fields to send as the request body
    const updatedFields = JSON.stringify({
      title: editFields.title,
      description: editFields.description,
      location: editFields.location,
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
      // Add any follow-up action here
    } catch (error) {
      console.error("Failed to volunteer for request", error);
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
      {/* Requester and job title section */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-3 py-3">
        <div className="px-6 py-3 border border-black shadow-lg shadow-[#7d7d7d] rounded-2xl text-center">
          <p className="text-xs text-black leading-9">Requester</p>
          {user ? (
            <>
              <img
                loading="lazy"
                src={user.profilePic || "defaultProfilePicUrlHere"} // Provide a default profile picture URL if user.profilePic is not available
                alt="Profile Pic"
                className="object-cover w-[100px] h-[100px] shadow-md shadow-[#7d7d7d] border border-black rounded-full mx-auto my-3"
              />
              <div className="text-black font-semibold leading-9">
                {user.name}
              </div>
            </>
          ) : (
            <div>Loading requester information...</div> // Or any other placeholder you prefer
          )}
        </div>
        <div className="lg:py-12 lg:px-6 m-6 text-center lg:text-left lg:w-3/4">
          <div className="text-3xl font-bold text-black flex justify-between items-center w-full px-5">
            {request.title}
            {isRequester && (
              <FiEdit
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: "pointer" }}
                size={20}
                color="#3B82F6"
              />
            )}
          </div>
          <EditRequestModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            editFields={editFields}
            setEditFields={setEditFields}
            onSave={handleSaveChanges}
          />
          <div className="mt-6 text-lg leading-7 text-black">
            Volunteer and start making a difference in your community.
          </div>
        </div>
      </div>

      {/* Focused Map and Job Details */}
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center gap-5 p-6 border border-black shadow-lg shadow-[#7d7d7d] rounded-2xl">
          <div
            className="Z-0 leaflet-container leaflet-control-attribution border border-black shadow-md shadow-[#7d7d7d] rounded-2xl my-4"
            style={{ width: "100%", height: "400px" }} // Add explicit width and height
          >
            {location.lat !== undefined &&
            location.lng !== undefined &&
            !isNaN(location.lat) &&
            !isNaN(location.lng) ? (
              <MapComponent
                position={[location.lat, location.lng]}
                zoomLevel={13}
                onMapClick={handleMapClick}
                selectionMode={isRequester}
                //draggable={isRequester}
              />
            ) : (
              <div>Loading map...</div>
            )}
          </div>
          <div className="flex flex-col w-full md:w-6/12 mt-6 md:mt-0 md:ml-5">
            <div className="flex items-center font-bold p-3">
              <span>Volunteer Request Details:</span>
              <FiEdit
                onClick={() => {
                  setIsModalOpen(true);
                  setEditFields({ ...editFields, currentField: "description" });
                }}
                className="cursor-pointer ml-2"
                size={20}
                color="#3B82F6" // Adjust size as needed
              />
            </div>
            <div className="mt-6 leading-9 text-black shadow-md shadow-[#7d7d7d] border border-black rounded-2xl p-3">
              {request.description}
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
        <div className="flex justify-center">
          {isRequester && (
            <button
              className="mt-4 mb-4 px-6 py-2 text-white bg-blue-500 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              onClick={() => setIsMessageModalOpen(true)}
            >
              Message Volunteers
            </button>
          )}
        </div>

        <MessageVolunteersModal
          isOpen={isMessageModalOpen}
          onClose={() => setIsMessageModalOpen(false)}
          volunteers={request?.volunteers}
        />

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
