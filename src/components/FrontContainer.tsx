import { Container, Typography, Box } from "@mui/material";
import * as React from "react";


interface FrontContainerProps {
	isMobile: boolean
}

const FrontContainer: React.FC<FrontContainerProps> = ({ isMobile }) => (
	<Container sx={{ display: "flex", height: { md: "90vh" } }}>
		<Box alignContent="center" sx={{ display: "flex" }}>
			<Typography variant="h1" justifySelf="center" alignSelf="center">
			👋 Hey, I&apos;m Riley.
			</Typography>
		</Box>

	</Container>
);

export default FrontContainer;