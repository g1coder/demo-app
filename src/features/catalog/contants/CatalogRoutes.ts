import _ from 'lodash';

export enum CatalogRouteNames {
  CATALOG = 'CATALOG',
}

interface IAppRouteConfig {
  url: string;
  path: string;
  name: string;
}

type CatalogRoutesType = {[T in keyof typeof CatalogRouteNames]: IAppRouteConfig};

const CatalogRoutes: CatalogRoutesType = {
  [CatalogRouteNames.CATALOG]: {path: 'catalog/*', url: 'catalog', name: 'Catalog'},
};

export const getNameByPath = (url: string) => _.find(CatalogRoutes, (r) => r.url === url || `/${r.url}` === url)?.name;

export default CatalogRoutes;