import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import LogInImg1 from "../assets/volunteer_7.png";
import Logo from "../assets/LogoImg.png";

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
  
  const loginMutation = useMutation(
    (loginData) =>
      axios.post("http://localhost:4000/login", loginData, {
        withCredentials: true,
      }),
    {
      onSuccess: (response) => {
        console.log("Full server response:", response);

        // Access the token from the response
        const { token } = response.data;
        console.log("JWT token:", token);

        // Access and store the user ID from the response
        const userId = response.data.data.id;
        console.log("User ID:", userId);

        if (token) {
          localStorage.setItem("jwt", token);
          console.log("JWT token stored locally:", localStorage.getItem("jwt"));

          // Store user ID locally
          localStorage.setItem("userId", userId);
          console.log(
            "User ID stored locally:",
            localStorage.getItem("userId")
          );

          navigate("/dashboard"); // Navigate to dashboard upon success
        } else {
          console.error("Token or user ID not found in response:", response);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Trigger the mutation
    loginMutation.mutate({
      user: {
        email: formData.email,
        password: formData.password,
      },
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
        <div className="outline-text-white w-full text-center py-28">
          Welcome Back To Hands United
        </div>
      </div>
      <div className="flex flex-col justify-center items-center rounded-2xl border border-black shadow-lg shadow-[#000] px-12 mt-9 mb-9 bg-white bg-opacity-90">
        <div className="flex justify-center py-6 px-16">
          <img
            loading="lazy"
            src={Logo}
            alt="Hands United Logo"
            className="object-contain object-center w-[230px] h-[230px] overflow-hidden border border-black rounded-full shadow-lg shadow-[#7d7d7d] mb-4"
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
