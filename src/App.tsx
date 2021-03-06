import React, {Suspense, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
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
const DashboardPage = loadComponent(() => import('app/components/DashboardPage/DashboardPage'));
const CountriesPage = loadComponent(() => import('features/countries/components/CountriesPage/CountriesPage'));


function App() {
  const toasterRef = useRef<any>();
  const [user, setUser] = useState<{name: string} | undefined>();
  const navigate = useNavigate();

  const isAuthorized = useMemo(() => !!user, [user]);

  useEffect(() => {
    const fetchLogginedUser = async () => {
      const authUser = await AuthService.init();
      if (authUser) {
        setUser({name: authUser})
        navigate(AppRoutes.COUNTRIES.path);
      }
    }

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
          navigate(AppRoutes.COUNTRIES.path);
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
    <ThemeProvider>
      <AppContext.Provider value={context}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path={AppRoutes.LOGIN.path} element={<LoginPage onLogin={handleLogin} onReset={handleReset} />} />
            <Route path="/" element={<MainLayout isAllowed={isAuthorized} />}>
              <Route path={AppRoutes.DASHBOARD.path} element={<DashboardPage />} />
              <Route path={AppRoutes.COUNTRIES.path} element={<CountriesPage />} />
            </Route>
            <Route path="*" element={<PageNotFound redirectPath={AppRoutes.LOGIN.path} />} />
          </Routes>
        </Suspense>
      </AppContext.Provider>

      <Toaster ref={toasterRef} />
    </ThemeProvider>
  );
}

export default App;
