import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useUser } from "../contexts/UserContext";
import MapComponent from "./MapComponent";
import FallbackProfilePic from "./FallbackProfilePic";
import FooterBackground from "../assets/overlapping_circles.svg";
import "../index.css";

const Dashboard = () => {
  const { user, token } = useUser();
  const [currentPage, setCurrentPage] = useState(0);
  const [animationClass, setAnimationClass] = useState("fadeIn");
  const requestsPerPage = 3;
  const [urgentRequests, setUrgentRequests] = useState([]);
  const [sidebarRequests, setSidebarRequests] = useState([]);

  // Fetch active requests
  const fetchActiveRequests = async (includeTimedOut = false) => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/requests/active`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        includeTimedOut,
      },
    });
    return data; // Ensure this always returns an array
  };

  // Use useQuery to fetch active requests
  const {
    data: activeRequests,
    isLoading,
    isError,
    error,
  } = useQuery(["activeRequests", token], () => fetchActiveRequests(true), {
    enabled: !!token,
    onSuccess: (data) => {
      console.log("Active Requests:", data);
    },
  });


  const { data: unfulfilledRequests } = useQuery(
    "unfulfilledCount",
    async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/requests/unfulfilled-count`
      );

      console.log("Unfulfilled Count Response:", response.data);
      return response.data.unfulfilled_count;
    },
    {
      refetchInterval: 60000, // Refetch the data every 60 seconds
    }
  );

  // Sort and set urgent and sidebar requests
  useEffect(() => {
    if (Array.isArray(activeRequests)) {
      console.log("Before Validation and Sorting:", activeRequests); // Added log

      const currentTime = new Date().getTime();
      const validRequests = activeRequests.filter((request) => {
        const isValid = typeof request.created_at === "string";
        if (!isValid) {
          console.error("Invalid created_at value:", request);
        }
        return isValid;
      });

      console.log("Valid Requests:", validRequests); // Added log

      const requestsWithUrgency = validRequests.map((request) => {
        const requestTime = new Date(request.created_at).getTime();
        const timeElapsed = (currentTime - requestTime) / (1000 * 60 * 60); // Time elapsed in hours
        const urgency = Math.min(timeElapsed, 24); // Cap the urgency at 24 hours
        return { ...request, urgency };
      });

      console.log("Requests with Urgency:", requestsWithUrgency); // Added log

      const sortedRequests = requestsWithUrgency.sort(
        (a, b) => b.urgency - a.urgency
      );
      console.log("Sorted Requests:", sortedRequests); // Added log

      setUrgentRequests(sortedRequests.slice(0, 3));
      setSidebarRequests(sortedRequests.slice(3));
    }
  }, [activeRequests]);

  // Calculate totalPages and displayedRequests
  const totalPages = Math.ceil(sidebarRequests.length / requestsPerPage);
  const displayedRequests = sidebarRequests.slice(
    currentPage * requestsPerPage,
    (currentPage + 1) * requestsPerPage
  );

  // Change page
  const changePage = (direction) => {
    setAnimationClass("fadeOut");
    setTimeout(() => {
      setCurrentPage((prev) =>
        direction === "next"
          ? (prev + 1) % totalPages
          : (prev ? prev : totalPages) - 1
      );
      setAnimationClass("fadeIn");
    }, 500);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!user) return <div>No user data found</div>;

  const fullName = `${user.first_name} ${user.last_name}`;

  return (
    <div className="bg-white flex flex-col mt-3 px-16 py-12 max-md:px-5 lg:flex-row border shadow-3xl rounded-md">
      <div className="flex-grow">
        <div className="self-stretch flex flex-col items-center justify-center gap-5 mt-6 mx-11 md:flex-row md:justify-between md:items-stretch max-md:max-w-full max-md:mt-10">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="border border-black rounded-xl shadow-lg shadow-[#7d7d7d]">
              <p className="text-xs text-black text-center p-3">
                <i>Welcome back, {user.first_name}!</i>
              </p>
              <div className="flex flex-col items-center">
                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt={`${user.first_name}'s profile`}
                    className="rounded-full h-10 w-10"
                  />
                ) : (
                  <FallbackProfilePic name={fullName} />
                )}
                <div className="text-black text-center m-3">{fullName}</div>
              </div>
            </div>
            <div className="mt-4 border border-black rounded-xl shadow-lg shadow-[#7d7d7d] p-4 text-center">
              <h3 className="text-lg font-semibold">
                Unfulfilled Help Requests
              </h3>
              <p className="text-2xl font-bold">
                {unfulfilledRequests !== undefined
                  ? `${unfulfilledRequests}`
                  : ""}
              </p>
            </div>
          </div>
          <div
            className="relative pb-9 pt-6 p-12 border border-black rounded-xl shadow-lg shadow-[#7d7d7d]"
            style={{
              backgroundImage: `url(${FooterBackground})`,
              backgroundSize: "190%",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="self-center flex flex-col items-stretch my-auto max-md:max-w-full">
              <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full mt-12">
                Explore and Help Your Community
              </div>
              <div className="text-black text-lg leading-7 mt-8 max-md:max-w-full max-md:mt-12">
                Use the interactive map to find and respond to help requests
                nearby. Click on any marker to see how you can make a difference
                today and learn more about the needs around you.
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-4 p-12 mt-6">
          {/* Sidebar Section */}
          <div
            className="lg:col-span-1 mb-9 lg:mb-0 flex flex-col px-3 py-6 border border-black rounded-xl shadow-lg shadow-[#7d7d7d]"
            style={{ maxHeight: "775px", overflowY: "hidden" }}
          >
            <h3 className="text-xl font-semibold mb-3">
              More Volunteer Requests
            </h3>
            {/* Content area for volunteer info boxes */}
            <div className={`flex-grow overflow-hidden mt-3 ${animationClass}`}>
              <ul>
                {displayedRequests.map((request, index) => (
                  <li
                    key={index}
                    className="border border-black p-1 rounded-xl mb-3 flex flex-col justify-between"
                    style={{ height: "175px" }}
                  >
                    {/* Title Section */}
                    <div
                      className={`text-sm font-semibold my-1 ${request.taskType === "one-time" ? "text-[#15bec1]" : "text-[#f17d2b]"}`}
                    >
                      {request.title}
                    </div>

                    {/* Description Section */}
                    <div
                      className="flex-grow text-xs my-1 overflow-hidden px-1"
                      style={{ maxHeight: "6rem" }}
                    >
                      <p className="overflow-ellipsis whitespace-normal line-clamp-6">
                        {request.description}
                      </p>
                    </div>

                    {/* Location */}
                    <p className="text-xs text-gray-600 px-1 my-1">
                      Location: {request.location}
                    </p>

                    {/* View Details Button */}
                    <div className="flex justify-center mt-2">
                      <Link
                        to={`/requests/${request.id}`}
                        className="text-white text-xs leading-4 whitespace-nowrap justify-center items-stretch border bg-black px-3 py-1 border-solid border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
                      >
                        View Details
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pagination buttons */}
            <div className="mt-auto flex justify-between">
              <button
                onClick={() => changePage("next")}
                className="text-sm bg-black text-white px-3 py-2 hover:bg-gray-600 shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              >
                &#9650;
              </button>
              <button
                onClick={() => changePage("prev")}
                className="text-sm bg-black text-white px-3 py-2 hover:bg-gray-600 shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              >
                &#9660;
              </button>
            </div>
          </div>

          {/* Container for Map and Volunteer Cards */}
          <div className="lg:col-span-4 flex flex-col h-full">
            {/* Map */}
            <div className="Z-0  mb-9 leaflet-container leaflet-control-attribution border border-black justify-center items-center rounded-xl lg:mb-12 shadow-lg shadow-[#7d7d7d]">
              <MapComponent
                position={[51.505, -0.09]}
                zoomLevel={3}
                jobs={activeRequests}
              />
            </div>

            {/* Volunteer Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-grow">
              {urgentRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex flex-col p-3 border border-black rounded-xl shadow-lg shadow-[#7d7d7d] h-full"
                >
                  <div className="flex flex-col justify-between flex-grow">
                    <h3
                      className={`text-sm font-semibold mb-1 overflow-hidden text-ellipsis ${request.taskType === "one-time" ? "text-[#15bec1]" : "text-[#f17d2b]"}`}
                    >
                      {request.title}
                    </h3>
                    <p className="text-xs text-black mb-2 overflow-hidden text-ellipsis line-clamp-6">
                      {request.description}
                    </p>
                    <p className="text-xs text-gray-600 mb-4">
                      Location: {request.location}
                    </p>
                    <Link
                      to={`/requests/${request.id}`}
                      className="text-white text-xs leading-4 whitespace-nowrap justify-center text-center items-stretch border bg-black px-3 py-1 border-solid border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
                    >
                      Volunteer Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center text-black text-3xl font-bold leading-10 self-center mt-9 max-md:mt-10">
          Have Your Own Request?
        </div>
        <div className="flex justify-center text-black text-lg leading-7 self-center mt-4">
          Reach out to your community for a helping hand.
        </div>
        <div className="flex justify-center mt-9">
          <Link
            to="/create"
            className="flex justify-center p-3 mb-3 border border-black shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 shadow-md rounded-full"
          >
            Create Requests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
