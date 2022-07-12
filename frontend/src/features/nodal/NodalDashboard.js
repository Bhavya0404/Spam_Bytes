import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  selectFoundChild,
  getFoundChildStatus,
  getFoundChildError,
} from '../foundchild/FoundChildSlice'
import {
  getNodalById,
  getNodalData,
  getNodalError,
  getNodalStatus,
} from './NodalSlice'
import MapView from '../../components/MapView'
import { useParams } from 'react-router-dom'

const NodalDashboard = () => {
  const id = useParams()

  const statusFoundChild = useSelector(getFoundChildStatus)
  const foundChildData = useSelector(selectFoundChild)
  const errorFoundChild = useSelector(getFoundChildError)

  const statusNodal = useSelector(getNodalStatus)
  const nodalData = useSelector((state) => getNodalById(state, id.adminId))
  const errorNodal = useSelector(getNodalError)

  const [childData, setChildData] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [currentChild, setCurrentChild] = useState({})
  useEffect(() => {
    if (statusFoundChild === 'Succeeded' && statusNodal === 'Succeeded') {
      setChildData(
        foundChildData.filter(
          (child) =>
            child.state.toLowerCase() === nodalData.state.toLowerCase() &&
            child.district.toLowerCase() === nodalData.district.toLowerCase(),
        ),
      )
    }
  }, [statusFoundChild, statusNodal])
  return (
    <div>
      {childData.map((child) => (
        <>
          <p
            onClick={() => {
              if (isVisible) {
                setCurrentChild({})
                setIsVisible(false)
              } else {
                setCurrentChild(child)
                setIsVisible(true)
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
  )
}

export default NodalDashboard
