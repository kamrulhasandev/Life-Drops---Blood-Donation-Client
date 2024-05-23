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
  }),
});

export const { useGetDonorQuery } = donorApi;
