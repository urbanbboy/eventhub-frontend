'use client'

import { TooltipProvider } from "@/components/ui/tooltip"
import { StoreProvider } from "./redux-provider"
import { FC, PropsWithChildren } from "react"
import { Toaster } from "@/components/ui/sonner"


export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StoreProvider>
      <TooltipProvider delayDuration={200}>
        {children}
      </TooltipProvider>
      <Toaster />
    </StoreProvider>
  )
}