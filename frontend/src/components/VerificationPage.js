import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

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
    <div>
      <div>
        <label htmlFor="ComplaintID">Complaint Number</label>
        <input
          type="text"
          id="ComplaintID"
          placeholder="Enter Complaint Number"
          value={_id}
          onChange={(e) => set_id(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input type="radio" value="yes" checked />I have verified the child.
        </label>
        <Button onClick={Verification}>Verified</Button>
      </div>
    </div>
  );
};

export default VerificationPage;
