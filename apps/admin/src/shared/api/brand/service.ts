import { ICarBrand } from '@autoball-frontend/shared-types';
import { instance } from '../api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../constants';
import { FiltrationDto } from '../../interfaces/brands/filtration.dto';
import { CarBrandForm } from '../../../modules/car-brands/model/types/car-brand';

export const findMany = async (dto: FiltrationDto): Promise<ICarBrand[]> => {
  const queryParams = new URLSearchParams();

  if (dto.search) queryParams.set('search', dto.search);

  return (
    await instance.get(
      `${SERVICE_URLS.carbrand}?${queryParams}`
    )
  ).data;
};

export const createOne = async (data: CarBrandForm) => {
  const formData = new FormData();

  formData.append('name', data.name);

  formData.append('picture', data.picture);

  return await instance.post(
    `${SERVICE_URLS.carbrand}`
  ).then(t => t.data)
};

export const deleteOne = async (id: string) => {
  return (await instance.delete(`${SERVICE_URLS.carbrand}/${id}`)).data
} 