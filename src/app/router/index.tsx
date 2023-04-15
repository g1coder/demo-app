import {lazy, Suspense} from 'react';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

import CartPage from '@pages/CartPage';
import CatalogPage from '@pages/CatalogPage';
import ErrorPage from '@pages/ErrorPage';
import LandingPage from '@pages/LandingPage';
import PageNotFound from '@pages/PageNotFound';
import {CatalogLayout} from '@widgets/catalog';
import {LayoutWrapper} from '@widgets/main-layout';
import MainLayout from '@pages/MainLayout';
import {Routes} from '@shared/constants';
import PrivateRoute from './PrivateRoute';

const ContactsPage = lazy(() => import('@pages/ContactsPage'));
const AboutPage = lazy(() => import('@pages/AboutPage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const SignupPage = lazy(() => import('@pages/SignupPage'));

const AppRouter = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={<MainLayout />}
      errorElement={<ErrorPage />}
      children={[
        <Route
          key={Routes.LANDING_PAGE.key}
          path={Routes.LANDING_PAGE.path}
          element={<LandingPage />}
        />,
        <Route
          key={Routes.CONTACTS.key}
          path={Routes.CONTACTS.path}
          element={
            <Suspense>
              <ContactsPage />
            </Suspense>
          }
        />,
        <Route
          key={Routes.ABOUT.key}
          path={Routes.ABOUT.path}
          element={
            <Suspense>
              <AboutPage />
            </Suspense>
          }
        />,
        <Route
          key={Routes.CATALOG.key}
          path={Routes.CATALOG.path}
          element={
            <LayoutWrapper>
              <CatalogLayout />
            </LayoutWrapper>
          }
          children={[
            <Route index key={Routes.CATALOG.key} element={<CatalogPage />} />,
            <Route path={Routes.CART.path} element={<PrivateRoute />}>
              <Route key={Routes.CART.key} path={Routes.CART.path} element={<CartPage />} />,
            </Route>,
          ]}
        />,
      ]}
    />,
    <Route
      key={Routes.SIGN_IN.key}
      path={Routes.SIGN_IN.path}
      element={
        <Suspense>
          <LoginPage />
        </Suspense>
      }
    />,
    <Route
      key={Routes.SIGN_UP.key}
      path={Routes.SIGN_UP.path}
      element={
        <Suspense>
          <SignupPage />
        </Suspense>
      }
    />,
    <Route path="*" element={<PageNotFound />} />,
  ])
);

export default AppRouter;
