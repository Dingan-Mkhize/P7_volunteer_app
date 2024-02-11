import { useState, useEffect } from "react";
import ProfImg from "../assets/volunteer_11.png";
import FooterBackground from "../assets/overlapping_circles.svg";
import Message from "./Message";
import { volunteerRequests } from "../Data";

const Dashboard = () => {
  const [unfulfilledRequests, setUnfulfilledRequests] = useState(0);
  const [sidebarRequests, setSidebarRequests] = useState([]);
  const [urgentRequests, setUrgentRequests] = useState([]);

  useEffect(() => {
    // Sort volunteerRequests by urgency in descending order
    const sortedByUrgency = [...volunteerRequests].sort(
      (a, b) => b.urgency - a.urgency
    );

    // Top 3 for the urgent volunteer cards
    const topUrgentRequests = sortedByUrgency.slice(0, 3);
    setUrgentRequests(topUrgentRequests);

    // The rest for the sidebar, excluding the top 3
    const sidebarRequestsExcludingTopUrgent = sortedByUrgency.slice(3);
    setSidebarRequests(sidebarRequestsExcludingTopUrgent);

    // Fetch unfulfilled requests count (placeholder)
    const fetchUnfulfilledRequestsCount = async () => {
      const count = 42; // Example static count
      setUnfulfilledRequests(count);
    };
    fetchUnfulfilledRequestsCount();
  }, []);

  return (
    <div className="bg-white flex flex-col px-16 py-12 max-md:px-5 lg:flex-row">
      <div className="flex-grow">
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-3 mx-11 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
          <div className="flex flex-col items-start">
            <div className="border border-black rounded-xl shadow-xl shadow-[#7d7d7d]">
              <p className="text-xs self-stretch text-black text-center leading-10 whitespace-nowrap">
                <i>Welcome back, Michaela!</i>
              </p>
              <img
                src={ProfImg}
                className="aspect-[1.01] object-contain object-center w-full overflow-hidden"
                alt="Profile"
              />
              <div className="self-stretch text-black text-center font-semibold leading-10 whitespace-nowrap">
                Michaela Johnson
              </div>
            </div>
            <div className="mt-4 border border-black rounded-xl shadow-xl shadow-[#7d7d7d] p-4 text-center">
              <h3 className="text-lg font-semibold">
                Unfulfilled Help Requests
              </h3>
              <p className="text-2xl font-bold">{unfulfilledRequests}</p>
            </div>
          </div>
          <div
            className="relative pb-9 pt-6 p-12 border border-black rounded-xl shadow-xl shadow-[#7d7d7d]"
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
          {/* Sidebar */}
          <div className="lg:col-span-1 mb-8 lg:mb-0 flex flex-col p-3 border border-black rounded-xl shadow-xl shadow-[#7d7d7d]" style={{ maxHeight: 'calc(575px + 200px)', overflowY: 'auto' }}>
            <h3 className="text-xl font-semibold mb-4">
              More Volunteer Requests
            </h3>
            
            <ul>
              {sidebarRequests.map((request) => (
                <li key={request.id} className="mb-4 p-1 border border-black rounded-xl">
                  <div className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer">
                    <div className="font-semibold">{request.title}</div>
                    <div className="text-xs mt-1">{request.description}</div>
                    <a
                      href={`/volunteer-requests/${request.id}`}
                      className="inline-block mt-2 text-blue-500 hover:text-blue-700 text-xs font-semibold"
                    >
                      View Details
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Container for Map and Volunteer Cards */}
          <div className="lg:col-span-4">
            {/* Map */}
            <div className="border border-dashed border-gray-400 bg-gray-200 h-[500px] flex justify-center items-center rounded-3xl lg:mb-12 shadow-xl shadow-[#7d7d7d]">
              <h2 className="text-lg font-semibold text-gray-700">
                Interactive Map Placeholder
              </h2>
            </div>
            {/* Volunteer Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
              {urgentRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex flex-col p-3 border border-black rounded-xl shadow-xl shadow-[#7d7d7d] overflow-hidden"
                >
                  <div className="p-2 flex flex-col justify-between flex-grow">
                    <h3 className="text-sm font-semibold text-black mb-1">
                      {request.title}
                    </h3>
                    <p className="text-xs text-black mb-2">
                      {request.description}
                    </p>
                    <p className="text-xs text-gray-600">
                      Location: {request.location}
                    </p>
                    <button className="mt-2 text-white text-xs leading-4 whitespace-nowrap justify-center items-stretch border bg-black px-3 py-1 border-solid border-black shadow-sm hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full">
                      Volunteer Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Component */}
        <div className="lg:col-span-4 ml-12 mr-12 mt-12 px-3 rounded-3xl shadow-2xl shadow-[#7d7d7d] border border-black overflow-hidden">
          <Message />
        </div>

        <div className="flex justify-center text-black text-3xl font-bold leading-10 self-center whitespace-nowrap mt-24 max-md:mt-10">
          Still have questions?
        </div>
        <div className="flex justify-center text-black text-lg leading-7 self-center whitespace-nowrap mt-4">
          Contact us for further assistance.
        </div>
        <div className="flex justify-center mt-9">
          <button className="w-32 h-12 min-w-32 min-h-12 text-black text-base leading-6 whitespace-nowrap items-center border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 max-md:px-5 rounded-full">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
