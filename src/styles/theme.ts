// Copyright (c) 2021 Riley Smith
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: "#556cd6"
		},
		secondary: {
			main: "#19857b"
		},
		error: {
			main: red.A400
		},
		background: {
			default: "#fff"
		}
	},
});

export default theme;