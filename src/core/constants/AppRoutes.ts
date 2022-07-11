import _ from 'lodash';

export enum RouteNames {
  LOGIN = 'LOGIN',
  DASHBOARD = 'DASHBOARD',
  COUNTRIES = 'COUNTRIES',
}

interface IAppRouteConfig {
  path: string;
  name?: string;
  hidden?: boolean;
}

type AppRoutesType = {[T in keyof typeof RouteNames]: IAppRouteConfig};

const AppRoutes: AppRoutesType = {
  [RouteNames.LOGIN]: {path: '/login', hidden: true},
  [RouteNames.DASHBOARD]: {path: '/dashboard', name: 'Dashboard'},
  [RouteNames.COUNTRIES]: {path: '/countries', name: 'Countries'},
};

export const getNameByPath = (path: string) => _.find(AppRoutes, (r) => r.path === path || `/${r.path}` === path)?.name;

export default AppRoutes;
