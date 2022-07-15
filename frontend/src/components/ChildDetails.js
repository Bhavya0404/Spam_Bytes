import React from 'react'
import {useParams} from 'react-router-dom'

const ChildDetails = () => {
    const {childId} = useParams();
  return (
    <div>{childId}</div>
  )
}

export default ChildDetails