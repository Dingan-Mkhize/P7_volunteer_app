import { useState, useEffect } from "react";
import HeroImg from "../assets/homepage.webp";
import HomeImg1 from "../assets/volunteer_6.png";
import HomeImg2 from "../assets/volunteer_1.png";
import HomeImg3 from "../assets/volunteer_4.png";
import HomeImg4 from "../assets/volunteer_5.png";

const Home = () => {
  // Placeholder state for unfulfilled help requests
  const [unfulfilledRequests, setUnfulfilledRequests] = useState(50);

  // Simulate updating the counter every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const placeholderData = Math.floor(Math.random() * 100); // Random number between 0 and 99
      setUnfulfilledRequests(placeholderData);
    }, 3000); // Update every 3000 milliseconds (3 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-stretch">
      <div className="items-center bg-white flex w-full flex-col px-12 py-12 max-md:max-w-full max-md:px-5">
        {/* hero image section */}
        <div className="relative overflow-hidden h-screen md:h-3/4 lg:h-1/2 rounded-full shadow-lg shodow-white">
          <img className="w-full h-full object-cover" src={HeroImg} alt="/" />
        </div>
      </div>

      <div className="rounded-xl shadow-lg shadow-white mx-auto w-full max-w-3xl overflow-hidden p-6 mt-3 mb-3">
        <div className="self-center text-black text-center text-6xl font-bold">
          Hands United<p className="text-sm mt-3">———————</p>
          Connecting Communities, One Request at a Time
        </div>
        <div className="text-black text-center text-lg mt-3">
          Welcome to our platform where neighbors help neighbors. Join our
          community and make a difference today.
        </div>
        <div className="flex justify-center items-center gap-4 mb-9 mt-9">
          <button className="text-white bg-black border-black text-base leading-6 whitespace-nowrap justify-center items-center px-4 py-2 border shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full w-28">
            Sign Up
          </button>
          <button className="text-black bg-white border-black text-base leading-6 whitespace-nowrap justify-center items-center px-4 py-2 border shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full w-28">
            Learn More
          </button>
        </div>
      </div>

      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
                  Get Real-Time Help Requests and Make a Difference in Your
                  Community
                </div>
                <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  Our platform displays the number of unfulfilled help requests
                  in your area, empowering you to lend a hand.
                </div>
                <div className="max-md:max-w-full mt-3">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex flex-col max-md:mt-8">
                        {/* Dynamic counter for unfulfilled help requests */}

                        <div className="rounded-xl shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden p-3">
                          <div className="text-black text-5xl font-bold leading-[57.6px] whitespace-nowrap max-md:text-4xl">
                            {unfulfilledRequests}%
                          </div>
                          <div className="text-black text-base leading-6 mt-2">
                            Unfulfilled Help Requests Near You
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-8">
                        <div className="rounded-xl shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden p-3">
                          <div className="text-black text-5xl font-bold leading-[57.6px] whitespace-nowrap max-md:text-4xl">
                            50%
                          </div>
                          <div className="text-black text-base leading-6 mt-2">
                            Make a Difference in Your Community Today
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                className="rounded-xl shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden mt-12"
                src={HomeImg1}
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="relative pb-9 px-6 rounded-3xl shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden">
          <div className="circle-bg"></div>
          <div className="flex justify-center text-black text-center text-base font-semibold leading-6 self-center whitespace-nowrap mt-16 max-md:mt-10">
            Empower Your Community, One Act at a Time
          </div>
          <div className="flex flex-col justify-center items-center text-center max-w-screen-md mx-auto">
            <div className="text-black text-5xl font-bold leading-[58px] mt-4 md:max-w-full md:text-4xl md:leading-[54px]">
              Join Hands United for a Stronger Tomorrow
            </div>
            <div className="text-black text-lg leading-7 mt-6 md:max-w-full">
              Every helping hand makes a difference in our community. By
              volunteering, you are not just giving your time; you are uplifting
              lives, nurturing hope, and building a stronger, more resilient
              neighborhood. Our service connects compassionate individuals with
              opportunities to serve, learn, and grow. Together, we can
              transform shared spaces, provide essential support to those in
              need, and foster a spirit of generosity. Join us in making each
              act of kindness a step toward a better future for all.
            </div>
          </div>
        </div>

        <div className="justify-center self-stretch mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <img
                  src={HomeImg3}
                  alt="/"
                  className="rounded-xl shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden"
                />
                <div className="text-black text-center text-3xl font-bold leading-10 mt-8">
                  Medium length section heading goes here
                </div>
                <div className="text-black text-center text-base leading-6 mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <img
                  src={HomeImg2}
                  alt="/"
                  className="rounded-xl shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden"
                />
                <div className="text-black text-center text-3xl font-bold leading-10 mt-8">
                  Medium length section heading goes here
                </div>
                <div className="text-black text-center text-base leading-6 mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <img
                  src={HomeImg4}
                  alt="/"
                  className="rounded-xl shadow-lg shadow-[#7d7d7d]  object-center w-full border border-black overflow-hidden"
                />
                <div className="text-black text-center text-3xl font-bold leading-10 mt-8">
                  Medium length section heading goes here
                </div>
                <div className="text-black text-center text-base leading-6 mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-black text-center text-5xl font-bold leading-[57.6px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          FAQs
        </div>
        <div className="text-black text-center text-lg leading-7 mt-6 max-md:max-w-full">
          Find answers to commonly asked questions to help you make the most of
          our platform.
        </div>

        <div className="items-center flex max-w-full gap-3 py-5 max-md:flex-wrap rounded-full shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden mt-6 p-6">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            How do I sign up?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad63b5c32e64980fa0c23030c39b683ea86ebbc2078f66fab9e4d55a8f3cf6e?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="items-center flex max-w-full gap-3 py-5 max-md:flex-wrap rounded-full shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden mt-6 p-6">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            How does the interactive map work?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad63b5c32e64980fa0c23030c39b683ea86ebbc2078f66fab9e4d55a8f3cf6e?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="items-center flex max-w-full gap-3 py-5 max-md:flex-wrap rounded-full shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden mt-6 p-6">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            What happens after I volunteer?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad63b5c32e64980fa0c23030c39b683ea86ebbc2078f66fab9e4d55a8f3cf6e?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="items-center flex max-w-full gap-3 py-5 max-md:flex-wrap rounded-full shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden mt-6 p-6">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            How do I submit a help request?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad63b5c32e64980fa0c23030c39b683ea86ebbc2078f66fab9e4d55a8f3cf6e?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="items-center flex max-w-full gap-3 py-5 max-md:flex-wrap rounded-full shadow-lg shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden mt-6 p-6">
          <div className="text-black text-lg font-bold leading-7 grow my-auto max-md:max-w-full">
            What is the real-time counter on the homepage?
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad63b5c32e64980fa0c23030c39b683ea86ebbc2078f66fab9e4d55a8f3cf6e?"
            className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="text-black text-center text-3xl font-bold leading-10 mt-20 max-md:max-w-full max-md:mt-10">
          Still have questions?
        </div>
        <div className="text-black text-center text-lg leading-7 mb-4 mt-4 max-md:max-w-full">
          Contact us for further assistance.
        </div>
        <button className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 max-md:px-5 rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Home;
