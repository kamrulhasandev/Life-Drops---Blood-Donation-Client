"use client";

import { getUserInfo, removeUser } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import assets from "@/assets";
import Image from "next/image";
import { useState } from "react";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };

  return (
    <div className="relative">
      {userInfo.id ? (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center space-x-2"
          >
            <Image
              src={assets.images.noProfile}
              height={30}
              width={30}
              alt="profile"
              className="rounded-full"
            />
          </button>
          {isOpen && (
            <div className="absolute md:right-0 md:mt-2 w-full md:w-48 bg-transparent md:bg-white rounded-md md:shadow-lg py-1 md:py-0 md:mx-0 mx-auto">
            {/* Add your profile link here */}
            <Link href="/dashboard" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Profile
            </Link>
            <button
              onClick={handleLogOut}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
          
          )}
        </div>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </div>
  );
};

export default AuthButton;
