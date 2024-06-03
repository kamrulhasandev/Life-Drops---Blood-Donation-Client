"use client";

import { useGetAllDonorsQuery } from "@/redux/api/donorApi";
import { useGetAllDonationRequestQuery } from "@/redux/api/requestApi";
import { FaUsers } from "react-icons/fa6";
import { FaCheckCircle, FaClipboardList,FaBlog  } from "react-icons/fa";

const DashboardHomePage = () => {
  const { data: allDonors } = useGetAllDonorsQuery({});
  const { data: useGetAllDonation }: any = useGetAllDonationRequestQuery({});
  const approvedDonations = useGetAllDonation?.filter(
    (donation: any) => donation.status === "APPROVED"
  ).length;

  const recentDonations = useGetAllDonation
    ? useGetAllDonation.slice(0, 5)
    : [];

  return (
    <div className="bg-[#F1F5F9] min-h-screen p-5">
      <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-5 mb-10">
        <div className="bg-white p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className=" w-10 h-10 bg-slate-200 flex justify-center items-center rounded-md mb-5">
            <FaUsers size={26} />
          </div>
          <h3 className="text-xl font-bold">
            {allDonors ? allDonors.length : "0"}
          </h3>
          <p>Total Users</p>
        </div>
        <div className="bg-white p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className=" w-10 h-10 bg-slate-200 flex justify-center items-center rounded-md mb-5">
            <FaClipboardList size={26} />
          </div>
          <h3 className="text-xl font-bold">
            {useGetAllDonation ? useGetAllDonation.length : "0"}
          </h3>
          <p>Blood Requests</p>
        </div>
        <div className="bg-white p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className=" w-10 h-10 bg-slate-200 flex justify-center items-center rounded-md mb-5">
            <FaCheckCircle size={26} />
          </div>
          <h3 className="text-xl font-bold">
            {approvedDonations ? approvedDonations : "0"}
          </h3>
          <p>Successful Donations</p>
        </div>
        <div className="bg-white p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className=" w-10 h-10 bg-slate-200 flex justify-center items-center rounded-md mb-5">
            <FaBlog size={26} />
          </div>
          <h3 className="text-xl font-bold">5</h3>
          <p>Total Blogs</p>
        </div>
      </div>

      <div className="bg-white p-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <h3 className="text-xl font-bold mb-5">Recent Blood Requests</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  No
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Requester Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Donor Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Group
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Donation Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentDonations.map((donation: any, index: number) => (
                <tr key={donation.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {`${donation.requester.firstName} ${donation.requester.lastName}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {`${donation.donor.firstName} ${donation.donor.lastName}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {donation.bloodType}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {donation.donationDate}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      donation.status === "PENDING"
                        ? "text-yellow-500"
                        : donation.status === "APPROVED"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {donation.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
