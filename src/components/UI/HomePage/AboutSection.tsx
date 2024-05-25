/* eslint-disable react/no-unescaped-entities */
import assets from "@/assets";
import Image from "next/image";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const AboutSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2 py-20 md:flex gap-20">
      <div className="md:w-1/2">
        <Image
          src={assets.images.donationImg}
          height={500}
          width={700}
          alt="donation"
        />
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0">
        <div className="space-y-5">
          <p className="text-sm text-[#EB2C29] font-semibold">HELP THE PEOPLE IN NEED</p>
          <h3 className="text-4xl font-bold">Welcome to Blood <br /> Donors Organization</h3>
          <p>
            At Blood Donors Organization, we're dedicated to making a difference
            in people's lives by providing vital blood donation services. Our
            commitment to excellence and compassion drives us to serve our
            community in the best possible way
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-5">
          <div className="flex items-center gap-3">
            <MdOutlineKeyboardDoubleArrowRight className="text-[#EB2C29]" />{" "}
            Good Service
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineKeyboardDoubleArrowRight className="text-[#EB2C29]" />{" "}
            Help People
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineKeyboardDoubleArrowRight className="text-[#EB2C29]" />{" "}
            Huge Impact
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineKeyboardDoubleArrowRight className="text-[#EB2C29]" />
            24/7 Service
          </div>
          <div className="flex items-center gap-3">
            <MdOutlineKeyboardDoubleArrowRight className="text-[#EB2C29]" />{" "}
            Blood Bank
          </div>
        </div>

        <div>
        <button className="bg-[#EB2C29] mt-2 border-2 border-[#EB2C29] py-2 px-5 text-white rounded-sm">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
