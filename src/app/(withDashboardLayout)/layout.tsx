"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import assets from "@/assets";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      const { role } = getUserInfo();
      setUserRole(role);
    }
  }, [router]);

  if (userRole === null) {
    return null;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-gray-800 text-white w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            className="lg:hidden text-gray-500 focus:outline-none focus:text-gray-700"
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isSidebarOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
        <nav className="mt-5">
          <ul>
            <li onClick={toggleSidebar}>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-700">
                Home
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Profile
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                href="/dashboard"
                className={`block px-4 py-2 hover:bg-gray-700 ${
                  pathname === "/dashboard" ? "bg-gray-700" : ""
                }`}
              >
                Dashboard
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                href="/dashboard/received-blood-request"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Received Request
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                href="/dashboard/sent-blood-request"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Send Request
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                href="/dashboard/change-password"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Change Password
              </Link>
            </li>
            {userRole === "super_admin" && (
              <li onClick={toggleSidebar}>
                <Link
                  href={`/dashboard/${userRole}/manage-users`}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Manage Users
                </Link>
              </li>
            )}
            {userRole === "admin" && (
              <li onClick={toggleSidebar}>
                <Link
                  href={`/dashboard/${userRole}/manage-blog`}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                 Mange Blogs
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header for all screens */}
        <header className="flex items-center justify-between p-4 bg-white shadow-lg">
          <button
            className="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden"
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="h-1 w-1">
            
          </div>
          <div>
          <Image
              src={assets.images.noProfile}
              height={30}
              width={30}
              alt="profile"
              className="rounded-full"
            />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
