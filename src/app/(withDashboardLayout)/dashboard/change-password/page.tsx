"use client";

import { useState } from "react";
import { useChangePasswordMutation } from "@/redux/api/authApi";
import { toast } from "sonner";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const [changePassword, { isLoading, isError, isSuccess }] =
    useChangePasswordMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match");
      return;
    }
    if (!isValidPassword(newPassword)) {
      setError(
        "Password must be 8 characters and uppercase, lowercase, number, special character mixed."
      );
      return;
    }

    const data = { oldPassword: currentPassword, newPassword };

    changePassword(data);
    if (!isError) {
      toast.error("Current Password is Wrong.");
    } else {
      toast.success("Password Change Successfully");
    }
  };

  const isValidPassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}$/;
    return regex.test(password);
  };

  return (
    <div>
      <div className="max-w-md mx-auto py-10 md:py-20">
        <h3 className="text-center font-bold text-3xl my-10">
          Change your Password
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="py-2 rounded-md my-3 outline-red-500 px-2 border border-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="py-2 rounded-md my-3 outline-red-500 px-2 border border-black"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="py-2 rounded-md my-3 outline-red-500 px-2 border border-black"
              required
            />
          </div>

          {error && <p className="text-sm text-center text-red-500">{error}</p>}

          <button
            type="submit"
            className="bg-[#EB2C29] hover:bg-[#ec524f] w-full text-white px-4 py-2 rounded-md focus:outline-none mt-3"
          >
            {isLoading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
