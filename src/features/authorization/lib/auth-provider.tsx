import {ReactNode, useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ErrorService} from '@shared/services/';
import {Spinner} from '@shared/ui-kit';
import {Routes} from '@shared/constants';
import {IUser} from '../types';
import {AuthContext, IAuthContext} from './auth-context';
import {useLogout, useProfile} from '@features/authorization';

interface IProps {
  children: ReactNode;
}

export const AuthProvider = ({children}: IProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>();

  const userProfile = useProfile({
    onSuccess: (data) => {
      setUser(data);
    },
    onError: ErrorService.defaultHandler,
  });
  const logout = useLogout();

  const contextValue: IAuthContext = useMemo(
    () => ({
      logout: () =>
        logout.mutate(undefined, {
          onSuccess: () => {
            navigate(Routes.LANDING_PAGE.url);
            setUser(undefined);
          },
        }),
      user,
    }),
    [user]
  );

  if (userProfile.isLoading) {
    return <Spinner />;
  }

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
