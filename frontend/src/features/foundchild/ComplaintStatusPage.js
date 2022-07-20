import { Box, Typography, Container } from "@mui/material";
import React from "react";
import ComplaintStatus from "../../components/ComplaintStatus";

const ComplaintStatusPage = () => {
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontSize: 24,
            textAlign: "center",
            marginTop: { xs: "40px", lg: "50px" },
            marginBottom: { xs: "40px", lg: "30px" },
          }}
        >
          Complaint Status Page
        </Typography>
        <ComplaintStatus heading={false} createBtn={false} />
      </Box>
    </Container>
  );
};

export default ComplaintStatusPage;
