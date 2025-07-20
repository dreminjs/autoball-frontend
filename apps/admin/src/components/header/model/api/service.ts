import { instance } from '../../../../shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';

export const index = async () =>
  await instance.delete(`${SERVICE_URLS.auth}/${QUERY_KEYS.signout}`);
