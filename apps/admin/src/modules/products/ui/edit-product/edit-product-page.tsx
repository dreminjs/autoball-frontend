import { useParams } from 'react-router-dom';
import { EditProductForm } from './edit-product-form';
import { useGetProduct } from '../../model/api/queries';
import { getProductType } from '../../model/lib/get-product-type';

export const EditProductPage = () => {
  const { id } = useParams();

  const { data } = useGetProduct(id || '');

  return (
    <div>
      <EditProductForm
        OEM={data?.OEM}
        currency={data?.currency}
        year={data?.year}
        type_of_body={data?.type_of_body}
        volume={data?.volume}
        gearbox={data?.gearbox}
        fuel={data?.fuel}
        price={data?.price}
        condition={'used'}
        count={data?.count}
        productType={getProductType({
          isDisc: data?.disc_brand_name ? true : false,
          isTire: data?.tire_brand_name ? true : false,
        })}
        car_brand_name={data?.car_brand_name}
        car_brand_id={data?.car_brand_id}
        car_part_name={data?.car_part_name}
        car_part_id={data?.car_part_id}
        car_series_name={data?.car_series_name}
        car_series_id={data?.car_series_id}
        pictures={data?.pictures}
      />
    </div>
  );
};
