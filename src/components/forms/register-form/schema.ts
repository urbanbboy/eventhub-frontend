import { boolean, nativeEnum, object, string } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";
import { Role } from "@/consts/role";


export const RegisterSchema = object({
  email: string().email("Заполните поле!"),
  name: string().min(2, "Заполните поле!"),
  role: nativeEnum(Role, {
    required_error: "Пожалуйста, выберите роль"
  }),
  phone: string({
    required_error: "Заполните поле!"
  }).refine(isValidPhoneNumber, { message: "Неверный номер телефона" }),
  password: string().min(8, "Минимальное количество символов 8"),
  getSMS: boolean().default(true),
  acceptTerms: boolean().default(false),
})