// Copyright (c) 2021 Riley Smith
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
				<Typography variant="h1">
							Hey, I&apos;m QPixel.
				</Typography>
				<Typography variant="body1" sx={{ mt: 3 }}>
							I&apos;m a 17 year old developer with a passion for working on cool stuff. I have over 3 years of experience in web and software development and am familiar with latest technologies.
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

export default IndexPage;