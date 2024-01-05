"use client";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Close } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
const drawerWidth = 300;
import PersonalInfo from "./personal.jsx";
import Helpcenter from "./helpcenter.jsx";
import Aboutus from "./aboutus.jsx";
import Privacy from "./privacy.jsx";
import Myorder from "./Myorder.jsx";
import Security from "./security.jsx";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import "@/style/personal.css"
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Topbar() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Default severity
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [show, setshow] = useState(true);
  const [personal, setpersonal] = useState(false);
  const [help, sethelp] = useState(false);
  const [about, setabout] = useState(false);
  const [logout, setlogout] = useState(false);
  const [privacy, setprivacy] = useState(false);
  const [myorder, setmyorder] = useState(false);
  const [security, setsecurity] = useState(false);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handlelogout = () => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      localStorage.removeItem("token");
      setIsDrawerOpen(false);
      setSnackbarSeverity("success");
      setSnackbarMessage("Logout successfull!!");
      setSnackbarOpen(true);
      setlogout(false)
      router.push("/");
    } else {
      //setIsDrawerOpen(false)
      setSnackbarSeverity("info");
      setSnackbarMessage("Login First!!");
      setSnackbarOpen(true);
      setlogout(false)
    }

    // router.push("/");
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleclose = () => {
    toggleDrawer(false);
    // setshow(!show)
  };
  const handlepersonal = () => {
    setshow(false);
    setpersonal(true);
    sethelp(false);
    setabout(false);
    setmyorder(false);
    setsecurity(false);
    setprivacy(false);
  };
  const handlehelp = () => {
    setshow(false);
    sethelp(true);
    setpersonal(false);
    setabout(false);
    setsecurity(false);
    setprivacy(false);
  };
  const handleabout = () => {
    setshow(false);
    sethelp(false);
    setpersonal(false);
    setprivacy(false);
    setmyorder(false);
    setsecurity(false);
    setabout(true);
  };
  const handleprivacy = () => {
    setshow(false);
    sethelp(false);
    setpersonal(false);
    setabout(false);
    setmyorder(false);
    setsecurity(false);
    setprivacy(true);
  };
  const handlemyorder = () => {
    setshow(false);
    sethelp(false);
    setpersonal(false);
    setabout(false);
    setprivacy(false);
    setsecurity(false);
    setmyorder(true);
  };
  const handlesecurity = () => {
    setshow(false);
    sethelp(false);
    setpersonal(false);
    setabout(false);
    setprivacy(false);
    setmyorder(false);
    setsecurity(true);
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <Link href="/signin">SignIn</Link>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>

        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="overflow-hidden" id="topbar">
        <AppBar position="static">
          <Toolbar style={{ background: "#002b4a" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="My Image"
                width={50}
                height={50}
                style={{ marginLeft: "-9px" }}
              />
            </Link>
            {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { sm: "block" } }}
          >
           <Link href="/">MUI</Link> 
          </Typography> */}
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <img
                  src="https://picsum.photos/id/36/1200/600"
                  style={{
                    borderRadius: "50%",
                    width: "42px",
                    height: "42px",
                    objectFit: "cover",
                  }}
                ></img>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: drawerWidth }}
            role="presentation"
            // onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer(false)}
            style={{ color: "black" }}
          >
            <Close
              style={{ position: "absolute", right: 0, margin: 2, zIndex: 99 }}
              // onClick={()=> toggleDrawer(false)}
              onClick={toggleDrawer(false)}
            ></Close>

            <br />
            {show ? (
              <List>
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="https://picsum.photos/id/55/1200/600"
                    style={{ width: 80, height: 80, borderRadius: "50%" }}
                  ></img>
                  <Box>
                    {/* <p>Name</p>
                    <p>Mobile Number</p> */}
                    <p>Krishna Thakur</p>
                    <p>+91-7011583846</p>
                  </Box>
                  <img
                    src="/forward.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                </ListItem>
                <hr />
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/car.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                  &nbsp; &nbsp; &nbsp;
                  <ListItemText primary="My Orders" />
                  <img
                    src="/forward.jpg"
                    onClick={handlemyorder}
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                </ListItem>
                <hr />
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/quotes.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                  &nbsp; &nbsp; &nbsp;
                  <ListItemText primary="Quotes" />
                  <img
                    src="/forward.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                </ListItem>
                <hr />
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/personal.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                  &nbsp; &nbsp; &nbsp;
                  <ListItemText primary="Personal Info" />
                  <img
                    src="/forward.jpg"
                    // onClick={() => setshow(false)}
                    onClick={handlepersonal}
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                </ListItem>
                <hr />
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/security.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                  &nbsp; &nbsp; &nbsp;
                  <ListItemText primary="Security" />
                  <img
                    src="/forward.jpg"
                    onClick={handlesecurity}
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                </ListItem>
                <hr />
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/help.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                  &nbsp; &nbsp; &nbsp;
                  <ListItemText primary="Help Center" />
                  <img
                    src="/forward.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                    onClick={handlehelp}
                  ></img>
                </ListItem>
                <hr />
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/about.jpg"

                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                  &nbsp; &nbsp; &nbsp;
                  <ListItemText primary="About Ayushree App" />
                  <img
                    src="/forward.jpg"
                    onClick={handleabout}
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                </ListItem>
                <hr />
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/privacy.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                  &nbsp; &nbsp; &nbsp;
                  <ListItemText primary="Privacy Policy" />
                  <img
                    src="/forward.jpg"
                    onClick={handleprivacy}
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                </ListItem>
                <hr />
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/logout.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                  &nbsp; &nbsp; &nbsp;
                  <ListItemText primary="Logout" style={{ color: "#f75555" }} />
                  <img
                    src="/forward.jpg"
                    onClick={() => setlogout(!logout)}
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                  ></img>
                </ListItem>
              </List>
            ) : (
              <List>
                <ListItem
                  button
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <img
                    src="/back.jpg"
                    // style={{ width: 80, height: 80 ,borderRadius:"50%"}}
                    onClick={() => setshow(!show)}
                  ></img>
                </ListItem>
                <ListItem>
                  {personal ? <PersonalInfo /> : null}

                  {help ? <Helpcenter /> : null}
                  {about ? <Aboutus /> : null}
                  {privacy ? <Privacy /> : null}
                  {myorder ? <Myorder /> : null}
                  {security ? <Security /> : null}
                </ListItem>
              </List>
            )}
            {logout ? (
              <Box
                style={{
                  width: "100%",
                  height: "125px",
                  border: "1px solid teal",
                }}
                className="logoutbox"
              >
                <Box>
                  <p className="logoutred">Logout</p>
                </Box>

                <hr />
                <Box>
                  <p className="logoutblack">
                    Are you sure you want to log out?
                  </p>
                </Box>

                <Box
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: 10,
                  }}
                >
                  <Button
                    className="logoutcancel"
                    style={{ height: "32px" }}
                    onClick={() => setlogout(!logout)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="logoutyes"
                    style={{
                      backgroundColor: "#4285F4",
                      color: "white",
                      height: "32px",
                    }}
                    onClick={() => handlelogout()}
                  >
                    Yes, Logout
                  </Button>
                </Box>
              </Box>
            ) : null}
          </Box>
        </Drawer>
      </Box>
      {/* Snackbar component */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
}
