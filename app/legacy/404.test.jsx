import {cleanup, render, screen} from '@testing-library/react';
import {beforeEach, describe, expect, test} from 'vitest';

import NotFoundPage from './404';

describe('<NotFoundPage />', () => {
	beforeEach(() => {
		cleanup();
	});
	test('404 page should be rendered', t => {
		render(<NotFoundPage/>);
		const heading = screen.getByRole('heading');
		expect(heading.textContent, '404: Not found');
	});
});
