import { IInfiteScrollResponse, IUser } from "@autoball-frontend/shared-types"
import { instance } from "../../../shared/api/api-instance"
import { SERVICE_URLS } from "../../../shared/constants"
import { IFindManyUsersQueryParametersDto } from "../model/dto/find-many-users-query-parameters.dto"
import { IChangeUserRoleDto } from "../model/dto/change-user-role.dto"


export const findOne = async (id: string) => {
    return await instance.get(`${SERVICE_URLS.user}/${id}`)
}

export const findMany = async (params: IFindManyUsersQueryParametersDto): Promise<IInfiteScrollResponse<IUser>> => {
  const searchParams = new URLSearchParams();

  if (params.name !== null && params.name !== undefined) {
    searchParams.append('name', params.name);
  }
  if (params.phone_number !== null && params.phone_number !== undefined) {
    searchParams.append('phone_number', params.phone_number);
  }
  if (params.status !== null && params.status !== undefined) {
    searchParams.append('status', params.status);
  }
  if (params.role !== null && params.role !== undefined) {
    searchParams.append('role', params.role);
  }

  typeof params.cursor === "string" && searchParams.append("cursor", params.cursor)

  return (await instance.get(`${SERVICE_URLS.user}?${searchParams.toString()}`)).data
};

export const deleteOne = async (id: string) => {
    return await instance.delete(`${SERVICE_URLS.user}/${id}`)
}

export const changeRole = async (dto: IChangeUserRoleDto, userId: string) => {
  return await instance.patch(`${SERVICE_URLS.user}/${userId}/role?role=${dto.role}`)
}