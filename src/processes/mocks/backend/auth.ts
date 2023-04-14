import {rest} from 'msw';

const tokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

// See the example here https://mswjs.io/docs/getting-started/mocks/rest-api#response-resolver
const handlers = [
  rest.post('/api/v1/auth/signin', (req, res, ctx) => {
    const {email, password} = req.body as Record<string, unknown>;
    if (email === 'user@gmail.com' && password === '123') {
      return res(
        ctx.status(200),
        ctx.cookie('token', tokenMock, {
          maxAge: 600,
        })
      );
    }
    return res(ctx.status(401));
  }),
  rest.get('/api/v1/profile', (req, res, ctx) => {
    const {token} = req.cookies;

    return res(
      ctx.status(200),
      ctx.delay(1000),
      ctx.json(
        token === tokenMock
          ? {
              id: 'uid1',
              name: 'user@gmail',
            }
          : null
      )
    );
  }),
  rest.post('/api/v1/reset-password', (req, res, ctx) => {
    const {email} = req.body as Record<string, unknown>;
    return res(ctx.status(email === 'error@e.ee' ? 403 : 201));
  }),
  rest.post('/api/v1/register', (req, res, ctx) => {
    const {first_name, last_name, email, password} = req.body as Record<string, unknown>;
    let status = 401;
    if (first_name && last_name && email && password) {
      sessionStorage.setItem('is-authenticated', String(first_name));
      status = 200;
    }
    return res(
      ctx.status(status),
      ctx.cookie('token', tokenMock, {
        maxAge: 600,
      })
    );
  }),
];

export default handlers;
