import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const sendFPRequest = async () => {
    setEmailError(false);
    if (!email) {
      setEmailError(true);
      return;
    }
    const notification = toast.loading("Processing...");
    try {
      const resp = await axios.post(
        `http://localhost:5000/auth/forgotpassword`,
        { email }
      );

      if (resp.status === 200) {
        toast.success(resp?.data?.message, { id: notification });
        setEmail("");
        navigate("/login");
      } else {
        toast.error(`Error: ${resp?.data?.message}`, { id: notification });
      }
    } catch (err) {
      toast.error(`Error: ${err?.response?.data?.message}`, {
        id: notification,
      });
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 4,
          minWidth: "40%",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold", fontSize: 24 }}
        >
          Forgot Password
        </Typography>
        <TextField
          value={email}
          placeholder="Enter Email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 1.25,
          }}
        >
          <Button
            onClick={() => navigate(-1)}
            color="error"
            variant="outlined"
            sx={{ flex: 0.4 }}
          >
            Cancel
          </Button>
          <Button
            onClick={sendFPRequest}
            variant="contained"
            sx={{ flex: 0.4 }}
          >
            Next
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ForgotPassword;
