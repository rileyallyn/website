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
import { IconButton, Tooltip, useMediaQuery, useTheme } from "@mui/material";
import { GitHub, Mail, PostAdd } from "@mui/icons-material";

interface FrontContainerProps {
	isMobile: boolean
}
const FrontContainer: React.FC<FrontContainerProps> = ({ isMobile }) => (
	<Box sx={{ padding: "4rem 0" }}>
		<Grid container spacing={3} columns={19}>
			<Grid item lg={8} mr={4}>
				<Typography variant="h1">
							Hey, I&apos;m Riley.
				</Typography>
				<Typography variant="body1" sx={{ mt: 3 }}>
							I am a 18 year old full-stack developer with a passion for cool projects. 
							Currently, I have over five years of experience in a variety of languages and frameworks.
				</Typography>
				<Box sx={{ marginTop: "10px", maxWidth: 200 }}>
					<Tooltip title="Check out my existing projects!"> 
						<a href="https://github.com/qpixel" aria-label="github-link"> 
							<IconButton>
								<GitHub />	
							</IconButton>
						</a>
					</Tooltip>
					<IconButton disabled>
						<i className="fab fa-discord"></i>
					</IconButton>
					<Tooltip title="I'm on mastodon!">
						<a rel="me" href="https://qpixel.pw/@qpixel">
							<IconButton>
								<PostAdd />
							</IconButton>
						</a>
					</Tooltip>
					<Tooltip title="Let's work together"> 
						<a href="mailto:contact@qpixel.me" aria-label="email"> 
					
							<IconButton>
								<Mail />
							</IconButton>
						</a>
					</Tooltip>
				</Box>
			</Grid>
			{isMobile ?
				<Grid item lg={10} mt={2}> 
					<CodeWriter />
				</Grid> :
				<>
				</>
			}
		</Grid>
	</Box>
);

const IndexPage: React.FC = () => {
	// const theme = useTheme();
	// const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
	return (
		<Fader>
			<Container maxWidth="lg" sx={{ "justifyContent": "center", alignItems: "center", "marginTop": 10 }}>
				{/* <HeaderBar />
				<FrontContainer isMobile={isMobile}/> */}
				<Typography variant="body1">
					I am currently working on a new website! If you need to contact me, I am available at <a href="https://qpixel.pw/@qpixel">Mastodon</a> and via <a href="mailto:riley@rileyy.dev">Email</a>
				</Typography>
				<Typography variant="body1">
					You can also check me out on GitHub <a href="https://github.com/qpixel">here</a>
				</Typography>
			</Container>
		</Fader>
	);
};

export default IndexPage;