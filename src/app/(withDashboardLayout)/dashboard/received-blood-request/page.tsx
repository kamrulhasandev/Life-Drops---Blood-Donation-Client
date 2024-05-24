"use client";

import { useState } from "react";
import {
  useGetReceivedDonationRequestQuery,
  useUpdateRequestStatusMutation,
} from "@/redux/api/requestApi";
import { FiEdit } from "react-icons/fi";
import StatusModal from "@/components/UI/StatusModal";
import { TbDashboard } from "react-icons/tb";

const ReceivedBloodRequestPage = () => {
  const { data: allRequest } = useGetReceivedDonationRequestQuery({});
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedStatus, setSelectedStatus] = useState("");
  // const [selectedRequestId, setSelectedRequestId] = useState(null);
  // const [updateRequestStatus] = useUpdateRequestStatusMutation();

  // const handleEditClick = (item: any) => {
  //   setSelectedRequestId(item.id);
  //   setSelectedStatus(item.status);
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedRequestId(null);
  //   setSelectedStatus("");
  // };

  // const handleSaveStatus = async () => {
  //   try {
  //     await updateRequestStatus({
  //       requestId: selectedRequestId,
  //       status: selectedStatus,
  //     }).unwrap();
  //     handleCloseModal();
  //   } catch (error) {
  //     console.error("Failed to update status: ", error);
  //   }
  //   console.log(selectedRequestId, selectedStatus);
  // };

  // if(isLoading){
  //   return <div>Data Not Found</div>
  // }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table-auto min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Blood
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-sm divide-gray-200">
            {allRequest?.map((item: any, index: any) => (
              <tr key={item?.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{`${item?.requester?.firstName} ${item?.requester?.lastName}`}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.requester?.email}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.requester?.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.requester?.location}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.requester?.bloodType}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{item?.status}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <FiEdit className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <StatusModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveStatus}
        status={selectedStatus}
        setStatus={setSelectedStatus}
      /> */}
    </div>
  );
};

export default ReceivedBloodRequestPage;
