"use client";

import { useGetSentDonationRequestQuery } from "@/redux/api/requestApi";

const SentBloodRequestPage = () => {
  const { data: sentRequest } = useGetSentDonationRequestQuery({});
  console.log(sentRequest);
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
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sentRequest?.map((item: any, index: number) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{`${item?.donor?.firstName} ${item?.donor?.lastName}`}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.donor?.email}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.donor?.phoneNumber}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.donor?.location}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.donor?.bloodType}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{item?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SentBloodRequestPage;
