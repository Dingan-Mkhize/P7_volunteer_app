



const Contact = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You would handle the form submission here, possibly sending data to a server
    console.log("Form submitted!");
  };

  return (
    <div className="items-stretch bg-white flex flex-col">
      <div className="bg-black bg-opacity-50 flex w-full flex-col pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:px-5 rounded-3xl">
        <div className="text-white text-6xl font-bold leading-[67.2px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Get in touch
        </div>
        <div className="text-white text-lg leading-7 mt-6 mb-16 max-md:max-w-full max-md:mb-10">
          We are here to help. Contact us for any inquiries or support.
        </div>
      </div>{" "}
      <div className="items-center bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-[768px] max-w-full flex-col mt-16 mb-10 max-md:mt-10">
          <div className="text-black text-center text-base font-semibold leading-6 self-center whitespace-nowrap">
            Get in touch
          </div>{" "}
          <div className="self-stretch text-black text-center text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
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
            className="self-center text-base leading-6 border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full"
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
            className="self-center text-base leading-6 border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full"
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
            className="self-center text-base leading-6 border bg-white w-[560px] max-w-full mt-2 p-3 border-solid border-black max-md:max-w-full max-md:pb-10"
            placeholder="Your Message"
            rows="6"
          ></textarea>
          <div className="self-center flex gap-2 mt-6 pr-11 pb-3.5 items-start max-md:pr-5">
            <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col border-solid border-black" />
            <div className="text-black text-base leading-6 self-stretch grow whitespace-nowrap">
              Checkbox
            </div>
          </div>
          <button
            type="submit"
            className=" text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 max-md:px-5 rounded-full"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;