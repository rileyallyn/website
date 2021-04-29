// Copyright (c) 2021 Riley Smith
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import createCache from "@emotion/cache";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@material-ui/core";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Head from "next/head";
import React, { useEffect } from "react";
import theme from "../styles/theme";

export const cache = createCache({ key: "css", prepend: true });

const App: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) jssStyles.parentElement?.removeChild(jssStyles);
	}, []);

	return (
		<CacheProvider value={cache}>
			<Head>
				<meta 
					name="viewport" 
					content="initial-scale=1, width=device-width" 
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{
					<Component {...pageProps} />
				}
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;