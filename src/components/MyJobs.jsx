//import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { volunteerRequests } from "../Data";

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

  // Function to mark a job as completed
  const markJobAsCompleted = (jobId, isMyRequest) => {
  };

  return (
    <div className="container mx-auto mt-9 mb-9 p-12 max-w-full px-5 rounded-xl border border-black shadow-lg shadow-[#7d7d7d]">
      <Tabs>
        <TabList className="flex p-1 space-x-1 bg-blue-100 rounded-xl">
          <Tab className="w-full text-center px-3 py-2 text-sm leading-5 font-medium text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white shadow cursor-pointer">
            My Requests
          </Tab>
          <Tab className="w-full text-center px-3 py-2 text-sm leading-5 font-medium text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 bg-white shadow cursor-pointer">
            Volunteered
          </Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-lg font-semibold my-2">Requests Made</h2>
          <div className="space-y-4">
            {myRequests.map((job) => (
              <div
                key={job.id}
                className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow space-x-4"
              >
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
                  className="mt-2 md:mt-0 px-4 py-2 text-sm text-white rounded-lg bg-blue-500 hover:bg-blue-700"
                >
                  Mark as Complete
                </button>
              </div>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <h2 className="text-lg font-semibold my-2">Jobs Volunteered For</h2>
          <div className="space-y-4">
            {volunteeredJobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-lg shadow space-x-4"
              >
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
                  onClick={() => markJobAsCompleted(job.id, false)}
                  className="mt-2 md:mt-0 px-4 py-2 text-sm text-white rounded-lg bg-blue-500 hover:bg-blue-700"
                >
                  Mark as Complete
                </button>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MyJobsComponent;
