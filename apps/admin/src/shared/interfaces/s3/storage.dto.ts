import { CarBrandForm } from '../../../modules/car-brands/model/types/car-brand';

export interface IGetPresignUrlQueryParameters {
  filename: string;
  content_type: string;
}

export interface IPresignUrl {
  url?: string;
}

export type PostPhotoDto = IPresignUrl &
  Omit<CarBrandForm, 'name'> & { filename: string };
