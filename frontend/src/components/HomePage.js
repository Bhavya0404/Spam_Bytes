import React from 'react'
import MapView from './MapView'

const HomePage = () => {
  return (
    <div>
      <h1>Testing MapView</h1>
      <MapView childLocation={[77.3830179, 28.5712296]} officeLocation={[77.3211,28.5673]} />
    </div>
  )
}

export default HomePage