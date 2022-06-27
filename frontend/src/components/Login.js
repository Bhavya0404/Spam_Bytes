import React, { useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = { email, password };
    try {
      const resp = await axios.post("http://localhost:5000/auth/login", data);
      if (resp.status === 200) {
        localStorage.setItem("token", resp.data.token);
        console.log(resp.data.token);
      } else {
        alert("Failure");
        console.log(resp);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          mt: 7,
          width: "60%",
          height: "60vh",
        },
      }}
    >
      <Paper>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              label="Email"
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField 
              label="Password"
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button 
              variant="contained"
              onClick={handleLogin}
              sx = {{
                backgroundColor: 'black',
              }}>
              Contained</Button>
              
          </Grid>


          <Grid
            item
            xs={6}
            sx={
              {
                // backgroundColor: 'orange',
              }
            }
          >
            {/* <Typography variant="h1" component="div">Hello</Typography> */}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
