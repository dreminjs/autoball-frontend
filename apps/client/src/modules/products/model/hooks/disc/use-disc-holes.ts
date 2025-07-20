import { useAtom } from "jotai"
import { discHolesAtom } from "../../product-atoms-page"



export const useChooseDiscHoles = () => {

    const [discHoles,setDiscHoles] = useAtom(discHolesAtom)

    const handleChangeDiscHoles = (data: number) => setDiscHoles(data)

    return {
        onChangeDiscHoles: handleChangeDiscHoles,
        discHoles
    }
}