'use client';

// import { useLogoutMutation } from "@/api/Auth";
import { Logo } from "@/components/atoms/logo";
import { Navigation } from "@/components/organisms/navigation";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { LOCALSTORAGE_KEY } from "@/constants/localstorage";
// import { useAuth } from "@/hooks/use-auth";
import { BellDot, MessageSquareMore } from "lucide-react";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useState } from "react";
// import { toast } from "sonner";

export const Header = () => {
  // const { user } = useAuth();
  // const token = localStorage.getItem(LOCALSTORAGE_KEY.REFRESH_TOKEN);
  // const router = useRouter()

  // const [logout] = useLogoutMutation();
  const [open, setOpen] = useState(false);

  // const onLogout = async () => {
  //   try {
  //     await logout({ refreshToken: token }).unwrap();

  //     localStorage.removeItem(LOCALSTORAGE_KEY.USER);
  //     localStorage.removeItem(LOCALSTORAGE_KEY.USER_ROLE);
  //     localStorage.removeItem(LOCALSTORAGE_KEY.ACCESS_TOKEN);
  //     localStorage.removeItem(LOCALSTORAGE_KEY.REFRESH_TOKEN);
  //     localStorage.removeItem(LOCALSTORAGE_KEY.EXPIRES_AT);

  //     router.push('/home')
  //   } catch (error) {
  //     toast.error(JSON.stringify(error));
  //   }
  // };

  return (
    <header>
      <div className="flex justify-between py-4 px-40">
        <Logo />
        <Navigation />
        <div className="flex items-center gap-x-4">
          <Link href={"/a/chats"} >
            <MessageSquareMore className="hover:cursor-pointer" size={30} />
          </Link>
          <Popover>
            <PopoverTrigger>
              <BellDot className="hover:cursor-pointer" size={30} />
            </PopoverTrigger>
            <PopoverContent align="end" className="flex w-full justify-center items-center">
                Здесь будут уведомления и сообщения
            </PopoverContent>
          </Popover>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Avatar className="hover:cursor-pointer">
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsEJHmI0MlIGvH9CYkbsLEWQ5_ee8Qtl5V-Q&s" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent align="end" onClick={() => setOpen(false)}>
              <div className="flex flex-col gap-y-1">
                <Button size={'sm'} variant={'ghost'} asChild><Link href={"/profile"}>Профиль</Link></Button>
                <Button size={'sm'} variant={'ghost'} asChild><Link href={"/profile"}>Настройки</Link></Button>
                <Button size={'sm'}>Выйти</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};
