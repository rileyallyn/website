import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

const CodeWriter: React.FC = () => {
	const codeString = `//codewriter still has bugs (remember to fix)
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import HeaderBar from "../components/Header";
import Typography from "@mui/material/Typography";
import Fader from "../components/Fader";
import CodeWriter from "../components/CodeWriter";

const FrontContainer: React.FC = () => (
  <Box sx={{ padding: "4rem 0" }}>
    <Grid container spacing={6} columns={20}>
      <Grid item lg={8} mr={4}>
        <Typography variant="h1">Hey, I&apos;m QPixel.</Typography>
        <Typography variant="body1" sx={{ mt: 3 }}>
          I&apos;m a 17 year old developer with a passion for working on cool
          stuff. I have over 3 years of experience in web and software
          development and am familiar with latest technologies.
        </Typography>
      </Grid>
      <Grid item lg={11} mt={2}>
        <CodeWriter />
      </Grid>
    </Grid>
  </Box>
);

const IndexPage: React.FC = () => {
  return (
    <Fader>
      <Container maxWidth="lg">
        <HeaderBar />
        <FrontContainer />
      </Container>
    </Fader>
  );
};

export default IndexPage;`;
	const [ runningText, setRunningText ] = useState<string>("");
	const [ index, setIndex ] = useState<number>(0);
	let timeout: NodeJS.Timeout;
	const generateText = () => {
		clearTimeout(timeout);
		const speed = 1000 / 250;
		if (index < codeString.length) {
			if (!(runningText[runningText.length] === codeString[index])) {		
				timeout = setTimeout(() => {
					setRunningText(runningText + codeString[index]);
					setIndex(index + 1);
				}, speed);
			}
		} else {
			clearTimeout(timeout);
		}
	};
	useEffect(() => {
		generateText();
		return () => {
			clearTimeout(timeout);
		};
	});
	// Auto Scroller
	const containerElement = React.useRef<HTMLDivElement>(null);
	useEffect(() => {
		setTimeout(() => {
			const { current } = containerElement;
			
			if (current) {
				current.style.scrollBehavior = "smooth";
			}
		}, 0);
	}, [ containerElement ]);

	useEffect(() => {
		const { current } = containerElement;

		if (current) {
			current.scrollTop = current.scrollHeight;
		}
	}, [ containerElement.current?.scrollHeight ]);

	return (
		<Card variant="outlined" sx={{ maxHeight: "340px", overflowY: "hidden", width: { sm: 1 }  }} ref={containerElement}>
			<ReactSyntaxHighlighter language="javascript" style={atomOneDark} customStyle={{ marginTop: "0px", marginBottom: "0px", overflowX: "hidden !important" }} wrapLines>
				{runningText}
			</ReactSyntaxHighlighter>
		</Card>
	);
};

export default CodeWriter;