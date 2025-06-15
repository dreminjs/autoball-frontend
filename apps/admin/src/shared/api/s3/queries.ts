import { useMutation, useQuery } from '@tanstack/react-query';
import {
  IGetPresignUrlQueryParameters,
  IPresignUrl,
  PostPhotoDto,
} from '../../interfaces/s3/storage.dto';
import { QUERY_KEYS, SERVICE_URLS } from '../../constants';
import { ApiOperationState } from '../../interfaces/api-operation-state.interface';
import { AxiosError } from 'axios';
import { IServerError } from '../../interfaces/server-error';
import { findPresignUrl, postPhoto } from './service';

export const useGetPresignUrl = (
  dto: IGetPresignUrlQueryParameters
): { data?: IPresignUrl } & ApiOperationState => {
  const { data, isError, error, isSuccess, isPending } = useQuery<
    IPresignUrl,
    AxiosError<IServerError>
  >({
    queryKey: [SERVICE_URLS.storage, dto.content_type, dto.filename],
    queryFn: () => findPresignUrl(dto),
    enabled: dto.filename !== undefined && dto.content_type !== undefined,
  });

  return {
    data,
    isError,
    error,
    isSuccess,
    isPending,
  };
};

export const usePostPhoto = (): {
  mutate: (data: PostPhotoDto) => void;
} & ApiOperationState => {
  const { isError, isPending, isSuccess, error, mutate } = useMutation<
    any,
    AxiosError<IServerError>,
    PostPhotoDto
  >({
    mutationFn: (dto: PostPhotoDto) => postPhoto(dto),
    mutationKey: [QUERY_KEYS.post],
  });

  return {
    isError,
    isPending,
    isSuccess,
    error,
    mutate,
  };
};
