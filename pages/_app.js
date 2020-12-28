
import React from 'react';
import Head from 'next/head'

import { CssBaseline } from '@material-ui/core'

function App({ Component, pageProps }) {
	
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

export default App;
