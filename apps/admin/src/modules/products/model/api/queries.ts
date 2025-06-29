import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { findMany, toggleAvailibleStatus, toggleScanStatus } from './services';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/types/server-error';
import { IProduct } from '@autoball-frontend/shared-types';
import { IInfiteScrollResponse } from '../../../../shared';
import { IToggleAvailableStatusDto } from '../types/toggle-availible-status.dto';
import { IToggleScanStatusDto } from '../types/toggle-scan-status.dto';
import { useFilterCategories } from '../hooks/use-filtration-categories';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';
import { checkboxesAtom } from '../atoms-page';
import { useSetAtom } from 'jotai';
import { useNotificationActions } from '../../../notifications';

export const useGetProducts = () => {
  const categories = useFilterCategories();

  return useInfiniteQuery<
    IInfiteScrollResponse<IProduct>,
    AxiosError<IServerError>
  >({
    queryKey: [
      SERVICE_URLS.product,
      QUERY_KEYS.private,
      Object.values(categories),
    ],
    queryFn: () =>
      findMany({
        ...categories,
        page: 1,
        isPrintedStatus: JSON.parse(categories.isPrintedStatus) === null ? null : categories.isPrintedStatus
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next_cursor,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};

export const useToggleAvailableStatus = () => {
  const { addError, addInfo, addSuccess, remove } = useNotificationActions();

  const queryClient = useQueryClient();
  const setCheckbox = useSetAtom(checkboxesAtom);
  const { mutate, ...props } = useMutation({
    mutationFn: (dto: IToggleAvailableStatusDto) => toggleAvailibleStatus(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.product, QUERY_KEYS.private],
      });
      setCheckbox([]);
      addSuccess();
    },
    onError: () => {
      remove('info');
      addError();
      setCheckbox([]);
    },
  });

  const handleMutate = (dto: IToggleAvailableStatusDto) => {
    addInfo();
    mutate(dto);
  };

  return { toggleAvailableStatus: handleMutate, ...props };
};

export const useToggleScanStatus = () => {
  const { addError, addInfo, addSuccess, remove } = useNotificationActions();

  const queryClient = useQueryClient();
  const setCheckbox = useSetAtom(checkboxesAtom);
  const { mutate, ...props } = useMutation({
    mutationFn: (dto: IToggleScanStatusDto) => toggleScanStatus(dto),
    onSuccess: () => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.product, QUERY_KEYS.private],
      });
      addSuccess();
      setCheckbox([]);
    },
    onError: () => {
      remove('info');
      addError();
      setCheckbox([]);
    },
  });

  const handleMutate = (dto: IToggleScanStatusDto) => {
    addInfo();
    mutate(dto);
  };

  return { toggleScanStatus: handleMutate, ...props };
};
