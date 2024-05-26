"use client";
import { Spinner } from "@/components/UI/Spinner";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { role } = getUserInfo();
    setUserRole(role);
  }, []);

  useEffect(() => {
    if (userRole !== null && userRole !== "admin") {
      router.push("/");
    }
  }, [userRole, router]);

  // Show a loading spinner until userRole is set
  if (userRole === null) {
    return <Spinner />;
  }

  // Only render children if the user is a admin
  return userRole === "admin" ? <>{children}</> : null;
};

export default AdminLayout;
