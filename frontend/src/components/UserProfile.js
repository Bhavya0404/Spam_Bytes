import {
  Box,
  Card,
  CardContent,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  Modal,
  Container,
  TextField,
} from "@mui/material";
import Sidebar from "./Sidebar";
import sidebarMenus from "./sidebarMenus";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { getUser } from "../features/users/usersSlice";
import { toast } from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "200px", lg: "400px" },
  bgcolor: "background.paper",
  borderRadius: "10px",
  p: 4,
};

const NodalProfile = () => {
  const navigate = useNavigate();
  const userData = useSelector((state) => getUser(state));
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [cNewPassword, setCNewPassword] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [telModalOpen, setTelModalOpen] = useState(false);

  const changePassword = async () => {
    const notification = toast.loading("Processing...");
    if (
      newPassword !== "" &&
      cNewPassword !== "" &&
      cNewPassword !== newPassword
    ) {
      toast.error("Password Mismatch", { id: notification });
      return;
    }
    try {
      const data = {
        newpassword: newPassword,
        cpassword: cNewPassword,
        oldpassword: oldPassword,
      };
      const headers = {
        Authorization: `Bearer ${localStorage?.getItem("token")}`,
      };
      const resp = await axios.put(
        "http://localhost:5000/auth/changepassword",
        data,
        { headers }
      );
      toast.success(resp?.data?.message, { id: notification });
      setOldPassword("");
      setNewPassword("");
      setCNewPassword("");
      setPasswordModalOpen(false);
      navigate(0);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message, { id: notification });
    }
  };

  const changePhoneNumber = async () => {
    const notification = toast.loading("Processing...");
    if (newPhoneNumber === "") {
      toast.error("Empty Field", { id: notification });
      return;
    }
    try {
      const data = {
        phoneNumber: newPhoneNumber,
      };
      const headers = {
        Authorization: `Bearer ${localStorage?.getItem("token")}`,
      };
      const resp = await axios.put(
        "http://localhost:5000/auth/modifyprofile",
        data,
        { headers }
      );
      toast.success(resp?.data?.message, { id: notification });
      setNewPhoneNumber("");
      setTelModalOpen(false);
      navigate(0);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message, { id: notification });
    }
  };
  return (
    <div>
      <AnimatedRoutes>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Sidebar
            nSections={sidebarMenus.user.nSections}
            sectionList={sidebarMenus.user.sectionList}
            header="Profile"
          />
          <Card
            sx={{
              mx: "20px",
              mt: "100px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CardContent>
              <TableContainer sx={{ display: { xs: "none", lg: "inherit" } }}>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell colSpan={3}>{userData?.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                    <TableCell>{userData?.user?.email}</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Password</TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>*************</Typography>
                      <Button
                        onClick={() => setPasswordModalOpen(true)}
                        type="text"
                        size="small"
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Phone Number
                    </TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>{userData?.phoneNumber}</Typography>
                      <Button
                        onClick={() => setTelModalOpen(true)}
                        type="text"
                        size="small"
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableContainer>
              <TableContainer sx={{ display: { xs: "inherit", lg: "none" } }}>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell colSpan={3}>{userData?.name}</TableCell>
                  </TableRow>
                  {/* <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>State</TableCell>
                      <TableCell>{userData?.state}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ fontWeight: 'bold' }}>District</TableCell>
                      <TableCell>{userData?.district}</TableCell>
                    </TableRow> */}
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                    <TableCell>{userData?.user?.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Password</TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography>*************</Typography>
                      <Button
                        onClick={() => setPasswordModalOpen(true)}
                        type="text"
                        size="small"
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Phone Number
                    </TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>{userData?.phoneNumber}</Typography>
                      <Button
                        onClick={() => setTelModalOpen(true)}
                        type="text"
                        size="small"
                      >
                        <EditIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </TableContainer>
            </CardContent>
          </Card>

          {/* Modals */}
          <Modal
            open={passwordModalOpen}
            onClose={() => setPasswordModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Container
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <Typography
                  component="h4"
                  sx={{ fontSize: { xs: 20, lg: 30 } }}
                  textAlign="center"
                >
                  Change Password
                </Typography>
                <TextField
                  type="password"
                  id="oldpassword"
                  placeholder="Enter Current Password"
                  label="Current password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  id="newpassword"
                  type="password"
                  label="New Password"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  variant="outlined"
                />
                <TextField
                  id="cnewpassword"
                  type="password"
                  label="Confirm New Password"
                  placeholder="Re-Enter New Password"
                  value={cNewPassword}
                  onChange={(e) => setCNewPassword(e.target.value)}
                  variant="outlined"
                />

                <Button onClick={changePassword} variant="contained">
                  Change Password
                </Button>
              </Container>
            </Box>
          </Modal>
          <Modal
            open={telModalOpen}
            onClose={() => setTelModalOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Container
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <Typography
                  component="h4"
                  sx={{ fontSize: { xs: 20, lg: 30 } }}
                  textAlign="center"
                >
                  Change Phone Number
                </Typography>
                <TextField
                  type="tel"
                  id="phonenumber"
                  placeholder="Enter New Phone Number"
                  label="New Phone Number"
                  value={newPhoneNumber}
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                  variant="outlined"
                />
                <Button onClick={changePhoneNumber} variant="contained">
                  Change Phone Number
                </Button>
              </Container>
            </Box>
          </Modal>
        </Box>
      </AnimatedRoutes>
    </div>
  );
};

export default NodalProfile;
