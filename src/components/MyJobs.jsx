//import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Logo from "../assets/LogoImg.png";
import { volunteerRequests, volunteers } from "../Data";
import { Link } from "react-router-dom";


const MyJobsComponent = () => {
  const currentUserId = 1; // Assuming the current user's ID for demonstration

  // Filter jobs where the current user is the requester
  const myRequests = volunteerRequests.filter(
    (job) => job.requesterId === currentUserId
  );

  // Filter jobs the current user has volunteered for
  const volunteeredJobs = volunteerRequests.filter((job) =>
    job.volunteers.includes(currentUserId)
  );

  // Helper function to get requester details
  const getRequester = (requesterId) => {
    return volunteers.find((volunteer) => volunteer.id === requesterId);
  };

  // Function to mark a job as completed
  const markJobAsCompleted = (jobId, isMyRequest) => {};

  return (
    <div className="bg-white mt-3 px-16 py-12 max-md:px-5 border shadow-3xl rounded-md">
      {/* Logo Section */}
      <div className="text-center text-black bg-white mb-6 pt-6 border border-black shadow-lg shadow-[#7d7d7d] rounded-2xl">
        <img
          loading="lazy"
          src={Logo}
          alt="Hands United Logo"
          className="mx-auto object-contain object-center w-[130px] h-[130px] overflow-hidden border border-black rounded-full shadow-lg shadow-[#7d7d7d]"
        />
        <div className="mt-6 text-6xl font-bold leading-[67.2px] max-md:mt-10 max-md:text-4xl">
          Hands United
        </div>
        <div className="mt-3 mb-6 text-lg leading-7">
          A helping hand, to unite community.
        </div>
      </div>

      {/* My Jobs Section */}
      <div className="mx-auto mb-9 p-12 max-w-full px-5 border border-black shadow-lg shadow-[#7d7d7d] rounded-xl">
        <Tabs>
          <TabList className="flex p-1 space-x-1 bg-gray-300 rounded-t-lg">
            <Tab className="w-full text-center px-3 py-2 text-sm leading-5 font-medium text-gray-700 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60 bg-white shadow cursor-pointer mr-1 rounded-lg">
              My Requests
            </Tab>
            <Tab className="w-full text-center px-3 py-2 text-sm leading-5 font-medium text-gray-700 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-gray-400 ring-white ring-opacity-60 bg-white shadow cursor-pointer ml-1 rounded-lg">
              Volunteered
            </Tab>
          </TabList>

          {/* User Requests Section */}
          <TabPanel>
            <h2 className="flex justify-center text-lg font-semibold mb-9 mt-6">
              Requests Made
            </h2>
            <div className="space-y-4">
              {myRequests.map((job) => {
                const requester = volunteers.find(
                  (v) => v.id === job.requesterId
                );
                return (
                  <div
                    key={job.id}
                    className="flex flex-col md:flex-row justify-between items-center bg-white p-4 border shadow-md space-x-4 rounded-lg"
                  >
                    {requester && (
                      <img
                        src={requester.profilePic}
                        alt={`${requester.name}'s profile`}
                        className="object-cover w-12 h-12 border border-black shadow-lg shadow-[#7d7d7d] rounded-full"
                      />
                    )}
                    <h3 className="text-md font-bold flex-1">{job.title}</h3>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="font-semibold">Date:</p>
                        <p>{job.date}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Time:</p>
                        <p>{job.time}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Location:</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => markJobAsCompleted(job.id, true)}
                      className="mt-2 md:mt-0 px-4 py-2 text-sm text-white border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 bg-black hover:bg-gray-700 rounded-full"
                    >
                      Mark as Complete
                    </button>
                  </div>
                );
              })}
            </div>
          </TabPanel>

          {/* User Volunteered Jobs Section */}
          <TabPanel>
            <h2 className="flex justify-center text-lg font-semibold mb-9 mt-6">
              Jobs Volunteered For
            </h2>
            <div className="space-y-3">
              {volunteeredJobs.map((job) => {
                console.log(volunteeredJobs.length);
                // Get the requester details for each job
                const requester = getRequester(job.requesterId);
                return (
                  <div
                    key={job.id}
                    className="flex flex-col md:flex-row justify-between items-center bg-white p-3 border rounded-xl shadow-md space-x-4"
                  >
                    <div className="flex flex-col  items-center">
                      {requester && (
                        <>
                          <img
                            src={requester.profilePic}
                            alt={`${requester.name}'s profile`}
                            className="object-cover w-12 h-12 border border-black shadow-lg shadow-[#7d7d7d] rounded-full"
                          />
                          <span className="mt-3 text-md font-semibold">
                            {requester.name}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="text-md font-bold flex-1">
                      <Link to={`/requests/${job.id}`} key={job.id}>
                        {job.title}
                      </Link>
                    </h3>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <p className="font-semibold">Date:</p>
                        <p>{job.date}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Time:</p>
                        <p>{job.time}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Location:</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => markJobAsCompleted(job.id, false)}
                      className="mt-2 md:mt-0 px-4 py-2 text-sm text-white border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 bg-black hover:bg-gray-700 rounded-full"
                    >
                      Mark as Complete
                    </button>
                  </div>
                );
              })}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MyJobsComponent;