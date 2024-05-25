"use client";

import {
  useGetAllDonorsQuery,
  useUpdateUserRoleMutation,
  useUpdateUserStatusMutation,
} from "@/redux/api/donorApi";
import { toast } from "sonner";

const ManageUsers = () => {
  const { data: allDonors } = useGetAllDonorsQuery({});

  const [updateUserStatus] = useUpdateUserStatusMutation();
  const [updateUserRole] = useUpdateUserRoleMutation();

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await updateUserStatus({ id, status }).unwrap();
      toast.success(`Status changed successfully`);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };
  const handleChangeRole = async (id: string, role: string) => {
    try {
      await updateUserRole({ id, role }).unwrap();
      toast.success(`Role changed successfully`);
    } catch (error) {
      console.error("Failed to update status:", error);
    }
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
                User Name
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
             
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-sm divide-gray-200">
            {allDonors?.map((item: any, index: number) => (
              <tr key={item?.id}>
                <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{`${item?.firstName} ${item?.lastName}`}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {item?.userName}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    onClick={() =>
                      handleStatusChange(
                        item?.id,
                        item?.status === "ACTIVE" ? "DEACTIVE" : "ACTIVE"
                      )
                    }
                    className={`px-2 rounded-md text-white ${
                      item?.status === "ACTIVE"
                        ? "bg-green-500"
                        : item?.status === "DEACTIVE"
                        ? "bg-red-500"
                        : "bg-gray-500"
                    }`}
                    title={
                      item?.status === "ACTIVE"
                        ? "Click to deactivate"
                        : item?.status === "DEACTIVE"
                        ? "Click to activate"
                        : ""
                    }
                  >
                    {item?.status}
                  </button>
                </td>

                <td className="px-6 py-4 whitespace-no-wrap">
                  <button
                    onClick={() =>
                      handleChangeRole(
                        item?.id,
                        item?.role === "USER" ? "ADMIN" : "USER"
                      )
                    }
                    className={`px-2 rounded-md text-white ${
                      item?.role === "USER"
                        ? "bg-gray-500"
                        : item?.role === "ADMIN"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                    title={
                      item?.role === "USER"
                        ? "Make it ADMIN"
                        : item?.role === "ADMIN"
                        ? "Make it USER"
                        : ""
                    }
                  >
                    {item?.role}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
