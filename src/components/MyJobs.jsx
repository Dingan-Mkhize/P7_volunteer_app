import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Logo from "../assets/LogoImg.png";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const fetchMyRequests = async (userId, token, includeTimedOut = false) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/${userId}/my-requests`,
    {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        includeTimedOut,
      },
    }
  );
  const activeRequests = response.data.filter((request) => !request.archived);
  console.log("Fetched myRequests:", activeRequests);
  return activeRequests;
};

const fetchVolunteeredJobs = async (userId, token) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/users/${userId}/volunteered-jobs`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  const activeJobs = response.data.filter((job) => !job.archived);
  console.log("Fetched volunteeredJobs:", activeJobs);
  console.log("Data received for volunteeredJobs:", response.data);
  return activeJobs;
};

const MyJobsComponent = () => {
  const { user, token } = useUser();
  const userId = user?.id;
  const queryClient = useQueryClient();
  const myRequestsQuery = useQuery(
    ["myRequests", userId],
    () => fetchMyRequests(userId, token),
    { enabled: !!userId }
  );
  const volunteeredJobsQuery = useQuery(
    ["volunteeredJobs", userId],
    () => fetchVolunteeredJobs(userId, token),
    { enabled: !!userId }
  );

  const markJobAsCompletedMutation = useMutation(
    async (jobId) => {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/users/${userId}/requests/${jobId}/mark-as-completed`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
    },
    {
      onSuccess: () => {
        console.log("Job marked as completed, invalidating queries...");
        queryClient.invalidateQueries(["myRequests", userId]);
        queryClient.invalidateQueries(["volunteeredJobs", userId]);
      },
      onError: (error) => {
        console.error("Error marking job as completed:", error);
      },
    }
  );

  const markJobAsCompleted = (jobId) => {
    console.log(`Attempting to mark job ${jobId} as completed`);
    markJobAsCompletedMutation.mutate(jobId);
  };

  // Ensure data is available before attempting to map
  const myRequests = myRequestsQuery.data ?? [];
  const volunteeredJobs = volunteeredJobsQuery.data ?? [];

  return (
    <div className="bg-white mt-3 px-16 py-12 max-md:px-5 border shadow-3xl rounded-md">
      <div className="text-center text-black bg-white mb-6 pt-6 border border-black shadow-lg shadow-[#7d7d7d] rounded-xl">
        <img
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

          {/* My Request Section */}
          <TabPanel>
            <h2 className="flex justify-center text-lg font-semibold mb-9 mt-6">
              Requests Made
            </h2>
            <div className="space-y-4">
              {myRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex flex-col md:flex-row justify-between items-center bg-white p-4 border shadow-md space-x-4 rounded-lg"
                >
                  <Link to={`/requests/${request.id}`}>
                    <h3
                      className={`text-md font-bold flex-1 truncate max-w-[200px] ${
                        request.taskType === "one-time"
                          ? "text-[#15bec1]" // Example color for one-time tasks
                          : request.taskType === "material-need"
                            ? "text-[#f17d2b]" // Example color for material-need tasks
                            : "text-black" // Default color
                      }`}
                    >
                      {request.title}
                    </h3>
                  </Link>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 mx-3">
                    <div>
                      <p className="font-semibold">
                        Date:{" "}
                        <span className="font-normal">{request.date}</span>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Time:{" "}
                        <span className="font-normal">{request.time}</span>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Location:{" "}
                        <span className="font-normal">{request.location}</span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => markJobAsCompleted(request.id, true)}
                    className="mt-3 md:mt-0 px-3 py-2 text-sm text-white border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 bg-black hover:bg-gray-700 rounded-full"
                  >
                    Job Done
                  </button>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="flex justify-center text-lg font-semibold mb-9 mt-6">
              Jobs Volunteered For
            </h2>
            <div className="space-y-3">
              {volunteeredJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col md:flex-row justify-between items-center bg-white p-3 border rounded-xl shadow-md space-x-4"
                >
                  <h3 className="text-md font-bold flex-1 truncate max-w-[200px]">
                    <Link to={`/requests/${job.id}`}>{job.title}</Link>
                  </h3>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <p className="font-semibold">
                        Date: <span className="font-normal">{job.date}</span>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Time:{" "}
                        <span className="font-normal">
                          {new Date(job.time).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })}
                        </span>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold">
                        Location:{" "}
                        <span className="font-normal">{job.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default MyJobsComponent;
