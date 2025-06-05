import { instance } from '../../../../shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';
import { ISigninForm } from '../types/signin.interface';
import { ITokens } from "@autoball-frontend/shared-types"


export async function index(dto: ISigninForm): Promise<ITokens> {
  return (await instance.post(`${SERVICE_URLS.auth}/${QUERY_KEYS.signin}`, dto)).data
}
