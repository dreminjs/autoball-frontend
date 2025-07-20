import axios from 'axios';
// import { ITokens } from '@autoball-frontend/shared-types';
import { API_URL } from '../constants';
import { ITokens } from '@autoball-frontend/shared-types';

const createInstance = () => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

  const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });

  let retryCount = 0;

  instance.interceptors.response.use(
    (config) => config,
     async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry &&
      retryCount < 2
    ) {
      originalRequest._isRetry = true;
      retryCount += 1;
        const res = (await instance.post('auth/refresh')).data as ITokens;

        localStorage.setItem('accessToken', res.access_token);
        instance.defaults.headers[
          'Authorization'
        ] = `Bearer ${res.access_token}`;

        if (res.access_token) {
          window.location.href = '/product';
        }
        return instance(originalRequest);
    }

    throw error;
  }
  );

  return instance;
};

export const instance = createInstance();
