"use client";
import { useGetMyProfileQuery } from "@/redux/api/donorApi";
import { useAddRequestMutation } from "@/redux/api/requestApi";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type TParams = {
  params: {
    donorId: string;
  };
};

type TRequest = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  location: string;
  bloodType: string;
  donationDate: string;
  hospitalName: string;
  description?: string;
  reason: string;
};

const BloodRequestPage = ({ params }: TParams) => {
  const [error, setError] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [addRequest] = useAddRequestMutation();
  const { data: myProfile } = useGetMyProfileQuery({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<TRequest>();

  useEffect(() => {
    if (myProfile) {
      setValue("firstName", myProfile.firstName);
      setValue("lastName", myProfile.lastName);
      setValue("email", myProfile.email);
      setValue("phoneNumber", myProfile.phoneNumber);
      setValue("location", myProfile.location);
    }
  }, [myProfile, setValue]);

  const handleRequest: SubmitHandler<TRequest> = async (data) => {
    const requestData = {
      ...data,
      donorId: params.donorId,
      bloodType,
    };
    try {
      const res: any = await addRequest(requestData);
      console.log({ res });
      if (res?.data?.id) {
        toast.success("Request sent successfully.");
        setError("");
        reset();
      } else if (res?.error) {
        setError(res.error.message);
      }
    } catch (error: any) {
      console.log(error);
      setError(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-2 py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Request to donate blood</h2>
        <p>Need blood? Place a request to get blood donors.</p>
      </div>

      <div className="min-h-[70vh] w-2xl flex justify-center items-center">
        {error && (
          <span className="text-center text-red-500 text-sm">{error}</span>
        )}
        <form className="w-full" onSubmit={handleSubmit(handleRequest)}>
          <div className="md:flex gap-3">
            <div className="mb-4 w-full">
              <label className="block mb-1">
                First Name<span className="text-red-500">*</span>
              </label>
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
            <div className="mb-4 w-full">
              <label className="block mb-1">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                {...register("lastName", { required: true })}
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm"> Last Name is required</p>
              )}
            </div>
          </div>
          <div className="md:flex gap-3">
            <div className="mb-4 w-full">
              <label className="block mb-1">
                Email<span className="text-red-500">*</span>
              </label>
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
            <div className="mb-4 w-full">
              <label className="block mb-1">
                Phone Number<span className="text-red-500">*</span>
              </label>
              <input
                {...register("phoneNumber", { required: true })}
                type="string"
                name="phoneNumber"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {" "}
                  Phone Number is required
                </p>
              )}
            </div>
          </div>
          <div className="md:flex gap-3">
            <div className="mb-4 w-full">
              <label className="block mb-1">
                Location<span className="text-red-500">*</span>
              </label>
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
            <div className="mb-4 w-full">
              <label className="block mb-1">
                Donation Date<span className="text-red-500">*</span>
              </label>
              <input
                {...register("donationDate", { required: true })}
                type="date"
                name="donationDate"
                placeholder="Donation Date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.donationDate && (
                <p className="text-red-500 text-sm">
                  {" "}
                  Donation Date is required
                </p>
              )}
            </div>
          </div>

          <div className="md:flex gap-3">
            <div className="mb-4 w-full">
              <label className="block mb-1">
                Blood Type<span className="text-red-500">*</span>
              </label>
              <select
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
                name="bloodType"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                required
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
            </div>
            <div className="mb-4 w-full">
              <label className="block mb-1">
                Hospital Name<span className="text-red-500">*</span>
              </label>
              <input
                {...register("hospitalName", { required: true })}
                type="text"
                name="hospitalName"
                placeholder="Hospital Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.hospitalName && (
                <p className="text-red-500 text-sm">
                  Hospital Name is required
                </p>
              )}
            </div>
          </div>
          <div className="md:flex gap-3">
            <div className="mb-4 w-full">
              <label className="block mb-1">Description</label>
              <textarea
                {...register("description")}
                name="description"
                placeholder="Description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="mb-4 w-full">
              <label className="block mb-1">
                Reason<span className="text-red-500">*</span>
              </label>
              <textarea
                {...register("reason", { required: true })}
                name="reason"
                placeholder="Reason"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              {errors.reason && (
                <p className="text-red-500 text-sm">Reason is required</p>
              )}
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#EB2C29] text-white py-2 px-4 rounded hover:bg-[#d4201d] transition duration-300"
            >
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodRequestPage;
