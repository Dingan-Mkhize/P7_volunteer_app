import LogInImg1 from "../assets/volunteer_7.png";
import FooterBackground from "../assets/overlapping_circles.svg";


const LogIn = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen py-9">
      <div
        className="w-full h-[500px] object-contain bg-no-repeat bg-cover flex items-center justify-center text-white text-6xl font-bold rounded-2xl leading-[67px] px-16"
        style={{ backgroundImage: `url(${LogInImg1})` }}
      >
        <div className="outline-text-white w-full text-center py-28">
          Welcome Back To Hands United
        </div>
      </div>

      <div
        className="w-full flex justify-center items-center px-12 mt-16 mb-9"
        style={{
          backgroundImage: `url(${FooterBackground})`,
          backgroundSize: "1500px",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full max-w-md">
          <form className="flex flex-col mt-3 mb-3 space-y-6 p-6 rounded-3xl relative z-10">
            <label
              htmlFor="first-name"
              className="text-black text-base leading-6"
            >
              First name
            </label>
            <input
              id="first-name"
              type="text"
              className="text-base leading-6 border p-3 rounded-3xl border-solid border-black bg-white"
              placeholder="Your first name"
            />

            <label
              htmlFor="last-name"
              className="text-black text-base leading-6"
            >
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              className="text-base leading-6 border p-3 rounded-3xl border-solid border-black bg-white"
              placeholder="Your last name"
            />

            <label htmlFor="email" className="text-black text-base leading-6">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="text-base leading-6 border p-3 rounded-3xl border-solid border-black bg-white"
              placeholder="Your email address"
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white text-base leading-6 whitespace-nowrap border bg-black px-6 py-3 border-solid border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-2xl transition duration-300 rounded-full"
              >
                Contact
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="items-stretch bg-white self-stretch flex w-full flex-col pt-12 pb-3.5 px-16 max-md:max-w-full max-md:px-5">
        <div className="mt-12 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
                <div className="items-stretch flex w-[116px] max-w-full gap-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0f11694b082bcb0c609fe86f7af09a108a026755161c8f46a27424a8d9d1c0b?"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0f11694b082bcb0c609fe86f7af09a108a026755161c8f46a27424a8d9d1c0b?"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0f11694b082bcb0c609fe86f7af09a108a026755161c8f46a27424a8d9d1c0b?"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0f11694b082bcb0c609fe86f7af09a108a026755161c8f46a27424a8d9d1c0b?"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0f11694b082bcb0c609fe86f7af09a108a026755161c8f46a27424a8d9d1c0b?"
                    className="aspect-[1.11] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
                  />
                </div>
                <div className="self-stretch text-black text-2xl font-bold leading-9 mt-8 max-md:max-w-full">
                  Joining Hands United has been a life-changing experience. The
                  platform has allowed me to connect with others in my community
                  and make a real difference.
                </div>
                <div className="self-stretch mt-8 py-9 max-md:max-w-full max-md:pr-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[77%] max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex flex-col my-auto max-md:mt-10">
                        <div className="text-black text-base font-semibold leading-6">
                          John Doe
                        </div>
                        <div className="text-black text-base leading-6 whitespace-nowrap">
                          Volunteer, ABC Organization
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd66d97b93fa0b4203faee80ad70e779fa57907936daa67567d5920aede15f6?"
                        className="aspect-[1.18] object-contain object-center w-[67px] overflow-hidden shrink-0 max-w-full grow max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1307px] mt-32 mb-16 px-5 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="text-black text-center text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
              Join the Hands United Community Today
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
              <div className="text-black text-lg leading-7 max-md:max-w-full">
                Don’t have an account? Join Hand’s United and start making a
                difference in your community. Join our trusted community of
                volunteers and help those in need. Together, we can create a
                more compassionate world.
              </div>
              <div className="items-stretch flex gap-4 mt-6 pt-4 self-start">
                <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 rounded-3xl border-solid border-black max-md:px-5">
                  Sign Up
                </div>
                <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 rounded-3xl border-solid border-black max-md:px-5">
                  Learn More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
