"use client";
import { useGetDonorQuery } from "@/redux/api/donorApi";
import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { isLoggedIn } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type TParams = {
  params: {
    donorId: string;
  };
};

const DonorDetails = ({ params }: TParams) => {
  const { data } = useGetDonorQuery(params.donorId);
  console.log(data);
  const router = useRouter();

  const handleBloodRequest = () => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      router.push(`request/${data.id}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 md:w-3/4 lg:w-1/2 mx-auto relative">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 relative">
            <Image
              src={data?.profilePhoto || assets.images.noProfile}
              alt="Profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold">
            {data?.firstName} {data?.lastName}
          </h2>
          <p className="text-gray-600">@{data?.userName}</p>
          <p
            className={`mt-2 px-4 py-1 rounded-full text-white ${
              data?.status === "ACTIVE" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {data?.status}
          </p>
          
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
          <p>
            <strong>Email:</strong> {data?.email}
          </p>
          <p>
            <strong>Phone:</strong> {data?.phoneNumber}
          </p>
          <p>
            <strong>Location:</strong> {data?.location}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Blood Information</h3>
          <p>
            <strong>Blood Type:</strong> {data?.bloodType}
          </p>
          <div className="mt-6 flex justify-center items-center">
            <button
              className="bg-[#EC2C29] text-white py-2 px-4 rounded hover:bg-[#EC2C40] transition duration-300"
              onClick={handleBloodRequest}
            >
              Request For Blood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDetails;
