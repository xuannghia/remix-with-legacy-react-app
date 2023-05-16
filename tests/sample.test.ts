import test from 'ava';

const sample = () => 'foo';

test('sample() returns foo', t => {
	t.is(sample(), 'foo');
});
