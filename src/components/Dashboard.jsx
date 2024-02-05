import { useState, useEffect } from "react";
import ProfImg from "../assets/volunteer_11.png";
import FooterBackground from "../assets/overlapping_circles.svg";

const Dashboard = () => {
  const [unfulfilledRequests, setUnfulfilledRequests] = useState(0);

  // Simulated data for the sidebar
  const sidebarContent = [
    "Latest Volunteer Opportunities",
    "Upcoming Events",
    "How to Get Involved",
  ];

  // Placeholder data for volunteerRequests
  const volunteerRequests = [
    {
      id: 1,
      title: "Help Needed: Park Cleanup",
      description: "Join us this Saturday to clean up the local park.",
      location: "Central Park",
    },
    {
      id: 2,
      title: "Volunteer: Food Drive",
      description:
        "We need volunteers to help organize the food drive next week.",
      location: "Community Center",
    },
    {
      id: 3,
      title: "Urgent: Elderly Assistance",
      description:
        "Looking for volunteers to assist with grocery shopping for elderly residents.",
      location: "Various Locations",
    },
  ];

  useEffect(() => {
    const fetchUnfulfilledRequestsCount = async () => {
      const count = 42; // Example static count
      setUnfulfilledRequests(count);
    };

    fetchUnfulfilledRequestsCount();

    // Interval to update count every few seconds (example: 5 seconds)
    const intervalId = setInterval(fetchUnfulfilledRequestsCount, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white flex flex-col px-16 py-12 max-md:px-5 lg:flex-row">
      <div className="flex-grow">
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-24 mx-11 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
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
          <div className="lg:col-span-1 mb-8 lg:mb-0 flex flex-col p-3 border border-black rounded-xl shadow-xl shadow-[#7d7d7d]">
            <h3 className="text-xl font-semibold mb-4">Sidebar</h3>
            <ul>
              {sidebarContent.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                  {item}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 ">
              {volunteerRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex flex-col p-3 border border-black rounded-xl shadow-xl shadow-[#7d7d7d] overflow-hidden"
                  style={{
                    minWidth: "calc(33.3333% - 10px)",
                    minHeight: "200px", // Reduced height for compact layout
                  }}
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

        <div className="self-center w-full mt-6 max-md:max-w-full max-md:mt-12 p-6 border border-black rounded-xl shadow-xl shadow-[#7d7d7d]">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/3 xl:w-1/4">
              <h3 className="text-lg font-semibold">Conversations</h3>
            </div>

            <div className="flex-grow">
              <h3 className="text-lg font-semibold">Message Details</h3>
            </div>

            <div className="w-full lg:w-2/3 xl:w-3/4 mt-6 lg:mt-0">
              <h3 className="text-lg font-semibold">Submit a Help Request</h3>
              <form>
                {["Name", "Email", "Description"].map((label) => (
                  <div key={label} className="mb-4">
                    <label className="block text-black text-sm font-bold mb-2">
                      {label}
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type={label === "Message" ? "textarea" : "text"}
                      placeholder={label}
                    />
                  </div>
                ))}
                <button
                  className="text-white text-sm leading-4 whitespace-nowrap justify-center items-stretch border bg-black px-6 py-1 border-solid border-black shadow-sm hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
                  type="submit"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-black text-5xl font-bold leading-[57.6px] ml-14 mt-40 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
          FAQs
        </div>
        <div className="text-black text-lg leading-7 w-[712px] max-w-full ml-14 mt-6 self-start">
          Find answers to common questions about navigating the map,
          understanding markers, and interacting with requests.
        </div>
        {[
          "How do I navigate?",
          "What are markers?",
          "How do I respond?",
          "How do I submit?",
          "What happens after submission?",
        ].map((faq) => (
          <div
            key={faq}
            className="justify-center items-center self-center border flex w-full max-w-[1315px] gap-0 mt-4 px-6 py-5 rounded-3xl border-solid border-black max-md:max-w-full max-md:flex-wrap max-md:px-5"
          >
            <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
              {faq}
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3a75a396df1c14cf7801dd5b1cf9120e26afbca73ccb0cbcb562fd1514afc9c?"
              className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
              alt="FAQ Icon"
            />
          </div>
        ))}
        <div className="text-black text-3xl font-bold leading-10 self-center whitespace-nowrap mt-24 max-md:mt-10">
          Still have questions?
        </div>
        <div className="text-black text-lg leading-7 self-center whitespace-nowrap mt-4">
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
