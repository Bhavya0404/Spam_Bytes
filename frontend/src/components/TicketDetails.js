import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFoundChildById } from "../features/foundchild/FoundChildSlice";
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
  Modal,
  TextField,
  TableHead,
  capitalize,
} from "@mui/material";
import { red, yellow, green, grey } from "@mui/material/colors";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { formatMoney } from "accounting";
import axios from "axios";
import EditButton from "./EditButton";
import EditModal from "./EditModal";
import UploadModal from "./UploadModal";
import MapModal from "./MapModal";
import { getNodal } from "../features/nodal/NodalSlice";
import { selectAllNgo } from "../features/ngo/ngoSlice";
import { toast } from "react-hot-toast";
import SideBar from "./Sidebar";

const TicketDetails = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
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
                                <TableCell>
                                    Chotu Bacha
                                </TableCell>
                            </TableRow>

                            <TableRow>
                            <TableCell>
                              <Typography>Description</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>XYZ ABC</Typography>
                            </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    <Typography>NGO Name</Typography>
                                </TableCell>
                                <TableCell>
                                    NGOssss
                                </TableCell>
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
                                    // backgroundColor: getColor(
                                    //   payoutDataId?.status
                                    // )[0],
                                  }}
                                >
                                  <Typography
                                    sx={{
                                    //   color: getColor(payoutDataId?.status)[1],
                                    }}
                                  >
                                    {/* {capitalize(payoutDataId?.status)} */}
                                  </Typography>
                                </Container>
                                </TableCell>

                                <TableCell>
                              <Button
                                variant="text"
                                // disabled={
                                //   !childData?.isVerified ||
                                //   childData?.isAccepted ||
                                //   acceptChild
                                // }
                                // onClick={handleAccepted}
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
                      {/* <img
                        alt={childData?.name}
                        src={
                          childData?.img
                            ? `${childData?.img}`
                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"
                        } */}
                        {/* style={{
                          objectFit: "contain",
                          height: "250px",
                          width: "200px",
                        }}
                      /> */}
                      {(
                        <Button
                          variant="text"
                          component="label"
                          sx={{ gap: 1 }}
                        >
                          <AddAPhotoIcon />
                          <Typography
                            component="span"
                            sx={{ textTransform: "capitalize" }}
                          >
                            Upload Photograph
                          </Typography>
                          <input
                            hidden
                            accept="image/png"
                            type="file"
                            // value={image}
                            // onChange={handleUpload}
                          />
                        </Button>
                      )}

                      </Box>
                      </Box>
                  </Container>

                </Box>
                </CardContent>
                </Card>
                </Container>



      </Box>
  )
}

export default TicketDetails