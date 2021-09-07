import React, { useState } from "react";
import Box from "@mui/material/AppBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, useTheme } from "@mui/material/styles";
import { Drawer, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import Link from "./Link";

interface ButtonStackProps {
	useMenu: boolean;
}
interface HeaderProps {
	titleLink?: boolean;
}
const ButtonStack: React.FC<ButtonStackProps> = ({ useMenu }) => {
	const router = useRouter();
	const ContactButton = styled(Button)(({ theme }) => ({
		outlineColor: theme.header.buttonColor,
		color: "white"
	}));
	const [ menuState, setMenuState ]= useState<boolean>(false);

	const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		setMenuState(open);
	};

	const onClickContact = () => {
		router.push("/contact");
	};
	if (useMenu) {
		return (
			<React.Fragment>

				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ ml: 2 }}
					onClick={toggleDrawer(true)}
				>
					<MenuIcon />
				</IconButton>
				<Drawer
					anchor="right"
					open={menuState}
					onClose={toggleDrawer(false)}
				>
					
					<Stack direction="column" spacing={2} sx={{ marginTop: "1rem", width: 150 }}>
						<Button variant="outlined" sx={{ color: "white" }} disableRipple>About Me</Button>
						<Button variant="text" sx={{ color: "white" }} disabled>Projects</Button>
						{/* <ContactButton variant="outlined" onClick={onClickContact}>Contact</ContactButton> */}
					</Stack>
				</Drawer>
			</React.Fragment>
		);
	}
	return (
		<Stack direction="row" spacing={2}>
			<Button variant="outlined" sx={{ color: "white" }} disableRipple>About Me</Button>
			<Button variant="text" sx={{ color: "white" }} disabled>Projects</Button>
			{/* <ContactButton variant="outlined" onClick={onClickContact}>
				Contact
			</ContactButton> */}
		</Stack>
	);
};

export default function HeaderBar({ titleLink }: HeaderProps): JSX.Element {
	const theme = useTheme();
	const hidden = useMediaQuery(theme.breakpoints.up("sm"));
	return (
		<Box position="relative" elevation={0} sx={{ mt: 3 }}>
			<AppBar elevation={0} position="static">
				<Toolbar disableGutters>
					{
						titleLink ? 
							<Link href="/" sx={{ flexGrow: 1 }}><Typography variant="h4" component="a" >Riley Smith</Typography></Link> 
							:
							<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Riley Smith</Typography>
					}
					<ButtonStack useMenu={!hidden} />
				</Toolbar>
			</AppBar>
		</Box>
	);
}