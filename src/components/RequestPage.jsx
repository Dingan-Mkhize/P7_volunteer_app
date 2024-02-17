import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
//import ProfImg from "../assets/volunteer_11.png";
import { volunteers } from "../Data";
//import Logo from "../assets/LogoImg.png";

const RequestPage = () => {
  const requester = volunteers.find((v) => v.role === "Requester");
  const otherVolunteers = volunteers.filter((v) => v.role !== "Requester");
  const [volunteerCount, setVolunteerCount] = useState(0); // Example starting point
  const maxVolunteers = 5; // Example max volunteers needed

  // Simulate adding a volunteer
  const handleVolunteerClick = () => {
    if (volunteerCount < maxVolunteers) {
      setVolunteerCount(volunteerCount + 1);
    }
  };

  // Determine job urgency based on volunteer count
  const jobUrgency = () => {
    if (volunteerCount < 2) return "High Urgency";
    if (volunteerCount < maxVolunteers) return "Moderate Urgency";
    return "Fulfilled"; // Or 'Low Urgency', if you prefer to distinguish between fulfilled and about-to-be-fulfilled
  };

  return (
    <div className="flex flex-col items-start mt-3 bg-white px-16 py-12">
      <div className="flex self-stretch mt-6 p-6 w-full">
        <div className="p-3 border border-black shadow-xl shadow-[#7d7d7d] rounded-2xl">
          <p className="text-xs self-stretch text-black text-center leading-10 whitespace-nowrap">
            Requester
          </p>
          <img
            loading="lazy"
            src={requester.profilePic}
            alt="Profile Pic"
            className="flex justify-center object-cover object-center w-[100px] h-[100px] overflow-hidden border border-black rounded-full shadow-xl shadow-[#7d7d7d] m-3"
          />
          <div className="self-stretch text-black text-center font-semibold leading-10 whitespace-nowrap">
            Michaela Johnson
          </div>
        </div>

        <div className="text-3xl font-bold text-black py-12 px-6 m-6">
          Help Needed: Park Cleanup
          <div className="mt-6 text-lg leading-7 text-black">
            Create an account to start making a difference in your community.
          </div>
        </div>
      </div>
      {/* Focused Map and Job Details */}
      <div className="flex gap-5 mt-6 p-6 border border-black shadow-xl shadow-[#7d7d7d] rounded-2xl">
        <div className="border border-dashed border-gray-400 bg-gray-200 w-[300px] h-[300px] flex justify-center items-center  rounded-3xl shadow-xl shadow-[#7d7d7d]">
          <h2 className="text-lg font-semibold text-gray-700">
            Interactive Map Placeholder
          </h2>
        </div>
        <div className="flex flex-col ml-5 w-6/12">
          <div className="flex flex-col items-start font-bold">
            Volunteer Request Details
          </div>
          <div className="self-stretch mt-8 leading-9 text-black shadow-md border rounded-2xl p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </div>
        </div>
      </div>
      {/* Potential Request Fulfillment Section */}
      <div className="self-stretch mt-6 w-full p-6">
        <div className="flex gap-5 justify-between self-stretch w-full">
          <div className="flex s text-black">
            <div className="text-2xl font-bold">
              Job Urgency: {jobUrgency()}
            </div>
            <button
              onClick={handleVolunteerClick}
              className={`mt-4 px-6 py-2 text-white  ${volunteerCount >= maxVolunteers ? "bg-gray-500" : "bg-black"} rounded shadow`}
              disabled={volunteerCount >= maxVolunteers}
            >
              {volunteerCount >= maxVolunteers
                ? "Help Fulfilled"
                : "Volunteer to Help"}
            </button>
          </div>

          {/* <div className="flex flex-col">
            <div className="text-4xl font-bold leading-10">
              Join Kindred Connect Community Today
            </div>
            <div className="mt-6 text-lg leading-7">
              Start making a difference by signing up and contributing now.
            </div>
          </div>

          <div className="flex gap-4 my-auto text-base leading-6">
            <div className="px-6 py-3 text-white bg-black rounded">Sign Up</div>
            <div className="px-6 py-3 text-black bg-white rounded border border-black">
              Learn More
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-12 text-base font-semibold leading-6 text-black">
        Hands United
      </div>
      <div className="mt-4 text-3xl font-bold text-black leading-[57.6px]">
        Volunteers
      </div>
      <div className="mt-3 text-lg leading-7 text-black max-md:max-w-full">
        (9) people have volunteered so far!
      </div>
      {/* Volunteer Profile Section */}
      <div className="self-stretch mt-12 w-full">
        <div className="flex gap-5">
          {volunteers.slice(0, 5).map((volunteer) => (
            <div
              key={volunteer.id}
              className="flex flex-col w-[15%] max-md:w-full py-3 px-3 rounded-2xl shadow-2xl shadow-[#7d7d7d] object-center border border-black overflow-hidden"
            >
              <div className="flex flex-col items-center">
                <img
                  loading="lazy"
                  src={volunteer.profilePic}
                  className="w-30 h-30 shadow-2xl shadow-[#7d7d7d] object-center border border-black overflow-hidden rounded-full"
                  alt={`${volunteer.name}'s profile`}
                />
                <div className="flex justify-center mt-6 font-semibold text-black whitespace-wrap">
                  {volunteer.name}
                </div>
                <div className="flex justify-center text-black text-sm">
                  {volunteer.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  CTA */}
      <div className="mt-24 text-3xl font-bold leading-10 text-black">
        We are hiring!
      </div>{" "}
      <div className="mt-4 text-lg leading-7 text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </div>{" "}
      <div className="justify-center px-6 py-3 mt-6 text-base leading-6 text-black whitespace-nowrap border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
        Open positions
      </div>
    </div>
  );
};

export default RequestPage;
