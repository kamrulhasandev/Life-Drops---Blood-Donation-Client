"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { registerUser } from "./../../services/actions/register";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.service";

type Inputs = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  location: string;
  bloodType: string;
  canDonateBlood: string;
};

const RegisterPage = () => {
  const router = useRouter();
  const [canDonateBlood, setCanDonateBlood] = useState("yes");
  const [bloodType, setBloodType] = useState("");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    const canDonate = canDonateBlood === "yes" ? true : false;

    if (data.password === data.confirmPassword) {
      const { confirmPassword, ...rest } = data;
      const registerData = {
        ...rest,
        password: data.password,
        bloodType,
        canDonateBlood: canDonate,
      };
      console.log(registerData);

      try {
        const res = await registerUser(registerData);
        if (res?.data?.id) {
          toast.success("Registration successfully.");
          const userInfo = await loginUser({
            emailOrUserName: data.email,
            password: password,
          });
          if (userInfo?.data?.accessToken) {
            storeUserInfo({ accessToken: userInfo?.data?.accessToken });
            router.push("/");
          }
        }
      } catch (error: any) {
        console.log(error);
      }
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-3">
            <div className="mb-4">
              <input
                {...register("userName", { required: true })}
                type="text"
                name="userName"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.userName && (
                <p className="text-red-500 text-sm">Username is required</p>
              )}
            </div>
            <div className="mb-4">
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required</p>
              )}
            </div>
          </div>
          <div className="md:flex gap-3">
            <div className="mb-4">
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">Password is required</p>
              )}
            </div>
            <div className="mb-4">
              <input
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) =>
                    value === password || "The passwords do not match",
                })}
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
          </div>
          <div className="md:flex gap-3">
            <div className="mb-4">
              <input
                {...register("firstName", { required: true })}
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">First Name is required</p>
              )}
            </div>
            <div className="mb-4">
              <input
                {...register("lastName", { required: true })}
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">Last Name is required</p>
              )}
            </div>
          </div>
          <div className="md:flex gap-3">
            <div className="mb-4">
              <input
                {...register("phoneNumber", { required: true })}
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">Phone Number is required</p>
              )}
            </div>
            <div className="mb-4">
              <input
                {...register("location", { required: true })}
                type="text"
                name="location"
                placeholder="Location"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.location && (
                <p className="text-red-500 text-sm">Location is required</p>
              )}
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
                <option value="A_POS">A+</option>

                <option value="A_NEG">A-</option>
                <option value="B_POS">B+</option>
                <option value="B_NEG">B-</option>
                <option value="AB_POS">AB+</option>
                <option value="AB_NEG">AB-</option>
                <option value="O_POS">O+</option>
                <option value="O_NEG">O-</option>
              </select>
              {errors.bloodType && (
                <p className="text-red-500 text-sm">Blood Type is required</p>
              )}
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
              {errors.canDonateBlood && (
                <p className="text-red-500 text-sm">
                  Can Donate Blood is required
                </p>
              )}
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
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
