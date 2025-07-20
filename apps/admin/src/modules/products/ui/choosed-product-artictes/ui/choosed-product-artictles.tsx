import { useChooseOrderProductInfo } from '../../../../orders/model/hooks/post-page/use-choose-order-product-info';
import { ChoosedProduct } from './choosed-product';

export const ChoosedProductArticles = () => {
  const { choosedOrderProductsInfo } = useChooseOrderProductInfo();

  return (
    <ul className="h-[450px] overflow-y-scroll p-4 mb-3 border-2">
      {choosedOrderProductsInfo.length === 0 ? (
        <div className="text-gray-500 italic p-3 bg-gray-50 rounded-lg">
          Ничего не выбрано
        </div>
      ) : (
        choosedOrderProductsInfo.map((el) => (
          <ChoosedProduct
            key={el.article}
            article={el.article}
            car_part_name={el.car_part_name}
            car_series_name={el.car_series_name}
            car_brand_name={el.car_brand_name}
            disc_brand_name={el.disc_brand_name}
            tire_brand_name={el.tire_brand_name}
            price={el.price}
            currency={el.currency}
          />
        ))
      )}
    </ul>
  );
};
