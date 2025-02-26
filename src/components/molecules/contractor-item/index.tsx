import { Contractor } from "@/api/Contractor/types"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Link } from "@tanstack/react-router";
import { MessageSquareMore, Star } from "lucide-react";

interface ContractorItemProps {
    contractor: Contractor;
}

export const ContractorItem = ({ contractor }: ContractorItemProps) => {
  return (
    <Card className="w-full max-w-[800px]">
      <CardContent className="flex p-2 gap-x-5">
        <Avatar className="w-[188px] h-[221px] bg-gray">
          {/* <AvatarImage className="rounded-none" src={contractor.avatar} /> */}
          {/* <AvatarFallback> */}
          {/* Fallback */}
          {/* </AvatarFallback> */}
        </Avatar>
        <div className="space-y-3">
          <h1 className="text-3xl text-[#666666]">{contractor.name}</h1>
          <div className="flex flex-row gap-x-3 items-center">
            <Badge variant={'destructive'}>опыт {contractor.experienceThumb} лет</Badge>
            <Badge className="bg-gray text-white/90">от {contractor.startPrice} ₽/ч</Badge>
            <span className="flex gap-x-1">
              <Star />
              {contractor.rating}
            </span>
            <span className="flex gap-x-1">
              <MessageSquareMore />
              {contractor.reviews}
            </span>
          </div>
          <p className="line-clamp-5 text-gray-500">{contractor.description}</p>
          <div className="flex justify-end">
            <Button className="rounded-2xl" variant={'gray'} asChild>
              <Link to="/a/organizer/$categoryId" params={{categoryId: contractor.name}}>
                            Подробнее
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-row gap-x-2 p-2">
        <div className="w-full h-[105px] bg-gray rounded-md"></div>
        <div className="w-full h-[105px] bg-gray rounded-md"></div>
        <div className="w-full h-[105px] bg-gray rounded-md"></div>
        <div className="w-full h-[105px] bg-gray rounded-md"></div>
      </CardFooter>
    </Card>
  )
}
