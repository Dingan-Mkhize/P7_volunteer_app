import ContactImg1 from "../assets/volunteer_9.png";
import Logo from "../assets/LogoImg.png";

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You would handle the form submission here, possibly sending data to a server
    console.log("Form submitted!");
  };

  return (
    <div className="flex flex-col items-stretch bg-white mt- p-9 border shadow-3xl rounded-md">
      <div
        className="w-full h-[500px] bg-no-repeat bg-cover flex items-center justify-center text-6xl font-bold text-white rounded-full px-16 shadow-md shadow-[#7d7d7d] mb-6"
        style={{ backgroundImage: `url(${ContactImg1})` }}
      >
        <div className="text-center outline-text-white py-28 w-full text-4xl sm:text-5xl md:text-6xl">
          Get In Touch, Community Is Always Available
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full md:px-16 py-9"
      >
        <div className="flex flex-col items-center justify-center w-full sm:w-[768px] max-w-full rounded-2xl border border-black shadow-lg shadow-[#7d7d7d]">
          <div className=" flex justify-center mt-6">
            <img
              loading="lazy"
              src={Logo}
              alt="Hands United Logo"
              className="object-contain object-center w-36 h-33 overflow-hidden border border-black rounded-full shadow-lg shadow-[#7d7d7d]"
            />
          </div>
          <div className="text-center text-5xl font-bold text-black mt-3">
            Contact us
          </div>
          <div className="text-center text-lg text-black mt-6">
            Have a question? We are here to help!
          </div>
          <div className="w-full p-9">
            <label
              htmlFor="name"
              className="block text-black text-base leading-6 mb-3"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="block text-base leading-6 border bg-white w-full p-3 shadow-md shadow-[#7d7d7d] border-solid border-black rounded-full"
              placeholder="Your Name"
            />
            <label
              htmlFor="email"
              className="block text-black text-base leading-6 mt-6"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block text-base leading-6 border bg-white w-full mt-2 p-3 shadow-md shadow-[#7d7d7d] border-solid border-black rounded-full"
              placeholder="Your Email"
            />
            <label
              htmlFor="message"
              className="block text-black text-base leading-6 mt-6"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="block text-base leading-6 border bg-white w-full mt-2 p-3 shadow-md shadow-[#7d7d7d] border-solid border-black rounded-3xl"
              placeholder="Your Message"
              rows="6"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-base leading-6 text-white whitespace-nowrap bg-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full mt-6"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
