import { baseApi } from "../Base";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from "./types";

const authApi = baseApi.injectEndpoints({
  endpoints(build) {
    return {
      login: build.mutation<LoginResponse, LoginRequest>({
        query: (data) => ({
          url: "/login",
          method: "POST",
          body: data,
        }),
      }),
      register: build.mutation<RegisterResponse, RegisterRequest>({
        query: (data) => ({
          url: "/register",
          method: "POST",
          body: data,
        }),
      }),
      logout: build.mutation<{mesage: string}, { refreshToken: string | null }>({
        query: (data) => ({
          url: '/logout',
          method: "POST",
          body: data
        })
      })
    };
  },
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
} = authApi;
