import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const data = { email, password };
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
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
