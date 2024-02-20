import Logo from "../assets/LogoImg.png";

const CreateRequest = () => {
  return (
    <div className="flex flex-col items-stretch mt-3 p-9 border shadow-3xl rounded-md">
      <div className="flex flex-col items-center text-center text-black bg-white max-md:px-5 max-md:max-w-full mb-6 pt-6 border border-black shadow-lg shadow-[#7d7d7d] rounded-2xl">
        <div className="flex justify-center">
          <img
            loading="lazy"
            src={Logo}
            alt="Hands United Logo"
            className="object-contain object-center w-[130px] h-[130px] overflow-hidden border border-black rounded-full shadow-lg shadow-[#7d7d7d]"
          />
        </div>
        <div className="mt-6 text-6xl font-bold leading-[67.2px] max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Hands United
        </div>
        <div className="mt-6 mb-10 text-lg leading-7 max-md:max-w-full">
          A helping hand, to unite community.
        </div>
      </div>{" "}
      <div className="flex justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full border border-black shadow-lg shadow-[#7d7d7d] rounded-2xl">
        <div className="flex flex-col mt-6 mb-10 max-w-full w-[768px] max-md:mt-10 p-12 border shadow-lg shadow-[#7d7d7d] rounded-2xl">
          <div className="self-center text-base font-semibold leading-6 text-center text-black whitespace-nowrap">
            Hands United
          </div>{" "}
          <div className="mt-4 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Create Your Request
          </div>{" "}
          <div className="mt-6 text-lg leading-7 text-center text-black max-md:max-w-full">
            Reach out to the community. We are here to help!
          </div>
          <div className="flex gap-5 justify-between mt-12 text-base leading-6 text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col flex-1">
              <div>Title of your request (required):</div>
              <div className="shrink-0 mt-2 h-12 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl" />
            </div>
            <div className="flex flex-col flex-1">
              <div>Location:</div>
              <div className="shrink-0 mt-2 h-12 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl" />
            </div>
          </div>
          <div className="flex gap-5 justify-between mt-6 text-base leading-6 text-black whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1">
              <div>Date:</div>
              <div className="shrink-0 mt-2 h-12 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl" />
            </div>
            <div className="flex flex-col flex-1">
              <div>Time:</div>
              <div className="shrink-0 mt-2 h-12 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl" />
            </div>
          </div>
          <div className="mt-6 text-base leading-6 text-black max-md:max-w-full">
            Choose your task type (One time task or Material need):
          </div>
          <div className="flex gap-4 justify-between p-3 mt-2 text-base leading-6 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl text-stone-500 max-md:flex-wrap max-md:max-w-full">
            <div className="grow max-md:max-w-full">
              One-time tasks (i.e., to help carry a piece of heavy furniture) or
              for a material need (i.e., a homeless person who needs a blanket
              for winter). Select one...
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/87950a9fde00863eb7ee89ab9986f71980c5f628dbd06e23029107555b815be7?"
              className="w-6 aspect-square"
            />
          </div>
          {/*  */}
          <div className="mt-10 text-base leading-6 text-black max-md:max-w-full">
            Give your request a full description:
          </div>
          <div className="px-3 pt-3 pb-28 mt-2 text-base leading-6 bg-white border border-black shadow-md shadow-[#7d7d7d] rounded-3xl text-stone-500 max-md:pb-10 max-md:max-w-full">
            Type your description...
          </div>
          <div className="flex gap-2 self-center pb-4 mt-6 text-sm leading-5 text-black whitespace-nowrap">
            <div className="self-start bg-white border border-solid border-[color:var(--Border-primary,#000)] h-[18px] w-[18px]" />
            <div className="grow">I agree to the Terms</div>
          </div>
          <div className="justify-center self-center px-6 py-3 mt-6 text-base leading-6 text-white whitespace-nowrap bg-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full max-md:px-5">
            Submit
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col justify-center px-16 py-12 w-full bg-white leading-[150%] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-20 py-12 mt-16 mb-10 border border-solid border-[color:var(--Border-primary,#000)] max-md:px-5 max-md:mt-10 max-md:mr-1 max-md:max-w-full">
          <div className="mt-7 text-5xl font-bold text-center text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
            Get in touch with us
          </div>
          <div className="mt-6 text-lg text-center text-black max-md:max-w-full">
            Have any questions or need assistance? We are here to help!
          </div>{" "}
          <div className="flex gap-4 pt-4 mt-6 mb-7 text-base whitespace-nowrap">
            <div className="grow justify-center px-6 py-3 text-white bg-black border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
              Contact
            </div>{" "}
            <div className="grow justify-center px-6 py-3 text-black border border-solid border-[color:var(--Color-Brand-black,#000)] max-md:px-5">
              Connect
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CreateRequest;
