import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllNgo, getNgoStatus, getNgoError } from "./ngoSlice";

const AllNgo = () => {
  const ngo = useSelector(selectAllNgo);
  const status = useSelector(getNgoStatus);
  const error = useSelector(getNgoError);
  let content;

  useEffect(() => {
    console.log(status);
    if (status === "Loading") {
      content = <p>Loading</p>;
    } else if (status === "Succeeded") {
      content = ngo.map((n) => {
        console.log(n);
        return <h1>{n.name}</h1>;
      });
    } else if (status === "failed") {
      content = <p>{error}</p>;
    }
  }, [status]);

  return <div>{content}</div>;
};

export default AllNgo;
