import ContactImg1 from "../assets/volunteer_9.png";

const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You would handle the form submission here, possibly sending data to a server
    console.log("Form submitted!");
  };

  return (
    <div className="items-stretch bg-white flex flex-col mt-3 p-9">
      <div
        className="w-full h-[500px] object-cover bg-no-repeat bg-cover flex items-center justify-center text-white text-6xl font-bold rounded-full leading-[67px] px-16 shadow-2xl shadow-grey mb-6"
        style={{ backgroundImage: `url(${ContactImg1})` }}
      >
        <div className="outline-text-white w-full text-center py-28">
          Get In Touch, Community Is Always Available
        </div>
      </div>

      <div className="items-center bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-[768px] max-w-full flex-col max-md:mt-10 rounded-2xl border border-black shadow-xl shadow-[#7d7d7d]">
          <div className="self-stretch text-black text-center text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl mt-6">
            Contact us
          </div>{" "}
          <div className="self-stretch text-black text-center text-lg leading-7 mt-6 max-md:max-w-full">
            Have a question? We are here to help!
          </div>
          <label
            htmlFor="name"
            className="self-center text-black text-base leading-6 mt-20 max-md:max-w-full max-md:mt-10"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="self-center text-base leading-6 border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full rounded-full"
            placeholder="Your Name"
          />
          <label
            htmlFor="email"
            className="self-center text-black text-base leading-6 mt-6 max-md:max-w-full"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="self-center text-base leading-6 border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full rounded-full"
            placeholder="Your Email"
          />
          <label
            htmlFor="message"
            className="self-center text-black text-base leading-6 mt-6 max-md:max-w-full"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="self-center text-base leading-6 border bg-white w-[560px] max-w-full mt-2 p-3 border-solid border-black max-md:max-w-full max-md:pb-10 rounded-3xl"
            placeholder="Your Message"
            rows="6"
          ></textarea>
          {/* <div className="self-center flex gap-2 mt-6 pr-11 pb-3.5 items-start max-md:pr-5">
            <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col border-solid border-black" />
  
          </div> */}
          <div className="flex justify-center p-9">
            <button
              type="submit"
              className="text-white text-base leading-6 whitespace-nowrap border bg-black px-6 py-3 border-solid border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 rounded-full"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
