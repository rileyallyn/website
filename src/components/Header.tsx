import React from "react";
import Box from "@mui/material/AppBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

interface ButtonStackProps {
	useMenu: boolean;
}

const ButtonStack: React.FC<ButtonStackProps> = ({ useMenu }) => {
	const ContactButton = styled(Button)(({ theme }) => ({
		outlineColor: theme.header.buttonColor,
		color: "white"
	}));
	if (useMenu) {
		return (
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{ ml: 2 }}
			>
				<MenuIcon />
			</IconButton>
		);
	}
	return (
		<Stack direction="row" spacing={2}>
			<Button variant="text" sx={{ color: "white" }} disabled>Projects</Button>
			<Button variant="text" sx={{ color: "white" }} disabled>About Me</Button>
			<ContactButton variant="outlined" >
				Contact
			</ContactButton>
		</Stack>
	);
};

export default function HeaderBar(): JSX.Element {
	const theme = useTheme();
	const hidden = useMediaQuery(theme.breakpoints.up("sm"));
	console.log(hidden);
	return (
		<Box position="relative" elevation={0} sx={{ mt: 3 }}>
			<AppBar elevation={0} position="static">
				<Toolbar disableGutters>
					<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
						Riley Smith
					</Typography>
					<ButtonStack useMenu={!hidden} />
				</Toolbar>
			</AppBar>
		</Box>
	);
}