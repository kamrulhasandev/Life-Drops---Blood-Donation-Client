import assets from "@/assets";
import Image from "next/image";
import Link from "next/link";

const DonorCard = ({ donor, key}: { donor: any, key: string }) => {
  return (
    <div
      key={key}
      className="bg-white rounded-xl shadow-md p-3"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
    >
      <div className="flex items-center gap-3">
        <div>
          {donor.profilePhoto ? (
            <div className="md:flex-shrink-0">
              <Image
                src={donor.profilePhoto}
                alt={donor.name}
                width={100}
                height={100}
              />
            </div>
          ) : (
            <div className="md:flex-shrink-0">
              <Image
                src={assets.images.noProfile}
                alt="No Profile"
                width={100}
                height={100}
              />
            </div>
          )}
        </div>
        <div className="text-sm">
          <div className="flex gap-5">
            <p className="w-20">Name:</p>
            <p className="font-semibold">{`${donor.firstName} ${donor.lastName}`}</p>
          </div>
          <div className="flex gap-5">
            <p className="w-20">Location:</p>
            <p className="font-semibold">{donor.location} </p>
          </div>
          <div className="flex gap-5">
            <p className="w-20">Blood Type:</p>
            <p className="font-semibold">{donor.bloodType} </p>
          </div>
          <div className="flex gap-5">
            <p className="w-20">Availability:</p>
            <p className="font-semibold">
              {`${donor.canDonateBlood === true ? "Yes" : "No"}`}{" "}
            </p>
          </div>
          <div className="mt-5 ">
            <Link
              className="bg-[#EB2C29] px-3 py-1 rounded-md text-white"
              href={`donor-list/${donor.id}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorCard;
