
import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import { CssBaseline } from '@material-ui/core';

function MyApp({ Component, pageProps }: AppProps) {
	
	return (
		<>
			<CssBaseline />

			<Head>
				<title>Meal Planner</title>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
