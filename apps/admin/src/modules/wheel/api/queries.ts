import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { instance } from '../../../shared/api/api-instance';
import {
  IInfiteScrollResponse,
  IWheelComponentBrand,
} from '@autoball-frontend/shared-types';
import { IPostWheelComponentBrand } from '../model/schemas/post-wheel-component-brand';

const API_URL = new Location().pathname;

export const useGetWheelBrands = (params = {}) => {
  return useQuery<IInfiteScrollResponse<IWheelComponentBrand>>({
    queryKey: [API_URL, params],
    queryFn: async () => {
      return (await instance.get(API_URL, { params })).data;
    },
  });
};

export const useGetWheelBrand = (id: string) => {
  return useQuery<IWheelComponentBrand>({
    queryKey: [API_URL, id],
    queryFn: async () => {
      return (await instance.get(`${API_URL}/${id}`)).data;
    },
    enabled: !!id,
  });
};

export const useDeleteWheelBrand = () => {
  return useMutation({
    mutationFn: (id: string) => instance.delete(`${API_URL}/${id}`),
  });
};

export const useCreateWheelBrand = () => {
  return useMutation({
    mutationFn: (brand: IPostWheelComponentBrand) =>
      instance.post(API_URL, brand),
  });
};

export const useUpdateWheelBrand = () => {
  return useMutation({
    mutationFn: (brand: Partial<IPostWheelComponentBrand>) =>
      instance.put(`${API_URL}/${brand.id}`, brand),
  });
};
