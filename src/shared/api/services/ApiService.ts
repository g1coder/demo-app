import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';
import { Routes } from "@shared/constants";
import ICredential from "../../model/ICredential";
import List from '../../models/List';

const TOTAL_COUNT_HEADER = 'x-total-count';
export const ACCESS_TOKEN_NAME = 'accessToken';
export const REFRESH_TOKEN_NAME = 'refreshToken';
export const EXPIRED_AT_SEC = 'expiresAt';

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);
  if (token) {
    config.headers = {...config.headers, Authorization: `Bearer ${token}`};
  }
  return config;
});

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

export function applyCredentials(credential?: ICredential): Promise<void> {
  return new Promise((resolve) => {
    if (credential) {
      localStorage.setItem(ACCESS_TOKEN_NAME, credential.accessToken);
      localStorage.setItem(REFRESH_TOKEN_NAME, credential.refreshToken);
      localStorage.setItem(EXPIRED_AT_SEC, String(credential.expiresAt));
    } else {
      localStorage.removeItem(ACCESS_TOKEN_NAME);
      localStorage.removeItem(REFRESH_TOKEN_NAME);
      localStorage.removeItem(EXPIRED_AT_SEC);
    }
    resolve();
  });
}

async function tryRefreshToken(): Promise<void> {
  const token = localStorage.getItem(REFRESH_TOKEN_NAME);
  if (!token) return Promise.reject('Refresh token not found');

  try {
    return await axios
      .post<ICredential>('/api/v1/auth/token', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        applyCredentials(response.data);
      });
  } catch (error) {
    applyCredentials();
    window.location.replace(Routes.SIGN_IN.url);
    throw error;
  }
}

export const __axios = axios;

export default {
  get: proxy(axios.get),
  post: proxy(axios.post),
  patch: proxy(axios.patch),
  delete: proxy(axios.delete),
  put: proxy(axios.put),
};
