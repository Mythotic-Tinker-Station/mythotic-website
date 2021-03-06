import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

import AppMenuItem from "./MenuItem";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		fontFamily: "Open Sans"
	},
	menuButton: {
		marginRight: theme.spacing(2),
		fontFamily: "Open Sans"
	},
	title: {
		flexGrow: 1,
		fontFamily: "Open Sans"
	},
	list: {
		width: 250,
		fontFamily: "Open Sans"
	},
	fullList: {
		width: "auto",
		fontFamily: "Open Sans"
	},
	appMenu: {
		width: "100%"
	},
	navList: {
		width: drawerWidth
	},
	menuItem: {
		width: drawerWidth
	},
	menuItemIcon: {
		color: "#97c05c"
	}
}));

const appMenuItems = [
	{
		name: "Home",
		link: "/",
		Icon: null
	},
	{
		name: "Lexicon",
		link: "/lexicon",
		Icon: null
	}
];

export default function Appbar(props: any) {
	const classes = useStyles();

	// Menu Drawer Functions
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	type DrawerSide = "top" | "left" | "bottom" | "right";
	const toggleDrawer = (side: DrawerSide, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		setState({ ...state, [side]: open });
	};

	const AppMenu = (side: DrawerSide) => (
		<List
			component='nav'
			className={classes.appMenu}
            disablePadding
            role='presentation'
			onClick={toggleDrawer(side, false)}
			onKeyDown={toggleDrawer(side, false)}>
			{/* <AppMenuItem {...appMenuItems[0]} /> */}
			{appMenuItems.map((item, index) => (
				<AppMenuItem {...item} key={index} />
			))}
		</List>
	);

	// Login Button Functions
	
	// const [modalOn, setModalOn] = React.useState(false)

	// const togglemodal = () => {
	// 	let newState = modalOn;
	// 	newState = !newState;
	// 	setModalOn(newState);
	// } 

	// const LoggingIn = () => (
	// 	<Modal>
    //             Test
	// 	</Modal>
	// );

	return (
		<AppBar position='static'>
			<Toolbar>
				<Drawer open={state.left} onClose={toggleDrawer('left', false)}>
					{AppMenu('left')}
				</Drawer>
				<IconButton
					onClick={toggleDrawer("left", true)}
					edge='start'
					className={classes.menuButton}
					color='inherit'
					aria-label='menu'>
					<MenuIcon/>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
