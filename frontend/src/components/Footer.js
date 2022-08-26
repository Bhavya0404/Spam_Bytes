import { Typography } from "@mui/material";
import { bgcolor, Box, positions } from "@mui/system";
import React from "react";
import logo from "../assets/images/logoblue.png";
import ashok from "../assets/images/ashokst.png";
import link1 from "../assets/images/link1.png";
import link2 from "../assets/images/link2.jpg";
import link3 from "../assets/images/link3.png";
import link4 from "../assets/images/link4.jpg";
import link5 from "../assets/images/link5.png";
import link6 from "../assets/images/link6.png";
import link7 from "../assets/images/link7.png";
import link8 from "../assets/images/link8.png";
import link9 from "../assets/images/link9.jpg";
import link10 from "../assets/images/link10.png";

import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "250px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-around",
        
        

        bgcolor: "secondary.main",
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", sm: "45%", md: "25%" },
          height: "250px",
          marginLeft: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            width: "100px",
            height: "100px",
          }}
          src={ashok}
        ></Box>
        <Box
          component="img"
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
            width: "100px",
            height: "100px",
          }}
          src={logo}
        ></Box>
        <Box
          sx={{
            width: "100%",
            height: { xs: "30%", sm: "45%" },
            marginTop: "20px",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ color: "primary.main", height: { md: "50px", xs: "300px" } }}
          >
            Platform for Effective Enforcement for No Child Labour
          </Typography>
        </Box>
      </Box>

      {/* Images */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          mt: "25px",
          width: "60%",
        }}
      >
        <Box
          sx={{
            height: "30%",
            width: "100%",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <a href="https://www.digitalindia.gov.in/">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link10}
            />
          </a>


          <a href="https://wcd.nic.in/">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link9}
            />
          </a>


          <a href="https://labour.gov.in/">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link8}
            />
          </a>


          <a href="https://www.epfindia.gov.in/site_en/index.php">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link7}
            />
          </a>

          <a href="https://www.esic.nic.in/">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link6}
            />
          </a>

           


          
         
        </Box>
        <Box
          sx={{
            height: "30%",
            width: "100%",

            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            mt: "25px",
            flexWrap: "wrap",
          }}
        >
          <a href="https://www.india.gov.in/">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link1}
            />
          </a>

          <a href="https://ncpcr.gov.in/">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link2}
            />
          </a>

          <a href="https://www.nic.in/">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link3}
            />
          </a>

          <a href="https://www.mha.gov.in/">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link4}
            />
          </a>
          
          <a href="https://labour.gov.in/">
            <Box
              component="img"
              sx={{
                width: "120px",
                height: "53px",
              }}
              src={link5}
            />
          </a>
          
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
