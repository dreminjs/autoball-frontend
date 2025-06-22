import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { findMany } from './services';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/interfaces/server-error';
import { IProduct } from '@autoball-frontend/shared-types';
import { IInfiteScrollResponse } from '../../../../shared';
import { conditionAtom, countItemsAtom, isPrintedStatusAtom } from '../atoms-page';
import { useAtomValue } from 'jotai';
import { ApiOperationState } from '../../../../shared/interfaces/api-operation-state.interface';

export const useGetProducts = (): {
  data?: InfiniteData<IInfiteScrollResponse<IProduct>>;
} & ApiOperationState => {
  // TODO: make hook where will be all properties
  const condition = useAtomValue(conditionAtom);

  const countItems = useAtomValue(countItemsAtom);

  const isPrintedStatus = useAtomValue(isPrintedStatusAtom)

return useInfiniteQuery<
    IInfiteScrollResponse<IProduct>,
    AxiosError<IServerError>
  >({
    queryKey: [condition, countItems, isPrintedStatus],
    queryFn: () => findMany({ condition, countItems, isPrinted: isPrintedStatus, page: 1 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next_cursor,
  });


};
