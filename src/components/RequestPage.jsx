import { useState } from "react";
import { volunteerRequests, volunteers } from "../Data";
//import FooterBackground from "../assets/overlapping_circles.svg";

const RequestPage = () => {
  const [request] = useState(volunteerRequests[0]);
  // Assuming the requester is the first volunteer for simplicity
  const requester = volunteers.find((v) => v.role === "Requester");
  const [currentVolunteers, setCurrentVolunteers] = useState(
    volunteers.filter((v) => v.role !== "Requester")
  );

  // Function to simulate adding a volunteer
  const handleVolunteerClick = () => {
    setCurrentVolunteers((prevVolunteers) => [
      ...prevVolunteers,
      {
        id: prevVolunteers.length + 1,
        name: "New Volunteer",
        role: "Volunteer",
        profilePic: "//placehold.it/100",
      },
    ]);
  };

  // Determine job urgency based on the request's urgency rating
  const jobUrgency = () => {
    if (request.urgency >= 8) return "High Urgency";
    if (request.urgency >= 5) return "Moderate Urgency";
    return "Low Urgency";
  };


  return (
    <div className="flex flex-col items-center bg-white mt-3 px-5 py-12 lg:px-16 border shadow-3xl rounded-md">
      {/* Requester and job title section */}
      <div className="flex flex-col lg:flex-row items-center justify-center mb-3 py-3">
        <div className="px-6 py-3 border border-black shadow-xl shadow-[#7d7d7d] rounded-2xl text-center">
          <p className="text-xs text-black leading-9">
            Requester
          </p>
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
          <div className="text-3xl font-bold text-black">{request.title}</div>
          <div className="mt-6 text-lg leading-7 text-black">
            Volunteer and start making a difference in your community.
          </div>
        </div>
      </div>

      {/* Focused Map and Job Details */}
      <div className="flex justify-center items-center mt-6">
        <div className="flex justify-center gap-5 p-6 border border-black shadow-xl shadow-[#7d7d7d] rounded-2xl">
          <div className="border border-dashed border-gray-400 bg-gray-200 w-[300px] h-[300px] flex justify-center items-center rounded-3xl shadow-md shadow-[#7d7d7d]">
            <h2 className="text-lg font-semibold text-gray-700">
              Interactive Map Placeholder
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-6/12">
            <div className="flex flex-col items-start font-bold p-3">
              Volunteer Request Details:
            </div>
            <div className="self-stretch mt-6 leading-9 text-black shadow-md border rounded-2xl p-3">
              {request.description}
            </div>
          </div>
        </div>
      </div>
      {/* Potential Request Fulfillment Section */}
      <div className="flex self-stretch mt-6 w-full pt-6">
        <div className="flex gap-5 justify-center self-stretch w-full">
          <div className="flex text-black">
            <div className="text-2xl font-bold p-3">
              Job Urgency: {jobUrgency()}
            </div>
            <button
              onClick={handleVolunteerClick}
              className="ml-9 px-6 py-2 text-white rounded-full bg-black shadow-2xl"
            >
              Volunteer to Help
            </button>
          </div>
        </div>
      </div>
      {/* Displaying the number of volunteers and their profiles */}
      <div className="m-3 p-12">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-black leading-[57.6px]">
            Volunteers ({currentVolunteers.length})
          </div>
        </div>
        <div className="flex justify-center gap-5 flex-wrap">
          {currentVolunteers.slice(0, 4).map((volunteer) => (
            <div
              key={volunteer.id}
              className="flex flex-col items-center p-3 rounded-2xl shadow-2xl shadow-[#7d7d7d] border border-black"
              style={{ width: "calc(20% - 1rem)" }} // Adjust width as needed
            >
              <img
                loading="lazy"
                src={volunteer.profilePic || "//placehold.it/100"}
                className="w-full h-auto shadow-md shadow-[#7d7d7d] border border-black rounded-full"
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
          {currentVolunteers.length > 4 && (
            <div
              className="flex flex-col items-center justify-center p-3 rounded-2xl shadow-2xl shadow-[#7d7d7d] border border-black"
              style={{ width: "calc(20% - 1rem)" }} // Adjust width as needed
            >
              <div className="w-full h-auto flex justify-center items-center rounded-full bg-gray-300">
                <span className="text-lg font-semibold">
                  +{currentVolunteers.length - 4} more
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
