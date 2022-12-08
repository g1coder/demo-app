import React, {useCallback, useMemo, useState} from 'react';
import {RouterProvider} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Spinner from 'core/components/Spinner';
import ThemeProvider from 'core/themes/ThemeProvider';
import AppContext, {IAppContext} from 'app/AppContext';
import AuthService from 'core/services/AuthService';
import Toaster from 'core/components/Toaster';
import IUser from 'core/models/IUser';
import ProfileService from 'core/services/ProfileService';
import useData from 'core/hooks/useData';
import ErrorService from 'core/services/ErrorService';
import Router from 'app/router/Router';

function App() {
  const [user, setUser] = useState<IUser | undefined>();

  const loadUserProfile = useCallback(() => {
    return ProfileService.getProfile().then((user) => {
      setUser(user || {});
    });
  }, []);

  const [{ready, loading}] = useData(
    {
      fetch: () => loadUserProfile(),
      data: undefined,
    },
    []
  );

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

  const contextValue: IAppContext = useMemo(
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

  return (
    <>
      <CssBaseline />
      <AppContext.Provider value={contextValue}>
        <ThemeProvider>
          <RouterProvider router={Router} fallbackElement={<Spinner />} />
          <Toaster />
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
