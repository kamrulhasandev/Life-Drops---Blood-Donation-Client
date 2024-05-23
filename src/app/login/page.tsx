"use client";

import LDForm from "@/components/Forms/LDForm";
import LDInput from "@/components/Forms/LDInput";
import { loginUser } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (data: FieldValues) => {
    try {
      const res = await loginUser(data);
      if (res?.data?.accessToken) {
        toast.success("Login Successfully.");
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/dashboard");
      } else {
        setError(res?.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div>
          <div>
            <h5 className="text-2xl font-bold text-center py-5">
              Life<span className="text-[#EB2C29]">Drops.</span>
            </h5>
          </div>
        </div>
        <div>
          <p className="text-center text-gray-600">Login to your account</p>
          {error && (
            <p className="text-center text-sm text-[#EB2C29] mb-2">{error}</p>
          )}
        </div>
        <LDForm onSubmit={handleLogin}>
          <div className="mb-4">
            <LDInput
              name="emailOrUserName"
              type="text"
              placeholder="Email or Username"
              required={true}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <LDInput
              name="password"
              type="password"
              placeholder="Password"
              required={true}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-[#EB2C29] hover:bg-[#ec524f] w-full text-white px-4 py-2 rounded-md focus:outline-none"
            >
              Sign In
            </button>
            <p className=" text-sm text-center py-2">
              Dont have an account{" "}
              <Link className="text-[#EB2C29]" href={"/register"}>
                Register
              </Link>{" "}
              here
            </p>
          </div>
        </LDForm>
      </div>
    </div>
  );
};

export default LoginPage;
