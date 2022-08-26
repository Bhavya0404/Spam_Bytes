import { Box, Button, Container, Typography } from "@mui/material";
import mainPic from "../assets/images/narendra.png";
import React from "react";
import DonateButton from "./DonateButton";
import { useNavigate } from "react-router-dom";

// import { Carousel } from "react-bootstrap";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import "bootstrap/dist/css/bootstrap.min.css";

import mainPic1 from "../assets/images/main1.jpg";
import mainPic2 from "../assets/images/main2.jpg";
import mainPic3 from "../assets/images/main3.jpg";


const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: { sm: "100vh", xs: "100vh" },
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { lg: "100vh", xs: "100vh" },
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          zIndex: '0',
        }}
      >
        {/* <Carousel fade={true} pause={false}>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={mainPic1} alt="First slide" height={'725px'}/>
            
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={mainPic2} alt="Third slide" height={'725px'} />
            
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100" src={mainPic3} alt="Third slide" height={'725px'} />
        
          </Carousel.Item>
        </Carousel> */}
        <img className="d-block w-100" src={mainPic3} alt="Third slide" height={'725px'} />
        </Box>
        

      <Box
        sx={{
          position: "relative",
          color: "common.white",
          width: { sm: "100%", xs: "100%" },
          height: { sm: "100%", xs: "100vh" },
          display: "flex",
          alignItems: "center",
          margin: { xs: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "80%",
            justifyContent: "space-evenly",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              height: { md: "50%", xs: "60%" },
              width: { lg: "150%", md: "60%", sm: "100%", xs: "100%" },
              marginTop: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              bgcolor: "secondry.main",
              borderRadius: "50px",
            }}
          >
            <Box
              sx={{
                marginLeft: "10%",
              }}
            >
              <Typography variant="h1">PENCIL</Typography>
              <Typography variant="h4">
                A Ministry of Labour and Employment Initiative
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: { md: "10%", xs: "100px" },
              width: { sm: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "primary.main",
              borderRadius: "10px",
              marginLeft: "15%",
            }}
          >
            <Button onClick={() => navigate("/reportchild")}>
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "capitalize", color: "common.white" }}
              >
                Register a Complaint
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              height: { md: "10%", xs: "100px" },
              width: { sm: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "primary.main",
              borderRadius: "10px",
              marginLeft: "15%",
              marginTop: "5%",
            }}
          >
            <Button onClick={() => navigate("/ComplaintStatus")}>
              <Typography
                variant="subtitle1"
                sx={{ textTransform: "capitalize", color: "common.white" }}
              >
                Track Complaint
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "40%",
              justifyContent: "space-evenly",
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",

          display: { xs: "none", lg: "flex" },
        }}
      ></Box>
    </Box>
  );
};

export default HeroSection;
