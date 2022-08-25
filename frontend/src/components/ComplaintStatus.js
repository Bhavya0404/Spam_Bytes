import React, { useState } from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  TextField,
  Stepper,
  StepLabel,
  Container,
  Step,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useSelector } from "react-redux";
import { selectFoundChild } from "../features/foundchild/FoundChildSlice";


const steps = [
  { status: "Reported" },
  { status: "Verified" },
  { status: "Accepted" },
  { status: "Has Housing" },
  { status: "In School" },
  { status: "Complaint Completed" },
];

const ComplaintStatus = ({ heading, createBtn }) => {
  const [complaintNo, setComplaintNo] = useState("");
  const [cdHidden, setCdHidden] = useState(true);
  const [childData, setChildData] = useState({});
  const foundChildData = useSelector(selectFoundChild);

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
  return (
    <Card sx={{ flex: 1 }}>
      
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {heading && (
              <Typography sx={{ fontSize: 20, textAlign: "center" }}>
                <strong>Check Complaint Status</strong>
              </Typography>
            )}
            {createBtn && (
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderRadius: { xs: "100px" },
                }}
              >
                <AddIcon />
                <Typography
                  variant="span"
                  sx={{ display: { xs: "none", lg: "inline" } }}
                >
                  Report a Child
                </Typography>
              </Button>
            )}
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" } }}
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
              sx={{
                minWidth: 180,
                marginLeft: "10px",
                marginTop: { xs: "10px", lg: "0" },
              }}
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
                Complaint Status of Complaint No <strong>{complaintNo}</strong>
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
                  <Typography>Description: {childData?.description}</Typography>
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
                  src={
                    childData?.img
                      ? `${childData?.img}`
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"
                  }
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
  );
};

export default ComplaintStatus;
