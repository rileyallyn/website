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

const IndexPage: React.FC = () => (
	<Container maxWidth="lg">
		<HeaderBar />
		<Box sx={{ padding: "8rem 0" }}>
			<Grid container spacing={2} columns={20}>
				<Grid item lg={8} mr={4}>
					<Typography variant="h1">
						Hey, I&apos;m Riley.
					</Typography>
					<Typography variant="body1" sx={{ mt: 3 }}>
						I am a Software Developer with over 3 years of experience in web and software development.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	</Container >
);

export default IndexPage;