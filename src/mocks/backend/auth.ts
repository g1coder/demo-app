import {rest} from 'msw';

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
];

export default handlers;
