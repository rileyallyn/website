// Copyright (c) 2021 Riley Smith
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import createEmotionServer from "@emotion/server/create-instance";
import { cache } from "./_app";
import Document, { Html, Head, Main, NextScript } from "next/document"; 
import { Children } from "react";
import theme from "../styles/theme";
import { ServerStyleSheets } from "@material-ui/core";

const { extractCritical } = createEmotionServer(cache);

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta 
						name="theme-color"
						content={theme.palette.primary.main}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

CustomDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets();
	const originalRenderPage = ctx.renderPage;

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		});
	
	const initialProps = await Document.getInitialProps(ctx);
	const styles = extractCritical(initialProps.html);

	return {
		...initialProps,
		styles: [
			...Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
			<style 
				key="emotion-style-tag"
				data-emotion={`css ${styles.ids.join( " ")}`}
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: styles.css }} 
			/>
		]
	};
};