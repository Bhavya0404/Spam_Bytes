import React, { useState } from "react";
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const sendFPRequest = async () => {
    try {
      const resp = await axios.post(
        `http://localhost:5000/auth/forgotpassword`,
        { email }
      );

      if (resp.status === 200) {
        console.log(resp.data);
        alert(resp?.data?.message);
      } else {
        alert("Error");
        console.error(resp);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={sendFPRequest}>Forgot Password</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
