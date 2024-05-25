"use client";

import { useGetMyProfileQuery } from "@/redux/api/donorApi";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";

const ProfilePage = () => {
  const { data: myProfile } = useGetMyProfileQuery({});
  console.log(myProfile);

  if (!myProfile) {
    return <p>Loading...</p>;
  }

  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    location,
    bloodType,
    status,
    profilePhoto,
    userName,
  } = myProfile;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 md:w-3/4 lg:w-1/2 mx-auto relative">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 relative">
            <Image
              src={profilePhoto ? profilePhoto : assets.images.noProfile}
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold">
            {firstName} {lastName}
          </h2>
          <p className="text-gray-600">@{userName}</p>
          <p
            className={`mt-2 px-4 py-1 rounded-full text-white ${
              status === "ACTIVE" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status}
          </p>
          <Link
            href="/dashboard/profile/edit-profile"
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <FaEdit size={24} />
          </Link>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phoneNumber}
          </p>
          <p>
            <strong>Location:</strong> {location}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Blood Information</h3>
          <p>
            <strong>Blood Type:</strong> {bloodType}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
