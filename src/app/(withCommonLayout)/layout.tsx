import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-[#EB2C29] py-3 text-white">
        <Navbar />
      </div>
      {children}
      <Footer />
    </>
  );
};

export default CommonLayout;
