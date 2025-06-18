import { ICarSeries } from '@autoball-frontend/shared-types';
import { QUERY_KEYS, SERVICE_URLS } from '../../../shared/constants';
import { instance } from '../../../shared/api/api-instance';
import {
  ICreateCarSeriesDto,
  IUpdateCarSeriesForm,
} from '../model/types/carseries.interface';

export const findManyByBrandId = async (
  brandId: string
): Promise<ICarSeries[]> => {
  return (
    await instance.get(
      `${SERVICE_URLS.carseries}/${QUERY_KEYS.brand}/${brandId}`
    )
  ).data;
};

export const createOne = async (
  data: ICreateCarSeriesDto
): Promise<ICarSeries> => {
  return await instance.post(`${SERVICE_URLS.carseries}`, data);
};

export const deleteOne = async (id: string) => {
  return (await instance.delete(`${SERVICE_URLS.carseries}/${id}`)).data;
};

export const editOne = async (dto: IUpdateCarSeriesForm, id: string): Promise<ICarSeries> => {
  return (await instance.put(`${SERVICE_URLS.carseries}/${id}`, dto)).data;
};
