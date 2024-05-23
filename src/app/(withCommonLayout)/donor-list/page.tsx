import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

const DonorListPage = async () => {
  const res = await fetch("http://localhost:5000/api/v1/all-donors", {
    next: {
      revalidate: 30,
    },
  });
  const { data: donors } = await res.json();

  console.log(donors);

  return (
    <div className="max-w-screen-xl mx-auto px-2 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {donors.map((donor: any) => (
          <div
            key={donor.id}
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
                  <p className="font-semibold">{`${donor.firstName} ${donor.firstName}`}</p>
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
                    href={`donor/${donor.id}`}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorListPage;
