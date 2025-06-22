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
import { deleteMany, findPresignUrl, postPhoto } from './service';

export const useGetPresignUrl = (
  dto: IGetPresignUrlQueryParameters
): { data?: IPresignUrl } & ApiOperationState => {
  return useQuery<
    IPresignUrl,
    AxiosError<IServerError>
  >({
    queryKey: [SERVICE_URLS.storage, dto.content_type, dto.filename],
    queryFn: () => findPresignUrl(dto),
    enabled: dto.filename !== undefined && dto.content_type !== undefined,
  });
};

export const usePostPhoto = (): {
  mutate: (data: PostPhotoDto) => void;
} & ApiOperationState => {
  return useMutation<
    any,
    AxiosError<IServerError>,
    PostPhotoDto
  >({
    mutationFn: (dto: PostPhotoDto) => postPhoto(dto),
    mutationKey: [QUERY_KEYS.post],
  });
};

export const useDeletePhotos = () => {
  return useMutation<
    any,
    AxiosError<IServerError>,
    string[]
  >({
    mutationFn: (dto: string[]) => deleteMany(dto),
    mutationKey: [QUERY_KEYS.post],
  });
};