import Link from "next/link";
import { CiHome, CiPhone, CiMail, CiLocationOn } from "react-icons/ci";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#EB2C29] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-2 md:grid grid-cols-4 gap-3">
        <div>
          <h5 className="text-3xl font-bold">LifeDrops.</h5>
          <h3 className="">Empowering Communities, One Drop at a Time</h3>
          <div className="flex items-center gap-3 mt-2">
            <Link href={"#"}>
              <AiFillFacebook size={26} />
            </Link>
            <Link href={"#"}>
              <AiFillInstagram size={26} />
            </Link>
            <Link href={"#"}>
              <AiFillTwitterSquare size={26} />
            </Link>
            <Link href={"#"}>
              <AiFillYoutube size={26} />
            </Link>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold mb-3">Useful Links</p>
          <div className="flex flex-col gap-1">
            <Link
              className={`border-b-2 border-transparent hover:border-b-2   hover:transition-all`}
              href={"/about"}
            >
              About Us
            </Link>
            <Link
              className={`border-b-2 border-transparent hover:border-b-2  hover:transition-all `}
              href={"/blogs"}
            >
              Blogs
            </Link>
            <Link
              className={`border-b-2 border-transparent hover:border-b-2  hover:transition-all `}
              href={"/contact"}
            >
              Contact Us
            </Link>
            <Link
              className={`border-b-2 border-transparent hover:border-b-2  hover:transition-all `}
              href={"/"}
            >
              FAQ
            </Link>
            <Link
              className={`border-b-2 border-transparent hover:border-b-2  hover:transition-all `}
              href={"/"}
            >
              Tarms & conditions
            </Link>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold mb-3">Contact us</p>
          <div className=" flex flex-col gap-2">
            <div className="flex items-center gap-5">
              <div className=" text-white w-8 h-8 flex justify-center items-center">
                <CiHome size={26} />
              </div>{" "}
              Dhaka, Bangladesh
            </div>
            <div className="flex items-center gap-5">
              <div className=" text-white w-8 h-8 flex justify-center items-center">
                <CiPhone size={26} />
              </div>{" "}
              +8801752539925
            </div>
            <div className="flex items-center gap-5">
              <div className=" text-white w-8 h-8 flex justify-center items-center">
                <CiMail size={26} />
              </div>{" "}
              lifedrops@gmail.com
            </div>
            <div className="flex items-center gap-5">
              <div className=" text-white w-8 h-8 flex justify-center items-center">
                <CiLocationOn size={26} />
              </div>{" "}
              www.lifedorps.com
            </div>
          </div>
        </div>
        <div>
          <p className="text-lg font-bold mb-3">Subscribe</p>
          <p>subscribe for latest updates</p>
          <input
            type="text"
            name=""
            id=""
            className="outline-none py-2 text-black px-1"
          />
          <button className=" border-white py-2 px-6 border rounded-md mt-5 hover:bg-white hover:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
