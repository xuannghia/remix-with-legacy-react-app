import {Box} from '@mui/material';
import {useParams} from 'react-router';
import Button from '~/components/button';

export default function BlogPage() {
	const params = useParams();

	return (
		<Box px={2}>
			<h1>Blog Page</h1>
			<p>Slug: {params.slug}</p>
			<Button>Button</Button>
		</Box>
	);
}
