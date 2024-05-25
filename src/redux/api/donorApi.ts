import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const donorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get single Donor
    getDonor: build.query({
      query: (donorId: string | string[] | undefined) => ({
        url: `/all-donors/${donorId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getAllDonors: build.query({
      query: () => ({
        url: `/all-donors`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    updateUserStatus: build.mutation({
      query: ({ id, status }) => {
        return {
          url: `/user-status/${id}`,
          method: "POST",
          data: { status },
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
    updateUserRole: build.mutation({
      query: ({ id, role }) => {
        return {
          url: `/user-role/${id}`,
          method: "POST",
          data: { role },
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useGetDonorQuery,
  useGetAllDonorsQuery,
  useUpdateUserStatusMutation,
  useUpdateUserRoleMutation,
} = donorApi;
