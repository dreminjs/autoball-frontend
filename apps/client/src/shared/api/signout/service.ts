import { QUERY_KEYS, SERVICE_URLS } from "@/shared/constants";
import { instance } from "../api-instance";



export const index = () => instance.delete(`${SERVICE_URLS.auth}/${QUERY_KEYS.signout}`)