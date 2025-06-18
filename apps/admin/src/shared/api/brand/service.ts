import { ICarBrand } from '@autoball-frontend/shared-types';
import { instance } from '../api-instance';
import { SERVICE_URLS } from '../../constants';
import { FiltrationDto } from '../../interfaces/brands/filtration.dto';
import { IInfiteScrollResponse } from '../../interfaces/server-response';

export const findMany = async (
  dto: FiltrationDto
): Promise<IInfiteScrollResponse<ICarBrand>> => {
  const queryParams = new URLSearchParams();

  if (dto.search) queryParams.set('search', dto.search);

  if(dto.cursor !== undefined && typeof dto.cursor === "number") queryParams.set('cursor', String(dto.cursor))

  queryParams.set('take',"5")

  return (await instance.get(`${SERVICE_URLS.carbrand}?${queryParams}`)).data;
};

export const deleteOne = async (id: string) => {
  return (await instance.delete(`${SERVICE_URLS.carbrand}/${id}`)).data;
};
