import { useState } from "react";
import { volunteerRequests, volunteers } from "../Data";
import EditRequestModal from "../components/EditRequestModal"; // Adjust the path as necessary
import { FiEdit } from "react-icons/fi";

const RequestPage = () => {
  const [request, setRequest] = useState(volunteerRequests[0]);
  const requester = volunteers.find((v) => v.role === "Requester");
  const [currentVolunteers, setCurrentVolunteers] = useState(
    volunteers.filter((v) => v.role !== "Requester")
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editFields, setEditFields] = useState({
    title: request.title,
    description: request.description,
    location: request.location,
  });

  // Function to simulate adding a volunteer
  const handleVolunteerClick = () => {
    setCurrentVolunteers((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: "New Volunteer",
        role: "Volunteer",
        profilePic: "//placehold.it/100",
      },
    ]);
  };

  // Function to handle saving edits from the modal
  const handleEditSave = () => {
    setRequest((prev) => ({
      ...prev,
      title: editFields.title,
      description: editFields.description,
      location: editFields.location,
    }));
    setIsModalOpen(false); // Close modal after saving
  };

  // Determine job urgency based on the request's urgency rating
  const jobUrgency = () => {
    if (request.urgency >= 8) return "High Urgency";
    else if (request.urgency >= 5) return "Moderate Urgency";
    else return "Low Urgency";
  };

  return (
    <div className="flex flex-col items-center bg-white mt-3 px-5 py-12 lg:px-16 border shadow-3xl rounded-md">
      {/* Requester and job title section */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-3 py-3">
        <div className="px-6 py-3 border border-black shadow-xl shadow-[#7d7d7d] rounded-2xl text-center">
          <p className="text-xs text-black leading-9">Requester</p>
          <img
            loading="lazy"
            src={requester.profilePic}
            alt="Profile Pic"
            className="object-cover w-[100px] h-[100px] shadow-md shadow-[#7d7d7d] border border-black rounded-full mx-auto my-3"
          />
          <div className="text-black font-semibold leading-9">
            {requester.name}
          </div>
        </div>
        <div className="lg:py-12 lg:px-6 m-6 text-center lg:text-left lg:w-3/4">
          <div className="text-3xl font-bold text-black flex justify-between items-center w-full px-5">
            {request.title}
            <FiEdit
              onClick={() => setIsModalOpen(true)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <EditRequestModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleEditSave}
            editFields={editFields}
            setEditFields={setEditFields}
          />
          <div className="mt-6 text-lg leading-7 text-black">
            Volunteer and start making a difference in your community.
          </div>
        </div>
      </div>

      {/* Focused Map and Job Details */}
      <div className="mt-6 flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col md:flex-row justify-center gap-5 p-6 border border-black shadow-xl shadow-[#7d7d7d] rounded-2xl">
          <div className="border border-dashed border-gray-400 bg-gray-200 w-full md:w-[300px] h-[300px] flex justify-center items-center rounded-3xl shadow-md shadow-[#7d7d7d] md:mb-0">
            <h2 className="text-lg font-semibold text-gray-700">
              Interactive Map Placeholder
            </h2>
          </div>
          <div className="flex flex-col w-full md:w-6/12 mt-6 md:mt-0 md:ml-5">
            <div className="flex flex-col items-start font-bold p-3">
              Volunteer Request Details:
            </div>
            <div className="mt-6 leading-9 text-black shadow-md border rounded-2xl p-3">
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
          <button
            onClick={handleVolunteerClick}
            className="px-6 py-2 text-white bg-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 rounded-full"
          >
            Volunteer to Help
          </button>
        </div>
      </div>
      {/* Displaying the number of volunteers and their profiles */}
      <div className="m-3 p-12">
        <div className="text-center mb-4 hidden sm:block">
          <div className="text-3xl font-bold text-black">
            Volunteers ({currentVolunteers.length})
          </div>
        </div>

        {/* For larger screens: Display individual volunteer cards and an additional "+ more" card if necessary */}
        <div className="hidden sm:flex justify-center gap-5 flex-wrap">
          {currentVolunteers.slice(0, 5).map((volunteer) => (
            <div
              key={volunteer.id}
              className="flex flex-col items-center p-3 rounded-2xl shadow-lg shadow-[#7d7d7d] border border-black"
              style={{ width: "130px" }} // Fixed width for individual cards
            >
              <img
                loading="lazy"
                src={volunteer.profilePic || "//placehold.it/100"}
                className="w-24 h-24 object-cover border border-black rounded-full shadow-md shadow-[#7d7d7d]"
                alt={`${volunteer.name}'s profile`}
              />
              <div className="mt-2 font-semibold text-black text-center">
                {volunteer.name}
              </div>
              <div className="text-sm text-black text-center">
                {volunteer.role}
              </div>
            </div>
          ))}
          {currentVolunteers.length > 5 && (
            <div
              className="flex flex-col items-center justify-center p-3 rounded-2xl shadow-lg shadow-[#7d7d7d] border border-black"
              style={{ width: "130px", minHeight: "170px" }} // Ensuring "+ More" card has the same fixed width and padding as individual cards
            >
              <span className="text-lg font-semibold">
                +{currentVolunteers.length - 5} more
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
              {" "}
              {/* Center the text */}
              Volunteers
            </span>
            <span className="text-lg font-semibold text-center">
              {" "}
              {/* Center the text */}({currentVolunteers.length})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
