import { createTheme } from "@mui/material"

export const appTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1800,
		},
	},
	palette: {
		primary: {
			main: '#4051b5',
		},
		secondary: {
			main: '#f50057',
		},
	},
});