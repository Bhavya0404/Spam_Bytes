import axios from "axios";
import React, { useEffect, useState } from "react";

const ReportChild = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [lat, setLat] = useState(0.0);
  const [lng, setLng] = useState(0.0);

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

    navigator.geolocation.getCurrentPosition((pos) => {
      setLat(pos.coords.latitude);
      setLng(pos.coords.longitude);
    });

    const data = {
      name,
      description,
      img,
      address,
      state,
      district,
      lat,
      lng,
    };

    try {
      const resp = await axios.post(
        "http://localhost:5000/pencil/report",
        data,
        { headers }
      );
      if (resp.status === 201) {
        console.log(resp);
        alert(resp?.statusText);
      } else {
        alert("Error");
        console.log(resp);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setName("");
      setAddress("");
      setDescription("");
      setImg("");
      setLat(0.0);
      setLng(0.0);
      setState("");
      setDistrict("");
    }
  };
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="desc">Description</label>
        <textarea id="desc" onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label htmlFor="img">Image</label>
        <input
          id="img"
          type="file"
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
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <textarea id="address" onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input
          id="state"
          type="text"
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dist">District</label>
        <input
          id="dist"
          type="text"
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleReportChild}>Report Child</button>
      </div>
    </div>
  );
};

export default ReportChild;
