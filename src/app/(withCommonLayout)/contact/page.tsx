import assets from "@/assets";
import { CiHome, CiPhone, CiMail, CiLocationOn } from "react-icons/ci";

const ContactPage = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-2 py-20">
        <div>
          <h4 className="text-gray-600 text-xl font-bold">Contact Us</h4>
          <div className="flex my-3">
            <div className="h-1 w-20 bg-[#EB2C29]"></div>
            <div className="h-1 w-full bg-gray-200"></div>
          </div>
          <div className="md:grid grid-cols-4 gap-5">
            <div className="flex items-center gap-5">
              <div className="bg-[#EB2C29] text-white w-10 h-10 flex justify-center items-center">
                <CiHome size={26} />
              </div>{" "}
              Dhaka, Bangladesh
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#EB2C29] text-white w-10 h-10 flex justify-center items-center">
                <CiPhone size={26} />
              </div>{" "}
              +8801752539925
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#EB2C29] text-white w-10 h-10 flex justify-center items-center">
                <CiMail size={26} />
              </div>{" "}
              lifedrops@gmail.com
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#EB2C29] text-white w-10 h-10 flex justify-center items-center">
                <CiLocationOn size={26} />
              </div>{" "}
              www.lifedorps.com
            </div>
          </div>
        </div>

        <div className="my-20 py-10 bg-[#F9FAFB]">
          <h4 className="text-gray-600 text-xl font-bold">Say hello to us</h4>
          <div className="flex my-3">
            <div className="h-1 w-20 bg-[#EB2C29]"></div>
            <div className="h-1 w-full bg-gray-200"></div>
          </div>

          <div className="w-full flex flex-col gap-5">
            <input
              type="text"
              name=""
              id=""
              placeholder="Name"
              className=" py-2 px-4 border  outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className=" py-2 px-4 border  outline-none"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Subject"
              className=" py-2 px-4 border  outline-none"
            />
            <textarea placeholder="Message" rows={5} className=" py-2 px-4 border  outline-none"></textarea>

            <button className="bg-[#EB2C29] py-2 px-4 text-white w-1/4">Send Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
