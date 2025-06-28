import { instance } from '../../../shared/api/api-instance';
import { SERVICE_URLS } from '../../../shared/constants';

export const findMany = async ({ cursor }: { cursor: null | number }) => {
  const queryParameters = new URLSearchParams();

  if (cursor) queryParameters.append('cursor', cursor.toString());

  return (await instance.get(SERVICE_URLS.carpart)).data
};
