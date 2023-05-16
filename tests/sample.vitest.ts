import {describe, expect, test} from 'vitest';

const fn = () => 'foo';

describe('test', () => {
	test('fn() returns foo', () => {
		expect(fn()).toBe('foo');
	});
});
