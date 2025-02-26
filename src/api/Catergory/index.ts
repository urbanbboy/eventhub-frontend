import { baseApi } from "../Base";
import { Catergory } from "./types";


export const categoryApi = baseApi.injectEndpoints({
  endpoints(build) {
    return {
      getCategoryList: build.query<Catergory[], void>({
        query: () => ({
          url: '/categories',
          method: "GET"   
        })
      })
    }
  } 
}) 

export const { useGetCategoryListQuery } = categoryApi;