import axios from 'axios';
import { SERVICE_URLS } from '../../constants';
import {
  IGetPresignUrlQueryParameters,
  PostPhotoDto,
} from '../../interfaces/s3/storage.dto';
import { instance } from '../api-instance';

export const findPresignUrl = async (dto: IGetPresignUrlQueryParameters) => {
  const query = new URLSearchParams();

  if (dto.content_type) {
    query.append('content_type', dto.content_type);
  }

  if (dto.filename) {
    query.append('filename', dto.filename);
  }

  return (await instance.get(`${SERVICE_URLS.storage}?${query}`)).data;
};

export const postPhoto = async (dto: PostPhotoDto) => {
  return (
    await axios.put(`${dto.url}`, dto.files[0], {
      headers: {
        'Content-Type': dto.files[0].type, 
      },
    })
  ).data;
};

export const deleteMany = (data: string[]) => {
  return instance.delete(`${SERVICE_URLS.storage}`,{data})
}
