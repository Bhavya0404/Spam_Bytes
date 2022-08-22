import React from "react";
import { useSelector } from "react-redux";
import { selectAllNgo, getNgoStatus, getNgoError } from "./ngoSlice";

const AllNgo = () => {
  const ngo = useSelector(selectAllNgo);
  const status = useSelector(getNgoStatus);
  const error = useSelector(getNgoError);

    if (status === "Loading") {
      return <p>Loading</p>;
    } else if (status === "Succeeded") {
      return ngo.map((n) => {
        console.log(n);
        return <h1>{n.name}</h1>;
      });
    } else if (status === "failed") {
      return <p>{error}</p>;
    }

};

export default AllNgo;
