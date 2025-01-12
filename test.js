const test = require('ava');
const delay = require('delay');
const inRange = require('in-range-cjs');
const timeSpan = require('./index.js');

test('main', async t => {
	const end = timeSpan();
	await delay(100);
	t.true(inRange(end(), {start: 80, end: 120}));
	t.true(inRange(end.rounded(), {start: 80, end: 120}));
	t.true(inRange(end.seconds(), {start: 0.08, end: 0.12}));

	// TODO: Remove `Number()` when https://github.com/sindresorhus/in-range/issues/5 is fixed.
	t.true(inRange(Number(end.nanoseconds()), {start: 80000000, end: 120000000}));
});
