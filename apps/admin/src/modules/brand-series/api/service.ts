import { ICarSeries, IInfiteScrollResponse } from '@autoball-frontend/shared-types';
import { QUERY_KEYS, SERVICE_URLS } from '../../../shared/constants';
import { instance } from '../../../shared/api/api-instance';
import { IEditCarSeriesForm, IPostCarSeriesDto } from '../model/types/carseries.interface';

export const findManyByBrandId = async (
  brandId: string
): Promise<IInfiteScrollResponse<ICarSeries>> => {
  return (
    await instance.get(
      `${SERVICE_URLS.carseries}/${QUERY_KEYS.brand}/${brandId}`
    )
  ).data;
};

export const createOne = async (
  data: IPostCarSeriesDto
): Promise<ICarSeries> => {
  return await instance.post(`${SERVICE_URLS.carseries}`, data);
};

export const deleteOne = async (id: string) => {
  return (await instance.delete(`${SERVICE_URLS.carseries}/${id}`)).data;
};

export const editOne = async (dto: IEditCarSeriesForm, id: string): Promise<ICarSeries> => {
  return (await instance.put(`${SERVICE_URLS.carseries}/${id}`, dto)).data;
};
