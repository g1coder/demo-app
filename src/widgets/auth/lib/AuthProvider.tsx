import {ReactNode, useCallback, useMemo, useState} from 'react';
import ErrorService from '@shared/api/services/ErrorService';
import useData from '@shared/lib/hooks/useData';
import Spinner from '@shared/ui/Spinner';
import {useNavigate} from 'react-router-dom';
import RouteConstants from '@shared/constants/route.constants';
import AuthService from '../api/AuthService';
import IUser from '../model/IUser';
import {AuthContext, IAuthContext} from './AuthContext';

interface IProps {
  children: ReactNode;
}

const AuthProvider = ({children}: IProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | undefined>();

  const [{ready, loading}] = useData(
    {
      fetch: () => loadUserProfile(),
      data: undefined,
    },
    []
  );

  const loadUserProfile = useCallback(() => AuthService.getProfile().then(setUser), []);

  const handleLogin = useCallback((params: {email: string; password: string}) => {
    return AuthService.login(params)
      .then(loadUserProfile)
      .catch((error: Error) => {
        throw new Error(error.message);
      });
  }, []);

  const handleLogout = useCallback(() => {
    AuthService.logout().finally(() => {
      navigate(RouteConstants.LANDING_PAGE.url);
      setUser(undefined);
    });
  }, []);

  const handleSignup = useCallback(
    (params: {email: string; password: string}, token: string) =>
      AuthService.signup(params, token).then(loadUserProfile).catch(ErrorService.defaultHandler),
    [loadUserProfile]
  );

  const handleReset = useCallback(
    () => (user ? AuthService.resetPwd({email: user?.email}).finally(() => setUser(undefined)) : Promise.resolve()),
    [user]
  );

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
