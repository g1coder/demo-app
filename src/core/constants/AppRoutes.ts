import _ from 'lodash';

export enum RouteNames {
  LANDING_PAGE = 'LANDING_PAGE',
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  CATALOG = 'CATALOG',
  CART = 'CART',
  CONTACTS = 'CONTACTS',
}

interface IAppRouteConfig {
  url: string;
  path: string;
  name?: string;
  hidden?: boolean;
}

type AppRoutesType = {[T in keyof typeof RouteNames]: IAppRouteConfig};

const AppRoutes: AppRoutesType = {
  [RouteNames.LANDING_PAGE]: {path: '/', url: '/', hidden: true},
  [RouteNames.LOGIN]: {path: '/login', url: '/login', hidden: true},
  [RouteNames.SIGNUP]: {path: '/register', url: '/register', hidden: true},
  [RouteNames.CART]: {path: '/cart', url: '/catalog/cart', hidden: true},
  [RouteNames.CATALOG]: {path: 'catalog/*', url: 'catalog', name: 'Catalog'},
  [RouteNames.CONTACTS]: {path: '/contacts', url: 'contacts', name: 'Contacts'},
};

export const getNameByPath = (path: string) => _.find(AppRoutes, (r) => r.path === path || `/${r.path}` === path)?.name;

export default AppRoutes;
