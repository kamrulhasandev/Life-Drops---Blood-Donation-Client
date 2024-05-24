import { tagTypes } from "../tagTypes";
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
      
    }),
    getSentDonationRequest: build.query({
      query: () => ({
        url: `/sent-donation-request`,
        method: "GET",
      }),
      
    }),
    getReceivedDonationRequest: build.query({
      query: () => ({
        url: `/received-donation-request`,
        method: "GET",
      }),
    }),
    updateRequestStatus: build.mutation({
      query: ({ requestId, status }) => {
        console.log("Request ID:", requestId);
        console.log("Status:", status);
    
        return {
          url: `/donation-request/${requestId}`,
          method: "PUT",
          data: status,
        };
      },
    }),
    
  }),
});

export const {
  useAddRequestMutation,
  useGetSentDonationRequestQuery,
  useGetReceivedDonationRequestQuery,
  useUpdateRequestStatusMutation,
} = requestApi;
