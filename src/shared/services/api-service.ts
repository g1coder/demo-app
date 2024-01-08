import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';
import {Routes} from '@shared/constants';
import {List} from '@shared/types';

const TOTAL_COUNT_HEADER = 'x-total-count';
export const ACCESS_TOKEN_NAME = 'accessToken';
export const REFRESH_TOKEN_NAME = 'refreshToken';

// axios.interceptors.request.use((config: AxiosRequestConfig) => {
//   const token = localStorage.getItem(ACCESS_TOKEN_NAME);
//   if (token) {
//     config.headers = {...config.headers, Authorization: `Bearer ${token}`};
//   }
//   return config;
// });

const transformResponse = (response: AxiosResponse): AxiosResponse['data'] => {
  const totalCount = response.headers[TOTAL_COUNT_HEADER];
  return totalCount ? new List(response.data, +totalCount) : response.data;
};

const proxy = (func: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>) => {
  return async <T = unknown>(url: string, data?: AxiosRequestConfig['data'], preventRefresh?: boolean): Promise<T> => {
    try {
      return transformResponse(await func(url, data));
    } catch (error: unknown) {
      if (!preventRefresh && (error as AxiosError).request.status === 401) {
        await tryRefreshToken();
        return transformResponse(await func(url, data));
      }
      throw error;
    }
  };
};

export function applyCredentials(accessToken: string, refreshToken: string): Promise<void> {
  return new Promise((resolve) => {
    localStorage.setItem(ACCESS_TOKEN_NAME, accessToken);
    localStorage.setItem(REFRESH_TOKEN_NAME, refreshToken);
    resolve();
  });
}

export function resetCredentials(): Promise<void> {
  return new Promise((resolve) => {
    localStorage.removeItem(ACCESS_TOKEN_NAME);
    localStorage.removeItem(REFRESH_TOKEN_NAME);
    resolve();
  });
}

async function tryRefreshToken(): Promise<void> {
  const token = localStorage.getItem(REFRESH_TOKEN_NAME);
  if (!token) return Promise.reject('Refresh token not found');

  try {
    const {data} = await axios.post<{accessToken: string; refreshToken: string}>('/api/v1/auth/token', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return applyCredentials(data.accessToken, data.refreshToken);
  } catch (error) {
    await resetCredentials();
    window.location.replace(Routes.SIGN_IN.url);
    throw error;
  }
}

export default {
  get: proxy(axios.get),
  post: proxy(axios.post),
  patch: proxy(axios.patch),
  delete: proxy(axios.delete),
  put: proxy(axios.put),
};
