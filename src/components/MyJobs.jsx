import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { volunteerRequests } from "../Data";

const MyJobsComponent = () => {
  const [activeJobs, setActiveJobs] = useState(
    volunteerRequests.filter((job) => job.status === "unfulfilled")
  );
  const [completedJobs, setCompletedJobs] = useState([]);

  const markJobAsCompleted = (jobId) => {
    const updatedActiveJobs = activeJobs.filter((job) => job.id !== jobId);
    const completedJob = activeJobs.find((job) => job.id === jobId);

    setActiveJobs(updatedActiveJobs);
    setCompletedJobs([
      ...completedJobs,
      { ...completedJob, status: "completed" },
    ]);
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
            {activeJobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col md:flex-row items-center p-4 bg-white rounded-lg shadow space-x-4"
              >
                <h3 className="flex-1 text-md font-bold">{job.title}</h3>
                <div className="flex-1 flex flex-col md:flex-row justify-between">
                  <div className="mb-2 md:mb-0">
                    <p className="font-semibold">Date:</p>
                    <p>{job.date}</p>
                  </div>
                  <div className="mb-2 md:mb-0">
                    <p className="font-semibold">Time:</p>
                    <p>{job.time}</p>
                  </div>
                  <div className="mb-2 md:mb-0">
                    <p className="font-semibold">Location:</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <button
                  onClick={() => markJobAsCompleted(job.id)}
                  className={`mt-2 md:mt-0 px-4 py-2 text-sm text-white rounded-lg ${job.status === "unfulfilled" ? "bg-blue-500 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
                  disabled={job.status !== "unfulfilled"}
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
            {completedJobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col md:flex-row items-center p-4 bg-white rounded-lg shadow space-x-4"
              >
                <h3 className="flex-1 text-md font-bold">{job.title}</h3>
                <div className="flex-1 flex flex-col md:flex-row justify-between">
                  <div className="mb-2 md:mb-0">
                    <p className="font-semibold">Date:</p>
                    <p>{job.date}</p>
                  </div>
                  <div className="mb-2 md:mb-0">
                    <p className="font-semibold">Time:</p>
                    <p>{job.time}</p>
                  </div>
                  <div className="mb-2 md:mb-0">
                    <p className="font-semibold">Location:</p>
                    <p>{job.location}</p>
                  </div>
                </div>
                <p className="mt-2 md:mt-0 px-4 py-2 text-sm bg-green-500 text-white rounded-lg">
                  Completed
                </p>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MyJobsComponent;
