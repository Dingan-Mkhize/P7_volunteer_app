const ContactPage = () => {
  return (
    <div className="items-stretch bg-white flex flex-col">
      <div className="justify-center items-stretch bg-white flex w-full flex-col px-16 py-4 border-b-black border-b border-solid max-md:max-w-full max-md:px-5">
        <div className="justify-between items-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b1601a72e6a488add4825e3f80dbeca2172171287d41f684751c3a9ef7c3142?"
            className="aspect-[2.33] object-contain object-center w-[63px] overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="justify-between items-center self-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="items-stretch flex justify-between gap-5 my-auto">
              <div className="text-black text-base leading-6 grow whitespace-nowrap">
                About Us
              </div>
              <div className="text-black text-base leading-6">Services</div>
              <div className="text-black text-base leading-6">Contact</div>
              <div className="justify-between items-stretch flex gap-1">
                <div className="text-black text-base leading-6 grow whitespace-nowrap">
                  More
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eeeeb64794e921710819f15b14060a903618eedec1acd3e5a93df3adac80351?"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
            <div className="justify-between items-stretch self-stretch flex gap-4">
              <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-5 py-2 border-solid border-black">
                Button
              </div>
              <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-5 py-2 border-solid border-black">
                Button
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default ContactPage;