import { FaPeopleGroup } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { ImMakeGroup } from "react-icons/im";
const NetworkSection = () => {
  return (
    <div className="bg-[#EB2C29] my-20 py-20">
      <div className="max-w-screen-xl mx-auto px-3 text-white">
        <div className="md:flex justify-around items-center ">
          <div className="flex flex-col gap-3 justify-center items-center">
            <FaPeopleGroup size={50} />
            <p className="font-bold text-xl">15 Donors</p>
          </div>
          <div  className="flex flex-col gap-3 justify-center items-center">
            <FaLocationDot size={50} />
            <p className="font-bold text-xl">All Bangladesh</p>
          </div>
          <div  className="flex flex-col gap-3 justify-center items-center">
            <ImMakeGroup size={50} />
            <p className="font-bold text-xl">8 Blood Groups</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkSection;
