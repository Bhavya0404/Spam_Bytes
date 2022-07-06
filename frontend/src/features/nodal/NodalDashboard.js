import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectFoundChild,
  getFoundChildStatus,
  getFoundChildError,
} from "../foundchild/FoundChildSlice";
import { getNodalData, getNodalError, getNodalStatus } from "./NodalSlice";
import MapView from "../../components/MapView";

const NodalDashboard = () => {
  const statusFoundChild = useSelector(getFoundChildStatus);
  const foundChildData = useSelector(selectFoundChild);
  const errorFoundChild = useSelector(getFoundChildError);

  const statusNodal = useSelector(getNodalStatus);
  const nodalData = useSelector(getNodalData);
  const errorNodal = useSelector(getNodalError);

  const [childData, setChildData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentChild, setCurrentChild] = useState({});
  useEffect(() => {
    if (statusFoundChild === "Succeeded" && statusNodal === "Succeeded") {
      setChildData(
        foundChildData.filter(
          (child) =>
            child.state.toLowerCase() === nodalData[0].state.toLowerCase() &&
            child.district.toLowerCase() === nodalData[0].district.toLowerCase()
        )
      );
    }
  }, [statusFoundChild, statusNodal]);
  return (
    <div>
      {childData.map((child) => (
        <>
          <p
            onClick={() => {
              if (isVisible) {
                setCurrentChild({});
                setIsVisible(false);
              } else {
                setCurrentChild(child);
                setIsVisible(true);
              }
            }}
          >
            {child.name}
          </p>
          {isVisible && (
            <>
              <span>Map Location of child {currentChild.name}</span>
              <MapView
                childLocation={currentChild.lastKnownLocation}
                officeLocation={nodalData[0].officeLocation}
              />
            </>
          )}
        </>
      ))}
    </div>
  );
};

export default NodalDashboard;
