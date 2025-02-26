import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://githu.com/api/v4/'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    credentials: "include",
  }),
  reducerPath: "baseApi",
  endpoints: () => ({}),
  tagTypes: ["User"],
});