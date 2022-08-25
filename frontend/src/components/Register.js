import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import Navbar from "./Navbar";
import toast from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async () => {
    const data = { email, password, cpassword, name, phoneNumber };
    const notification = toast.loading("Processing Registration...");
    try {
      const resp = await axios.post(
        "http://localhost:5000/auth/register",
        data
      );

      if (resp.status === 201) {
        toast.success("Registration Successful", { id: notification });
      } else {
        toast.error("Error", { id: notification });
        console.error(resp);
      }
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.error?.details[0]?.message, {
        id: notification,
      });
    } finally {
      setEmail("");
      setPassword("");
      setName("");
      setCpassword("");
      setPhoneNumber("");
    }
  };

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
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
                Registeration
              </Typography>

              <TextField
                fullWidth
                id="standard-basic"
                label="Name"
                variant="standard"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <TextField
                sx={{ mt: "20px" }}
                fullWidth
                id="standard-basic"
                label="Phone Number"
                variant="standard"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <TextField
                sx={{ mt: "20px" }}
                fullWidth
                id="standard-basic"
                label="Email"
                variant="standard"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                sx={{ mt: "20px" }}
                fullWidth
                id="standard-basic"
                label="Password"
                type="password"
                variant="standard"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                sx={{ mt: "20px" }}
                fullWidth
                id="standard-basic"
                label="Confirm Password"
                variant="standard"
                type="password"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  textAlign: "right",
                }}
              >
                <Typography sx={{ mt: "15px", fontWeight: "500" }}>
                  Already a user? Sign in
                </Typography>
              </Link>
              <Button
                onClick={handleRegister}
                size="large"
                sx={{ mt: "30px", backgroundColor: "black", width: "70%" }}
                variant="contained"
              >
                Register
              </Button>
            </Container>
          </Paper>
     
      </Box>
    </div>
  );
};

export default Register;
