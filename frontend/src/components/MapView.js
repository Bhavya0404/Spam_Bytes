import React, { useRef, useState, useEffect } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import * as mapboxgl from "mapbox-gl";
import { Box } from "@mui/material";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib21pY3JvbmRldnMiLCJhIjoiY2w0dzk5YTZyMTY4ajNlcGh0enNtOGhneSJ9.Hv9f-Tp7pSeeMA4RVxvPOw";

const MapView = ({
  childLocation: cloc,
  officeLocation: oloc,
  ngo,
  showInst = false,
}) => {
  const [instructions, setInstructions] = useState([]);
  const [duration, setDuration] = useState(0);
  const mapRef = useRef(null);
  useEffect(() => {
    if (showInst) return;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: cloc,
      zoom: 12,
    });

    async function getRoute(end) {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${cloc[0]},${cloc[1]};${oloc[0]},${oloc[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: "GET" }
      );
      const json = await query.json();
      const data = json.routes[0];
      setInstructions(data.legs[0].steps);
      setDuration(Math.floor(data.duration / 60));
      const route = data.geometry.coordinates;
      const geoJson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };
      if (map.getSource("route")) {
        map.getSource("route").setData(geoJson);
      } else {
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geoJson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#ff6855",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });
      }
    }

    map.on("load", () => {
      getRoute(oloc);
      map.addLayer({
        id: "origin",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  description: "<strong>Child's Location</strong>",
                },
                geometry: {
                  type: "Point",
                  coordinates: cloc,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#3cb444",
        },
      });
      map.addLayer({
        id: "destination",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {
                  description: `<strong>${
                    ngo ? "NGO's Location" : "Nodal Office's Location"
                  }</strong>`,
                },
                geometry: {
                  type: "Point",
                  coordinates: oloc,
                },
              },
            ],
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#da1700",
        },
      });
    });

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.on("mouseenter", "origin", (e) => {
      map.getCanvas().style.cursor = "pointer";
      const desc = e.features[0].properties.description;
      popup.setLngLat(cloc).setHTML(desc).addTo(map);
    });
    map.on("mouseenter", "destination", (e) => {
      map.getCanvas().style.cursor = "pointer";
      const desc = e.features[0].properties.description;
      popup.setLngLat(oloc).setHTML(desc).addTo(map);
    });

    map.on("mouseleave", "origin", () => {
      map.getCanvas().style.cursor = "";
      popup.remove();
    });
    map.on("mouseleave", "destination", () => {
      map.getCanvas().style.cursor = "";
      popup.remove();
    });

    mapRef.current = map;
  }, [cloc, oloc, ngo, showInst]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {!showInst && (
        <Box
          id="map"
          sx={{ minWidth: { xs: "200px", lg: "420px" }, height: "390px" }}
          ref={mapRef}
        ></Box>
      )}
      {showInst && (
        <Box
          id="instructions"
          sx={{
            height: "auto",
            minWidth: { xs: "200px", md: "420px", lg: "500px" },
            overflowY: "scroll",
          }}
        >
          <ol>
            {instructions?.map((ins, idx) => (
              <li key={idx}>{ins.maneuver.instruction}</li>
            ))}
          </ol>
          <strong>Trip Duration: {duration} minutes</strong>
        </Box>
      )}
    </Box>
  );
};

export default MapView;
