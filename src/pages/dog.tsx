import React, { useState }  from "react";
import Head from "next/head";
import { Box, Typography, Grid } from "@mui/material";
import styles from "../styles/dog.module.css";
import Image from "next/image";
import useMusicPlayer from "../components/Music";

// made as an easter egg because i remember this website 
// from when i was a kid lmfaoooo
const DogPage: React.FC = () => {
	const [ clickState, setClickState ] = useState<number>(0);
	const [ shouldSpin, setSpinState ] = useState<boolean>(false);
	const [ spinSpeed, setSpinSpeed ] = useState<string>(styles.spin);	
	const	[ playing, toggle ] = useMusicPlayer({ url: "/dog.mp3" });

	const onClick = async () => {
		setClickState(clickState + 1);
		if (!shouldSpin) {
			if (!playing) {
				toggle();
			}
			setSpinState(true);
		}
		if (clickState > 5 && clickState < 14) {
			setSpinSpeed(styles.spinFaster);
		} else if (clickState > 14) {
			setSpinSpeed(styles.spinEvenFaster);
		}
	};
	return (
		<>
			<Head>
				<title>Dog</title>
			</Head>
			<Box sx={{ width: "100%", height: "100%", background: "black", position: "fixed", padding: 0, margin: 0, top:0, left: 0, display: "flex" }}>
				<Grid container spacing={1} alignItems="center" direction="column" justifyContent="center" textAlign="center"> 
					<Grid item>
						<Box sx={{ height: "100px" }}> 
							<Typography className={styles.bounce} fontFamily={"8bitoperator"}>PET THE DOG!!!!!!!!!!!</Typography>
						</Box> 
					</Grid>
					<Grid item> 
						<Typography>PETS: {clickState} </Typography>
					</Grid>
					<Grid item sx={{ marginTop: 5 }}>
						<Image className={shouldSpin ? spinSpeed : ""} src="/dog.png" alt="dog" onClick={onClick} layout="fixed" height="229" width="275"/> 
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default DogPage;

