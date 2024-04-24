import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { useUser } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import SignUpImg1 from "../assets/volunteer_3.png";
import SignUpImg2 from "../assets/volunteer_13.webp";
import Logo from "../assets/LogoImg.png";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { login } = useUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [governmentId, setGovernmentId] = useState(null);

  const signupMutation = useMutation((newUserData) => {
    return axios.post(`${import.meta.env.VITE_API_URL}/signup`, newUserData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  });

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the form data
    const formData = new FormData();
    formData.append("user[first_name]", firstName);
    formData.append("user[last_name]", lastName);
    formData.append("user[email]", email);
    formData.append("user[password]", password);
    formData.append("user[password_confirmation]", passwordConfirmation);

    if (governmentId) {
      formData.append("user[government_id]", governmentId, governmentId.name);
    }

    // Use the mutation to sign up the user
    signupMutation.mutate(formData, {
      onSuccess: (response) => {
        console.log("Signup response:", response);
        console.log("Full signup response:", response);

        const authorizationHeader = response.headers.authorization;
        console.log("Authorization header:", authorizationHeader);
        const token = authorizationHeader
          ? authorizationHeader.split(" ")[1]
          : null;

        const user = response.data.data; 

        console.log("JWT from signup:", token);
        console.log("User from signup:", user);

        if (token && user) {
          login(token, user); 
          navigate("/dashboard");
        } else {
          console.error("JWT or user data is missing from the signup response");
        }
      },
      onError: (error) => {
        console.error("Signup error:", error.response || error);
      },
    });
  };

  const handleFileChange = (event) => {
    setGovernmentId(event.target.files[0]);
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen mt-3 p-9 border shadow-3xl rounded-md">
      {/* Hero section with background image and call-to-action text */}
      <div
        className="w-full h-[500px] object-cover bg-no-repeat bg-cover flex items-center justify-center text-white text-6xl font-bold rounded-full leading-[67px] px-16 shadow-md shadow-[#7d7d7d] mb-6"
        style={{ backgroundImage: `url(${SignUpImg1})` }}
      >
        <div className="outline-text-white text-4xl sm:text-5xl md:text-6xl text-center py-28">
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
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0 mt-6">
              <div className="flex flex-col max-md:max-w-full rounded-2xl border border-black shadow-lg shadow-[#7d7d7d] p-6">
                {/* Logo placement at the top of the unified section */}
                <div className="flex justify-center">
                  <img
                    loading="lazy"
                    src={Logo}
                    alt="Hands United Logo"
                    className="w-36 h-33 object-contain object-center overflow-hidden border border-black rounded-full shadow-lg shadow-[#7d7d7d]"
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
            <div className="flex flex-col items-stretch md:w-6/12 mt-6 p-6 rounded-2xl border border-black shadow-lg shadow-[#7d7d7d]">
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="w-full"
              >
                {/* First Name */}
                <div className="mb-4">
                  <label
                    htmlFor="first-name"
                    className="block text-black text-base leading-6"
                  >
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full text-neutral-600 text-base leading-6 border bg-white mt-2 p-3 shadow-md shadow-[#7d7d7d] border-solid border-black rounded-3xl box-border"
                  />
                </div>

                {/* Last Name */}
                <div className="mb-4">
                  <label
                    htmlFor="last-name"
                    className="block text-black text-base leading-6"
                  >
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full text-neutral-600 text-base leading-6 border bg-white mt-2 p-3 shadow-md shadow-[#7d7d7d] border-solid border-black rounded-3xl box-border"
                  />
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-black text-base leading-6"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full text-neutral-600 text-base leading-6 border bg-white mt-2 p-3 shadow-md shadow-[#7d7d7d] border-solid border-black rounded-3xl box-border"
                  />
                </div>

                {/* Password */}
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-black text-base leading-6"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full text-neutral-600 text-base leading-6 border bg-white mt-2 p-3 shadow-md shadow-[#7d7d7d] border-solid border-black rounded-3xl box-border"
                  />
                </div>

                {/* Password Confirmation */}
                <div className="mb-4">
                  <label
                    htmlFor="password-confirmation"
                    className="block text-black text-base leading-6"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="password-confirmation"
                    type="password"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="block w-full text-neutral-600 text-base leading-6 border bg-white mt-2 p-3 shadow-md shadow-[#7d7d7d] border-solid border-black rounded-3xl box-border"
                  />
                </div>

                {/* Government-approved ID */}
                <div className="mb-6">
                  <label
                    htmlFor="government-id"
                    className="block text-black text-base leading-6"
                  >
                    Government-approved ID
                  </label>
                  <input
                    id="government-id"
                    type="file"
                    accept=".jpg, .png, .pdf"
                    onChange={handleFileChange}
                    className="block w-full text-neutral-600 text-base leading-6 border bg-white mt-2 p-3 shadow-md shadow-[#7d7d7d] border-dashed border-gray-400 rounded-xl box-border"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="text-white text-base whitespace-nowrap justify-center items-center bg-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 mt-6 rounded-full"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="max-md:max-w-full max-md:mr-1">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0 rounded-2xl border border-black shadow-lg shadow-[#7d7d7d]">
              <img
                loading="lazy"
                src={SignUpImg2}
                alt="John Doe"
                className="aspect-[0.96] object-cover object-center  w-full overflow-hidden grow max-md:max-w-full rounded-2xl"
              />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10 p-6 rounded-2xl border border-black shadow-lg shadow-[#7d7d7d] ">
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
        <div className="max-md:max-w-full max-md:mr-1 max-md:mt-10 rounded-2xl border border-black shadow-lg shadow-[#7d7d7d] p-9">
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
                    hands.united@email.com
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
                  <div className="text-black text-base leading-6 grow">
                    123 Sample St, London, UK
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
                  <button className="text-white text-base whitespace-nowrap justify-center items-center bg-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 mt-6 rounded-full">
                    <Link
                      to="/contact"
                      type="submit"
                      className="block text-white"
                    >
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
