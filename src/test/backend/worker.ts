import _ from 'lodash';
import {setupWorker} from 'msw';
import auth from './auth';
import shop from './shop';

// See the example here https://mswjs.io/docs/getting-started/mocks/rest-api#response-resolver
const handlers = _.concat(auth, shop);

if (process.env.NODE_ENV === 'development' && handlers.length > 0) {
  const worker = setupWorker(...handlers);
  worker.start({waitUntilReady: true}).catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}
