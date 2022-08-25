import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import sidebarMenus from "./sidebarMenus";
import {
  Box,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import axios from "axios";
import SideBar from "./Sidebar";
import { toast } from "react-hot-toast";
import { yellow, green } from "@mui/material/colors";

const getColor = (status) => {
  if (status === true) return [green[50], green[600]];
  else return [yellow[50], yellow[900]];
};

const TicketDetails = () => {
  const { id: complaintNo } = useParams();
  const [complaintData, setComplaintData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const resp = await axios.get(
        `http://localhost:5000/pencil/complaints/${complaintNo}`,
        { headers }
      );
      console.log(resp?.data);
      setComplaintData(resp?.data);
    })();
  }, [complaintNo]);

  const handleResolved = async () => {
    const data = { resolved: true };
    const notification = toast.loading("Marking as resolved...");
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      await axios.put(
        `http://localhost:5000/pencil/complaints/${complaintNo}`,
        data,
        {
          headers,
        }
      );
      toast.success(`Complaint w/ id ${complaintNo} is now resolved`, {
        id: notification,
      });
      navigate(0);
    } catch (err) {
      console.error(err);
      toast.error(err?.message, { id: notification });
    }
  };
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

      <Container maxWidth={false}>
        <Card sx={{ flex: 1, mt: "100px" }}>
          <CardContent>
            <Box
              sx={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: 20,
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Details of
              </Typography>

              <Container
                maxWidth={false}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "30px",
                  gap: "30px",
                }}
              >
                <Box
                  sx={{
                    flex: 0.9,
                  }}
                >
                  <TableContainer>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Typography>Name</Typography>
                          </TableCell>
                          <TableCell>{complaintData?.child?.name}</TableCell>
                          <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>
                            <Typography>Description</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>
                              {complaintData?.description}
                            </Typography>
                          </TableCell>
                          <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>
                            <Typography>NGO Name</Typography>
                          </TableCell>
                          <TableCell>{complaintData?.ngo?.name}</TableCell>
                          <TableCell></TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>
                            <Typography>Status</Typography>
                          </TableCell>
                          <TableCell>
                            <Container
                              sx={{
                                padding: "3px",
                                borderRadius: "100px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: getColor(
                                  complaintData?.resolved
                                )[0],
                              }}
                            >
                              <Typography
                                sx={{
                                  color: getColor(complaintData?.resolved)[1],
                                }}
                              >
                                {complaintData?.resolved
                                  ? "Resolved"
                                  : "Pending"}
                              </Typography>
                            </Container>
                          </TableCell>

                          <TableCell>
                            <Button
                              variant="text"
                              disabled={complaintData?.resolved}
                              onClick={handleResolved}
                            >
                              Mark As Resolved
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.75,
                  }}
                >
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <img
                      alt={complaintData?.child?.name}
                      src={
                        complaintData?.child?.img
                          ? `${complaintData?.child?.img}`
                          : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"
                      }
                      style={{
                        objectFit: "contain",
                        height: "250px",
                        width: "200px",
                      }}
                    />
                  </Box>
                </Box>
              </Container>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default TicketDetails;
