import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Skeleton } from "@mui/material";

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SideBar from "../components/Sidebar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import sidebarMenus from "../components/sidebarMenus";
import axios from "axios";
import { yellow, green } from "@mui/material/colors";
import { useSelector } from "react-redux";

const getColor = (status) => {
  if (status === true) return [green[50], green[600]];
  else return [yellow[50], yellow[900]];
};

const AllTickets = () => {
  const resolve = useSelector((state) => state.ticketslice.resolve);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [allTickets, setAllTickets] = useState([]);
  useEffect(() => {
    (async () => {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      try {
        const resp = await axios.get(
          "http://localhost:5000/pencil/complaints",
          { headers }
        );
        const data = resp?.data;
        console.log(resolve);
        if (resolve === true) {
          setAllTickets(data.filter((t) => t.resolved === true));
        } else if (resolve === false) {
          setAllTickets(data.filter((t) => t.resolved === false));
        } else {
          setAllTickets(data);
        }
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [resolve]);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <SideBar
        nSections={sidebarMenus.nodal.nSections}
        sectionList={sidebarMenus.nodal.sectionList}
        header={sidebarMenus.nodal.header}
      />

      {loading ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <>
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
                  <TableCell>Description</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {allTickets.map((ticket) => (
                  <TableRow>
                    <TableCell>{ticket?.child?.name}</TableCell>
                    <TableCell>{ticket?.description}</TableCell>
                    <TableCell>
                      <Container
                        sx={{
                          padding: "3px",
                          borderRadius: "100px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: getColor(ticket?.resolved)[0],
                        }}
                      >
                        <Typography
                          sx={{
                            color: getColor(ticket?.resolved)[1],
                          }}
                        >
                          {ticket?.resolved ? "Resolved" : "Pending"}
                        </Typography>
                      </Container>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="medium"
                        variant="contained"
                        onClick={() =>
                          navigate(`/ticketdetails/${ticket?._id}`)
                        }
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
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </Box>
  );
};

export default AllTickets;
