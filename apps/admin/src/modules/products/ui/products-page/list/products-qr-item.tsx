import { IProduct } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import QRCode from 'react-qr-code';

type Props = Pick<
  IProduct,
  'car_brand_name' | 'car_series_name' | 'car_part_name' | 'id'
>;

export const CarPartsQrItem: FC<Props> = ({
  car_brand_name,
  car_part_name,
  car_series_name,
  id,
}) => {
  return (
    <li className='flex gap-5 border-2 w-full md:w-[80%] mx-auto mb-5'>
      <QRCode value={id} />
      <div>
        <p className="text-3xl font-medium mb-2 text-[25px]">
          {`${car_part_name} ${car_brand_name} ${car_series_name}`}
        </p>
        <p className='text-[25px]'>ID: {id}</p>
      </div>
    </li>
  );
};
