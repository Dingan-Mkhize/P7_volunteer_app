import { useState } from "react";
import LogInImg1 from "../assets/volunteer_7.png";

const LogIn = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder for API endpoint
    const apiEndpoint = "https://your-rails-backend.com/api/login";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Network response was not ok.");

      const data = await response.json();
      console.log(data); // Process login response
      // Redirect or update UI accordingly
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-3 p-9 border shadow-3xl rounded-md">
      <div
        className="w-full h-[500px] object-cover bg-no-repeat bg-cover flex items-center justify-center text-white text-6xl font-bold rounded-full leading-[67px] px-16 shadow-2xl shadow-grey mb-6"
        style={{
          backgroundImage: `url(${LogInImg1})`,
          backgroundBlendMode: "darken",
        }}
      >
        <div className="outline-text-white w-full text-center py-28">
          Welcome Back To Hands United
        </div>
      </div>

      <div className="flex justify-center items-center rounded-2xl border border-black shadow-2xl shadow-[#000] px-12 mt-9 mb-9 bg-white bg-opacity-90">
        <form
          className="flex flex-col mt-3 mb-3 space-y-6 p-6 rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="text-base leading-6 border p-3 rounded-3xl border-solid border-black bg-white"
            placeholder="Your first name"
            required
          />
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="text-base leading-6 border p-3 rounded-3xl border-solid border-black bg-white"
            placeholder="Your last name"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="text-base leading-6 border p-3 rounded-3xl border-solid border-black bg-white"
            placeholder="Your email address"
            required
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="text-base leading-6 border p-3 rounded-3xl border-solid border-black bg-white"
            placeholder="Your password"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-black px-6 py-3 rounded-full shadow-md hover:shadow-2xl hover:translate-y-[-2px] transition duration-300"
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
