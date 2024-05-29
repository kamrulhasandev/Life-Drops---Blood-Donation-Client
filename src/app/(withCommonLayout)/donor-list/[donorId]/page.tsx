"use client";
import { useGetDonorQuery } from "@/redux/api/donorApi";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

type TParams = {
  params: {
    donorId: string;
  };
};

const DonorDetails = ({ params }: TParams) => {
  const { data } = useGetDonorQuery(params.donorId);

  return (
    <div className="max-w-screen-xl mx-auto px-2 py-10">
      <h1 className="text-3xl font-bold mb-5">Donor Details</h1>
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            {/* Profile Photo */}
            {data.profilePhoto ? (
              <div className="md:flex-shrink-0 mb-5">
                <Image
                  src={data.profilePhoto}
                  alt={data.firstName}
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
            ) : (
              <div className="md:flex-shrink-0 mb-5">
                <Image
                  src={assets.images.noProfile}
                  alt="No Profile"
                  width={300}
                  height={300}
                  className="rounded-full"
                />
              </div>
            )}
          </div>
          <div>
            <p>
              <span className="font-bold">First Name:</span> {data.firstName}
            </p>
            <p>
              <span className="font-bold">Last Name:</span> {data.lastName}
            </p>
            <p>
              <span className="font-bold">Email:</span> {data.email}
            </p>
            <p>
              <span className="font-bold">Location:</span> {data.location}
            </p>
            <p>
              <span className="font-bold">Phone Number:</span>{" "}
              {data.phoneNumber}
            </p>
            <p>
              <span className="font-bold">Blood Type:</span> {data.bloodType}
            </p>
            <p>
              <span className="font-bold">Can Donate Blood:</span>{" "}
              {data.canDonateBlood ? "Yes" : "No"}
            </p>
            <p>
              <span className="font-bold">Date of Birth:</span>{" "}
              {data.dateOfBirth || "N/A"}
            </p>
            <p>
              <span className="font-bold">Last Donation Date:</span>{" "}
              {data.lastDonationDate || "N/A"}
            </p>
            <p>
              <span className="font-bold">User Name:</span> {data.userName}
            </p>

            {/* Blood Donation Request Link */}
            <div className="mt-8">
              <Link
                className="bg-[#EC2C29] text-white py-2 px-4 rounded hover:bg-[#EC2C40]transition duration-300"
                href={`request/${data.id}`}
              >
                Request Blood Donation
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorDetails;
