import { instance } from '../../../../shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';
import { IInfiteScrollResponse } from '../../../../shared';
import { IGetProductsQueryParameters } from '../types/get-products-query-parameters';
import { IProduct } from '@autoball-frontend/shared-types';
import { IToggleScanStatusDto } from '../types/toggle-scan-status.dto';
import { IToggleAvailableStatusDto } from '../types/toggle-availible-status.dto';

export const findMany = async (
  dto: IGetProductsQueryParameters
): Promise<IInfiteScrollResponse<IProduct>> => {
  const queryParameters = new URLSearchParams();

  if (dto.condition) queryParameters.append('condition', dto.condition);
  if (dto.countItems) queryParameters.append('page_size', String(dto.countItems));
  if (dto.page) queryParameters.append('page', String(dto.page));
  if (dto.isPrintedStatus) queryParameters.append('is_printed', String(dto.isPrintedStatus));
  if (dto.carBrandId) queryParameters.append('car_brand_id', dto.carBrandId);
  if (dto.seriesId) queryParameters.append('car_series_id', dto.seriesId);
  if (dto.carPartId) queryParameters.append('car_part_id', dto.carPartId);

  if (dto.yearFrom) queryParameters.append('year_from', String(dto.yearFrom));
  if (dto.yearTo) queryParameters.append('year_to', String(dto.yearTo));
  if (dto.priceFrom) queryParameters.append('price_from', String(dto.priceFrom));
  if (dto.priceTo) queryParameters.append('price_to', String(dto.priceTo));

  if (dto.volume) queryParameters.append('volume', String(dto.volume));
  if (dto.fuel) queryParameters.append('fuel', dto.fuel);
  if (dto.gearbox) queryParameters.append('gearbox', dto.gearbox);
  if (dto.typeOfBody) queryParameters.append('type_of_body', dto.typeOfBody);
  if (dto.availability) queryParameters.append('availability', dto.availability);

  if (dto.discDiameter) queryParameters.append('disc_diametr', JSON.parse(dto.discDiameter));
  if (dto.discWidth) queryParameters.append('disc_width', String(dto.discWidth));
  if (dto.discEjection) queryParameters.append('disc_ejection', String(dto.discEjection));
  if (dto.discDia) queryParameters.append('disc_dia', String(dto.discDia));
  if (dto.discHoles) queryParameters.append('disc_holes', String(dto.discHoles));
  if (dto.discPcd) queryParameters.append('disc_pcd', String(dto.discPcd));
  if (dto.discBrandId) queryParameters.append('disc_brand_id', dto.discBrandId);
  if (dto.discModel) queryParameters.append('disc_model', dto.discModel);

  if (dto.tiresDiameter) queryParameters.append('tires_diametr', JSON.parse(dto.tiresDiameter));
  if (dto.tiresWidth) queryParameters.append('tires_width', String(dto.tiresWidth));
  if (dto.tiresHeight) queryParameters.append('tires_height', String(dto.tiresHeight));
  if (dto.tiresIndex) queryParameters.append('tires_index', dto.tiresIndex);
  if (dto.tiresCarType) queryParameters.append('tires_car_type', JSON.parse(dto.tiresCarType));
  if (dto.tiresModel) queryParameters.append('tires_model', dto.tiresModel);
  if (dto.tiresBrandId) queryParameters.append('tires_brand_id', dto.tiresBrandId);
  if (dto.tiresSeason) queryParameters.append('tires_season', JSON.parse(dto.tiresSeason));
  if (dto.tiresResidueFrom) queryParameters.append('tires_residue_from', String(dto.tiresResidueFrom));
  if (dto.tiresResidueTo) queryParameters.append('tires_residue_to', String(dto.tiresResidueTo));

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

export const toggleAvailibleStatus = async (dto: IToggleAvailableStatusDto) => {
  return await instance.patch(
    `${SERVICE_URLS.product}/${QUERY_KEYS.toggle_availible_status}`,
    dto
  );
};
