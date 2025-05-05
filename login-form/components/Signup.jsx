import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Signup() {

    const [formData , setFormData] = useState({
        FullName : "",
        number : "",
        email : "",
        password : "",
        company : ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const navigate = useNavigate();

    const handleSubmmit = (e) => {
        e.preventDefault()
        navigate('/profile' , {state : formData})
    }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#F3F4F6] font-sans">
      <div className="w-[29vw] h-[90%] bg-white shadow-lg rounded flex flex-col px-6">
        <h1 className="text-2xl mt-4 font-bold">Create your PopX account</h1>
        <form action="" onSubmit={(e) => handleSubmmit(e)}>
          <div className="mt-5">
            <label className="text-blue-500 text-sm font-semibold">
              Full Name *
            </label>
            <input
              className="w-full outline-none border-1 mt-1 border-sky-100 rounded h-11 px-4 placeholder:text-md placeholder:font-semibold"
              placeholder="Mary Doe"
              type="text"
              required
              name="FullName"
              value={formData.FullName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mt-5">
            <label className="text-blue-500 text-sm font-semibold">
              Phone Number *
            </label>
            <input
              className="w-full outline-none border-1 mt-1 border-sky-100 rounded h-11 px-4 placeholder:text-md placeholder:font-semibold"
              placeholder="983-123-4567"
              type="text"
              required
              name="number"
              value={formData.number}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mt-4">
            <label className="text-blue-500 text-sm font-semibold">
              Email address *
            </label>
            <input
              className="w-full outline-none border-1 mt-1 border-sky-100 rounded h-11 px-4 placeholder:text-md placeholder:font-semibold"
              placeholder="Marydoe@email.com"
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mt-4">
            <label className="text-blue-500 text-sm font-semibold">
              Password *
            </label>
            <input
              className="w-full outline-none border-1 mt-1 border-sky-100 rounded h-11 px-4 placeholder:text-md placeholder:font-semibold"
              placeholder="Enter Your Password"
              type="password"
              required
              name="password"
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="mt-4">
            <label className="text-blue-500 text-sm font-semibold">
              Company name *
            </label>
            <input
              className="w-full outline-none border-1 mt-1 border-sky-100 rounded h-11 px-4 placeholder:text-md placeholder:font-semibold"
              placeholder="Company Inc."
              type="text"
              required
              name="company"
              value={formData.company}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className="mt-4">
            <label className="text-blue-500 text-sm font-semibold block mb-2">
              Are you an Agency?
            </label>
            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-1">
                <input type="radio" name="agency" value="yes" />
                Yes
              </label>
              <label className="flex items-center gap-1">
                <input type="radio" name="agency" value="no" />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 bg-blue-600 text-white rounded h-11 w-full flex items-center justify-center transform transition-transform duration-200 hover:scale-105 font-semibold"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
