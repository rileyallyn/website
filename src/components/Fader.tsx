import { Fade } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

interface FaderProps {
	children: ReactElement;
}

const Fader: React.FC<FaderProps> = ({ children }) => {
	const [ fade, setFade ] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setFade(true);
		}, 200);
		return () => {
			setFade(false);
		};
	}, []);
	return (
		<Fade in={fade}>
			{children}
		</Fade>
	);
};

export default Fader;