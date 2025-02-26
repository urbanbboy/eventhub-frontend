'use client';

import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "./schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
// import { useLoginMutation } from "@/api/Auth";
import { toast } from "sonner";
import { LoadingButton } from "@/components/ui/loading-button";
import { addDays } from "date-fns";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { PasswordInput } from "@/components/atoms/password-input";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    try {
      console.log(data)
      // const response = await login().unwrap();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <Card className="mx-5 max-w-[600px]">
      <CardHeader className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-[#636363]">Добро пожаловать</h1>
        <p className="text-base font-extralight">
          До соединения с лучшими профессионалами остался 1 шаг
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Логин</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="example@gmail.com"
                      className=""
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Пароль</FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <LoadingButton
              className="w-full"
              variant={"gray"}
              type="submit"
              loading={false}
            >
              Войти
            </LoadingButton>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col items-center gap-7 mt-4">
        <div className="relative w-full flex items-center">
          <Separator className="flex-1" />
          <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 text-gray-500">
            или
          </span>
        </div>
        <Button variant={"secondary"} className="w-full" asChild>
          <Link href={"/register"}>Зарегистрироваться</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
