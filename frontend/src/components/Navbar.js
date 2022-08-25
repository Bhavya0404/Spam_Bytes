import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logoblue.png";

const drawerWidth = 300;
const navItems = ["Districts", "Policy", "Acts", "NCLP", "Guildlines"];

function DrawerAppBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logo} alt="logo" />
      </Typography>
      <Divider variant="middle" />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", textDecoration: 'none' }}>
              <Link to={`/${item}`}>
                <ListItemText sx={{textDecoration: 'none'}} primary={item} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
      }}
    >
      <AppBar
        component="nav"
        sx={{
          width: "100%",
          height: "auto",
          position: "absolute",
          backgroundColor: "primary.light",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box>
            <Link to="/">
              <Box
                component="img"
                sx={{ height: "65px", objectFit: "contain" }}
                src={logo}
              ></Box>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "none", lg: "flex" },
              width: { lg: "45%", md: "20%" },
              justifyContent: "space-between",
            }}
          >
            {navItems.map((item) => (
              <Box>
              <Button
                key={item}
                onClick={() => navigate(`/${item}`)}
                sx={{ color: "black", textDecoration: "none" }}
              >
                <Typography variant="body1" sx={{ fontSize: { sm: "22px" }, textTransform: "capitalize"}}>
                  {item}
                </Typography>
              </Button>
              </Box>
            ))}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
               
              }}
            >
              <Box>
              <Button
                onClick={() => navigate("/login")}
                variant="contained"
                color= 'primary'
                size="large"
              
              
              >
                <Typography variant="body1" sx={{ fontSize: { sm: "22px" }, textTransform: "capitalize", color:'common.white'}}> Login</Typography>
               
              </Button></Box>
              <Box>
              <Button
                onClick={() => navigate("/register")}
                variant="contained"
                size="large"
                style={{ color: "black", background: "white" }}
              >
                <Typography variant="body1" sx={{ fontSize: { sm: "22px" }, textTransform: "capitalize", color:'common.black' }}>Signup</Typography>
                
              </Button></Box>

             
              
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
