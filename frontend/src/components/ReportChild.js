// import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import * as React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Typography, FormControlLabel, Checkbox } from "@mui/material";
import {
  getFoundChildStatus,
  selectFoundChild,
} from "../features/foundchild/FoundChildSlice";
import AnimatedRoutes from "./AnimatedRoutes";
import { toast } from "react-hot-toast";

const ReportChild = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const [isAnon, setIsAnon] = useState(false);
  const [email, setEmail] = useState("");
  const [pNo, setPnO] = useState("");

  const status = useSelector(getFoundChildStatus);
  const foundChildData = useSelector(selectFoundChild);

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

      if (isAnon) {
        data = { ...data, isAnon, email, phoneNumber: pNo };
      } else {
        data = { ...data, isAnon };
      }

      try {
        const resp = await axios.post(
          "http://localhost:5000/pencil/report",
          data,
          { headers }
        );
        if (resp.status === 201) {
          console.log(resp);
          // alert(resp?.statusText);
        } else {
          toast.error("Error", { id: notification });
          console.log(resp);
        }
      } catch (err) {
        toast.error(err, { id: notification });
        console.error(err);
      } finally {
        if (status === "Succeeded") {
          return foundChildData.forEach((e, i, row) => {
            console.log(e);
            if (i + 1 === row.length) {
              toast.success(
                "Your complaint ID is : " +
                  e._id +
                  "  " +
                  name +
                  ". You may track your reported child using this ID",
                { id: notification }
              );
            }
          });
        }
        setName("");
        setAddress("");
        setDescription("");
        setImg("");
        setState("");
        setDistrict("");
        setEmail("");
        setIsAnon(false);
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
      <AnimatedRoutes>
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

            <TextField
              id="outlined-basic"
              fullWidth
              required
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              required
              fullWidth
              sx={{ mt: "20px" }}
              id="outlined-required"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="State"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <FormControlLabel
              label="Report Anonymously"
              control={
                <Checkbox onChange={(e) => setIsAnon(e.target.checked)} />
              }
            />
            {isAnon && (
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
                  required
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
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (rEvent) => {
                    const bString = rEvent.target.result;
                    setImg(btoa(bString));
                  };
                  reader.readAsBinaryString(file);
                }
                console.log(img);
              }}
            >
              Upload Image
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <Button
              onClick={handleReportChild}
              size="large"
              sx={{ mt: "30px", backgroundColor: "black", width: "70%" }}
              variant="contained"
            >
              Submit
            </Button>
          </Container>
        </Paper>
      </AnimatedRoutes>
    </Box>
  );
};

export default ReportChild;
