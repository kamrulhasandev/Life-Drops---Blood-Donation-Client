"use client";

import Link from "next/link";
import { useState } from "react";

const RegisterPage = () => {
  const [canDonateBlood, setCanDonateBlood] = useState("yes");
  const [bloodType, setBloodType] = useState("");
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md md:overflow-y-auto">
        <div>
          <div>
            <h5 className="text-2xl font-bold text-center py-5">
              Life<span className="text-[#EB2C29]">Drops.</span>
            </h5>
          </div>
        </div>
        <div>
          <p className="text-center text-gray-600 mb-4">Create an account</p>
        </div>
        <div className="md:flex gap-3">
          <div className="mb-4">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="mb-4">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="md:flex gap-3">
          <div className="mb-4 md:w-[50%]">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
            >
              <option value="">Select Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="mb-4 md:w-[50%]">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              value={canDonateBlood}
              onChange={(e) => setCanDonateBlood(e.target.value)}
            >
              <option value="yes">Can Donate Blood - Yes</option>
              <option value="no">Can Donate Blood - No</option>
            </select>
          </div>
        </div>

        <div className="">
          <button
            type="submit"
            className="bg-[#EB2C29] hover:bg-[#ec524f] w-full text-white px-4 py-2 rounded-md focus:outline-none"
          >
            Sign Up
          </button>
          <p className=" text-sm text-center py-2">
            Already have an account{" "}
            <Link className="text-[#EB2C29]" href={"/login"}>
              Login
            </Link>{" "}
            here
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
