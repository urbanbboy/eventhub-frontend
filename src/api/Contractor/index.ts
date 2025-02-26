import { baseApi } from "../Base";
import { Contractor } from "./types";


export const categoryApi = baseApi.injectEndpoints({
  endpoints(build) {
    return {
      getContractorList: build.query<Contractor[], string>({
        query: (category) => ({
          url: `/contractors?category=${category}`,
          method: "GET"   
        })
      })
    }
  } 
}) 

export const { 
  useGetContractorListQuery
} = categoryApi;