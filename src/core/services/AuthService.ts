import api from 'core/services/ApiService';

const login = (params: {username: string; password: string}) => api.post(`/api/login`, {params});

const resetPwd = (params: {email: string}) => api.post(`/api/reset-password`, {params});

export default {
  login,
  resetPwd,
};
