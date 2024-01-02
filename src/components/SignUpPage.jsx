const SignUpPage = () => {
  return (
    <div className="items-stretch bg-white flex flex-col">
      <div className="bg-black bg-opacity-50 flex w-full flex-col pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
        <div className="text-white text-6xl font-bold leading-[67.2px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Join Our Community
        </div>
        <div className="text-white text-lg leading-7 mt-6 mb-16 max-md:max-w-full max-md:mb-10">
          Create an account to start making a difference in your community.
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col pb-2 max-md:max-w-full max-md:mt-10">
                <div className="text-black text-center text-base font-semibold leading-6 max-md:max-w-full">
                  Join
                </div>
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
                <div className="self-stretch text-black text-base leading-6 mt-6 max-md:max-w-full">
                  Choose a topic
                </div>
                <div className="items-stretch self-stretch border bg-white flex justify-between gap-4 mt-2 p-3 border-solid border-black max-md:max-w-full max-md:flex-wrap">
                  <div className="text-neutral-600 text-base leading-6 grow max-md:max-w-full">
                    Select one...
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b585ad9d40cea458a4aa3a4a7372351487045c2cf6e7c470e8258aaccec9be0?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                </div>
                <div className="text-black text-base leading-6 self-stretch mt-10 max-md:max-w-full">
                  Which best describes you?
                </div>
                <div className="self-stretch mt-4 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-6">
                        <div className="items-center flex justify-between gap-2 pr-11 max-md:pr-5">
                          <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col my-auto border-solid border-black" />
                          <div className="text-black text-base leading-6">
                            Checkbox
                          </div>
                        </div>
                        <div className="items-center flex justify-between gap-2 mt-3.5 pr-14 max-md:pr-5">
                          <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col my-auto border-solid border-black" />
                          <div className="text-black text-base leading-6">
                            Checkbox
                          </div>
                        </div>
                        <div className="items-center flex justify-between gap-2 mt-3.5 pr-11 max-md:pr-5">
                          <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col my-auto border-solid border-black" />
                          <div className="text-black text-base leading-6">
                            Checkbox
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-6">
                        <div className="items-center flex justify-between gap-2 pr-20 max-md:pr-5">
                          <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col my-auto border-solid border-black" />
                          <div className="text-black text-base leading-6">
                            Checkbox
                          </div>
                        </div>
                        <div className="items-center flex justify-between gap-2 mt-3.5 pr-16 max-md:pr-5">
                          <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col my-auto border-solid border-black" />
                          <div className="text-black text-base leading-6">
                            Checkbox
                          </div>
                        </div>
                        <div className="items-center flex justify-between gap-2 mt-3.5">
                          <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col my-auto border-solid border-black" />
                          <div className="text-black text-base leading-6 self-stretch grow shrink basis-auto">
                            Checkbox
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-black text-base leading-6 mt-10 max-md:max-w-full">
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
              <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
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
                  Joining Kindred Connect has been a life-changing experience.
                  The platform has allowed me to connect with others in my
                  community and make a real difference.
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
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b625575b86c278b2b2a5fade965c962f415ec2c32b102c4a0f46431459a254b?"
                    className="aspect-[2.48] object-contain object-center w-[139px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
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
              <div className="text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                Join Kindred Connect Community Today
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-black text-lg leading-7 max-md:max-w-full">
                  Start making a difference in your community by signing up for
                  Kindred Connect. Join our trusted community of volunteers and
                  help those in need. Together, we can create a more
                  compassionate world.
                </div>
                <div className="items-stretch flex gap-4 mt-6 pt-4 self-start">
                  <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
                    Sign Up
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
}

export default SignUpPage