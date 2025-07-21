import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  createOne,
  editOne,
  findMany,
  findOne,
  toggleAvailibleStatus,
  toggleScanStatus,
} from './services';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/types/server-error';
import { IProduct } from '@autoball-frontend/shared-types';
import { IInfiteScrollResponse } from '../../../../shared';
import { IToggleAvailableStatusDto } from '../types/toggle-availible-status.dto';
import { IToggleScanStatusDto } from '../types/toggle-scan-status.dto';
import {
  QUERY_KEYS,
  SERVICE_URLS,
} from '../../../../shared/constants';
import { checkboxesAtom } from '../product-atoms-page';
import { useSetAtom } from 'jotai';
import { useNotificationActions } from '../../../notifications';
import { EditProductFormData, ProductFormData } from '../schemas/product.schema';
import { useChooseCarPart } from '../hooks/post-products/car/use-choose-car-part';
import { useChooseSeries } from '../hooks/post-products/car/use-choose-series';
import { useChooseCarBrand } from '../hooks/post-products/car/use-choose-car-brand';
import { validateProductFields } from '../lib/post-query-validate';
import { IGetProductsQueryParameters } from '../types/get-products-query-parameters';

export const useGetProducts = (categories: IGetProductsQueryParameters) => {
  return useInfiniteQuery<
    IInfiteScrollResponse<IProduct>,
    AxiosError<IServerError>
  >({
    queryKey: [
      SERVICE_URLS.product,
      QUERY_KEYS.private,
      Object.values(categories),
    ],
    queryFn: ({ pageParam }) => {
      const cursor = typeof pageParam === 'number' ? pageParam : 0;

      return findMany({
        ...categories,
        cursor,
      });
    },
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage) => lastPage.next_cursor,
    initialPageParam: 0,
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

export const usePostProduct = () => {
  const { addError, addInfo, addSuccess, remove } = useNotificationActions();

  const { brand } = useChooseCarBrand();
  const { choosedCarPart } = useChooseCarPart();
  const { choosedSeries } = useChooseSeries();

  const { mutate, ...props } = useMutation({
    mutationKey: [SERVICE_URLS.product],
    mutationFn: (data: ProductFormData) => createOne(data),
    onSuccess: () => {
      remove('info');
      addSuccess();
    },
    onError: () => {
      remove('info');
      addError();
    },
  });

  const handleMutate = (data: ProductFormData) => {
    if (
      validateProductFields(
        {
          ...data,
          car_brand_id: brand?.id,
          car_series_id: choosedSeries?.id,
          car_part_id: choosedCarPart?.id,
        },
        { addError, addInfo, addSuccess, remove }
      )
    )
      addInfo();
    mutate({
      ...data,
      car_brand_id: brand?.id,
      car_series_id: choosedSeries?.id,
      car_part_id: choosedCarPart?.id,
    });
  };
  return { mutate: handleMutate, ...props };
};


export const useGetProduct = (id: string) => {
  return useQuery({
    queryKey: [SERVICE_URLS.product, id],
    queryFn: () => findOne(id),
    refetchOnWindowFocus: false,
  });
};
