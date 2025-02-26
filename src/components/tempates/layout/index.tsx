import { FC, PropsWithChildren } from "react"
import { Header } from "../header"


export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="py-24 px-40">{children}</main>
    </div>
  )
}