import { instance } from '../../../../shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';
import { IInfiteScrollResponse } from '../../../../shared';
import { IGetProductsQueryParameters } from '../types/get-products-query-parameters';
import { IProduct } from '@autoball-frontend/shared-types';
import { IToggleScanStatusDto } from '../types/toggle-scan-status.dto';
import { IToggleAvailibleStatusDto } from '../types/toggle-availible-status.dto';

export const findMany = async (
  dto: IGetProductsQueryParameters
): Promise<IInfiteScrollResponse<IProduct>> => {
  const queryParameters = new URLSearchParams();

  if (dto.condition) queryParameters.append('condition', dto.condition);

  if (dto.countItems)
    queryParameters.append('page_size', String(dto.countItems));

  if (dto.page) queryParameters.append('page', String(dto.page));

  if (dto.isPrinted)
    queryParameters.append('is_printed', String(dto.isPrinted));

  if (dto.brandId) queryParameters.append('car_brand_id', dto.brandId);

  if (dto.seriesId) queryParameters.append('car_series_id', dto.seriesId);

  if(dto.carPartId) queryParameters.append("car_part_id",dto.carPartId)

  return (
    await instance.get(
      `${SERVICE_URLS.product}/${QUERY_KEYS.private}?${queryParameters.toString()}`
    )
  ).data;
};

export const toggleScanStatus = async (dto: IToggleScanStatusDto) => {
  return await instance.patch(
    `${SERVICE_URLS.product}/${QUERY_KEYS.toggle_printed_status}`,
    dto
  );
};

export const toggleAvailibleStatus = async (dto: IToggleAvailibleStatusDto) => {
  return await instance.patch(
    `${SERVICE_URLS.product}/${QUERY_KEYS.toggle_availible_status}`,
    dto
  );
};
