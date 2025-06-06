import { ICarBrand } from '@autoball-frontend/shared-types';
import { instance } from '../../../shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../../shared/constants';
import { FiltrationDto } from '../dto/filtration.dto';
import { CarBrandForm } from '../model/types/car-brand';

export const findMany = async (dto: FiltrationDto): Promise<ICarBrand[]> => {
  const queryParams = new URLSearchParams();

  if (dto.search) queryParams.set('search', dto.search);

  return (
    await instance.get(
      `${SERVICE_URLS.dismanting}/${QUERY_KEYS.carbrand}?${queryParams}`
    )
  ).data;
};

export const createOne = async (data: CarBrandForm) => {
  const formData = new FormData();

  formData.append('name', data.name);

  formData.append('picture', data.picture);

  return await instance.post(
    `${SERVICE_URLS.dismanting}/${QUERY_KEYS.carbrand}`
  ).then(t => t.data)
};

export const deleteOne = async (id: string) => {
  return (await instance.delete(`${SERVICE_URLS.dismanting}/${QUERY_KEYS.carbrand}/${id}`)).data
} 