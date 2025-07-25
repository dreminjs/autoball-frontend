import { useAtom } from "jotai"
import { discDiaAtom } from "../../product-atoms-page"



export const useChooseDiscDia = () => {

    const [discDia,setDiscDia] = useAtom(discDiaAtom)

    const handleChangeDiscDia = (newValue: number) => setDiscDia(newValue)

    return {onChangeDiscDia: handleChangeDiscDia, discDia}
}