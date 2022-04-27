import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import CodeWriter from "./CodeWriter";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { GitHub, Mail, Twitter } from "@mui/icons-material";

interface InfoContainerProps {
	isMobile: boolean
}

const InfoContainer: React.FC<InfoContainerProps> = ({ isMobile }) => (
	<Box sx={{ padding: "4rem 0" }}>
		<Grid container spacing={3} columns={19}>
			<Grid item lg={8} mr={4}>
				<Typography variant="body1" sx={{ mt: 3 }}>
							I&apos;m a 18 year old full-stack developer with a passion for working on cool stuff. 
							I have three years of experience of working with the MERN stack.
							I currently work on projects in the creator economy and am learning real-time scalable backend systems.
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
					<a href="https://twitter.com/qpixel_" aria-label="twitter-link"> 
						<IconButton>
							<Twitter />
						</IconButton>
					</a>
					<Tooltip title="Let's work together"> 
						<a href="mailto:contact@qpixel.me" aria-label="email"> 
					
							<IconButton>
								<Mail />
							</IconButton>
						</a>
					</Tooltip>
				</Box>
			</Grid>
			{/* {isMobile ?
				<Grid item lg={10} mt={2}> 
					<CodeWriter />
				</Grid> :
				<> 
				</>
			} */}
		</Grid>
	</Box>
);

export default InfoContainer;