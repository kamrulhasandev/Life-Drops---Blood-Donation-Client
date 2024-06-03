import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

export const requestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    //get single Donor
    addRequest: build.mutation({
      query: (data) => ({
        url: `/donation-request`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.request],
    }),
    getAllDonationRequest: build.query({
      query: () => ({
        url: `/donation`,
        method: "GET",
      }),
      providesTags: [tagTypes.request],
    }),
    getSentDonationRequest: build.query({
      query: () => ({
        url: `/sent-donation-request`,
        method: "GET",
      }),
      providesTags: [tagTypes.request],
    }),
    getReceivedDonationRequest: build.query({
      query: () => ({
        url: `/received-donation-request`,
        method: "GET",
      }),
      providesTags: [tagTypes.request],
    }),
    updateRequestStatus: build.mutation({
      query: ({ requestId, status }) => {
        return {
          url: `/donation-request/${requestId}`,
          method: "PUT",
          data: { status },
        };
      },
      invalidatesTags: [tagTypes.request],
    }),
  }),
});

export const {
  useAddRequestMutation,
  useGetSentDonationRequestQuery,
  useGetReceivedDonationRequestQuery,
  useUpdateRequestStatusMutation,
  useGetAllDonationRequestQuery,
} = requestApi;
