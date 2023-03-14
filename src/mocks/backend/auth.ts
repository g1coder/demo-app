import {rest} from 'msw';

const tokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

// See the example here https://mswjs.io/docs/getting-started/mocks/rest-api#response-resolver
const handlers = [
  rest.post('/api/v1/auth/signin', (req, res, ctx) => {
    const {username, password} = (req.body as any).params;
    if (username === 'user@gmail.com' && password === '123') {
      return res(
        ctx.status(200),
        ctx.cookie('token', tokenMock, {
          maxAge: 600,
        })
      );
    }
    return res(ctx.status(401));
  }),
  rest.get('/api/init', (req, res, ctx) => {
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
    return res(
      ctx.status(status),
      ctx.cookie('token', tokenMock, {
        maxAge: 600,
      })
    );
  }),
];

export default handlers;
