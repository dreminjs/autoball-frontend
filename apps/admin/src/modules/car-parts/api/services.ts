import { IInfiteScrollQueryParameters } from '@autoball-frontend/shared-types';
import { instance } from '../../../shared/api/api-instance';
import { SERVICE_URLS } from '../../../shared/constants';

export const findMany = async (dto: IInfiteScrollQueryParameters) => {
  const queryParameters = new URLSearchParams();

  if (dto.cursor) queryParameters.append('cursor', dto.cursor.toString());

  if (dto.search) queryParameters.append('search', dto.search.toString());

  if (dto.limit) queryParameters.append('take', dto.limit.toString());

  return (
    await instance.get(`${SERVICE_URLS.carpart}?${queryParameters.toString()}`)
  ).data;
};
