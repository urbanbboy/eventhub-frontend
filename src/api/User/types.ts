import { Role } from "@/consts/role";

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  middleName: string;
  phone: string;
  role: Role;
  image: string;
}

