import React from "react";
import old from "../images/nclp_guildline_old.png";
import neww from "../images/new_ncil_guildlines.png";
import { Stack } from "@mui/material";

const Guidelines = () => {
  return (
    <div>
      <h1>National Child Labour Project Guidelines</h1>
      <Stack direction="row" spacing={2}>
        <a href="https://pencil.gov.in/uploads/guidelines/NCLPGuideline.pdf" target="_blank" rel="noreferrer">
          <img width="500" height="500" src={old}></img>
        </a>
        <a href="https://pencil.gov.in/uploads/guidelines/RevisedNCLPguidelines01.04.2016.pdf" target="_blank" rel="noreferrer">
          <img width="500" height="500" src={neww}></img>
        </a>
      </Stack>
    </div>
  );
};

export default Guidelines;
