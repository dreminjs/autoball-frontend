import { API_URL } from "../constants";
import axios from "axios";
import errorCatch from "./api-error";
import { ITokens } from "@autoball-frontend/shared-types";


export const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
	headers: {
		"Authorization": `Bearer ${localStorage.getItem("accessToken")}`
	}
});


let retryCount = 0

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config
		if (
			(error.response.status === 401) &&
			error.config &&
			!error.config._isRetry &&
			retryCount < 2
		) {
			originalRequest._isRetry = true
			retryCount += 1
			try {
			 const res = (await instance.post("auth/refresh")).data as ITokens

			 localStorage.setItem("accessToken", res.access_token)

			} catch (error: any) {
				if (errorCatch(error) === 'jwt expired') {
					// set auth false
				}
			}
		}

		throw error
	}
)