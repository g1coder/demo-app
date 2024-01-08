import {API, applyCredentials} from 'src/shared/services';
import {ICredential, IUser} from '../types';
import {useMutation, UseMutationOptions, useQuery, UseQueryOptions} from '@tanstack/react-query';
import {resetCredentials} from '@shared/services/api-service';
import {ILoginFormValues, ISignUpFormValues} from '@features/authorization';
import {ErrorModel} from '@shared/types';

export const useProfile = (options?: UseQueryOptions<IUser, ErrorModel>) =>
  useQuery<IUser, ErrorModel>({
    queryKey: ['profile'],
    queryFn: () => API.get<IUser>(`/api/v1/profile`),
    ...options,
  });

export const useSignIn = () =>
  useMutation<void, ErrorModel, ILoginFormValues>({
    mutationFn: async (params: ILoginFormValues) => {
      const response = await API.post<ICredential>(`/api/v1/auth/signin`, params, true);
      return applyCredentials(response.accessToken, response.refreshToken);
    },
  });

export const useSignUp = () =>
  useMutation<void, ErrorModel, ISignUpFormValues>({
    mutationFn: async (params: ISignUpFormValues) => {
      const response = await API.post<ICredential>(`/api/v1/auth/signup`, {params}, true);
      return applyCredentials(response.accessToken, response.refreshToken);
    },
  });

export const useLogout = (options?: UseMutationOptions<unknown, ErrorModel>) =>
  useMutation<unknown, ErrorModel>({
    mutationFn: async () => {
      await API.post<void>(`/api/v1/auth/logout`, null, true);
      return resetCredentials();
    },
    ...options,
  });

export const useResetPassword = () =>
  useMutation<void, ErrorModel, {email: string}>({
    mutationFn: (params: {email: string}) => API.post(`/api/reset-password`, {params}),
  });
