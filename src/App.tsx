import React, {Suspense, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Spinner from 'core/components/Spinner';
import LoginPage from 'app/components/AnonymousLayout/LoginPage';
import ThemeProvider from 'core/themes/ThemeProvider';
import AppContext, {IAppContext} from 'core/components/AppContext';
import {IFormValues as ILoginFormValues} from 'app/components/AnonymousLayout/LoginForm';
import {IFormValues as ILoginResetPasswordFormValues} from 'app/components/AnonymousLayout/LoginResetPasswordForm';
import AuthService from 'core/services/AuthService';
import Toaster from 'core/components/Toaster';
import {loadComponent} from 'core/services/ReactUtils';
import AppRoutes from 'core/constants/AppRoutes';

import MainLayout from 'app/components/MainLayout/MainLayout';
import PageNotFound from 'app/components/PageNotFound/PageNotFound';
import LandingPage from './app/components/LandingPage/LandingPage';
const CatalogPage = loadComponent(() => import('features/shop/pages/CatalogPage/CatalogPage'));

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
        navigate(AppRoutes.LANDING_PAGE.path);
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
          navigate(AppRoutes.LANDING_PAGE.path);
        })
        .catch((e) => {
          throw Error(e.message);
        });
    },
    [navigate]
  );

  const handleReset = useCallback(
    (data: ILoginResetPasswordFormValues) =>
      AuthService.resetPwd(data).catch((e) => {
        toasterRef.current?.show(String(e));
        throw Error(e.message);
      }),
    []
  );

  const handleLogout = useCallback(() => {
    AuthService.logout().then(() => {
      setUser(undefined);
      navigate(AppRoutes.LOGIN.path);
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
                <Route path={AppRoutes.SHOP.path} element={<CatalogPage />} />
              </Route>
              <Route path={AppRoutes.LOGIN.path} element={<LoginPage onLogin={handleLogin} onReset={handleReset} />} />
              {/*<Route path="/profile" element={<MainLayout />}>*/}
              {/*  /!*<Route path={AppRoutes.DASHBOARD.path} element={<DashboardPage />} />*!/*/}
              {/*</Route>*/}
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
