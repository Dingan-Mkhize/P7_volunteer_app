import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { useUser } from "../contexts/UserContext"; // Corrected import
import LogInImg1 from "../assets/volunteer_7.png";
import Logo from "../assets/LogoImg.png";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Correctly using useUser to access login function
  const { login } = useUser();

  const loginMutation = useMutation(
    (loginData) => axios.post(`${import.meta.env.VITE_API_URL}/login`, loginData),
    {
      onSuccess: (response) => {
        // Simplified to directly use the login function from the context
        if (response.data.token) {
          login(`Bearer ${response.data.token}`, response.data.user);
          navigate("/dashboard");
        } else {
          console.error("Token not found in response:", response);
        }
      },
      onError: (error) => {
        console.error("Login error:", error.response || error);
        alert("Invalid login credentials. Please try again.");
      },
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginMutation.mutate({
      user: formData,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-3 p-9 border shadow-3xl rounded-md">
      <div
        className="w-full h-[500px] object-cover bg-no-repeat bg-cover flex items-center justify-center text-white text-6xl font-bold rounded-full leading-[67px] px-16 shadow-md shadow-[#7d7d7d] mb-6"
        style={{
          backgroundImage: `url(${LogInImg1})`,
          backgroundBlendMode: "darken",
        }}
      >
        <div className="outline-text-white text-4xl sm:text-5xl md:text-6xl text-center py-28">
          Welcome Back To Hands United
        </div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-2xl border border-black shadow-lg shadow-[#7d7d7d] px-12 mt-9 mb-9 bg-white bg-opacity-90 w-full max-w-full sm:max-w-xs md:max-w-sm lg:max-w-lg">
        <div className="flex justify-center pt-9">
          <img
            loading="lazy"
            src={Logo}
            alt="Hands United Logo"
            className="w-24 sm:w-28 md:w-36 lg:w-40 object-contain object-center border border-black rounded-full shadow-lg shadow-[#7d7d7d]"
          />
        </div>
        <form
          className="flex flex-col mt-3 mb-3 space-y-6 p-6 rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="text-base leading-6 border p-3 rounded-3xl shadow-md shadow-[#7d7d7d] border-solid border-black bg-white"
            placeholder="Your email address"
            required
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="text-base leading-6 border p-3 rounded-3xl shadow-md shadow-[#7d7d7d] border-solid border-black bg-white"
            placeholder="Your password"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-black px-6 py-3 border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
