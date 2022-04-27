// Copyright (c) 2021 Riley Smith
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import React from "react";
import Container from "@mui/material/Container";
import InfoContainer from "../components/InfoContainer";
import HeaderBar from "../components/Header";
import Fader from "../components/Fader";
import { useMediaQuery, useTheme } from "@mui/material";
import FrontContainer from "../components/FrontContainer";


const IndexPage: React.FC = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
	return (
		<Fader>
			<Container maxWidth="lg">
				<HeaderBar />
				<FrontContainer isMobile={isMobile}/>
				<InfoContainer isMobile={isMobile}/>
			</Container>
		</Fader>
	);
};

export default IndexPage;