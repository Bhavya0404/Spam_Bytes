import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getUser } from "./usersSlice";
import Box from "@mui/material/Box";
import UserSidebar from "../../components/UserSidebar";
import AddIcon from "@mui/icons-material/Add";
import {
  Card,
  CardContent,
  Container,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import "react-step-progress-bar/styles.css";
import {
  selectFoundChild,
  getFoundChildStatus,
  getFoundChildError,
  getFoundChildByUser,
} from "../foundchild/FoundChildSlice";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';

const steps = [
  { status: "Reported" },
  { status: "Verified" },
  { status: "Accepted" },
  { status: "Has Housing" },
  { status: "In School" },
  { status: "Complaint Completed" },
];

const uTypes = {
  'IN': "Individual",
  'ADMIN': "Nodal Officer",
  'NGO': 'NGO'
}

const UserDashBord = () => {
  const user = useSelector((state) => getUser(state));
  const [complaintNo, setComplaintNo] = useState("");

  const statusChild = useSelector(getFoundChildStatus);

  const foundChildData = useSelector(selectFoundChild);
  const childByUser = useSelector((state) =>
    getFoundChildByUser(state, user?._id)
  );
  const [cdHidden, setCdHidden] = useState(true);
  const [childData, setChildData] = useState({});

  const error = useSelector(getFoundChildError);

  const getChildData = () => {
    setChildData(foundChildData.find((child) => child._id === complaintNo));
    setCdHidden(false);
  };

  const getStepPosition = (e) => {
    let status = 0;
    if (e.isVerified) {
      status = 1;
    }
    if (e.isAccepted) {
      status = 2;
    }
    if (e.hasHousing) {
      status = 3;
    }
    if (e.inSchool) {
      status = 4;
    }
    if (e.compCompleted) {
      status = 5;
    }
    return status;
  };

  if (!user) {
    return (
      <section>
        <h2>403 | Unauthorized</h2>
      </section>
    );
  }
  return (
    <Box display="flex" flexDirection="row">
      <UserSidebar />
      <Container sx={{ paddingTop: "20px" }}>
        <Card sx={{ minWidth: 275 }}>
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
                minWidth: "200px",
                alignItems: "center",
                padding: '10px'
              }}
            >
              <AccountCircleIcon
                sx={{ color: "blueviolet" }}
                fontSize="medium"
              />
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Typography sx={{fontSize: 16}}>{user?.name}</Typography>
                <Typography sx={{fontSize: 12, color: 'gray'}}>{uTypes[user?.acType]}</Typography>
              </Box>
              <LogoutIcon sx={{color: 'red'}} fontSize="medium" />
            </Box>
          </CardContent>
        </Card>
        <Box
          display="flex"
          flexDirection="row"
          sx={{ paddingTop: "20px" }}
          justifyContent="space-between"
        >
          <Card sx={{ backgroundColor: "purple", color: "white" }}>
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Children Reported
              </Typography>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                <strong>{childByUser?.length}</strong>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ backgroundColor: "yellow", color: "black" }}>
            <CardContent>
              <Typography sx={{ fontSize: 24 }} gutterBottom>
                Complaints Resolved
              </Typography>
              <Typography sx={{ fontSize: 20 }} gutterBottom>
                <strong>0</strong>
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ backgroundColor: "green", color: "white" }}>
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
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: 20, textAlign: "center" }}>
                  <strong>Check Complaint Status</strong>
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AddIcon />
                  <Typography variant="span">Report a Child</Typography>
                </Button>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                marginTop="20px"
              >
                <TextField
                  value={complaintNo}
                  onChange={(e) => {
                    setCdHidden(true);
                    setComplaintNo(e.target.value);
                  }}
                  sx={{ width: "100%", marginTop: "0.5rem" }}
                  label="Enter Complaint No"
                  color="primary"
                />
                <Button
                  onClick={getChildData}
                  variant="outlined"
                  sx={{ minWidth: 120, marginLeft: "10px" }}
                >
                  Get Status
                </Button>
              </Box>
              {!!childData && !cdHidden && (
                <Box
                  sx={{
                    width: "100%",
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
                    Complaint Status of Complaint No{" "}
                    <strong>{complaintNo}</strong>
                  </Typography>
                  <Stepper
                    sx={{ width: "100%" }}
                    alternativeLabel
                    activeStep={getStepPosition(childData)}
                  >
                    {steps.map((step, idx) => {
                      const stepProps = {};
                      const labelProps = {};
                      return (
                        <Step key={step?.status} {...stepProps}>
                          <StepLabel {...labelProps}>{step?.status}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>

                  <Container
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "30px",
                    }}
                  >
                    <Box>
                      <Typography>Name: {childData?.name}</Typography>
                      <Typography>Address: {childData?.address}</Typography>
                      <Typography>
                        Description: {childData?.description}
                      </Typography>
                      <Typography>State: {childData?.state}</Typography>
                      <Typography>District: {childData?.district}</Typography>
                      <Typography>
                        Is Accepted: {childData?.isAccepted ? "Yes" : "No"}
                      </Typography>
                      <Typography>
                        Is Verified: {childData?.isVerified ? "Yes" : "No"}
                      </Typography>
                      <Typography>
                        In School: {childData?.inSchool ? "Yes" : "No"}
                      </Typography>
                    </Box>
                    <img
                      alt={childData?.name}
                      src={`data:image/png;base64, ${childData?.img}`}
                      style={{
                        objectFit: "contain",
                        height: "200px",
                        width: "200px",
                      }}
                    />
                  </Container>
                </Box>
              )}
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default UserDashBord;
