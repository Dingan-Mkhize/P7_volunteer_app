import AboutImg1 from "../assets/volunteer_9.png";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <div
        className="w-full h-[500px] object-cover bg-no-repeat bg-cover flex items-center justify-center text-white text-6xl font-bold rounded-2xl leading-[67px] px-16"
        style={{ backgroundImage: `url(${AboutImg1})` }}
      >
        <div className="outline-text-white w-full text-center py-28">
          Connecting Communities Through Kindness
        </div>
      </div>

      <div className="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-black text-center text-4xl font-bold leading-10 max-w-screen-md mt-16 max-md:max-w-full max-md:mt-10">
          Building Connections Through Kindness: Our History, Vision, and Team
        </div>
        <div className="text-black text-center text-lg leading-7 max-w-screen-md mt-6 mb-10 max-md:max-w-full">
          At Kindred Connect, we believe in creating a trusted community where
          kindness thrives. Our platform connects individuals in need with
          compassionate volunteers, fostering a sense of togetherness and
          support.
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-black text-center text-base font-semibold leading-6 self-center whitespace-nowrap mt-16 max-md:mt-10">
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
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
                />
                <div className="self-stretch text-black text-center text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                  John Doe
                </div>
                <div className="self-stretch text-black text-center text-lg leading-7 whitespace-nowrap">
                  Founder
                </div>
                <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                  With a vision to create a kinder and more connected community
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
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
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
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
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
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
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
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
              <div className="items-center flex flex-col max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
                />
                <div className="self-stretch text-black text-center text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                  David Wilson
                </div>
                <div className="self-stretch text-black text-center text-lg leading-7 whitespace-nowrap">
                  Volunteer Coordinator
                </div>
                <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                  Matching volunteers with those in need and ensuring a smooth
                  process
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
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex flex-col max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
                />
                <div className="self-stretch text-black text-center text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                  We are hiring!
                </div>{" "}
                <div className="self-stretch text-black text-center text-lg leading-7">
                  Join our team and make a positive impact
                </div>{" "}
                <div className="self-stretch text-black text-center text-base leading-6 whitespace-nowrap mt-4">
                  Open positions
                </div>{" "}
                <div className="items-stretch flex w-[100px] max-w-full gap-3.5 mt-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b061bb2d172a13e5cb7d6245f56cbe0eb2a509b6f44a9ff6b5bba68256550a69?"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex grow flex-col max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
                />{" "}
                <div className="self-stretch text-black text-center text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                  Robert Lee
                </div>{" "}
                <div className="self-stretch text-black text-center text-lg leading-7 whitespace-nowrap">
                  Customer Support
                </div>{" "}
                <div className="self-stretch text-black text-center text-base leading-6 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>{" "}
                <div className="items-stretch flex w-[100px] max-w-full gap-3.5 mt-6">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/13a02d80b8bb97dfdba0b258be17959dd7ae5710974b47563f547fe30fd24d95?"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed46b9abb949e8a22ffc48b3d7a136e1ac7e46ec75a01a045e5cdf8f55d5534c?"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  />{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b061bb2d172a13e5cb7d6245f56cbe0eb2a509b6f44a9ff6b5bba68256550a69?"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center flex flex-col max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-20 overflow-hidden max-w-full"
                />{" "}
                <div className="self-stretch text-black text-center text-xl font-semibold leading-8 whitespace-nowrap mt-6">
                  We are hiring!
                </div>
                <div className="self-stretch text-black text-center text-lg leading-7 whitespace-nowrap">
                  Join our team and make a difference.
                </div>
                <div className="self-stretch text-black text-center text-base leading-6 whitespace-nowrap mt-4">
                  Open positions
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
        <div className="self-center text-black text-center text-3xl font-bold leading-10 mt-24 max-md:max-w-full max-md:mt-10">
          We’re hiring!
        </div>
        <div className="self-center text-black text-center text-lg leading-7 mt-4 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </div>
        <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border self-center mt-6 mb-10 px-14 py-3 border-solid border-black max-md:px-5">
          Button
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-black text-lg font-bold leading-7 whitespace-nowrap mt-8">
          Trusted by industry leaders for exceptional service
        </div>
        <div className="items-stretch self-stretch flex gap-2 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="justify-center items-center bg-zinc-100 flex grow basis-[0%] flex-col px-16 py-3.5 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ac2802d058330f7f0df54b5f5f626eeadf4b9a8ffd2fee6bb352dbcc36fb93f?"
              className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full"
            />
          </div>
          <div className="justify-center items-center bg-zinc-100 flex grow basis-[0%] flex-col px-16 py-3.5 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6f687761ec014747d724e883dd5d3e1ab2f5609d21d6140b56dfc0bc19de5c2?"
              className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full"
            />
          </div>
          <div className="justify-center items-center bg-zinc-100 flex grow basis-[0%] flex-col px-16 py-3.5 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7571a68fd42f9b0e27465d386f0fdfd6bb3bb969d73766b182c70fc6070ccfb3?"
              className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full"
            />
          </div>
        </div>
        <div className="items-stretch self-stretch flex gap-2 mt-2 mb-8 max-md:max-w-full max-md:flex-wrap">
          <div className="justify-center items-center bg-zinc-100 flex grow basis-[0%] flex-col px-16 py-3.5 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1422d0cb290e89e7b4ed8c10e4859e2e2627049fd7dc6d9cced2a500aec51a2d?"
              className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full"
            />
          </div>
          <div className="justify-center items-center bg-zinc-100 flex grow basis-[0%] flex-col px-16 py-3.5 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e705ee56a158fb65d612a4bb7ee4ae3dd211a130b502fd8c3656c51d0fb7c7d4?"
              className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full"
            />
          </div>
          <div className="justify-center items-center bg-zinc-100 flex grow basis-[0%] flex-col px-16 py-3.5 max-md:max-w-full max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4876e7268e0d8693f82d9bcf057ba32e864fa688a13b7fbd98af12fa915bdb0f?"
              className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e381cccf2b3384c9778dc350ca8edd07b3bbe38b5639aefd7859826e0b51cdc?"
          className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full mt-16 max-md:mt-10"
        />
        <div className="text-black text-center text-2xl font-bold leading-9 max-w-screen-md mt-8 max-md:max-w-full">
          Kindred Connect has been a game-changer for me. It has allowed me to
          connect with people in my community and make a real difference in
          their lives.
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full mt-8 rounded-[50%]"
        />
        <div className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap mt-4">
          John Doe
        </div>
        <div className="text-black text-center text-base leading-6 whitespace-nowrap mb-10">
          Community Volunteer
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="items-stretch flex w-full justify-between gap-5 mt-16 mb-10 max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:mt-10">
          <div className="items-stretch flex flex-col max-md:max-w-full">
            <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
              Discover Inspiring Success Stories
            </div>
            <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
              Join our community and make a difference today!
            </div>
          </div>
          <div className="items-stretch self-center flex gap-4 my-auto">
            <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
              Read More
            </div>
            <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
