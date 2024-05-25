"use client";

import {
  useGetReceivedDonationRequestQuery,
  useUpdateRequestStatusMutation,
} from "@/redux/api/requestApi";
import { useState } from "react";
import { toast } from "sonner";

interface Request {
  id: string;
  status: string;
  hospitalName: string;
  description: string;
  email: string;
  location: string;
  phoneNumber: string;
  reason: string;
  profilePhoto: string;
  bloodType: string;
  donationDate: string;
  firstName: string;
  lastName: string;
}

const ReceivedBloodRequestPage = () => {
  const { data: allRequest } = useGetReceivedDonationRequestQuery({});
  const [updateRequestStatus] = useUpdateRequestStatusMutation();
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStatusChange = async (requestId: string, status: string) => {
    try {
      await updateRequestStatus({ requestId, status }).unwrap();
      toast.success(`Status changed successfully`);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleDetailsClick = (request: Request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRequest(null);
  };

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
                Blood
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-sm divide-gray-200">
            {allRequest?.map((item: Request, index: number) => (
              <tr key={item?.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{`${item?.firstName} ${item?.lastName}`}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.bloodType}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{item?.status}</td>
                <td className="px-6 py-4 whitespace-no-wrap flex gap-2">
                  <button
                    className="bg-green-500 px-2 text-white rounded-md"
                    onClick={() => handleStatusChange(item?.id, "APPROVED")}
                  >
                    APP
                  </button>
                  <button
                    className="bg-red-500 px-2 text-white rounded-md"
                    onClick={() => handleStatusChange(item?.id, "REJECTED")}
                  >
                    REJ
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                <button
                    onClick={() => handleDetailsClick(item)}
                    className={`bg-teal-500 px-2 rounded-md text-white ${item.status !== 'APPROVED' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={item.status !== 'APPROVED'}
                  >
                    Contact
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && selectedRequest && (
        <Modal onClose={closeModal}>
          <div>
            <h2 className="text-lg font-bold mb-4">Request Details</h2>
            <p>
              <strong>Name:</strong> {`${selectedRequest.firstName} ${selectedRequest.lastName}`}
            </p>
            <p><strong>Email:</strong> {selectedRequest.email}</p>
            <p><strong>Phone:</strong> {selectedRequest.phoneNumber}</p>
            <p><strong>Location:</strong> {selectedRequest.location}</p>
            <p><strong>Blood Type:</strong> {selectedRequest.bloodType}</p>
            <p><strong>Status:</strong> {selectedRequest.status}</p>
            <p><strong>Hospital Name:</strong> {selectedRequest.hospitalName}</p>
            <p><strong>Date Of Donation:</strong> {selectedRequest.donationDate}</p>
          </div>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, onClose }: {children: any, onClose: any}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default ReceivedBloodRequestPage;