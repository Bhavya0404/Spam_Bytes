import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
          alert(resp?.statusText);
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
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
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
        <label htmlFor="anon">Anonymous Report?</label>
        <input
          id="anon"
          type="checkbox"
          onChange={(e) => setIsAnon(e.target.checked)}
        />
      </div>
      {isAnon && (
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      )}
      <div>
        <button onClick={handleReportChild}>Report Child</button>
      </div>
    </div>
  );
};

export default ReportChild;
