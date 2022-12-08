import axios from 'axios';
import api from 'core/services/ApiService';
import ICredential from 'core/models/ICredential';

export const ACCESS_TOKEN_NAME = 'accessToken';
export const REFRESH_TOKEN_NAME = 'refreshToken';
export const EXPIRED_AT_SEC = 'expiresAt';

function applyCredentials(credential?: ICredential): Promise<void> {
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

function login(params: {email: string; password: string}): Promise<void> {
  return api.post<ICredential>(`/api/v1/auth/signin`, params, true).then(applyCredentials);
}

const register = (params: {firstName: string; lastName: string; email: string; password: string}) =>
  api.post(`/api/register`, {params: {...params, first_name: params.firstName, last_name: params.lastName}});

const resetPwd = (params: {email: string}) => api.post(`/api/reset-password`, {params});

function logout(): Promise<void> {
  return api.post(`/api/v1/auth/logout`, null, true).finally(applyCredentials);
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
    window.location.replace('/login');
    throw error;
  }
}

function signup(params: {email: string; password: string}, token: string): Promise<void> {
  return api.post<ICredential>(`/api/v1/auth/signup`, {...params, inviteToken: token}, true).then(applyCredentials);
}

export default {
  login,
  resetPwd,
  logout,
  register,
  tryRefreshToken,
  signup
};
