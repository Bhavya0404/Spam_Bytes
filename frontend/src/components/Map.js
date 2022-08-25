import React, { useLayoutEffect } from 'react'
import * as am5 from '@amcharts/amcharts5'
import * as am5map from '@amcharts/amcharts5/map'
import am5geodata_india2020Low from '@amcharts/amcharts5-geodata/india2020Low'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'
import axios from 'axios'

function Map() {
  useLayoutEffect(() => {
    let root = am5.Root.new('mapdiv')
    var colors = am5.ColorSet.new(root, {})
    root.setThemes([am5themes_Animated.new(root)])
    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'rotateX',
        projection: am5map.geoMercator(),
      }),
    )
    var worldSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_india2020Low,
      }),
    )

    worldSeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      interactive: true,
      fill: am5.color(0xaaaaaa),
      templateField: 'polygonSettings',
    })

    worldSeries.mapPolygons.template.states.create('hover', {
      fill: colors.getIndex(1),
    })

    worldSeries.mapPolygons.template.events.on('click', async (ev) => {
      var dataItem = ev.target.dataItem
      var data = dataItem.dataContext
      console.log(data.name)
      const resp = await axios.post('http://localhost:5000/stats/map', {state: data.name})
    })
    var countrySeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        visible: false,
      }),
    )

    countrySeries.mapPolygons.template.setAll({
      tooltipText: '{name}',
      interactive: true,
      fill: am5.color(0xaaaaaa),
    })

    countrySeries.mapPolygons.template.states.create('hover', {
      fill: colors.getIndex(1),
    })
    root.current = root
    return () => {
      root.dispose()
    }
  }, [])

  return <div id="mapdiv" style={{ width: '800px', height: '600px' }}></div>
}

export default Map
