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
    const {email} = (req.body as any).params;
    return res(ctx.status(email === 'error@e.ee' ? 403 : 201));
  }),
  rest.post('/api/register', (req, res, ctx) => {
    const {first_name, last_name, email, password} = (req.body as any).params;
    let status = 401;
    if (first_name && last_name && email && password) {
      sessionStorage.setItem('is-authenticated', first_name);
      status = 200;
    }
    return res(ctx.status(status));
  }),
];

export default handlers;