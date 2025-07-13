import { isMenuDrawerOpenAtom } from "@/modules/products/model/menu-drawer.atom"
import Drawer from "@mui/material/Drawer"
import { useAtom } from "jotai"
import { NavigationList } from "@/components/header"



export const MenuDrawer = () => {

    const [isMenuDrawerOpen,setIsMenuDrawerOpen] = useAtom(isMenuDrawerOpenAtom)

    return (
        <Drawer open={isMenuDrawerOpen} onClose={() => setIsMenuDrawerOpen(false)}>
            <NavigationList ulClassName="flex-col min-h-[100vh]" />
        </Drawer>
    )
} 