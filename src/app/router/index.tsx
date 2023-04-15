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
import RouteConstants from '@shared/constants/route.constants';
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
          key={RouteConstants.LANDING_PAGE.key}
          path={RouteConstants.LANDING_PAGE.path}
          element={<LandingPage />}
        />,
        <Route
          key={RouteConstants.CONTACTS.key}
          path={RouteConstants.CONTACTS.path}
          element={
            <Suspense>
              <ContactsPage />
            </Suspense>
          }
        />,
        <Route
          key={RouteConstants.ABOUT.key}
          path={RouteConstants.ABOUT.path}
          element={
            <Suspense>
              <AboutPage />
            </Suspense>
          }
        />,
        <Route
          key={RouteConstants.CATALOG.key}
          path={RouteConstants.CATALOG.path}
          element={
            <LayoutWrapper>
              <CatalogLayout />
            </LayoutWrapper>
          }
          children={[
            <Route index key={RouteConstants.CATALOG.key} element={<CatalogPage />} />,
            <Route path={RouteConstants.CART.path} element={<PrivateRoute />}>
              <Route key={RouteConstants.CART.key} path={RouteConstants.CART.path} element={<CartPage />} />,
            </Route>,
          ]}
        />,
      ]}
    />,
    <Route
      key={RouteConstants.LOGIN.key}
      path={RouteConstants.LOGIN.path}
      element={
        <Suspense>
          <LoginPage />
        </Suspense>
      }
    />,
    <Route
      key={RouteConstants.SIGNUP.key}
      path={RouteConstants.SIGNUP.path}
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
