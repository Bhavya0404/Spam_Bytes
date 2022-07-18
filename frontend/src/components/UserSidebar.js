import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import { getUser } from "../features/users/usersSlice";
import { Typography } from "@mui/material";

const drawerWidth = 250;

const usSection1 = [
  {
    label: "All Reported Children",
    Icon: FormatListNumberedIcon,
  },
  {
    label: "User Profile",
    Icon: AccountCircleIcon,
  },
];
const usSection2 = [
  {
    label: "Settings",
    Icon: SettingsIcon,
  },
];

const UserSidebar = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerClose = () => setMobileOpen(false);
  const drawer = (
    <div>
      <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography sx={{textAlign: 'center', fontSize: 20}}>
            <strong>PENCIL</strong>
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {usSection1.map(({ label, Icon }, index) => (
          <ListItem key={label} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {usSection2.map(({ label, Icon }, index) => (
          <ListItem key={label} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="nav sidebar"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default UserSidebar;
