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
  }),
});

export const { useAddRequestMutation } = requestApi;
