import _ from 'lodash';

export enum ShopRouteNames {
  SHOP = 'SHOP',
}

interface IAppRouteConfig {
  url: string;
  path: string;
  name: string;
}

type ShopRoutesType = {[T in keyof typeof ShopRouteNames]: IAppRouteConfig};

const ShopRoutes: ShopRoutesType = {
  [ShopRouteNames.SHOP]: {path: 'catalog/*', url: 'catalog', name: 'Catalog'},
};

export const getNameByPath = (url: string) => _.find(ShopRoutes, (r) => r.url === url || `/${r.url}` === url)?.name;

export default ShopRoutes;
