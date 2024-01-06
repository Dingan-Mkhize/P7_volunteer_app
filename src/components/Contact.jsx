const Contact = () => {
  return (
    <div className="items-stretch bg-white flex flex-col">
      <div className="bg-black bg-opacity-50 flex w-full flex-col pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
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
          <div className="self-center text-black text-base leading-6 mt-20 max-md:max-w-full max-md:mt-10">
            Name
          </div>
          <div className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full">
            Placeholder
          </div>
          <div className="self-center text-black text-base leading-6 mt-6 max-md:max-w-full">
            Email
          </div>
          <div className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full">
            Placeholder
          </div>
          <div className="self-center text-black text-base leading-6 mt-6 max-md:max-w-full">
            Message
          </div>
          <div className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full mt-2 pt-3 pb-28 px-3 border-solid border-black max-md:max-w-full max-md:pb-10">
            Type your message...
          </div>
          <div className="self-center flex gap-2 mt-6 pr-11 pb-3.5 items-start max-md:pr-5">
            <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col border-solid border-black" />
            <div className="text-black text-base leading-6 self-stretch grow whitespace-nowrap">
              Checkbox
            </div>
          </div>
          <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black self-center mt-6 px-7 py-3 border-solid border-black max-md:px-5">
            Button
          </div>
        </div>
      </div>
      <div className="bg-white flex w-full flex-col pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
        <div className="text-black text-5xl font-bold leading-[57.6px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Get in touch with us
        </div>
        <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
          Have any questions or need assistance? We are here to help!
        </div>{" "}
        <div className="items-stretch flex gap-4 mt-6 mb-10 pt-4">
          <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
            Contact
          </div>{" "}
          <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
            Connect
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;