import { Link } from "react-router-dom";
import AboutImg1 from "../assets/volunteer_8.png";
import teamImg1 from "../assets/teamPic1.jpeg";
import teamImg2 from "../assets/teamPic2.jpeg";
import teamImg3 from "../assets/teamPic3.jpeg";
import teamImg4 from "../assets/teamPic4.jpeg";
import testImg1 from "../assets/FtestPic1.jpeg";

const About = () => {
  return (
    <div className="flex flex-col items-stretch mt-3 p-9">
      {/* Section with background image and title */}
      <div
        className="w-full h-[500px] object-cover bg-no-repeat bg-cover flex items-center justify-center text-white text-6xl font-bold rounded-full leading-[67px] px-16 shadow-2xl shadow-grey mb-6"
        style={{ backgroundImage: `url(${AboutImg1})` }}
      >
        <div className="outline-text-white w-full text-center py-28">
          Connecting Communities Through Kindness
        </div>
      </div>

      {/* Section with a description of the platform */}
      <div className="flex justify-center px-6 rounded-3xl shadow-2xl shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden mt-6">
        <div className="relative pb-9 px-9 pt-9">
          <div className="circle-bg"></div>

          <div className="text-black text-center text-4xl font-bold leading-10 max-w-screen-md mt-16 max-md:max-w-full max-md:mt-10">
            Building Connections Through Kindness: Our History, Vision, and Team
          </div>
          <div className="text-black text-center text-lg leading-7 max-w-screen-md mt-6 mb-10 max-md:max-w-full">
            At Hands United, we believe in creating a trusted community where
            kindness thrives. Our platform connects individuals in need with
            compassionate volunteers, fostering a sense of togetherness and
            support.
          </div>
        </div>
      </div>

      {/* Section with team members */}
      <div className="flex flex-col items-stretch">
        <div className="items-center bg-white flex w-full flex-col px-16 max-md:max-w-full max-md:px-5 mt-16">
          <div className="text-black text-center text-base font-semibold leading-6 self-center whitespace-nowrap max-md:mt-10">
            Empowering
          </div>
          <div className="self-center text-black text-center text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
            Meet Our Team
          </div>
          <div className="self-center text-black text-center text-lg leading-7 mt-6 max-md:max-w-full">
            Passionate individuals dedicated to making a difference
          </div>
          <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="pb-9 px-6 rounded-2xl shadow-2xl shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden">
                <div className="items-center flex grow flex-col max-md:mt-8">
                  <img
                    src={teamImg1}
                    className="aspect-[1.01] object-contain object-center w-full overflow-hidden "
                    alt="Profile"
                  />
                  <div className="self-stretch text-black text-center text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                    John Doe
                  </div>
                  <div className="self-stretch text-black text-center text-lg leading-7 whitespace-nowrap">
                    Founder
                  </div>
                  <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                    With a vision to create a kinder and more connected
                    community
                  </div>
                  <div className="items-stretch flex w-[100px] max-w-full gap-3.5 mt-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b061bb2d172a13e5cb7d6245f56cbe0eb2a509b6f44a9ff6b5bba68256550a69?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </div>
                </div>
              </div>
              <div className="pb-9 px-6 rounded-2xl shadow-2xl shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden">
                <div className="items-center flex grow flex-col max-md:mt-8">
                  <img
                    src={teamImg3}
                    className="aspect-[1.01] object-contain object-center w-full overflow-hidden"
                    alt="Profile"
                  />
                  <div className="self-stretch text-black text-center text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                    Jane Smith
                  </div>
                  <div className="self-stretch text-black text-center text-lg leading-7 whitespace-nowrap">
                    Community Manager
                  </div>
                  <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                    Bringing people together and fostering a sense of belonging
                  </div>
                  <div className="items-stretch flex w-[100px] max-w-full gap-3.5 mt-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b061bb2d172a13e5cb7d6245f56cbe0eb2a509b6f44a9ff6b5bba68256550a69?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </div>
                </div>
              </div>
              <div className="pb-9 px-6 rounded-2xl shadow-2xl shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden">
                <div className="items-center flex grow flex-col max-md:mt-8">
                  <img
                    src={teamImg4}
                    className="aspect-[1.01] object-contain object-center w-full overflow-hidden"
                    alt="Profile"
                  />
                  <div className="self-stretch text-black text-center text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                    Michael Johnson
                  </div>
                  <div className="self-stretch text-black text-center text-lg leading-7 whitespace-nowrap">
                    Technical Lead
                  </div>
                  <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                    Driving innovation and ensuring a seamless user experience
                  </div>
                  <div className="items-stretch flex w-[100px] max-w-full gap-3.5 mt-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b061bb2d172a13e5cb7d6245f56cbe0eb2a509b6f44a9ff6b5bba68256550a69?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </div>
                </div>
              </div>
              <div className="pb-9 px-6 rounded-2xl shadow-2xl shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden">
                <div className="items-center flex grow flex-col max-md:mt-8">
                  <img
                    src={teamImg2}
                    className="aspect-[1.01] object-contain object-center w-full overflow-hidden"
                    alt="Profile"
                  />
                  <div className="self-stretch text-black text-center text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                    Emily Davis
                  </div>
                  <div className="self-stretch text-black text-center text-lg leading-7 whitespace-nowrap">
                    Marketing Specialist
                  </div>
                  <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                    Spreading the word and inspiring others to join the movement
                  </div>
                  <div className="items-stretch flex w-[100px] max-w-full gap-3.5 mt-6">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b061bb2d172a13e5cb7d6245f56cbe0eb2a509b6f44a9ff6b5bba68256550a69?"
                      className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="text-black text-lg font-bold leading-7 whitespace-nowrap mt-8">
            Trusted by industry leaders for exceptional service
          </div>
          <div className="self-stretch flex gap-2 mt-12 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="justify-center items-center flex grow basis-[0%] flex-col px-16 py-7 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5fe4126f348c4e8f1df23a0ba6d7998b55c8e8c610fff9ad667264afa5569de?"
                className="aspect-[4.23] object-contain object-center w-[110px] fill-cyan-700 overflow-hidden max-w-full"
              />
            </div>
            <div className="justify-center items-center self-stretch flex grow basis-[0%] flex-col px-16 py-3.5 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e228609f571776101d95a0357b260c5aefb4596b8184cc02880ffbbc896b228?"
                className="aspect-[2] object-contain object-center w-[120px] overflow-hidden max-w-full"
              />
            </div>
            <div className="justify-center items-center self-stretch flex grow basis-[0%] flex-col px-16 py-9 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23ec5f49a9288e9fbe74eca63c28ca3dd70cf5ad124ca9115e9bfb22cc8adbe2?"
                className="aspect-[5.28] object-contain object-center w-[95px] overflow-hidden max-w-full"
              />
            </div>
          </div>
          <div className="items-stretch self-stretch flex gap-2 mt-2 mb-8 max-md:max-w-full max-md:flex-wrap">
            <div className="justify-center items-center flex grow basis-[0%] flex-col px-16 py-3.5 self-start max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3037206d495023d2c0790a90f722949abed769c368047298470e710ebb4c6d40?"
                className="aspect-[2.53] object-contain object-center w-[139px] overflow-hidden max-w-full"
              />
            </div>
            <div className="justify-center items-center flex grow basis-[0%] flex-col px-16 py-3.5 max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ac2802d058330f7f0df54b5f5f626eeadf4b9a8ffd2fee6bb352dbcc36fb93f?"
                className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full"
              />
            </div>
            <div className="justify-center items-center flex grow basis-[0%] flex-col px-16 py-3.5 self-start max-md:max-w-full max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dbc50718fdb5cffd94f0f26d3247cfe94d6b2ddd478f6fa2e3a4433b9bb4bf2?"
                className="aspect-[3.09] object-contain object-center w-[136px] overflow-hidden max-w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center items-center bg-white w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="flex justify-center pt-3 mb-6 px-6 rounded-2xl shadow-2xl shadow-[#7d7d7d] object-center w-full border border-black overflow-hidden">
            <div className="flex w-[768px] max-w-full flex-col mt-2 mb-10">
              <div className="text-black text-center text-2xl font-bold leading-8 self-center max-w-[253px]">
                Community Testimonial
              </div>
              <div className="self-stretch text-black text-center text-xl font-bold leading-9 mt-9 max-md:max-w-full max-md:mt-10">
                &ldquo;
                <i>
                  Hands United has been a game-changer for me. It has allowed me
                  to connect with people in my community and make a real
                  difference in their lives.
                </i>
                &ldquo;
              </div>
              <div className="items-center flex grow flex-col max-md:mt-8">
                <img
                  src={testImg1}
                  className="w-32 h-32 object-cover rounded-full mt-9 shadow-2xl shadow-[#7d7d7d] object-center border border-black"
                  alt="Profile"
                />
              </div>
              <div className="self-center text-black text-center text-base font-semibold leading-6 whitespace-nowrap mt-4">
                Jane Doe
              </div>
              <div className="self-center text-black text-center text-base leading-6 whitespace-nowrap">
                Community Volunteer
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action section */}
      <div className="bg-white flex flex-col justify-center items-center px-16 py-12 max-w-full max-md:px-5">
        <div className="flex flex-col items-center text-center gap-5 max-w-full">
          <div className="shadow-2xl shadow-[#7d7d7d] border border-black p-6 rounded-xl">
            <div className="text-black text-4xl font-bold leading-10">
              Be Part Of These Inspiring Success Stories
            </div>
            <div className="text-black text-lg leading-7 mt-6">
              Join our community and make a difference today!
            </div>
          
          <button className="text-white text-base whitespace-nowrap justify-center items-center bg-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 mt-6 rounded-full">
            <Link to="/signup" className="block text-white">
              Sign Up
            </Link>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
