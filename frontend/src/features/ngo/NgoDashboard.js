import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectNgoById } from './ngoSlice'


const NgoDashboard = () => {
    const id = useParams();

    const ngo = useSelector((state) => selectNgoById(state, parseInt(id.ngoId)))

    if(!ngo){
        return (
            <h2>Page Not Found</h2>
        )
    }


  return (
    <div>
        <h1>{ngo.name}</h1>
        <h1>{ngo.address}</h1>
        <h1>{ngo.isVerified}</h1>
    </div>
  )
}

export default NgoDashboard