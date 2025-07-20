import { AuthForm } from '@/shared/types/auth.types';
import { instance } from '../../../../shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';
import { ITokens } from "@autoball-frontend/shared-types"


export async function signin(dto: AuthForm): Promise<ITokens> {
  return (await instance.post(`${SERVICE_URLS.auth}/${QUERY_KEYS.signin}`, dto)).data
}
