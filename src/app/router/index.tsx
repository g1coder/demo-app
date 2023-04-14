import {lazy, Suspense} from 'react';
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import CartPage from '@pages/CartPage';
import CatalogPage from '@pages/CatalogPage';
import ErrorPage from '@pages/ErrorPage';
import LandingPage from '@pages/LandingPage';
import PageNotFound from '@pages/PageNotFound';
import {CatalogLayout} from '@widgets/catalog';
import {MainLayout,LayoutWrapper} from '@widgets/main-layout';
import AppRoutes from '@shared/constants/AppRoutes';

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
        <Route
          key={AppRoutes.CATALOG.key}
          path={AppRoutes.CATALOG.path}
          element={
            <Suspense>
              <LayoutWrapper>
                <CatalogLayout />
              </LayoutWrapper>
            </Suspense>
          }
          children={[
            <Route
              index
              key={AppRoutes.CATALOG.key}
              element={
                <Suspense>
                  <CatalogPage />
                </Suspense>
              }
            />,
            <Route
              key={AppRoutes.CART.key}
              path={AppRoutes.CART.path}
              element={
                <Suspense>
                  <CartPage />
                </Suspense>
              }
            />,
          ]}
        />,
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

export default AppRouter;
