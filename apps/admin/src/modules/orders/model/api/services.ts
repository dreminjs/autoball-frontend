import { IInfiteScrollResponse, IOrder } from '@autoball-frontend/shared-types';
import { instance } from '../../../../shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';
import {
  IFindManyDto,
  IPatchOrderStatusDto,
  PostOrderProductsDto,
} from '../types/dto';
import { IInfinityScrollQueryParametersDto } from '../../../../shared';

export const findMany = async (
  dto: IInfinityScrollQueryParametersDto & Pick<IFindManyDto, 'status'>
): Promise<IInfiteScrollResponse<IOrder>> => {
  const queryParameters = new URLSearchParams();
  queryParameters.append('cursor', String(dto?.cursor));
  queryParameters.append('status', dto?.status);
  queryParameters.append('take', String(dto.take));
  queryParameters.append('status', String(dto.status));

  return (
    await instance.get(
      `${SERVICE_URLS.orders}/all?${queryParameters.toString()}`
    )
  ).data;
};
export const patchOne = async (dto: IPatchOrderStatusDto) => {
  return await instance.patch(
    `${SERVICE_URLS.orders}/${dto.order_id}?status=${dto.status}`
  );
};

export const createOne = async (dto: PostOrderProductsDto) => {
console.log(dto)
  return await instance.post(
    `${SERVICE_URLS.orders}/${QUERY_KEYS.private}`,
    dto
  );
};

export const findOne = async (id?: string): Promise<IOrder> => {
  return (await instance.get(`${SERVICE_URLS.orders}/${id}`)).data;
};
