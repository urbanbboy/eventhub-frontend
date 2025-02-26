import { Role } from "@/consts/role";
import { User } from "../User/types";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    name: string;
    phone: string;
    role: Role;
    password: string;
    getSMS: boolean;
    acceptTerms: boolean;
}

export interface RegisterResponseSuccess {
    user: User;
    access: "allow";
    accessToken: string;
    refreshToken: string;
    message?: string;
}

export interface RegisterResponseError {
    message: string;
    access: "block";
}

export type RegisterResponse = RegisterResponseSuccess | RegisterResponseError;

export interface LoginResponseSuccess {
    user: User;
    access: "allow";
    accessToken: string;
    refreshToken: string;
    message?: string;
}

export interface LoginResponseError {
    message: string;
    access: "block";
}

export type LoginResponse = LoginResponseSuccess | LoginResponseError;