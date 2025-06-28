import {
  ICarBrand,
  IInfiteScrollQueryParameters,
  IInfiteScrollResponse,
} from '@autoball-frontend/shared-types';
import { instance } from '../../../shared/api/api-instance';
import { SERVICE_URLS } from '../../../shared/constants';
import { CarBrandForm } from '../model/types/car-brand';

export const createOne = async (data: CarBrandForm) => {
  const formData = new FormData();

  formData.append('file', data.brand_logo);

  formData.append('data', JSON.stringify({ name: data.name }));

  return (await instance.post(`${SERVICE_URLS.carbrand}`, formData)).data;
};

export const findOne = async (id: string): Promise<ICarBrand> => {
  return (await instance.get(`${SERVICE_URLS.carbrand}/${id}`)).data;
};

export const editOne = async (data: CarBrandForm, id: string): Promise<ICarBrand> => {
  const formData = new FormData();

  if(data.brand_logo) formData.append('file', data.brand_logo);

  formData.append('data', JSON.stringify({ name: data.name }));

  return (await instance.put(`${SERVICE_URLS.carbrand}/${id}`, formData)).data;
};

export const deleteOne = async (id: string) => {
  return (await instance.delete(`${SERVICE_URLS.carbrand}/${id}`)).data;
};

export const findMany = async (
  dto: IInfiteScrollQueryParameters
): Promise<IInfiteScrollResponse<ICarBrand>> => {
  const queryParams = new URLSearchParams();

  if (dto.search) queryParams.set('search', dto.search);

  if (dto.cursor !== undefined && typeof dto.cursor === 'number')
    queryParams.set('cursor', String(dto.cursor));

  queryParams.set('take', '10');

  return (await instance.get(`${SERVICE_URLS.carbrand}?${queryParams}`)).data;
};
