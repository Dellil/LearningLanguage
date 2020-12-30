import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";

import icon from "../learning_language.svg";
import useStyles from "./Header.style";

const Header: React.FC = () => {
	const classes = useStyles();

	return (
		<AppBar>
			<Toolbar>
				<IconButton color="inherit" edge="start">
					<MenuIcon />
				</IconButton>
				<IconButton color="inherit">
					<img src={icon} alt="" className={classes.img} />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					LEARNING LANGUAGE
				</Typography>
				<IconButton color="inherit" edge="end">
					<SettingsIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
