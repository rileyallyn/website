import { Container } from "@mui/material";
import React from "react";
import Fader from "../components/Fader";
import HeaderBar from "../components/Header";

const ContactPage: React.FC = () => {
	return (
		<Fader>
			<Container maxWidth="lg">
				<HeaderBar titleLink/>
			</Container>
		</Fader>
	);
};

export default ContactPage;