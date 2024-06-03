import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <div className="md:flex items-center py-10">
        <div className="md:w-1/2 flex flex-col gap-3">
          <h2 className="text-3xl font-bold text-[#EB2C29]">
            Donate Blood, Be a Hero
          </h2>
          <h3 className="text-2xl font-semibold">
            Empowering Communities, One Drop at a Time
          </h3>
          <p>
            Step into the realm of heroes by donating blood. Your selfless act
            has the power to transform lives and uplift communities. Join us in
            our mission to spread hope and healing far and wide.
          </p>
          <div className="flex items-center gap-2 pt-5">
            <Link
              href={"/register"}
              className="bg-[#EB2C29] border-2 border-[#EB2C29] py-2 px-3 text-white rounded-md"
            >
              Join as a Donor
            </Link>
            <Link
              href={"/donor-list"}
              className="border-2 border-[#EB2C29] py-2 px-3 text-[#EB2C29] rounded-md"
            >
              Search Donors
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end items-center">
          <Image
            src={assets.images.heroImg}
            height={500}
            width={500}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
