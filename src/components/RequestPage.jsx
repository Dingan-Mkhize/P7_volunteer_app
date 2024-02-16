//import { Link } from "react-router-dom";
import ProfImg from "../assets/volunteer_11.png";
//import Logo from "../assets/LogoImg.png";

const RequestPage = () => {
  return (
    <div className="flex flex-col items-start mt-3 bg-white px-16 py-12 max-md:px-5 lg:flex-row">
      <div className="flex flex-col-2 flex-row-1 mt-6">
        <div className="flex-col justify-center">
        
        <div className="p-3 border shadow-xl rounded-2xl">
          <p className="text-xs self-stretch text-black text-center leading-10 whitespace-nowrap">Requester</p>
          <img
            loading="lazy"
            src={ProfImg}
            alt="Hands United Logo"
            className="flex justify-center object-contain object-center w-[100px] h-[100px] overflow-hidden border border-black rounded-full shadow-xl shadow-[#7d7d7d] m-3"
          />
          <div className="self-stretch text-black text-center font-semibold leading-10 whitespace-nowrap">
            Michaela Johnson
          </div>
          </div>

        </div>
        <div className="text-3xl font-bold text-black p-6">
          Join Our Community
          <div className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
            Create an account to start making a difference in your community.
          </div>
        </div>
      </div>
      
      <div className="self-stretch mt-6 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md: p-6 border shadow-xl rounded-2xl">
          <div className="border border-dashed border-gray-400 bg-gray-200 w-[300px] h-[300px] flex justify-center items-center  rounded-3xl lg:mb-12 shadow-xl shadow-[#7d7d7d]">
            <h2 className="text-lg font-semibold text-gray-700">
              Interactive Map Placeholder
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-start font-bold">Volunteer Request Details
            </div>
              <div className="self-stretch mt-8 leading-9 text-black max-md:max-w-full p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              
            </div>
          </div>
        </div>
      </div>


      <div className="flex gap-5 justify-between self-stretch mt-56 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col text-black max-md:max-w-full">
          <div className="text-4xl font-bold leading-10 max-md:max-w-full">
            Join Kindred Connect Community Today
          </div>
          <div className="mt-6 text-lg leading-7 max-md:max-w-full">
            Start making a difference by signing up and contributing now.
          </div>
        </div>
        <div className="flex gap-4 my-auto text-base leading-6 whitespace-nowrap">
          <div className="grow justify-center px-6 py-3 text-white bg-black border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
            Sign Up
          </div>
          <div className="grow justify-center px-6 py-3 text-black border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
            Learn More
          </div>
        </div>
      </div>
      <div className="mt-12 text-base font-semibold leading-6 text-black max-md:mt-10 max-md:max-w-full">
        Hands United
      </div>
      <div className="mt-4 text-3xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
        Volunteers
      </div>
      <div className="mt-3 text-lg leading-7 text-black max-md:max-w-full">
        (9) people have volunteered so far!
      </div>
      {/* Volunteer Profile Section */}
      <div className="self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full pb-3 px-6 rounded-2xl shadow-2xl shadow-[#7d7d7d] object-center border border-black overflow-hidden">
            <div className="flex flex-col mt-3 ">
              <img
                loading="lazy"
                src={ProfImg}
                className="w-20 h-20 rounded-full"
              />
              <div className="flex justify-center mt-6 font-semibold text-black whitespace-wrap">
                Michaela Johnson
              </div>
              <div className="flex justify-center text-black text-sm">
                Requester
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full pb-9 px-6 rounded-2xl shadow-2xl shadow-[#7d7d7d] object-center border border-black overflow-hidden">
            <div className="flex flex-col grow max-md:mt-10">
              <img
                loading="lazy"
                srcSet="..."
                className="w-20 h-20 rounded-full"
              />
              <div className="flex justify-center mt-6 text-xl font-semibold text-black whitespace-nowrap">
                Jane Smith
              </div>
              <div className="flex justify-center text-lg  text-black whitespace-nowrap">
                Community Manager
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 pb-9 px-6 rounded-2xl shadow-2xl shadow-[#7d7d7d] object-center border border-black overflow-hidden">
              <img loading="lazy" srcSet="..." className="w-20 aspect-square" />
              <div className="flex justify-center mt-6 text-xl font-semibold text-black whitespace-nowrap">
                Michael Johnson
              </div>
              <div className="flex justify-center text-lg  text-black whitespace-nowrap">
                Technical Lead
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  CTA */}
      <div className="mt-24 text-3xl font-bold leading-10 text-black max-md:mt-10 max-md:max-w-full">
        We are hiring!
      </div>{" "}
      <div className="mt-4 text-lg leading-7 text-black max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </div>{" "}
      <div className="justify-center px-6 py-3 mt-6 text-base leading-6 text-black whitespace-nowrap border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
        Open positions
      </div>
    </div>
  );
};

export default RequestPage;
