import test from 'ava';
import server from '../app/server';
import request from 'supertest-as-promised';

// Base endpoints
test('Ok status at root path', async t => {
  let res = await request(server).get('/');

  t.is(res.status,200);
});

test.failing('Register produces status 200', async t => {
  let res = await request(server).get('/register');

  t.is(res.status,200);
});

test.failing('Login produces status 200', async t => {
  let res = await request(server).get('/login');

  t.is(res.status,200);
});

test('Users produces status 200', async t => {
  let res = await request(server).get('/users');

  t.is(res.status,200);
});
