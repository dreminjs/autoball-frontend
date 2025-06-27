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
import { useNotificationActions } from '../../../modules/notifications';

export const useGetPresignUrl = (
  dto: IGetPresignUrlQueryParameters
): { data?: IPresignUrl } & ApiOperationState => {
  return useQuery<IPresignUrl, AxiosError<IServerError>>({
    queryKey: [SERVICE_URLS.storage, dto.content_type, dto.filename],
    queryFn: () => findPresignUrl(dto),
    enabled: dto.filename !== undefined && dto.content_type !== undefined,
  });
};

export const usePostPhoto = () => {
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();

  const { mutate, ...props } = useMutation<
    any,
    AxiosError<IServerError>,
    PostPhotoDto
  >({
    mutationFn: (dto: PostPhotoDto) => postPhoto(dto),
    mutationKey: [QUERY_KEYS.post],
    onError: () => {
      remove('info');
      addError({ message: 'Не удачное задрузка фото', duration: 3000 });
    },
    onSuccess: () => {
      remove('info');
      addSuccess({ message: 'Успешное задрузка фото!', duration: 3000 });
    },
  });

  const handleMutate = (data: PostPhotoDto) => {
    addInfo({ message: 'Загрузка фотографии...' });
    mutate(data);
  };

  return {
    mutate: handleMutate,
    ...props,
  };
};

export const useDeletePhotos = () => {
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();

  const { mutate, ...props } = useMutation<
    any,
    AxiosError<IServerError>,
    string[]
  >({
    mutationFn: (dto: string[]) => deleteMany(dto),
    mutationKey: [QUERY_KEYS.post],
    onError: () => {
      remove('info');
      addError();
    },
    onSuccess: () => {
      remove('info');
      addSuccess();
    },
  });
  const handleMutate = (data: string[]) => {
    addInfo();
    mutate(data);
  };

  return {
    mutate: handleMutate,
    ...props,
  };
};
