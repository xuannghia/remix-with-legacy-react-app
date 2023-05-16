import {withEmotionCache} from '@emotion/react';
import {
	CssBaseline,
	ThemeProvider,
	unstable_useEnhancedEffect as useEnhancedEffect,
} from '@mui/material';
import {cssBundleHref} from '@remix-run/css-bundle';
import type {LinksFunction} from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import React from 'react';

import ClientStyleContext from './contexts/client-style-context';
import {SharingContextProvider} from './contexts/sharing-context';
import theme from './theme/theme';

export const links: LinksFunction = () => [
	...(cssBundleHref ? [{rel: 'stylesheet', href: cssBundleHref}] : []),
];

type DocumentProps = {
	children: React.ReactNode;
	title?: string;
};

const Document = withEmotionCache(
	({children, title}: DocumentProps, emotionCache) => {
		const clientStyleData = React.useContext(ClientStyleContext);

		// Only executed on client
		useEnhancedEffect(() => {
			// Re-link sheet container
			emotionCache.sheet.container = document.head;
			// Re-inject tags
			const {tags} = emotionCache.sheet;
			emotionCache.sheet.flush();
			for (const tag of tags) {
				// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-unsafe-call
				(emotionCache.sheet as any)._insertTag(tag);
			}

			// Reset cache to reapply global styles
			clientStyleData.reset();
		}, []);

		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8"/>
					<meta name="viewport" content="width=device-width,initial-scale=1"/>
					<meta name="theme-color" content={theme.palette.primary.main}/>
					{title ? <title>{title}</title> : undefined}
					<Meta/>
					<Links/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					/>
					<meta
						name="emotion-insertion-point"
						content="emotion-insertion-point"
					/>
				</head>
				<body>
					{children}
					<ScrollRestoration/>
					<Scripts/>
					<LiveReload/>
				</body>
			</html>
		);
	},
);

export default function App() {
	return (
		<Document>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				<SharingContextProvider>
					<Outlet/>
				</SharingContextProvider>
			</ThemeProvider>
		</Document>
	);
}
