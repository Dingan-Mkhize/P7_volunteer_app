import ProfImg from "../assets/volunteer_11.png";
import FooterBackground from "../assets/overlapping_circles.svg";

const Dashboard = () => {

const volunteerRequests = [
  {
    id: 1,
    title: "Beach Cleanup",
    description: "Join us to clean the local beach area. Tools provided.",
    location: "Oceanview Beach",
  },
  {
    id: 2,
    title: "Food Bank Help",
    description: "Assist in organizing and distributing food.",
    location: "Downtown Food Bank",
  },
  {
    id: 3,
    title: "Park Tree Planting",
    description: "Help plant trees in the city park.",
    location: "Greenfield Park",
  },
  // ...fetch or generate data dynamically
];

  return (
    <div className="bg-white flex flex-col px-16 py-12 max-md:px-5">
      <div className="self-stretch flex items-stretch justify-between gap-5 mt-24 mx-11 max-md:max-w-full max-md:flex-wrap max-md:mr-2.5 max-md:mt-10">
        <div className="flex flex-col items-start pr-16">
          <p className="text-xs self-stretch text-black text-center leading-10 whitespace-nowrap pt-3">
            <i>Welcome back, Michaela!</i>
          </p>
          <img
            src={ProfImg}
            className="aspect-[1.01] object-contain object-center w-full overflow-hidden border-2 border-black rounded-full"
            alt="Profile"
          />
          <div className="self-stretch text-black text-center font-semibold leading-10 whitespace-nowrap">
            Michaela Johnson
          </div>
        </div>
        <div
          className="relative pb-9 pt-6 p-12"
          style={{
            backgroundImage: `url(${FooterBackground})`,
            backgroundSize: "190%", // Adjust this as needed
            backgroundPosition: "center center", // Moves the SVG further to the right
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="self-center flex flex-col items-stretch my-auto max-md:max-w-full">
            <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
              Discover Help Requests and Explore Different Areas on the
              Interactive Map
            </div>
            <div className="text-black text-lg leading-7 mt-16 max-md:max-w-full max-md:mt-10">
              The interactive map in Kindred Connect allows users to easily
              locate help requests in their community. By clicking on markers,
              users can access powerful stories and initiate direct
              communication with those in need. Additionally, the map encourages
              community awareness and involvement by enabling users to explore
              different areas and understand the broader needs of their
              community.
            </div>
          </div>
        </div>
      </div>

      {/* Map Section Placeholder */}
      <div className="mt-10 mx-5 w-full">
        <div className="border border-dashed border-gray-400 bg-gray-200 h-64 flex justify-center items-center rounded-3xl">
          <h2 className="text-lg font-semibold text-gray-700">
            Interactive Map Placeholder
          </h2>
        </div>
      </div>

      <div className="flex flex-row px-5 py-16 justify-between space-x-5">
        {/* Volunteer Request Cards */}
        {volunteerRequests.map((request) => (
          <div
            key={request.id}
            className="flex flex-col border border-gray-300 rounded-xl shadow-xl shadow-[#7d7d7d] object-center w-full overflow-hidden"
            style={{ width: "calc(33% - 10px)", minHeight: "320px" }}
          >
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {request.title}
                </h3>
                <p className="text-black mb-4">{request.description}</p>
                <p className="text-gray-600 text-sm">
                  Location: {request.location}
                </p>
              </div>
              <div className="mt-4">
                <button className="w-full h-12 text-black text-base leading-6 border-2 border-black rounded-full shadow-md hover:bg-black hover:text-white transition duration-300">
                  Volunteer Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="self-center w-full max-w-[1312px] mt-40 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="text-black text-center text-base font-semibold leading-6 self-stretch max-md:max-w-full">
                Volunteer Request
              </div>
              <div className="text-black text-5xl font-bold leading-[57.6px] self-stretch mt-4 max-md:max-w-full max-md:text-4xl">
                Reach Out to the Community
              </div>
              <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                Submit your help request here.
              </div>
              {/* Inputs and Labels */}
              {["Name", "Email", "Message"].map((label) => (
                <div key={label} className="w-full">
                  {" "}
                  {/* Ensure the container takes up the full width */}
                  <div className="text-black text-base leading-6 mt-6">
                    {label}
                  </div>
                  <div
                    className={`text-neutral-600 text-base leading-6 flex items-center border bg-white mt-2 ${
                      label === "Message"
                        ? "pb-28 px-3 rounded-[30px] h-40" // Specify a fixed height for the message box
                        : "p-3 rounded-3xl h-12" // Specify a fixed height for the input
                    } border-solid border-black w-full`} // Ensure the width is full
                  >
                    <input
                      className="w-full h-full bg-transparent" // Make input fill its container
                      type={label === "Message" ? "textarea" : "text"}
                      placeholder={
                        label === "Message"
                          ? "Type your message..."
                          : "Placeholder"
                      }
                    />
                  </div>
                </div>
              ))}

              <div className="flex gap-2 mt-6 pr-11 pb-3.5 self-start items-start max-md:pr-5">
                <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col border-solid border-black" />
                <div className="text-black text-base leading-6 self-stretch grow whitespace-nowrap">
                  Checkbox
                </div>
              </div>
              <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black mt-6 px-6 py-3 rounded-3xl border-solid border-black self-start max-md:px-5">
                Submit
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            {/* Image Placeholder */}
            <div className="aspect-[0.84] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 bg-gray-200 rounded-3xl"></div>
          </div>
        </div>
      </div>

      <div className="text-black text-5xl font-bold leading-[57.6px] ml-14 mt-40 self-start max-md:max-w-full max-md:text-4xl max-md:mt-10">
        FAQs
      </div>
      <div className="text-black text-lg leading-7 w-[712px] max-w-full ml-14 mt-6 self-start">
        Find answers to common questions about navigating the map, understanding
        markers, and interacting with requests.
      </div>

      {/* FAQ items */}
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
        <button className="w-32 h-12 min-w-32 min-h-12 text-black text-base leading-6 whitespace-nowrap items-center border-2 border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 max-md:px-5 rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
