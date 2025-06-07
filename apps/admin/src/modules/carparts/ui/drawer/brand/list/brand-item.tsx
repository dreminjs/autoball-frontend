import { ICarBrand } from '@autoball-frontend/shared-types';
import { FC } from 'react';

type IProps = Omit<ICarBrand, 'picture'>;

export const BrandItem: FC<IProps> = ({ id, name }) => {
  return <li>{name}</li>;
};
