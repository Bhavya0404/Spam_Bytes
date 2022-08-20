import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectFoundChild } from "../foundchild/FoundChildSlice";
import { getNgoStatus, selectAllNgo } from "./ngoSlice";
import { Box, Paper, Typography } from "@mui/material";

import SideBar from "../../components/Sidebar";
import sidebarMenus from "../../components/sidebarMenus";
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

function refresh() {
  if(!window.location.hash) {
    window.location = window.location + '#loaded';
    window.location.reload();
  }
}

const NgoDashboard = () => {
  refresh();
  const [allChild, setAllChild] = useState(true);
  
  const navigate = useNavigate();
  const ngo = useSelector(selectAllNgo);
  const status = useSelector(getNgoStatus);
  const childs = useSelector(selectFoundChild);

  if (status === "failed") {
    return <h2>Page Not Found</h2>;
  }

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
        func={setAllChild}
      />
      {/* Table for XL Screens to L Screens */}
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
            {childs.map((child) =>
              (allChild &&
                child.district.toLowerCase() === ngo.district.toLowerCase() &&
                child.isVerified) ||
              (child.district.toLowerCase() === ngo.district.toLowerCase() &&
                child.isVerified &&
                child.isAccepted) ? (
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
                        sx={{
                          display: { xs: "none", md: "block" },
                          fontSize: "14px",
                        }}
                      >
                        View Details
                      </Typography>
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                <div></div>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Table for M Screens to L Screens */}

      <TableContainer
        sx={{
          display: { xs: "inherit", md: "none", lg: "none" },
          mx: "20px",
          mt: "100px",
          maxHeight: "500px",
        }}
      >
        <Table stickyHeader component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Is Accepted</TableCell>
              <TableCell>Is Verified</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {childs.map((child) =>
              (allChild &&
                child.district.toLowerCase() === ngo.district.toLowerCase() &&
                child.isVerified) ||
              (child.district.toLowerCase() === ngo.district.toLowerCase() &&
                child.isVerified &&
                child.isAccepted) ? (
                <TableRow>
                  <TableCell>{child.name}</TableCell>
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
                  <TableCell>
                    <Button
                      size="small"
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
              ) : (
                <div></div>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Table for XS Screens to M Screens */}

      <TableContainer
        sx={{
          display: { xs: "none", md: "inherit", lg: "none" },
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
            {childs.map((child) =>
              (allChild &&
                child.district.toLowerCase() === ngo.district.toLowerCase() &&
                child.isVerified) ||
              (child.district.toLowerCase() === ngo.district.toLowerCase() &&
                child.isVerified &&
                child.isAccepted) ? (
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
                      size="small"
                      variant="contained"
                      onClick={() => navigate(`/child/${child?._id}`)}
                    >
                      <ArrowRightAltIcon />
                      <Typography
                        component="span"
                        sx={{
                          display: { xs: "none", md: "block" },
                          fontSize: "13px",
                        }}
                      >
                        View Details
                      </Typography>
                    </Button>
                  </TableCell>
                </TableRow>
              ) : (
                <div></div>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NgoDashboard;
