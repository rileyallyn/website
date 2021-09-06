// Copyright (c) 2021 Riley Smith
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    header: {
			color: string;
      buttonColor: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    header?: {
			color: string;
      buttonColor: string;
    };
  }
}

const theme = createTheme({
	palette: {
		mode: "dark"
	},
	header: {
		color: blueGrey[900],
		buttonColor: blueGrey[600]
	}
});

export default theme;