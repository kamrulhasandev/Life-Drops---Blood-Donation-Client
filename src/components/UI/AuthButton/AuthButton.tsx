"use client";

import { getUserInfo, removeUser } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const userInfo = getUserInfo();
  const router = useRouter();
  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {userInfo.id ? (
        <button onClick={handleLogOut}>Logout</button>
      ) : (
        <Link href={"/login"}>Login</Link>
      )}
    </>
  );
};

export default AuthButton;
