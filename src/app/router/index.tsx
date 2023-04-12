import {lazy, Suspense} from 'react';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import AppRoutes from 'app/router/AppRoutes';

import MainLayout from 'pages/MainLayout/MainLayout';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import ErrorPage from 'pages/ErrorPage';
import LandingPage from 'pages/LandingPage/LandingPage';
import CatalogLayoutRouter from 'features/catalog/pages/CatalogLayoutRouter';

const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const SignupPage = lazy(() => import('pages/SignupPage/SignupPage'));

const Index = createBrowserRouter(
  createRoutesFromElements([
    <Route
      path="/"
      element={<MainLayout />}
      errorElement={<ErrorPage />}
      children={[
        <Route key={AppRoutes.LANDING_PAGE.key} path={AppRoutes.LANDING_PAGE.path} element={<LandingPage />} />,
        <Route
          key={AppRoutes.CONTACTS.key}
          path={AppRoutes.CONTACTS.path}
          element={
            <Suspense>
              <ContactsPage />
            </Suspense>
          }
        />,
        <Route
          key={AppRoutes.ABOUT.key}
          path={AppRoutes.ABOUT.path}
          element={
            <Suspense>
              <AboutPage />
            </Suspense>
          }
        />,
        CatalogLayoutRouter,
      ]}
    />,

    <Route
      key={AppRoutes.LOGIN.key}
      path={AppRoutes.LOGIN.path}
      element={
        <Suspense>
          <LoginPage />
        </Suspense>
      }
    />,
    <Route
      key={AppRoutes.SIGNUP.key}
      path={AppRoutes.SIGNUP.path}
      element={
        <Suspense>
          <SignupPage />
        </Suspense>
      }
    />,
    <Route path="*" element={<PageNotFound />} />,
  ])
);

export default Index;
