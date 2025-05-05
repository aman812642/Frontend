import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile", { state: formData });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F3F4F6]">
      <div className="w-[30vw] min-h-[20vw] bg-white shadow-lg px-5 py-4">
        <h1 className="text-center font-semibold mt-2 text-2xl tracking-tight">
          Signin to your PopX account
        </h1>
        <p className="mt-2 text-sm font-semibold text-[#4B5563]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat,
          quod?
        </p>

        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="mt-5">
            <label className="text-blue-500 text-sm font-semibold">
              Email Address
            </label>
            <input
              className="w-full outline-none border-1 mt-1 border-sky-100 rounded h-11 px-4 placeholder:text-md placeholder:font-semibold"
              placeholder="Enter Your Email"
              type="text"
              required
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="mt-5">
            <label className="text-blue-500 text-sm font-semibold">
              Password
            </label>
            <input
              className="w-full outline-none border-1 mt-1 border-sky-100 rounded h-11 px-4 placeholder:text-md placeholder:font-semibold"
              placeholder="Enter Password"
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-[#9CA3AF] text-black rounded h-11 w-full flex items-center justify-center transform transition-transform duration-200 hover:scale-105 font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
