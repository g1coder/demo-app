import _ from 'lodash';

export enum RouteNames {
  LANDING_PAGE = 'LANDING_PAGE',
  LOGIN = 'LOGIN',

  SHOP = 'SHOP',
}

interface IAppRouteConfig {
  path: string;
  name?: string;
  hidden?: boolean;
}

type AppRoutesType = {[T in keyof typeof RouteNames]: IAppRouteConfig};

const AppRoutes: AppRoutesType = {
  [RouteNames.LANDING_PAGE]: {path: '/', hidden: true},
  [RouteNames.LOGIN]: {path: '/login', hidden: true},
  [RouteNames.SHOP]: {path: 'catalog', name: 'Catalog'},
};

export const getNameByPath = (path: string) => _.find(AppRoutes, (r) => r.path === path || `/${r.path}` === path)?.name;

export default AppRoutes;
