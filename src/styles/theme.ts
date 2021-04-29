// Copyright (c) 2021 Riley Smith
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createMuiTheme({
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
	overrides: {
		MuiCssBaseline: {
			"@global": {
				html: {
					overflow: "hidden"
				}
			}
		}
	}
});

export default theme;