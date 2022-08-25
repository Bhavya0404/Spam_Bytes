import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Typography, FormControlLabel, Checkbox } from "@mui/material";





const ChildComplaint = () => {
    const [aadharno, setAadhar] = useState("");

  return (
    <Box
    component="form"
    sx={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      "& .MuiTextField-root": { m: 1, width: "25ch" },
    }}
    noValidate
    autoComplete="off"
  >
    <Paper
      elevation={12}
      sx={{
        width: { xs: "320px", sm: "500px", md: "550px" },
        height: { xs: "650px", sm: "650px", md: "700px", lg: "750px" },
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container
        sx={{
          width: { xs: "80%", md: "70%" },
          height: "75%",
        }}
      >
                  <Typography
            variant="h4"
            component="p"
            sx={{
              fontWeight: 600,
              mb: 5,
              fontSize: { xs: 25, sm: 32 },
            }}
          >
            Child Complaint Page
          </Typography>


         <TextField
            required
            fullWidth
            id="outlined-required"
            label="Aadhar Number"
            value={aadharno}
            onChange={(e) => setAadhar(e.target.value)}
          />

          <Button
            // onClick={}
            size="large"
            sx={{ mt: "30px", backgroundColor: "black", width: "70%" }}
            variant="contained"
          >
            Submit
          </Button>


           </Container>
      </Paper>
    </Box>
  
  )
}

export default ChildComplaint