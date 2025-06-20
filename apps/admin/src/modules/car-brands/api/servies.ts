import { ICarBrand, IInfiteScrollQueryParameters, IInfiteScrollResponse } from "@autoball-frontend/shared-types";
import { instance } from "../../../shared/api/api-instance";
import { SERVICE_URLS } from "../../../shared/constants";
import { CarBrandFormDto } from "../model/types/car-brand";

export const createOne = async (data: CarBrandFormDto) => {

  return (await instance.post(
    `${SERVICE_URLS.carbrand}`, data
  )).data
};

export const findOne = async (id: string): Promise<ICarBrand> => {
  return (await instance.get(`${SERVICE_URLS.carbrand}/${id}`)).data
}


export const editOne = async (id: string): Promise<ICarBrand> => {
  return await instance.put("")
}


export const findMany = async (
  dto:IInfiteScrollQueryParameters
): Promise<IInfiteScrollResponse<ICarBrand>> => {
  const queryParams = new URLSearchParams();

  if (dto.search) queryParams.set('search', dto.search);

  if(dto.cursor !== undefined && typeof dto.cursor === "number") queryParams.set('cursor', String(dto.cursor))

  queryParams.set('take',"10")

  return (await instance.get(`${SERVICE_URLS.carbrand}?${queryParams}`)).data;
};