import axios from "axios";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ChildComplaint = () => {
  const [aadharno, setAadhar] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const data = { aadhar_no: aadharno, description: desc };
    const notification = toast.loading("Raising Complaint...");
    try {
      const resp = await axios.post(
        "http://localhost:5000/pencil/complaints",
        data
      );
      if (resp.status === 201) {
        toast.success(
          `Complaint Raised w/ id ${resp?.data?.newComplaint?._id}`,
          {
            id: notification,
          }
        );
      } else {
        console.error(resp);
        toast.error("Error Occurred", { id: notification });
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.message, { id: notification });
    } finally {
      setAadhar("");
      setDesc("");
    }
  };

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

          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <Button
            onClick={handleSubmit}
            size="large"
            sx={{ mt: "30px", backgroundColor: "black", width: "70%" }}
            variant="contained"
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/")}
            size="large"
            sx={{ mt: "30px", width: "70%" }}
            variant="outlined"
          >
            Back to Home
          </Button>
        </Container>
      </Paper>
    </Box>
  );
};

export default ChildComplaint;
