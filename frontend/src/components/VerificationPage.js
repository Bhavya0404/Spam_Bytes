import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const VerificationPage = () => {
  const [_id, set_id] = useState("");
  const Verification = async () => {
    // const c = 1;
    try {
      const resp = await axios.put(`http://localhost:5000/nodal/verify/${_id}`);

      if (resp.status === 200) {
        console.log(resp.data);
        alert(resp?.data?.message);
      } else {
        alert("Error");
        console.error(resp);
      }
    } catch (err) {
      // console.error(err);
    } finally {
      set_id("");
    }
  };

  return (
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
          width: { xs: "750px" },
          height: { xs: "400px" },
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Container
          sx={{
            width: { xs: "70%" },
            height: "45%",
          }}
        >
          <TextField
            label="Complaint Number"
            variant="standard"
            placeholder="Enter Complaint Number"
            onChange={(e) => set_id(e.target.value)}
            value={_id}
            fullWidth
          ></TextField>
          <FormControlLabel
            sx={{ mt: "10px", mb: "5px" }}
            value="Yes"
            control={<Radio />}
            label="I have verified the child"
          />{" "}
          <br></br>
          <Button size="large" variant="outlined" onClick={Verification}>
            Verified
          </Button>
        </Container>
      </Paper>
    </Box>
  );
};

export default VerificationPage;
