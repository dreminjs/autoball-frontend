import { API_URL } from '../constants';
import axios from 'axios';
import errorCatch from './api-error';
import { ITokens } from '@autoball-frontend/shared-types';

export const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  } else {
    delete config.headers.Authorization;
  }
  
  return config;
});

let retryCount = 0;

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      error.config &&
      !error.config._isRetry &&
      retryCount < 2
    ) {
      originalRequest._isRetry = true;
      retryCount += 1;
      try {
        const res = (await instance.post('auth/refresh')).data as ITokens;

        localStorage.setItem('accessToken', res.access_token);
        
        // Убираем принудительный редирект здесь
        return instance(originalRequest);
      } catch (error: any) {
        if (errorCatch(error) === 'jwt expired') {
          localStorage.removeItem('accessToken');
          window.location.href = "/";
        }
        throw error;
      }
    }

    throw error;
  }
);
