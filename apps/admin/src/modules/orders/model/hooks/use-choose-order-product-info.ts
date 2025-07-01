import { useAtom } from "jotai"
import { articleAtom } from "../atoms"
import { IOrderProductInfo } from "../types/dto";

export const useChooseOrderProductInfo = () => {
    const [choosedOrderProductsInfo,setChoosedOrderProductsInfo] = useAtom(articleAtom)

     const handleChooseOrderProductInfo = (data: IOrderProductInfo | null) => {
        if (data === null) {
            setChoosedOrderProductsInfo([]);
        } else {
            setChoosedOrderProductsInfo(prev => [...prev, data]);
        }
    };

    const totalPrice = choosedOrderProductsInfo.reduce((sum, product) => sum + product.price, 0);

    const articles = choosedOrderProductsInfo.map(el => el.article)

    const handleRemove = (article: string) => {
      setChoosedOrderProductsInfo(prev => prev.filter(p => p.article !== article));
    }
    
    const handleClearAll = () => setChoosedOrderProductsInfo([])

    const isProductSelected = (article: string) => 
      choosedOrderProductsInfo.some(p => p.article === article)

    return  {
        choosedOrderProductsInfo,
        onChooseOrderProductInfo: (data: IOrderProductInfo | null) => handleChooseOrderProductInfo(data),
        totalPrice,
        onRemove: handleRemove,
        isProductSelected,
        articles,
        onClearAll: handleClearAll
    }
}