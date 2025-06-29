import { IProduct } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { ProductItem } from './product-item';
import { IInfiteScrollResponse } from '../../../../../shared';

interface IProps {
  response?: IInfiteScrollResponse<IProduct>[];
  isLoading: boolean;
  errorMessage?: string
}

export const ProductsList: FC<IProps> = ({ response, isLoading, errorMessage }) => {
  return (
    <ul className="h-[70vh] overflow-y-scroll print:hidden">
      {isLoading && <li className="text-center">Загрузка...</li>}
      {errorMessage && <li className='text-center text-rose-600'>{errorMessage}</li>}
      {response &&
        response.map(({ items }) =>
          items.map((item) => <ProductItem key={item.id} {...item} />)
       
        )}    
         <ProductItem 
            id="f837eace-c906-4819-9a80-b45cd0adc157"
  pictures={["2025062718290714121082016633340052.webp", "202506271829098578848775820758458.webp"]}
  car_brand_name="DILFO"
  car_series_name="M5"
  car_part_name="Балалайка"
  year={2019}
  condition="used"
  price={3141}
  count={1}
  OEM="SND-BAL-69"
  VIN="BALALA11111111111"
  article="55742727062025172910"
  availability="in stock"
  created_at="2025-06-27T15:29:04.990568"
  currency="USD"
  discount={0}
  is_available={true}
  is_printed={false}
  note="Б/у, но душевная"
  
  // Данные о дисках
  disc_brand_name="BBS"
  disc_diametr="R19"
  disc_width={8.5}
  disc_model="CH-R"
  disc_pcd={5}
  disc_holes={5}
  disc_ejection={35}

    />
    </ul>
  );
};
