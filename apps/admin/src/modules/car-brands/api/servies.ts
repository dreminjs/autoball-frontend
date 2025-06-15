import { ICarBrand } from "@autoball-frontend/shared-types";
import { instance } from "../../../shared/api/api-instance";
import { SERVICE_URLS } from "../../../shared/constants";
import { CarBrandFormDto } from "../model/types/car-brand";

export const createOne = async (data: CarBrandFormDto) => {

  return (await instance.post(
    `${SERVICE_URLS.carbrand}`, data
  )).data
};

export const findOne = async (id: string): Promise<ICarBrand> => {
  return (await instance.get(`${SERVICE_URLS.carbrand}/id`)).data
}