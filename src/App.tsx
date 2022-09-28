import React, {Suspense, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Spinner from 'core/components/Spinner';
import LoginPage from 'app/pages/LoginPage/LoginPage';
import ThemeProvider from 'core/themes/ThemeProvider';
import AppContext, {IAppContext} from 'core/components/AppContext';
import {loadComponent} from 'core/services/ReactUtils';
import {IFormValues as ILoginFormValues} from 'app/pages/LoginPage/LoginForm';
import {IFormValues as ILoginResetPasswordFormValues} from 'app/pages/LoginPage/LoginResetPasswordForm';
import AuthService from 'core/services/AuthService';
import Toaster from 'core/components/Toaster';
import AppRoutes from 'core/constants/AppRoutes';

import MainLayout from 'app/pages/MainLayout/MainLayout';
import PageNotFound from 'app/pages/PageNotFound/PageNotFound';
import LandingPage from './app/pages/LandingPage/LandingPage';
import SignupPage from 'app/pages/SignupPage/SignupPage';
import {IFormValues as ISignupFormValues} from 'app/pages/SignupPage/SignupForm';

const CatalogLayoutRouter = loadComponent(() => import('features/catalog/pages/CatalogLayoutRouter'));
const ContactsPage = loadComponent(() => import('app/pages/ContactsPage/ContactsPage'));
const AboutPage = loadComponent(() => import('app/pages/AboutPage/AboutPage'));

function App() {
  const toasterRef = useRef<any>();
  const [user, setUser] = useState<{name: string} | undefined>();
  const navigate = useNavigate();

  const isAuthorized = useMemo(() => !!user, [user]);

  useEffect(() => {
    const fetchLogginedUser = async () => {
      const authUser = await AuthService.init();
      if (authUser) {
        setUser({name: authUser});
        navigate(AppRoutes.LANDING_PAGE.url);
      }
    };

    if (!isAuthorized) {
      fetchLogginedUser();
    }
  }, [isAuthorized, navigate]);

  const handleLogin = useCallback(
    (data: ILoginFormValues) => {
      return AuthService.login(data)
        .then(() => {
          setUser({name: data.username});
        })
        .then(() => {
          navigate(AppRoutes.LANDING_PAGE.url);
        })
        .catch(() => 'Invalid login or password');
    },
    [navigate]
  );

  const handleSignup = useCallback(
    (data: ISignupFormValues) => {
      return AuthService.register(data)
        .then(() => {
          setUser({name: data.firstName});
          navigate(AppRoutes.LANDING_PAGE.url);
        })
        .catch(() => 'Something went wrong');
    },
    [navigate]
  );

  const handleReset = useCallback(
    (data: ILoginResetPasswordFormValues) =>
      AuthService.resetPwd(data).catch(() => {
        return 'Something went wrong';
      }),
    []
  );

  const handleLogout = useCallback(() => {
    AuthService.logout().then(() => {
      setUser(undefined);
      navigate('/');
    });
  }, [navigate]);

  const context = useMemo<IAppContext>(() => ({user, logout: handleLogout}), [user, handleLogout]);

  return (
    <>
      <CssBaseline />
      <ThemeProvider>
        <AppContext.Provider value={context}>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route index element={<LandingPage />} />
                <Route path={AppRoutes.CATALOG.path} element={<CatalogLayoutRouter />} />
                <Route path={AppRoutes.CONTACTS.path} element={<ContactsPage />} />
                <Route path={AppRoutes.ABOUT.path} element={<AboutPage />} />
              </Route>
              <Route path={AppRoutes.LOGIN.path} element={<LoginPage onLogin={handleLogin} onReset={handleReset} />} />
              <Route path={AppRoutes.SIGNUP.path} element={<SignupPage onSignup={handleSignup} />} />
              <Route path="*" element={<PageNotFound redirectPath={'/'} />} />
            </Routes>
          </Suspense>
        </AppContext.Provider>

        <Toaster ref={toasterRef} />
      </ThemeProvider>
    </>
  );
}

export default App;
