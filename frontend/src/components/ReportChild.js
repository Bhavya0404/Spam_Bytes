import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Typography, Autocomplete } from "@mui/material";

import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

import data from "../assets/dropdown.json";

const ReportChild = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [email, setEmail] = useState("");
  const [pNo, setPnO] = useState("");
  const [districts, setDistricts] = useState([]);

  const [canSubmit, setCanSubmit] = useState(true);
  const [loggedIn, setLoggedIn] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        const resp = await axios.get("http://localhost:5000/auth/chkAuth", {
          headers,
        });
        setLoggedIn(resp.data);
      } catch (err) {
        setLoggedIn({});
      }
    })();
  }, []);

  useEffect(() => {
    setDistrict("");
    setDistricts(data.find((t) => t.name === state)?.districts);
  }, [state]);

  const handleUpload = (e) => {
    setCanSubmit(false);
    const val = e.target.files[0];
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(val);
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
    });
    promise
      .then((res) => {
        toast.success("Image Uploaded");
        setImg(res);
        setCanSubmit(true);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err);
        setCanSubmit(true);
      });
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Geolocation Available");
    } else {
      toast.error("Geolocation not available, allow it in your browser");
    }
  }, []);

  const handleReportChild = async () => {
    const notification = toast.loading("Submitting Report...");
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
    };

    navigator.geolocation.getCurrentPosition(async (pos) => {
      let data = {
        name,
        description,
        img,
        address,
        state,
        district,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };

      if (!loggedIn?.loggedIn) {
        data = { ...data, isAnon: true, email, phoneNumber: pNo };
      } else {
        data = { ...data, isAnon: false };
      }

      try {
        const resp = await axios.post(
          "http://localhost:5000/pencil/report",
          data,
          { headers }
        );
        if (resp.status === 201) {
          toast.success(
            "Your complaint ID is : " +
              resp?.data?.newFoundChild?._id +
              "  " +
              name +
              ". You may track your reported child using this ID",
            { id: notification }
          );
        } else {
          toast.error("Error", { id: notification });
          console.error(resp);
        }
      } catch (err) {
        toast.error(
          err?.response?.data?.message?.details[0]?.message || err?.message,
          {
            id: notification,
          }
        );
        console.error(err);
      } finally {
        setName("");
        setAddress("");
        setDescription("");
        setImg("");
        setState("");
        setDistrict("");
        setEmail("");
        setPnO("");
      }
    });
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
            Report Child
          </Typography>

          <Typography variant="h6" color={"primary"}>
            You are reporting{" "}
            {loggedIn?.loggedIn ? (
              <Typography
                component="span"
                variant="h6"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                as {`${loggedIn?.user?.name}`}
              </Typography>
            ) : (
              <Typography
                component="span"
                variant="h6"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                Anonymously
              </Typography>
            )}{" "}
          </Typography>
          {!loggedIn?.loggedIn ? (
            <Link to="/login">
              <Typography variant="h6" color="primary">
                Login Now
              </Typography>
            </Link>
          ) : (
            <Link to="/logout">
              <Typography variant="h6" color="primary">
                Logout to report Anonymously
              </Typography>
            </Link>
          )}

          <TextField
            id="outlined-basic"
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            sx={{ mt: "20px" }}
            id="outlined-required"
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <TextField
            fullWidth
            id="outlined-required"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Autocomplete
            id="state"
            options={data.map((d) => d.name)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="State" />}
            value={state}
            onChange={(_, dt) => {
              setState(dt);
            }}
          />

          {districts?.length > 0 && (
            <Autocomplete
              id="district"
              options={districts}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="District" />
              )}
              value={district}
              onChange={(_, dt) => {
                setDistrict(dt);
              }}
            />
          )}

          {!loggedIn?.loggedIn && (
            <>
              <TextField
                required
                fullWidth
                type="email"
                id="outlined-required"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                type="tel"
                id="outlined-required"
                label="Phone Number"
                value={pNo}
                onChange={(e) => setPnO(e.target.value)}
              />
            </>
          )}

          <Button
            variant="contained"
            sx={{ mt: "2px", width: "50%" }}
            component="label"
            type="file"
            value={img}
            onChange={handleUpload}
          >
            Upload Image
            <input hidden accept="image/*" multiple type="file" />
          </Button>
          <Button
            onClick={handleReportChild}
            size="large"
            disabled={!canSubmit}
            sx={{ mt: "30px", backgroundColor: "black", width: "70%" }}
            variant="contained"
          >
            Submit
          </Button>
        </Container>
      </Paper>
    </Box>
  );
};

export default ReportChild;
