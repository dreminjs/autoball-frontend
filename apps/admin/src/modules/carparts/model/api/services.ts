import { instance } from '../../../../shared/api/api-instance';
import { SERVICE_URLS } from '../../../../shared/constants';
import { IGetCarPartsQueryParameters } from '../types/get-carparts-query-parameters';

export const findMany = async (dto: IGetCarPartsQueryParameters) => {
  const queryParameters = new URLSearchParams();

  if (dto.condition) queryParameters.append('condition', dto.condition);

  return await instance.get(`${SERVICE_URLS.carpart}?${queryParameters}`);
};
