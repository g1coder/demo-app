import {v4 as uuid} from "uuid";
import {setupWorker, rest} from 'msw';

// See the example here https://mswjs.io/docs/getting-started/mocks/rest-api#response-resolver
const handlers = [
  rest.post('/api/login', (req, res, ctx) => {
    const {username, password} = (req.body as any).params;
    let status = 401;
    if (username === 'user@gmail.com' && password === '123') {
      sessionStorage.setItem('is-authenticated', username);
      status = 200;
    }
    return res(ctx.status(status));
  }),
  rest.post('/api/reset-password', (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('/api/countries', async (req, res, ctx) => {
    function createData(name, iso_code, population, size) {
      const density = population / size;
      return {id: uuid(), name, iso_code, population, size, density};
    }

    const rows = [
      createData('India', 'IN', 1324171354, 3287263),
      createData('China', 'CN', 1403500365, 9596961),
      createData('Italy', 'IT', 60483973, 301340),
      createData('United States', 'US', 327167434, 9833520),
      createData('Canada', 'CA', 37602103, 9984670),
      createData('Australia', 'AU', 25475400, 7692024),
      createData('Germany', 'DE', 83019200, 357578),
      createData('Ireland', 'IE', 4857000, 70273),
      createData('Mexico', 'MX', 126577691, 1972550),
      createData('Japan', 'JP', 126317000, 377973),
      createData('France', 'FR', 67022000, 640679),
      createData('United Kingdom', 'GB', 67545757, 242495),
      createData('Russia', 'RU', 146793744, 17098246),
      createData('Nigeria', 'NG', 200962417, 923768),
      createData('Brazil', 'BR', 210147125, 8515767),
    ];

    return res(
      ctx.status(200),
      ctx.delay(1500),
      ctx.json(rows),
    )
  }),
];

if (process.env.NODE_ENV === 'development' && handlers.length > 0) {
  const worker = setupWorker(...handlers);
  worker.start({waitUntilReady: true}).catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });
}
