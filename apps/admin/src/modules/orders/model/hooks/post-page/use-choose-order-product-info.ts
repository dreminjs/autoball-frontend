import { useAtom } from 'jotai';
import { orderProductInfoAtom } from '../../post-page-atoms';
import { IOrderProductInfo } from '../../types/dto';

export const useChooseOrderProductInfo = () => {
  const [choosedOrderProductsInfo, setChoosedOrderProductsInfo] =
    useAtom(orderProductInfoAtom);

  const handleChooseOrderProductInfo = (data: IOrderProductInfo) => {
    const selectedItem = choosedOrderProductsInfo.some(
      (item) => item.article === data.article
    );

    if (!selectedItem) {
      setChoosedOrderProductsInfo((prev) => [...prev, data]);
    }
  };

  const totalPrice = choosedOrderProductsInfo.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const ids = choosedOrderProductsInfo.map(el => el.id)

  const handleRemove = (article: string) => {
    setChoosedOrderProductsInfo((prev) =>
      prev.filter((p) => p.article !== article)
    );
  };

  const handleClearAll = () => setChoosedOrderProductsInfo([]);

  const isProductSelected = (article: string) =>
    choosedOrderProductsInfo.some((p) => p.article === article);

  return {
    choosedOrderProductsInfo,
    onChooseOrderProductInfo: handleChooseOrderProductInfo,
    totalPrice,
    onRemove: handleRemove,
    isProductSelected,
    ids,
    onClearAll: handleClearAll,
  };
};
