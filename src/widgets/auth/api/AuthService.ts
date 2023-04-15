import api, {applyCredentials} from '@shared/api/services/ApiService';
import ICredential from '@shared/model/ICredential';
import IUser from '../model/IUser';

function login(params: {email: string; password: string}): Promise<void> {
  return api.post<ICredential>(`/api/v1/auth/signin`, params, true).then(applyCredentials);
}

const register = (params: {firstName: string; lastName: string; email: string; password: string}) =>
  api.post(`/api/register`, {params: {...params, first_name: params.firstName, last_name: params.lastName}});

const resetPwd = (params: {email: string}) => api.post(`/api/reset-password`, {params});

function logout(): Promise<void> {
  return api.post<void>(`/api/v1/auth/logout`, null, true).finally(applyCredentials);
}

function signup(params: {email: string; password: string}, token: string): Promise<void> {
  return api.post<ICredential>(`/api/v1/auth/signup`, {...params, inviteToken: token}, true).then(applyCredentials);
}

function getProfile(): Promise<IUser> {
  return api.get<IUser>(`/api/v1/profile`);
}

export default {
  login,
  resetPwd,
  logout,
  register,
  signup,
  getProfile,
};
