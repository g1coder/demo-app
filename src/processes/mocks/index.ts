import {concat} from 'lodash';
import {setupWorker} from 'msw';
import cart from '@processes/mocks/backend/catalog/CartController';
import catalog from '@processes/mocks/backend/catalog/ProductController';
import auth from './backend/auth';

// See the example here https://mswjs.io/docs/getting-started/mocks/rest-api#response-resolver
const handlers = concat(auth, catalog, cart);

if (process.env.NODE_ENV === 'development' && handlers.length > 0) {
  const worker = setupWorker(...handlers);
  worker.start({waitUntilReady: true}).catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}
