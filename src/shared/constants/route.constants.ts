export enum RoutePublic {
  SIGN_IN,
  SIGN_UP,
  LADING_PAGE,
  CART,
  CATALOG,
  ABOUT,
  CONTACTS
}

export enum RoutePrivate {
  PROFILE,
}

type RouteType = {[T in keyof typeof RouteNames]: {
  key: string;
  url: string;
  path: string;
  name?: string;
}};

export enum RouteNames {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  PROFILE = 'PROFILE',
  LANDING_PAGE = 'LANDING_PAGE',
  CATALOG = 'CATALOG',
  CART = 'CART',
  CONTACTS = 'CONTACTS',
  ABOUT = 'ABOUT',
}

interface IAppRouteConfig {
  key: string;
  url: string;
  path: string;
  name?: string;
}

type AppRoutesType = {[T in keyof typeof RouteNames]: IAppRouteConfig};

const RouteConstants: AppRoutesType = {
  [RouteNames.LOGIN]: {key: 'login', path: 'login', url: 'login'},
  [RouteNames.SIGNUP]: {key: 'signup', path: 'signup', url: 'signup'},
  [RouteNames.PROFILE]: {key: 'profile', path: 'profile', url: 'profile', name: 'Profile'},

  [RouteNames.LANDING_PAGE]: {key: 'LandingPage', path: '/', url: '/'},
  [RouteNames.CONTACTS]: {key: 'contacts', path: 'contacts', url: '/contacts', name: 'Contacts'},
  [RouteNames.ABOUT]: {key: 'about', path: 'about', url: '/about', name: 'About Us'},

  [RouteNames.CATALOG]: {key: 'catalog', path: 'catalog', url: '/catalog', name: 'Catalog'},
  [RouteNames.CART]: {key: 'cart', path: 'cart', url: '/catalog/cart'},
};

export default RouteConstants;