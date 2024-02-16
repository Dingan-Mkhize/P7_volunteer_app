import { Link } from "react-router-dom";
import SignUpImg1 from "../assets/volunteer_3.png";
import SignUpImg2 from "../assets/volunteer_13.webp";
import Logo from "../assets/LogoImg.png";

const SignUpPage = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen mt-3 p-9">
      {/* Hero section with background image and call-to-action text */}
      <div
        className="w-full h-[500px] object-cover bg-no-repeat bg-cover flex items-center justify-center text-white text-6xl font-bold rounded-full leading-[67px] px-16 shadow-2xl shadow-grey mb-6"
        style={{ backgroundImage: `url(${SignUpImg1})` }}
      >
        <div className="outline-text-white w-full text-center py-28">
          Join Our Community
          <div className="text-white text-xl leading-7 mt-6 mb-16 max-md:max-w-full max-md:mb-10">
            Create an account to start making a difference in your community.
          </div>
        </div>
      </div>

      {/* Main content section for joining the community */}
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5 mt-6">
        <div className="max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {/* Left side content: Community description and logo unified in one section */}
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full rounded-2xl border border-black shadow-xl shadow-[#7d7d7d] p-6">
                {/* Logo placement at the top of the unified section */}
                <div className="flex justify-center">
                  <img
                    loading="lazy"
                    src={Logo}
                    alt="Hands United Logo"
                    className="object-contain object-center w-[230px] h-[230px] overflow-hidden border border-black rounded-full shadow-xl shadow-[#7d7d7d] mb-4"
                  />
                </div>

                {/* Community description follows the logo */}
                <div className="text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] text-center mt-6">
                  Join Hands United Community Today
                </div>
                <div className="text-black text-lg leading-7 max-md:max-w-full mt-3 text-center">
                  Start making a difference in your community by signing up for
                  Hands United. Join our trusted community of volunteers and
                  help those in need. Together, we can create a more
                  compassionate world.
                </div>
              </div>
            </div>

            {/* Form section for user details */}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0 p-6 rounded-2xl border border-black shadow-xl shadow-[#7d7d7d]">
              <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="items-stretch self-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-base leading-6 whitespace-nowrap">
                      First name
                    </div>
                    <div className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch border bg-white justify-center mt-2 p-3 border-solid border-black">
                      Placeholder
                    </div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-base leading-6 whitespace-nowrap">
                      Last name
                    </div>
                    <div className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch border bg-white justify-center mt-2 p-3 border-solid border-black">
                      Placeholder
                    </div>
                  </div>
                </div>
                <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-base leading-6 whitespace-nowrap">
                      Email
                    </div>
                    <div className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch border bg-white justify-center mt-2 p-3 border-solid border-black">
                      Placeholder
                    </div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-base leading-6 whitespace-nowrap">
                      Phone number
                    </div>
                    <div className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch border bg-white justify-center mt-2 p-3 border-solid border-black">
                      Placeholder
                    </div>
                  </div>
                </div>

                <div className="self-stretch mt-4 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-6"></div>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-6"></div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-black text-base leading-6 mt-10 max-md:max-w-full">
                  Message
                </div>
                <div className="text-neutral-600 text-base leading-6 items-stretch self-stretch border bg-white mt-2 pt-3 pb-28 px-3 border-solid border-black max-md:max-w-full max-md:pb-10">
                  Type your message...
                </div>
                <button className="text-white text-base whitespace-nowrap justify-center items-center bg-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 mt-6 rounded-full">
                  <Link to="" type="submit" className="block text-white">
                    Submit
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0 rounded-2xl border border-black shadow-xl shadow-[#7d7d7d]">
              <img
                loading="lazy"
                src={SignUpImg2}
                alt="John Doe"
                className="aspect-[0.96] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10 p-6 rounded-2xl border border-black shadow-xl shadow-[#7d7d7d] ">
                <div className="items-stretch flex w-[115px] max-w-full gap-1.5 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e40ae96bb1a56b3f31d8f11e823193f3eaa3cab2ac0be50256fc611185aa2c14?"
                    className="aspect-square object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e40ae96bb1a56b3f31d8f11e823193f3eaa3cab2ac0be50256fc611185aa2c14?"
                    className="aspect-square object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e40ae96bb1a56b3f31d8f11e823193f3eaa3cab2ac0be50256fc611185aa2c14?"
                    className="aspect-square object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e40ae96bb1a56b3f31d8f11e823193f3eaa3cab2ac0be50256fc611185aa2c14?"
                    className="aspect-square object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e40ae96bb1a56b3f31d8f11e823193f3eaa3cab2ac0be50256fc611185aa2c14?"
                    className="aspect-square object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                </div>
                <div className="text-black text-2xl font-bold leading-9 mt-8 max-md:max-w-full">
                  Joining Hands United has been a life-changing experience. The
                  platform has allowed me to connect with others in my community
                  and make a real difference.
                </div>
                <div className="items-stretch flex gap-5 mt-8 self-start">
                  <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto">
                    <div className="text-black text-base font-semibold leading-6">
                      John Doe
                    </div>
                    <div className="text-black text-base leading-6 whitespace-nowrap">
                      Volunteer, ABC Organization
                    </div>
                  </div>
                  <div className="bg-black w-px shrink-0 h-[61px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full max-md:mr-1 max-md:mt-10 rounded-2xl border border-black shadow-xl shadow-[#7d7d7d] p-9">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex flex-col ">
                <div className="text-black text-5xl font-bold leading-[57.6px] mt-4 max-md:max-w-full max-md:text-4xl">
                  Get in Touch
                </div>
                <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  Have a question? Contact us today!
                </div>
                <div className="items-stretch flex gap-4 mt-10 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/31e7fc51be5f01b68226b79ae72a162eaf28d096d705f5f80ff43e4168a80cdd?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-black text-base leading-6 grow shrink basis-auto">
                    hello@relume.io
                  </div>
                </div>
                <div className="items-stretch flex gap-4 mt-4 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f622b09b5c79ffce982ee3adab9f99a2c3fbcab34d4063d18bacc3e82ab1701a?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-black text-base leading-6 grow shrink basis-auto">
                    +1 (555) 000-0000
                  </div>
                </div>
                <div className="items-stretch flex gap-4 mt-4 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b8ff161a94ced2235dff2fea0403b96e72f37444c61148102d9e8eb918c4ea5?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-black text-base leading-6 grow whitespace-nowrap">
                    123 Sample St, Sydney NSW 2000 AU
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-black text-lg leading-7 max-md:max-w-full">
                  Start making a difference in your community by signing up for
                  Hands United. Join our trusted community of volunteers and
                  help those in need. Together, we can create a more
                  compassionate world.
                </div>
                <div className="items-stretch flex gap-4 mt-6 self-start">
                  <button className="text-white text-base whitespace-nowrap justify-center items-center bg-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 mt-6 rounded-full">
                    <Link to="/contact" type="submit" className="block text-white">
                      Contact
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
