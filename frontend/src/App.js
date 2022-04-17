import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import Axios from "axios";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log(res.data.message);
  });

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
