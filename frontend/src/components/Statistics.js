import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import map from "../assets/images/map.png";
import { default as HMap } from "./Map";
import { getNodalData } from "../features/nodal/NodalSlice";
import { useSelector } from "react-redux";
import { selectFoundChild } from "../features/foundchild/FoundChildSlice";
import axios from "axios";

const Statistics = () => {
  const foundChildData = useSelector(selectFoundChild);
  const state = useSelector((state) => state.statename.state);

  let reportedCase = 0;
  const [nodalOfficers, setNodalOfficers] = useState(0);
  let inSchool = 0;

  useEffect(() => {
    (async () => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        const resp = await axios.post(
          "http://localhost:5000/pencil/stats/nodalCount",
          { state },
          { headers }
        );
        setNodalOfficers(resp?.data?.count);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [state]);

  foundChildData.forEach((child) => {
    if (child.isVerified) {
      if (child.state === state) {
        reportedCase++;
      }

      if (child.state === state && child.inSchool) {
        inSchool++;
      }
    }
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: { lg: "100vh", xs: "auto" },
        display: "flex",
        flexDirection: { lg: "row", xs: "column-reverse" },
        backgroundColor: "primary.main",
      }}
    >
      <Box
        sx={{
          width: { lg: "50%", xs: "100%" },
          height: { lg: "100vh", xs: "70vh" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HMap />
      </Box>
      <Box
        sx={{
          width: { lg: "50%", xs: "100%" },
          height: { lg: "100%", xs: "40vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: { lg: "center", xs: "space-evenly" },
          alignItems: { xs: "center", lg: "flex-start" },
        }}
      >
        <Box
          sx={{
            height: "23%",
            color: "primary.contrastText",
          }}
        >
          <Typography variant="h1">Statistics</Typography>
        </Box>
        <Box sx={{ height: "15%" }}>
          <Typography variant="h3" sx={{ color: "primary.light" }}>
            {reportedCase}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.contrastText" }}
          >
            Reported Cases
          </Typography>
        </Box>
        <Box sx={{ height: "15%" }}>
          <Typography variant="h3" sx={{ color: "primary.light" }}>
            {nodalOfficers}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.contrastText" }}
          >
            Nodal Officers Appointed
          </Typography>
        </Box>
        <Box sx={{ height: "15%" }}>
          <Typography variant="h3" sx={{ color: "primary.light" }}>
            {inSchool}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.contrastText" }}
          >
            Children Enrolled in School
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Statistics;
