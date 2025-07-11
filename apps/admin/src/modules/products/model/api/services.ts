import { instance } from '../../../../shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';
import { IInfiteScrollResponse } from '../../../../shared';
import { IGetProductsQueryParameters } from '../types/get-products-query-parameters';
import { IProduct } from '@autoball-frontend/shared-types';
import { IToggleScanStatusDto } from '../types/toggle-scan-status.dto';
import { IToggleAvailableStatusDto } from '../types/toggle-availible-status.dto';
import { ProductFormData } from '../schemas/product.schema';
import { StrictFormData } from '../../../../shared/types/strict-form-data';
import { PostProductDto } from '../types/product.interface';
import { transformPostData } from '../lib/transform-post-data';

export const findMany = async (
  dto: IGetProductsQueryParameters & { cursor: unknown }
): Promise<IInfiteScrollResponse<IProduct>> => {
  const queryParameters = new URLSearchParams();

  queryParameters.append('cursor', String(dto.cursor));
  if (dto.countItems)
    queryParameters.append('take', String(dto.countItems));
  if (dto.isPrintedStatus !== undefined && dto.isPrintedStatus !== null)
    queryParameters.append('is_printed', String(dto.isPrintedStatus));
  if (dto.carBrandId) queryParameters.append('car_brand_id', dto.carBrandId);
  if (dto.seriesId) queryParameters.append('car_series_id', dto.seriesId);
  if (dto.carPartId) queryParameters.append('car_part_id', dto.carPartId);
  if (dto.yearFrom) queryParameters.append('year_from', String(dto.yearFrom));
  if (dto.yearTo) queryParameters.append('year_to', String(dto.yearTo));
  if (dto.priceFrom)
    queryParameters.append('price_from', String(dto.priceFrom));
  if (dto.priceTo) queryParameters.append('price_to', String(dto.priceTo));
  if(dto.article) queryParameters.append("article", dto.article)
  if (dto.volume) queryParameters.append('volume', String(dto.volume));
  if (dto.fuel) queryParameters.append('fuel', dto.fuel);
  if (dto.gearbox) queryParameters.append('gearbox', dto.gearbox);
  if (dto.typeOfBody) queryParameters.append('type_of_body', dto.typeOfBody);
  if (dto.availability)
    queryParameters.append('availability', dto.availability);

  if (dto.discDiameter)
    queryParameters.append('disc_diametr', JSON.parse(dto.discDiameter));
  if (dto.discWidth)
    queryParameters.append('disc_width', String(dto.discWidth));
  if (dto.discEjection)
    queryParameters.append('disc_ejection', String(dto.discEjection));
  if (dto.discDia) queryParameters.append('disc_dia', String(dto.discDia));
  if (dto.discHoles)
    queryParameters.append('disc_holes', String(dto.discHoles));
  if (dto.discPcd) queryParameters.append('disc_pcd', String(dto.discPcd));
  if (dto.discBrandId) queryParameters.append('disc_brand_id', dto.discBrandId);
  if (dto.discModel) queryParameters.append('disc_model', dto.discModel);

  if (dto.tiresDiameter)
    queryParameters.append('tires_diametr', JSON.parse(dto.tiresDiameter));
  if (dto.tiresWidth)
    queryParameters.append('tires_width', String(dto.tiresWidth));
  if (dto.tiresHeight)
    queryParameters.append('tires_height', String(dto.tiresHeight));
  if (dto.tiresIndex) queryParameters.append('tires_index', dto.tiresIndex);
  if (dto.tiresCarType)
    queryParameters.append('tires_car_type', JSON.parse(dto.tiresCarType));
  if (dto.tiresModel) queryParameters.append('tires_model', dto.tiresModel);
  if (dto.tiresBrandId)
    queryParameters.append('tires_brand_id', dto.tiresBrandId);
  if (dto.tiresSeason)
    queryParameters.append('tires_season', JSON.parse(dto.tiresSeason));
  if (dto.tiresResidueFrom)
    queryParameters.append('tires_residue_from', String(dto.tiresResidueFrom));
  if (dto.tiresResidueTo)
    queryParameters.append('tires_residue_to', String(dto.tiresResidueTo));

  return (
    await instance.get(
      `${SERVICE_URLS.product}/${
        QUERY_KEYS.private
      }?${queryParameters.toString()}`
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

export const createOne = async (data: ProductFormData) => {
  const formData = new FormData()

  formData.append('product_data', JSON.stringify(transformPostData(data)));

  if (data.product_pictures && data.product_pictures.length > 0) {
    data.product_pictures.forEach((picture) => {
      formData.append(`product_pictures`, picture);
    });
  }

  return await instance.post(`${SERVICE_URLS.product}`, formData);
};

export const findOne = async (id: string): Promise<IProduct> => {
  return (await instance.get(`${SERVICE_URLS.product}/${id}`)).data
}