import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const { token, id } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const resetPassword = async () => {
    if (password.length <= 0) {
      alert("Password cannot be empty");
      return;
    }
    if (
      password === "" ||
      confirmPassword === "" ||
      password !== confirmPassword
    ) {
      alert("Password mismatch");
      return;
    }
    const data = { token, userId: id, password };
    try {
      const resp = await axios.post(
        "http://localhost:5000/auth/resetPassword",
        data
      );
      console.log(resp?.data);
      alert(resp?.data?.message);
    } catch (err) {
      console.error(err);
      alert("Error Occured");
    }
  };
  return (
    <div>
      <div>
        <label>New Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter New Password"
        />
      </div>
      <div>
        <label>Confirm New Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm New Password"
        />
      </div>
      <div>
        <button onClick={resetPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default ResetPassword;
