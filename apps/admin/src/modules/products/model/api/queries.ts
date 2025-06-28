import {
  useInfiniteQuery,
  useMutation,
} from '@tanstack/react-query';
import { findMany, toggleAvailibleStatus, toggleScanStatus } from './services';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/types/server-error';
import { IProduct } from '@autoball-frontend/shared-types';
import { IInfiteScrollResponse } from '../../../../shared';
import { IToggleAvailibleStatusDto } from '../types/toggle-availible-status.dto';
import { IToggleScanStatusDto } from '../types/toggle-scan-status.dto';
import { useFilterCategories } from '../hooks/use-filtration-categories';

export const useGetProducts = () => {

  const categories = useFilterCategories();

  return useInfiniteQuery<
    IInfiteScrollResponse<IProduct>,
    AxiosError<IServerError>
  >({
    queryKey: [
      Object.values(categories)
    ],
    queryFn: () =>
      findMany({
        isPrinted: categories.isPrintedStatus,
        page: 1,
        ...categories,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, ) =>
      lastPage.next_cursor,
  });
};

export const useToggleAvailibleStatus = () => {
  const { mutate, ...props } = useMutation({
    mutationFn: (dto: IToggleAvailibleStatusDto) => toggleAvailibleStatus(dto),
  });

  const handleMutate = (dto: IToggleAvailibleStatusDto) => {
    mutate(dto);
  };

  return { toggleAvailibleStatus: handleMutate, ...props };
};

export const useToggleScanStatus = () => {
  const { mutate, ...props } = useMutation({
    mutationFn: (dto: IToggleScanStatusDto) => toggleScanStatus(dto),
  });

  const handleMutate = (dto: IToggleScanStatusDto) => {
    mutate(dto);
  };

  return { toggleScanStatus: handleMutate, ...props };
};
