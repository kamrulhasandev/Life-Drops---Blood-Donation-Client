"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { usePathname, useRouter } from "next/navigation";

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
                href="/profile"
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
                Received Blood Request
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                href="/dashboard/sent-blood-request"
                className="block px-4 py-2 hover:bg-gray-700"
              >
                Send Blood Request
              </Link>
            </li>
            <li onClick={toggleSidebar}>
              <Link
                href="/change-password"
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
          <div className="flex items-center w-full max-w-sm">
            <input
              type="search"
              name="search"
              id="search"
              className="rounded-lg px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 w-full mr-2"
              placeholder="Search for..."
            />
            <svg
              className="h-6 w-6 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 3A3.5 3.5 0 0 1 13 6.5v7a3.5 3.5 0 0 1-7 0v-7zM5 13.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold">Admin</h1>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
