export enum RoutePublic {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
  LANDING_PAGE = 'LANDING_PAGE',
  CART = 'CART',
  CATALOG = 'CATALOG',
  ABOUT = 'ABOUT',
  CONTACTS = 'CONTACTS',
}

export enum RoutePrivate {
  PROFILE = 'PROFILE',
}

type RouteUnion = keyof typeof RoutePublic | keyof typeof RoutePrivate;
type RouteType = {
  [T in RouteUnion]: {
    key: string;
    url: string;
    path: string;
    name?: string;
  };
};

const Routes: RouteType = {
  [RoutePublic.SIGN_IN]: {key: 'signin', path: 'signin', url: 'signin'},
  [RoutePublic.SIGN_UP]: {key: 'signup', path: 'signup', url: 'signup'},
  [RoutePublic.LANDING_PAGE]: {key: 'LandingPage', path: '/', url: '/'},
  [RoutePublic.CONTACTS]: {key: 'contacts', path: 'contacts', url: '/contacts', name: 'Contacts'},
  [RoutePublic.ABOUT]: {key: 'about', path: 'about', url: '/about', name: 'About Us'},
  [RoutePublic.CATALOG]: {key: 'catalog', path: 'catalog', url: '/catalog', name: 'Catalog'},
  [RoutePublic.CART]: {key: 'cart', path: 'cart', url: '/catalog/cart'},
  [RoutePrivate.PROFILE]: {key: 'profile', path: 'profile', url: 'profile', name: 'Profile'},
};

export default Routes;
