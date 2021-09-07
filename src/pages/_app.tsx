// Copyright (c) 2021 Riley Smith
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CacheProvider, EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/dist/shared/lib/router/router";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import theme from "../styles/theme";
import createEmotionCache from "../util/EmotionCache";

// export const cache = createCache({ key: "css", prepend: true });
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache
}

const App: React.VFC<AppProps> = (props: MyAppProps) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<title>
					Riley Smith
				</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Script async src="https://kit.fontawesome.com/074043ff20.js" crossOrigin="anonymous"></Script>
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;