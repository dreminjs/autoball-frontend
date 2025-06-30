import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../shared/constants';
import { changeRole, findMany, findOne } from './services';
import { IFindManyUsersQueryParametersDto } from '../model/dto/find-many-users-query-parameters.dto';
import { IInfiteScrollResponse, IUser } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/types/server-error';
import { IChangeUserRoleDto } from '../model/dto/change-user-role.dto';

export const useGetUsers = (
  data: Omit<IFindManyUsersQueryParametersDto, 'cursor'>
) =>
  useInfiniteQuery<IInfiteScrollResponse<IUser>, AxiosError<IServerError>>({
    queryKey: [SERVICE_URLS.user, Object.values(data)],
    queryFn: ({ pageParam }) => findMany({ ...data, cursor: pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.next_cursor,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

export const useGetUser = (id: string) => {
  return useQuery({
    queryKey: [SERVICE_URLS.user, id],
    queryFn: () => findOne(id),
  });
};

export const useChangeRole = () => {
  return useMutation({
    mutationFn: (data: IChangeUserRoleDto & { userId: string }) =>
      changeRole({ role: data.role }, data.userId),
  });
};
