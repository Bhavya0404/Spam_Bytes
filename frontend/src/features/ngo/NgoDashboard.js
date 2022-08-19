import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectFoundChild } from "../foundchild/FoundChildSlice";
import { getNgoStatus, selectAllNgo, selectNgoByUserId } from "./ngoSlice";
import FoundChild from "./FoundChild";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import mainImg from "../../assets/images/ngoDash.webp";
import { display } from "@mui/system";

import SideBar from "../../components/Sidebar";
import sidebarMenus from "../../components/sidebarMenus";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const NgoDashboard = () => {
  // const id = useParams()
  const navigate = useNavigate();
  // console.log(id)
  const ngo = useSelector(selectAllNgo);
  // console.log(ngo)
  const status = useSelector(getNgoStatus);

  // const ngo = useSelector((state) => selectNgoByUserId(state, id.ngoId))
  const childs = useSelector(selectFoundChild);

  if (status === "failed") {
    return <h2>Page Not Found</h2>;
  }
  let childState;
  childState = childs.map((child) => {
    // console.log(child);

    if (
      child.district.toLowerCase() === ngo.district.toLowerCase() &&
      child.isVerified
    )
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SideBar
            nSections={sidebarMenus.ngo.nSections}
            sectionList={sidebarMenus.ngo.sectionList}
            header={sidebarMenus.ngo.header}
          />

          <TableContainer
            sx={{
              display: { xs: "none", lg: "inherit" },
              mx: "20px",
              mt: "100px",
              maxHeight: "500px",
            }}
          >
            <Table stickyHeader component={Paper}>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Is Accepted</TableCell>
                  <TableCell>Is Verified</TableCell>
                  <TableCell>Reported By</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {childs.map((child) => (
                  <TableRow>
                    <TableCell>{child.name}</TableCell>
                    <TableCell>{child?.address}</TableCell>
                    <TableCell>
                      {child?.isAccepted ? (
                        <CheckCircleIcon sx={{ color: "green" }} />
                      ) : (
                        <CancelIcon sx={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell>
                      {child?.isVerified ? (
                        <CheckCircleIcon sx={{ color: "green" }} />
                      ) : (
                        <CancelIcon sx={{ color: "red" }} />
                      )}
                    </TableCell>
                    <TableCell>{child?.reportedBy?.name}</TableCell>
                    <TableCell>
                      <Button
                        size="medium"
                        variant="contained"
                        onClick={() => navigate(`/child/${child?._id}`)}
                      >
                        <ArrowRightAltIcon />
                        <Typography
                          component="span"
                          sx={{ display: { xs: "none", md: "block" } }}
                        >
                          View Details
                        </Typography>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      );
  });

  return <div>{childState}</div>;
};

export default NgoDashboard;
