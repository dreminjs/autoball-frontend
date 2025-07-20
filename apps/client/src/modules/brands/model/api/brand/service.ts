import { QUERY_KEYS } from '@/shared/constants';
import { instance } from '../../../../../shared/api/api-instance';
import { IArgs } from './queries';

export const findMany = async (
  args: Omit<IArgs, 'inView'> & { pageParam: unknown }
) => {
  const queryParams = new URLSearchParams();

  if (args.search) queryParams.set('search', args.search);

  queryParams.set('take', '10');

  return (
    await instance.get(
      `${args.type}${QUERY_KEYS.brand}?${queryParams}&cursor=${args.pageParam}`
    )
  ).data;
};
