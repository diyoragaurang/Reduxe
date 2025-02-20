import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dataSlice = createApi({
  reducerPath: "dataSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (page = 1) => {
        const limit = 5;
        const skip = (page - 1) * limit;
        return `/users?skip=${skip}&limit=${limit}`;
      },
    }),
  }),
});

export const { useGetUsersQuery } = dataSlice;
