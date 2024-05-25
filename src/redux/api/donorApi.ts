import { baseApi } from "./baseApi";

export const donorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get single Donor
    getDonor: build.query({
      query: (donorId: string | string[] | undefined) => ({
        url: `/all-donors/${donorId}`,
        method: "GET",
      }),
    }),
    getAllDonors: build.query({
      query: () => ({
        url: `/all-donors`,
        method: "GET",
      }),
    }),
    updateUserStatus: build.mutation({
      query: ({ id, status }) => {
        return {
          url: `/user-status/${id}`,
          method: "POST",
          data: { status },
        };
      },
    }),
    updateUserRole: build.mutation({
      query: ({ id, role }) => {
        return {
          url: `/user-role/${id}`,
          method: "POST",
          data: { role },
        };
      },
    }),
  }),
});

export const {
  useGetDonorQuery,
  useGetAllDonorsQuery,
  useUpdateUserStatusMutation,
  useUpdateUserRoleMutation,
} = donorApi;
