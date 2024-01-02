import HelpRequestImg from "../assets/volunteer_8.png"; // Make sure the path is correct

const HelpRequestPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      {/* Background image with text overlay */}
      <div
        className="w-full h-[500px] bg-no-repeat bg-cover flex flex-col pl-16 pr-20 py-12 items-start justify-center rounded-2xl"
        style={{ backgroundImage: `url(${HelpRequestImg})` }}
      >
        <div className="w-full">
          <div className="outline-text-white text-black text-6xl font-bold leading-[67.2px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
            Share Your Needs
          </div>
          <div className="outline-text-white text-black text-xl leading-7 mt-6 mb-16 max-md:max-w-full max-md:mb-10">
            Find help from the community by detailing your needs and requesting
            assistance.
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-black text-center text-base font-semibold leading-6 self-stretch max-md:max-w-full">
                  Request
                </div>
                <div className="self-stretch text-black text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
                  Get in Touch
                </div>
                <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  Submit your help request here.
                </div>
                <div className="self-stretch text-black text-base leading-6 mt-8 max-md:max-w-full">
                  Name
                </div>
                <div className="text-neutral-600 text-base leading-6 items-stretch self-stretch border bg-white justify-center mt-2 p-3 border-solid border-black max-md:max-w-full">
                  Placeholder
                </div>
                <div className="self-stretch text-black text-base leading-6 mt-6 max-md:max-w-full">
                  Email
                </div>
                <div className="text-neutral-600 text-base leading-6 items-stretch self-stretch border bg-white justify-center mt-2 p-3 border-solid border-black max-md:max-w-full">
                  Placeholder
                </div>
                <div className="self-stretch text-black text-base leading-6 mt-6 max-md:max-w-full">
                  Message
                </div>
                <div className="text-neutral-600 text-base leading-6 items-stretch self-stretch border bg-white mt-2 pt-3 pb-28 px-3 border-solid border-black max-md:max-w-full max-md:pb-10">
                  Type your message...
                </div>
                <div className="flex gap-2 mt-6 pr-11 pb-3.5 self-start items-start max-md:pr-5">
                  <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col border-solid border-black" />
                  <div className="text-black text-base leading-6 self-stretch grow whitespace-nowrap">
                    Checkbox
                  </div>
                </div>
                <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black mt-6 px-7 py-3 border-solid border-black self-start max-md:px-5">
                  Button
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.84] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-black text-center text-base font-semibold leading-6 self-stretch max-md:max-w-full">
                  Empowering Connections
                </div>
                <div className="self-stretch text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Unlock the Power of Community Support
                </div>
                <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  Submitting a help request on Kindred Connect provides you with
                  the opportunity to tap into the incredible support of your
                  community. Whether you need a one-time task or have a material
                  need, our platform makes it easy to reach out and receive
                  quick assistance.
                </div>
                <div className="self-stretch mt-8 py-2 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-8">
                        <div className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                          Streamlined Process
                        </div>
                        <div className="text-black text-base leading-6 mt-4">
                          Submitting a help request is simple and
                          straightforward, allowing you to quickly connect with
                          volunteers.
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-8">
                        <div className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                          Prompt Assistance
                        </div>
                        <div className="text-black text-base leading-6 mt-4">
                          Our platform ensures that your help request receives
                          timely responses from volunteers.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-6 pt-4 self-start">
                  <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
                    Learn More
                  </div>
                  <div className="justify-center items-stretch flex gap-2 mt-3 self-start">
                    <div className="text-black text-base leading-6 grow whitespace-nowrap">
                      Sign Up
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/676250fcf084faf6e5863b80c702283bf08b5aded44c1d1ddba93595bd0bfb20?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="text-black text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl max-md:mt-10">
                Make a Difference Today
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-black text-lg leading-7 max-md:max-w-full">
                  Fill out the help request form and join our community of
                  caring individuals. Together, we can make a positive impact in
                  the lives of those in need.
                </div>
                <div className="items-stretch flex gap-4 mt-6 pt-4 self-start">
                  <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
                    Get Started
                  </div>
                  <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
                    Learn More
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpRequestPage;
