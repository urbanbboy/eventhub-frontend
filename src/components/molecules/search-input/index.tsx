import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react"
import React from "react";
import { memo } from "react"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const SearchInput = memo(
  React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
      return (
        <div className="grid w-full min-w-[600px] items-center gap-1.5">
          <div className="relative">
            <div className="absolute left-2.5 top-4 h-4 w-4 text-muted-foreground">
              <SearchIcon className="h-4 w-4" />
            </div>
            <Input 
              ref={ref}
              id="search" 
              type={type} 
              placeholder="Найти..." 
              className={cn('w-full rounded-lg bg-background pl-8 h-12', className)}
              {...props}
            />
          </div>
        </div>
      );
    }
  )
);
Input.displayName = "SearchInput";

export { SearchInput };

