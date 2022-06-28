import React, { useState } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import "../login.css";
import Container from "@mui/material/Container";

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
      <Paper
        elevation={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            sm={7}
            xs={12}
            sx={{
              my: { xs: "auto" },
            }}
          >
            <Container
              sx={{
                alignSelf: "center",
                width: "70%",
                m: "auto",
              }}
            >
              <Typography
                variant="h4"
                component="p"
                sx={{
                  fontWeight: 700,
                  mb: 7,
                  fontSize: {xs: 25, sm: 35},
                }}
              >
                Welcome back
              </Typography>

              <Typography variant="body1" component="p" sx={{ mb: 1 }}>
                Email
              </Typography>
              <TextField
                sx={{
                  mb: 5,
                  display: "block",
                }}
                variant="standard"
                label="Email"
                placeholder="Enter Email"
                type="email"
                required
                fullWidth
                error={emailError}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Typography variant="body1" component="p" sx={{ mb: 1 }}>
                Password
              </Typography>
              <TextField
                sx={{
                  display: "block",
                }}
                variant="standard"
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
                  width: "50%",
                }}
              >
                LOGIN
              </Button>
            </Container>
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
                backgroundColor: "#f5af19",
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
