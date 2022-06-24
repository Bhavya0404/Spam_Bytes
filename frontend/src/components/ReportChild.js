import axios from "axios";
import React from "react";

const ReportChild = () => {
  const handleReportChild = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    const data = {};

    try {
      const resp = await axios.post("/pencil/report", data, { headers });
      if (resp.status === 201) {
        console.log(resp);
      } else {
        alert("Error");
        console.log(resp);
      }
    } catch (err) {
      console.error(err);
    } finally {
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
      </div>
    </div>
  );
};

export default ReportChild;
