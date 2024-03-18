import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useUser } from "../contexts/UserContext";
import MapComponent from "./MapComponent";
import ProfImg from "../assets/FRacer20.jpeg";
import FooterBackground from "../assets/overlapping_circles.svg";
import "../index.css";

const Dashboard = () => {
  const { user, token } = useUser();
  const [currentPage, setCurrentPage] = useState(0);
  const [animationClass, setAnimationClass] = useState("fadeIn");
  const requestsPerPage = 3;
  const [urgentRequests, setUrgentRequests] = useState([]);
  const [sidebarRequests, setSidebarRequests] = useState([]);
  //const [activeRequests, setActiveRequests] = useState([]);

  // Fetch active requests
  const fetchActiveRequests = async () => {
    const { data } = await axios.get("http://localhost:4000/requests/active", {
      headers: {
        Authorization: `Bearer ${token}`,
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
  } = useQuery(["activeRequests", token], () => fetchActiveRequests(), {
    enabled: !!token,
  });

  // Sort and set urgent and sidebar requests
  useEffect(() => {
    if (Array.isArray(activeRequests)) {
      const sortedRequests = activeRequests.sort(
        (a, b) => b.urgency - a.urgency
      );
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

  return (
    <div className="bg-white flex flex-col mt-3 px-16 py-12 max-md:px-5 lg:flex-row border shadow-3xl rounded-md">
      <div className="flex-grow">
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-6 mx-11 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
          <div className="flex flex-col items-start">
            <div className="border border-black rounded-xl shadow-lg shadow-[#7d7d7d]">
              <p className="text-xs self-stretch text-black text-center p-3 whitespace-nowrap">
                <i>Welcome back, {user.first_name}!</i>
              </p>
              <img
                src={ProfImg}
                className="aspect-[1.01] object-contain object-center w-full overflow-hidden"
                alt="Profile"
              />
              <div className="self-stretch text-black text-center font-semibold leading-10 whitespace-nowrap">
                {user.first_name} {user.last_name}
              </div>
            </div>
            <div className="mt-4 border border-black rounded-xl shadow-lg shadow-[#7d7d7d] p-4 text-center">
              <h3 className="text-lg font-semibold">
                Unfulfilled Help Requests
              </h3>
              <p className="text-2xl font-bold">{sidebarRequests.length}</p>
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
            <div className="Z-0 leaflet-container leaflet-control-attribution border border-black justify-center items-center rounded-3xl lg:mb-12 shadow-lg shadow-[#7d7d7d]">
              <MapComponent
                position={[51.505, -0.09]}
                zoomLevel={3}
                jobs={activeRequests}
                selectionMode={false}
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

        <div className="flex justify-center text-black text-3xl font-bold leading-10 self-center whitespace-nowrap mt-9 max-md:mt-10">
          Have Your Own Request?
        </div>
        <div className="flex justify-center text-black text-lg leading-7 self-center whitespace-nowrap mt-4">
          Reach out to your community for a helping hand.
        </div>
        <div className="flex justify-center mt-9">
          <Link
            to="/create"
            className="flex justify-center w-32 h-12 min-w-32 min-h-12 text-black text-base leading-6 whitespace-nowrap items-center border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 max-md:px-5 rounded-full"
          >
            Create Requests
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
