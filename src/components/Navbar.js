import React from "react";
import { useState } from "react";
import {alpha
  ,AppBar,
  makeStyles,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import Notifications from "@material-ui/icons/Notifications";
import Cancel from "@material-ui/icons/Cancel";
const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },

  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius.borderRadius,
    width: "50%",

    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width:"70%"
    },
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  cancel:{
      [theme.breakpoints.up("sm")]:{
        display:"none"
      }
  },

  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  icons: {
    alignItems: "center",

    display: (props) => (props.open ? "none" : "flex"),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
  },
}));

const Navbar = () => {
  const [open,setOpen]= useState(false);


  const classes = useStyles({open});
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Lama Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          LAVA{" "}
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)}/>
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
          <Badge badgeContent={5} color="secondary" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={3} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="./././img/download.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
