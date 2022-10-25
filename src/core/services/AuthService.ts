import api from 'core/services/ApiService';

const AUTH_FLAG_NAME = 'is-authenticated';

const init = (): Promise<{id: string; name: string} | null> => {
  return api.get('api/init');
};

const login = (params: {username: string; password: string}) => api.post(`/api/login`, {params});
const register = (params: {firstName: string; lastName: string; email: string; password: string}) =>
  api.post(`/api/register`, {params: {...params, first_name: params.firstName, last_name: params.lastName}});
const resetPwd = (params: {email: string}) => api.post(`/api/reset-password`, {params});
const logout = () => {
  sessionStorage.removeItem(AUTH_FLAG_NAME);
  return Promise.resolve();
};

export default {
  init,
  login,
  resetPwd,
  logout,
  register,
};
