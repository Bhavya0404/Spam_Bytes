import React, { useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "../login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = async () => {
    const data = { email, password };

    setEmailError(false);
    setPasswordError(false);

    if (!email) {
      setEmailError(true);
    }

    if (!password) {
      setPasswordError(true);
    }

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
          width: "65%",
          height: "65vh",
        },
      }}
    >
      <Paper elevation={12}>
        <Grid container spacing={2}>
          <Grid
            item
            sm={7}
            xs={12}
            sx={{
              mt: 18,
            //   mx: 5,
              mb: 5,
              // width: "200px",
            }}
          >
            <TextField
              sx={{
                // mt: 18,
                mb: 5,
                // mx: 7,
                // width: "500px",
              }}
              label="Email"
              placeholder="Enter Email"
              type="email"
              required
              fullWidth
              error={emailError}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              sx={
                {
                  // mx: 7,
                  // width: "500px",
                }
              }
              label="Password"
              placeholder="Enter Password"
              type="password"
              value={password}
              error={passwordError}
              required
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              size="large"
              variant="contained"
              onClick={handleLogin}
              sx={{
                backgroundColor: "black",
                mt: 5,
                // mx: 23,
                // width: "200px",
              }}
            >
              LOGIN
            </Button>
          </Grid>

          <Grid
            item
            sm={5}
            xs={12}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {/* <Typography variant="h4" component="div">
                PENCIL PORTAL
            </Typography> */}

            <Typography
              variant="h4"
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f5af19",  /* fallback for old browsers */
                height: "65vh",
                textAlign: "center",
                color: "white",
              }}
            >
              Please LogIn
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Login;
