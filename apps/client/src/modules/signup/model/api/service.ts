import { instance } from '../../../../shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';
import { ITokens } from "@autoball-frontend/shared-types"
import { TSignupForm } from '../signup.type';

export async function index(dto: TSignupForm): Promise<ITokens> {
  return (await instance.post(`${SERVICE_URLS.auth}/${QUERY_KEYS.signup}`, dto)).data
}
