const test = require('tape');

// https://medium.com/@gattermeier/react-unit-testing-with-tape-b0219b714010#.jc0hyuzj1

test('timing test', function (t) {
  t.plan(2);

  t.equal(typeof Date.now, 'function');
  t.equal(2 + 3, 5)
});
