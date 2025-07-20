import { ICarSeries, IInfiteScrollResponse } from '@autoball-frontend/shared-types';
import { QUERY_KEYS, SERVICE_URLS } from '../../../shared/constants';
import { instance } from '../../../shared/api/api-instance';

export const findManyByBrandId = async (
  brandId: string
): Promise<IInfiteScrollResponse<ICarSeries>> => {
  return (
    await instance.get(
      `${SERVICE_URLS.carseries}/${QUERY_KEYS.brand}/${brandId}`
    )
  ).data;
};
