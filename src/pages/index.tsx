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
import { GitHub, Mail, Twitter } from "@mui/icons-material";

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
							I&apos;m an 18 year old full-stack developer with a passion for cool projects. 
							I have four years of development experience and I can adapt to new environments.
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
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
	return (
		<Fader>
			<Container maxWidth="lg">
				<HeaderBar />
				<FrontContainer isMobile={isMobile}/>
			</Container>
		</Fader>
	);
};

export default IndexPage;