import {lazy, Suspense} from 'react';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

import CartPage from 'src/pages/cart-page';
import CatalogPage from 'src/pages/catalog-page';
import ErrorPage from 'src/pages/error-page';
import LandingPage from 'src/pages/landing-page';
import PageNotFound from 'src/pages/page-not-found';
import {CatalogLayout} from '@widgets/catalog';
import {LayoutWrapper} from '@widgets/main-layout';
import {MainLayout} from '@pages/main-layout';
import {Routes} from '@shared/constants';
import PrivateRoute from './private-route';

const ContactsPage = lazy(() => import('src/pages/contacts-page'));
const AboutPage = lazy(() => import('src/pages/about-page'));
const LoginPage = lazy(() => import('src/pages/login-page'));
const SignupPage = lazy(() => import('src/pages/signup-page'));

const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={<MainLayout />}
      errorElement={<ErrorPage />}
      children={[
        <Route key={Routes.LANDING_PAGE.key} path={Routes.LANDING_PAGE.path} element={<LandingPage />} />,
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
            <Route key={Routes.CART.key} path={Routes.CART.path} element={<PrivateRoute />}>
              <Route index element={<CartPage />} />,
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

export default Router;
