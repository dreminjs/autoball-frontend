import { instance } from '../../../../shared/api/api-instance';
import { SERVICE_URLS } from '../../../../shared/constants';
import { IInfiteScrollResponse } from '../../../../shared';
import { IGetProductsQueryParameters } from '../types/get-products-query-parameters';
import { IProduct } from '@autoball-frontend/shared-types';

export const findMany = async (dto: IGetProductsQueryParameters): Promise<IInfiteScrollResponse<IProduct>> => {
  const queryParameters = new URLSearchParams();

  if (dto.condition) queryParameters.append('condition', dto.condition);

  if(dto.countItems) queryParameters.append("page_size", String(dto.countItems))

  if(dto.page) queryParameters.append('page', String(dto.page))

  if(dto.isPrinted !== undefined && dto.isPrinted !== null) queryParameters.append("is_printed", String(dto.isPrinted))

  return (await instance.get(`${SERVICE_URLS.product}?${queryParameters}`)).data
};
