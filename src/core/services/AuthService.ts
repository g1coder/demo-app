import api from 'core/services/ApiService';

const AUTH_FLAG_NAME = 'is-authenticated';

const init = () => {
  return Promise.resolve(sessionStorage.getItem(AUTH_FLAG_NAME));
}
const login = (params: {username: string; password: string}) => api.post(`/api/login`, {params});
const resetPwd = (params: {email: string}) => api.post(`/api/reset-password`, {params});
const logout = () => {
  sessionStorage.removeItem(AUTH_FLAG_NAME);
  return Promise.resolve();
}

export default {
  init,
  login,
  resetPwd,
  logout
};
