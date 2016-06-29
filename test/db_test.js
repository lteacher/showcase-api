import test from 'ava';
import r from 'rethinkdb';

/**
 * Db specific test cases, this is just some placeholder stuff before the
 * data access layer stuff is added with actual tables
 */
let conn = {};

test.before(async t => {
  conn = await r.connect({
    db: 'test'
  });

  await r.tableDrop('users').run(conn);
  await r.tableCreate('users').run(conn);
});

test('users table exists', async t => {
  let result = await r.table('users').status().run(conn);

  t.is(result.db, 'test');
  t.is(result.status.ready_for_reads, true);
});

test('can insert users', async t => {
  let result = await r.table('users').insert({
    user_name:'megaguy',
    first_name: 'Bill',
    last_name: 'Smith'
  }).run(conn);

  t.is(result.inserted,1);
});
