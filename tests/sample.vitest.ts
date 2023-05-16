import {describe, expect, test} from 'vitest';

const sample = () => 'foo';

describe('test', () => {
	test('sample() returns foo', () => {
		expect(sample()).toBe('foo');
	});
});
