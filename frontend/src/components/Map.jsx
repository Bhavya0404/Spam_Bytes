import React, { useRef, useEffect } from 'react'
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
const Map = () => {
  let root = am5.Root.new('chartdiv')
  let chart = root.container.children.push(am5map.MapChart.new(root, {}))
  let polygonSeries = chart.series.push(
    am5map.MapPolygonSeries.new(root, {
      geoJSON: am5geodata_worldLow,
    }),
  )
  return <div id="chartdiv">Map</div>
}

export default Map
