"use client";
import { useGetSentDonationRequestQuery } from "@/redux/api/requestApi";
import { useState } from "react";

interface Donor {
  firstName: string;
  lastName: string;
  bloodType: string;
  email: string;
  phoneNumber: string;
  location: string;
  profilePhoto: string;
}

interface Request {
  id: string;
  status: string;
  donor: Donor;
}

const SentBloodRequestPage = () => {
  const { data: allRequest } = useGetSentDonationRequestQuery({});
  console.log(allRequest);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-sm divide-gray-200">
            {allRequest?.map((item: Request, index: number) => (
              <tr key={item?.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{`${item?.donor?.firstName} ${item?.donor?.lastName}`}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.donor?.bloodType}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <span
                    className={`px-2 rounded-md ${
                      item?.status === "PENDING"
                        ? "bg-yellow-500"
                        : item?.status === "REJECTED"
                        ? "bg-red-500"
                        : item?.status === "APPROVED"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {item?.status}
                  </span>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    onClick={() => handleDetailsClick(item)}
                    className={`bg-teal-500 px-2 rounded-md text-white ${
                      item.status !== "APPROVED"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={item.status !== "APPROVED"}
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
              <strong>Name:</strong>{" "}
              {`${selectedRequest.donor.firstName} ${selectedRequest.donor?.lastName}`}
            </p>
            <p>
              <strong>Email:</strong> {selectedRequest.donor?.email}
            </p>
            <p>
              <strong>Phone:</strong> {selectedRequest.donor?.phoneNumber}
            </p>
            <p>
              <strong>Location:</strong> {selectedRequest.donor?.location}
            </p>
            <p>
              <strong>Blood Type:</strong> {selectedRequest.donor?.bloodType}
            </p>
            <p>
              <strong>Status:</strong> {selectedRequest.status}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, onClose }: { children: any; onClose: any }) => {
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

export default SentBloodRequestPage;
