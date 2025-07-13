import { MenuDrawer } from "@/components/drawer/menu-drawer"
import { Header } from "@/components/header"
import { PropsWithChildren } from "react"



export const Layout = (props: PropsWithChildren) => {


    return (
        <>
            <MenuDrawer />
            <Header/>
            {props.children}
        </>
    )
}