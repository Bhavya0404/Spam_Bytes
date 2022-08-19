import React, { useRef, useState, useEffect } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import * as mapboxgl from 'mapbox-gl'
import { Box } from '@mui/material'

mapboxgl.accessToken =
  'pk.eyJ1Ijoib21pY3JvbmRldnMiLCJhIjoiY2w0dzk5YTZyMTY4ajNlcGh0enNtOGhneSJ9.Hv9f-Tp7pSeeMA4RVxvPOw'

const MapView = ({ childLocation: cloc, officeLocation: oloc }) => {
  const [instructions, setInstructions] = useState([])
  const [duration, setDuration] = useState(0)
  const mapRef = useRef(null)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: cloc,
      zoom: 12,
    })

    async function getRoute(end) {
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${cloc[0]},${cloc[1]};${oloc[0]},${oloc[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
        { method: 'GET' },
      )
      const json = await query.json()
      const data = json.routes[0]
      setInstructions(data.legs[0].steps)
      setDuration(Math.floor(data.duration / 60))
      const route = data.geometry.coordinates
      const geoJson = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: route,
        },
      }
      if (map.getSource('route')) {
        map.getSource('route').setData(geoJson)
      } else {
        map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: geoJson,
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round',
          },
          paint: {
            'line-color': '#3887be',
            'line-width': 5,
            'line-opacity': 0.75,
          },
        })
      }
    }

    map.on('load', () => {
      getRoute(oloc)
      map.addLayer({
        id: 'point',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Point',
                  coordinates: cloc,
                },
              },
            ],
          },
        },
        paint: {
          'circle-radius': 10,
          'circle-color': '#3887be',
        },
      })
    })
    mapRef.current = map
  }, [cloc, oloc])

  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Box
        id="map"
        sx={{
          height: '420px',
          width: { xs: '200px', lg: '600px' },
          flex: { xs: 1, lg: 0.7 },
        }}
        ref={mapRef}
      ></Box>
      <Box id="instructions" sx={{ flex: { xs: 1, lg: 0.3 } }}>
        {instructions?.map((ins) => (
          <li key={ins}>{ins.maneuver.instruction}</li>
        ))}
        <strong>Trip Duration: {duration} minutes</strong>
      </Box>
    </Box>
  )
}

export default MapView
