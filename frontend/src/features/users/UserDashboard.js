import React from "react";
import { useSelector } from "react-redux";
import { getUser } from "./usersSlice";
import Box from "@mui/material/Box";
import Sidebar from "../../components/Sidebar";
import { Card, CardContent, Container, Typography } from "@mui/material";

import "react-step-progress-bar/styles.css";
import {
  // selectFoundChild,
  getFoundChildByUser,
} from "../foundchild/FoundChildSlice";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ComplaintStatus from "../../components/ComplaintStatus";
import sidebarMenus from "../../components/sidebarMenus";
import { useNavigate } from "react-router-dom";
import { selectFoundChild } from "../foundchild/FoundChildSlice";
const uTypes = {
  IN: "Individual",
  ADMIN: "Nodal Officer",
  NGO: "NGO",
};

function refresh() {
  if (!window.location.hash) {
    window.location = window.location + "#loaded";
    window.location.reload();
  }
}

const UserDashboard = () => {
  const user = useSelector((state) => getUser(state));
  const allChild = useSelector(selectFoundChild);
  const childByUser = useSelector((state) =>
    getFoundChildByUser(state, user?._id)
  );

  const mail = user.email;
  console.log(user.email)
  allChild.forEach((child) => {
    console.log(child)
  })
  const navigate = useNavigate();

  refresh();

  if (!user) {
    return (
      <section>
        <h2>403 | Unauthorized</h2>
      </section>
    );
  }
  return (
    <Box display="flex" flexDirection="row">
      <Sidebar
        nSections={sidebarMenus.user.nSections}
        sectionList={sidebarMenus.user.sectionList}
        header={sidebarMenus.user.header}
      />
      <Container sx={{ paddingTop: "20px" }}>
        <Card sx={{ minWidth: 275, marginTop: "60px" }}>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: 20, textAlign: "center" }} gutterBottom>
              Welcome, <strong>{user?.name}</strong>
            </Typography>
            <Box
              sx={{
                borderRadius: "100px",
                backgroundColor: "#F3F3F3",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                width: { lg: "200px" },
              }}
            >
              <AccountCircleIcon
                sx={{
                  color: "primary",
                  display: { xs: "none", lg: "inline" },
                }}
                fontSize="large"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    display: { xs: "none", lg: "inline" },
                    color: "gray",
                  }}
                >
                  Account Type
                </Typography>
                <Typography
                  sx={{ fontSize: 14, display: { xs: "none", lg: "inline" } }}
                >
                  {uTypes[user?.acType]}
                </Typography>
              </Box>
              <LogoutIcon
                sx={{ color: "red", cursor: "pointer" }}
                fontSize="medium"
                onClick={() => navigate("/logout")}
              />
            </Box>
          </CardContent>
        </Card>
        <Box
          sx={{
            paddingTop: "20px",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
          }}
        >
          <Card
            sx={{
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              marginBottom: "10px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Children Reported
              </Typography>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                <strong>{childByUser?.length}</strong>
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              backgroundColor: "primary.main",
              color: "primary.contrastText",
              marginBottom: "10px",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Complaints Resolved
              </Typography>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                <strong>0</strong>
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              backgroundColor: "primary.main",
              color: "primary.contrastText",
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Complaints Resolved
              </Typography>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                <strong>0</strong>
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" sx={{ paddingTop: "20px" }}>
          <ComplaintStatus heading={true} />
        </Box>
      </Container>
    </Box>
  );
};

export default UserDashboard;
