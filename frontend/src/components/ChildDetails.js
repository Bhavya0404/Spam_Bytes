import React from 'react'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {getFoundChildById, getFoundChildStatus} from '../features/foundchild/FoundChildSlice'

const ChildDetails = () => {
    const {childId} = useParams();
    const foundChildData = useSelector((state) => getFoundChildById(state, childId));
  return (
    // <div>{foundChildData.name}</div>
    console.log(foundChildData.name)
  )
}

export default ChildDetails