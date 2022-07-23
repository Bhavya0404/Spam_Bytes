import React from 'react'
import MapView from '../../components/MapView'
import Button from '@mui/material/Button'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getFoundChildById } from '../foundchild/FoundChildSlice'
const FoundChild = ({ data, location }) => {
 
  console.log(data)
  const updateChild = async (id) => {
    
    const datas = {
      isAccepted: 'true',
    }
    try {
      console.log(id)
      const child = await axios.put(
        `http://localhost:5000/foundchild/${id}`,
        datas,
      )
      console.log(child)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <hr />
      <h1>{data.name}</h1>
      <h1>{data.description}</h1>
      <h1>{data.address}</h1>
      <h1>{data.district}</h1>
      <MapView
        childLocation={data.lastKnownLocation}
        officeLocation={location}
      />
      <Button variant="outlined" onClick={() => updateChild(data._id)}>
        Outlined
      </Button>
      <hr />
    </div>
  )
}

export default FoundChild
