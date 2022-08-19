// import { TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import {
  getFoundChildStatus,
  selectFoundChild,
} from "../features/foundchild/FoundChildSlice";

const ReportChild = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

  const [isAnon, setIsAnon] = useState(false);
  const [email, setEmail] = useState("");

  const status = useSelector(getFoundChildStatus);
  const foundChildData = useSelector(selectFoundChild);

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Geolocation Available");
    } else {
      alert("Geolocation not available, allow it in your browser");
    }
  }, []);

  const handleReportChild = async () => {
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
        data = { ...data, isAnon, email };
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
          alert("Error");
          console.log(resp);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (status === "Succeeded") {
          return foundChildData.forEach((e, i, row) => {
            console.log(e);
            if (i + 1 === row.length) {
              alert(
                "Your complaint ID is : " +
                  e._id +
                  "  " +
                  name +
                  ". You may track your reported child using this ID"
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
      }
    });
  };
  // return (
  //   <div>
  //     <div>
  //       <label htmlFor="name">Name</label>
  //       <input
  //         id="name"
  //         type="text"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="desc">Description</label>
  //       <textarea id="desc" onChange={(e) => setDescription(e.target.value)} />
  //     </div>
  //     <div>
  //       <label htmlFor="img">Image</label>
  //       <input
  //         id="img"
  //         type="file"
  //         onChange={(e) => {
  //           const file = e.target.files[0];
  //           if (file) {
  //             const reader = new FileReader();
  //             reader.onload = (rEvent) => {
  //               const bString = rEvent.target.result;
  //               setImg(btoa(bString));
  //             };
  //             reader.readAsBinaryString(file);
  //           }
  //           console.log(img);
  //         }}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="address">Address</label>
  //       <textarea id="address" onChange={(e) => setAddress(e.target.value)} />
  //     </div>
  //     <div>
  //       <label htmlFor="state">State</label>
  //       <input
  //         id="state"
  //         type="text"
  //         onChange={(e) => setState(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="dist">District</label>
  //       <input
  //         id="dist"
  //         type="text"
  //         onChange={(e) => setDistrict(e.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <button onClick={handleReportChild}>Report Child</button>
  //     </div>
  //   </div>
  // );
  
  // export default function FormPropsTextFields() {
    
    return (
      <Box
        component="form"
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          '& .MuiTextField-root': { m: 1, width: '25ch' },
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

        <TextField id="outlined-basic" fullWidth required label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}/>
          <TextField
            required
            fullWidth
            sx={{ mt: "20px" }}
            id="outlined-required"
            label="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)}         
          />
          <Button variant="contained" sx={{ mt: "2px", width: "50%"}} component="label" value={img}
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
                    }}>
  Upload
  <input hidden accept="image/*" multiple type="file" />
</Button>
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
          <Button onClick={handleReportChild} 
          size="large"
            sx={{ mt: "30px", backgroundColor: "black", width: "70%" }} 
            variant="contained">
              Submit
              </Button>
        </Container>
      </Paper>
    </Box>
    );
};

export default ReportChild;