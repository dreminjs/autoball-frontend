import { CarBrandForm } from "../types/car-brand";

export type TEditBrandDto = Omit<CarBrandForm, 'brand_logo'> & { brand_logo?: File, id: string }