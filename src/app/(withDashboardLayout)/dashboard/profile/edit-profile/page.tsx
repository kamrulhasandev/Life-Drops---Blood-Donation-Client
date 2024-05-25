"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useGetMyProfileQuery,
  useUpdateProfileMutation,
} from "@/redux/api/donorApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const EditProfile = () => {
  const { data: myProfile, isLoading: profileLoading } = useGetMyProfileQuery(
    {}
  );
  const [updateProfile, { isLoading: updateLoading, isError, isSuccess }] =
    useUpdateProfileMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      location: "",
      userName: "",
    },
  });

  useEffect(() => {
    if (myProfile) {
      reset({
        firstName: myProfile.firstName || "",
        lastName: myProfile.lastName || "",
        email: myProfile.email || "",
        phoneNumber: myProfile.phoneNumber || "",
        location: myProfile.location || "",
        userName: myProfile.userName || "",
      });
    }
  }, [myProfile, reset]);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Profile Updated Successfully");
      router.push("/dashboard/profile");
    }
  }, [isSuccess, router]);

  const onSubmit = async (data: any) => {
    try {
      const updatedData = Object.keys(data).reduce((acc: any, key) => {
        if (data[key] !== myProfile[key]) {
          acc[key] = data[key];
        }
        return acc;
      }, {});

      if (Object.keys(updatedData).length > 0) {
        await updateProfile(updatedData);
      }
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  if (profileLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Edit Profile</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6"
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="firstName" className="mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            className="py-2 px-4 border border-gray-300 rounded-md"
          />
          {errors.firstName && (
            <p className="text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="lastName" className="mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            className="py-2 px-4 border border-gray-300 rounded-md"
          />
          {errors.lastName && (
            <p className="text-red-500">{errors.lastName.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="py-2 px-4 border border-gray-300 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phoneNumber" className="mb-2">
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className="py-2 px-4 border border-gray-300 rounded-md"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="location" className="mb-2">
            Location
          </label>
          <input
            type="text"
            id="location"
            {...register("location", { required: "Location is required" })}
            className="py-2 px-4 border border-gray-300 rounded-md"
          />
          {errors.location && (
            <p className="text-red-500">{errors.location.message}</p>
          )}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="userName" className="mb-2">
            Username
          </label>
          <input
            type="text"
            id="userName"
            {...register("userName", { required: "Username is required" })}
            className="py-2 px-4 border border-gray-300 rounded-md"
          />
          {errors.userName && (
            <p className="text-red-500">{errors.userName.message}</p>
          )}
        </div>

        {isError && (
          <p className="text-red-500">
            Failed to update profile. Please try again.
          </p>
        )}
        {isSuccess && (
          <p className="text-green-500">Profile updated successfully.</p>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#EB2C29] text-center text-white font-bold py-2 px-4 rounded-md"
          >
            {updateLoading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
