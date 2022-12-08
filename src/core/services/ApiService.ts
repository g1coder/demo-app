import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';
import AuthService, {ACCESS_TOKEN_NAME} from 'core/services/AuthService';
import List from 'core/models/List';

const TOTAL_COUNT_HEADER = 'x-total-count';

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
  return async <T = any>(url: string, data?: AxiosRequestConfig['data'], preventRefresh?: boolean): Promise<T> => {
    try {
      return transformResponse(await func(url, data));
    } catch (error: any) {
      if (!preventRefresh && (error as AxiosError).request.status === 401) {
        await AuthService.tryRefreshToken();
        return transformResponse(await func(url, data));
      }
      throw error;
    }
  };
};

export const __axios = axios;

export default {
  get: proxy(axios.get),
  post: proxy(axios.post),
  patch: proxy(axios.patch),
  delete: proxy(axios.delete),
  put: proxy(axios.put),
};

