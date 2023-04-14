import {createContext, ReactNode, useCallback, useMemo, useState} from 'react';
import ErrorService from '@shared/api/services/ErrorService';
import useData from '@shared/lib/hooks/useData';
import Spinner from '@shared/ui/Spinner';
import AuthService from '../api/AuthService';
import IUser from '../model/IUser';

export interface IAuthContext {
  user: IUser | undefined;
  login: (params: {email: string; password: string}) => Promise<void | string>;
  signup: (params: {email: string; password: string}, token: string) => Promise<void>;
  logout: () => void;
  reset: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  user: undefined,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (params: {email: string; password: string}) => Promise.resolve(),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  signup: (params: {email: string; password: string}, token: string) => Promise.resolve(),
  logout: () => {
    return;
  },
  reset: () => {
    return;
  },
});

interface IProps {
  children: ReactNode;
}

const AuthProvider = ({children}: IProps) => {
  const [user, setUser] = useState<IUser | undefined>();

  const [{ready, loading}] = useData(
    {
      fetch: () => loadUserProfile(),
      data: undefined,
    },
    []
  );

  const loadUserProfile = useCallback(() => {
    return AuthService.getProfile().then((user) => {
      setUser(user || {});
    });
  }, []);

  const handleLogin = useCallback((params: {email: string; password: string}) => {
    return AuthService.login(params)
      .then(() => {
        window.location.replace('/users');
      })
      .catch((e: Error) => {
        throw new Error(e.message);
      });
  }, []);

  const handleLogout = useCallback(() => {
    AuthService.logout().finally(() => setUser(undefined));
  }, []);

  const handleSignup = useCallback(
    (params: {email: string; password: string}, token: string) => {
      return AuthService.signup(params, token).then(loadUserProfile).catch(ErrorService.defaultHandler);
    },
    [loadUserProfile]
  );

  const handleReset = useCallback(() => {
    return user ? AuthService.resetPwd({email: user?.email}).finally(() => setUser(undefined)) : Promise.resolve();
  }, [user]);

  const contextValue: IAuthContext = useMemo(
    () => ({
      login: handleLogin,
      logout: handleLogout,
      signup: handleSignup,
      reset: handleReset,
      user,
    }),
    [handleLogin, handleLogout, handleSignup, handleReset, user]
  );

  if (!ready || loading) {
    return <Spinner />;
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
