import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import complaintImg from "../assets/images/complaint.png";
import annoucementImg from "../assets/images/announce.png";
import mediaImg from "../assets/images/media.png";
import conferenceImg from "../assets/images/conference.png";

export const MiddleNavbar = () => {
  return (
    <Box>
      <Box
        sx={{
         
          width: "100%",
          height: {xs: '570px', sm: '215px'},
          display: "flex",
          flexDirection: {xs: 'column', sm: 'row'},
          justifyContent: 'center',
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Box sx={{ width: "8%", height: "100%", background: "#FF5C58" , display: {xs: 'none', sm: 'flex'} }} />

        <Button
          sx={{
            width: { xs: '95%', sm: "35%", md: "20%" },
            height: {xs: '80%', sm: '100%'},
            marginLeft: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "rgba(254, 143, 143, 0.7)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: {xs: '15%', sm: '45%'},
                height: "45%",
              }}
              src={complaintImg}
            ></Box>

            <Typography
              variant="h4"
              sx={{
                color: "black",
                fontSize: { xs: "1rem", md: "1.1rem", lg: "1.3", xl: "1.4" },
                mt: "15px",
              }}
            >
              File a Complaint
            </Typography>
          </Box>
        </Button>

        {/* 2nd Box */}

        <Button
          sx={{
            width: { xs: '95%', sm: "35%", md: "20%" },
            height: {xs: '80%', sm: '100%'},
            marginLeft: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "rgba(254, 143, 143, 0.7)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: {xs: '15%', sm: '45%'},
                height: "45%",
              }}
              src={annoucementImg}
            ></Box>

                <Typography
                variant="h4"
                sx={{
                    color: "black",
                    fontSize: { xs: "1rem", md: "1rem", lg: "1.3", xl: "1.4" },
                    mt: "15px",
                }}
                >
                    Important Announcements
                </Typography>
          </Box>
        </Button>

        {/* 3rd Box */}

        <Button
          sx={{
            width: { xs: '95%', sm: "35%", md: "20%" },
            height: {xs: '80%', sm: '100%'},
            marginLeft: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "rgba(254, 143, 143, 0.7)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: {xs: '15%', sm: '45%'},
                height: "45%",
              }}
              src={mediaImg}
            ></Box>

                <Typography
                variant="h4"
                sx={{
                    color: "black",
                    fontSize: { xs: "1rem", md: "1rem", lg: "1.3", xl: "1.4" },
                    mt: "15px",
                }}
                >
                    Media
                </Typography>
          </Box>
        </Button>

        {/* 4th Box */}

        <Button
          sx={{
            width: { xs: '95%', sm: "35%", md: "20%" },
            height: {xs: '80%', sm: '100%'},
            marginLeft: "10px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              background: "rgba(254, 143, 143, 0.7)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{
                width: {xs: '15%', sm: '45%'},
                height: "45%",
              }}
              src={conferenceImg}
            ></Box>

                <Typography
                variant="h4"
                sx={{
                    color: "black",
                    fontSize: { xs: "1rem", md: "1rem", lg: "1.3", xl: "1.4" },
                    mt: "15px",
                }}
                >
                    Conference
                </Typography>
          </Box>
        </Button>

        <Box sx={{ width: "8%", height: "100%", background: "#FF5C58", display: {xs: 'none', sm: 'flex'}}} />
      </Box>
    </Box>
  );
};
