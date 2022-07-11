import axios, {AxiosResponse} from 'axios';

const proxy = (func: (...args: any[]) => Promise<AxiosResponse>) => {
  return <T = any>(...args: any[]): Promise<T> => {
    return new Promise((resolve, reject) => {
      func(...args)
        .then((response) => {
          resolve(response.data);
        })
        .catch(reject);
    });
  };
};

export const __axios = axios;

export default {
  get: proxy(axios.get),
  post: proxy(axios.post),
  patch: proxy(axios.patch),
  delete: proxy((url, data, config) =>
    axios.request({
      url,
      method: 'delete',
      data,
      ...config,
    })
  ),
  put: proxy(axios.put),
};
