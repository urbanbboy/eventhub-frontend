import { boolean, object, string } from "zod";


export const SearchSchema = object({
  category: string({
    required_error: "Поле не может быть пустым!"
  }),
  someParameter: boolean().default(false),
})