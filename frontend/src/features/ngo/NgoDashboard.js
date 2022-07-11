import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectFoundChild } from '../foundchild/FoundChildSlice'
import { selectNgoByUserId } from './ngoSlice'
import FoundChild from './FoundChild'

const NgoDashboard = () => {
  const id = useParams()

  const ngo = useSelector((state) => selectNgoByUserId(state, id.ngoId))
  const childs = useSelector(selectFoundChild)
  if (!ngo) {
    return <h2>Page Not Found</h2>
  }
  let childState
  childState = childs.map((child) => {
    console.log(child.isVerified)

    if (
      child.district.toLowerCase() === ngo.district.toLowerCase() &&
      child.isVerified && !child.isAccepted
    )
      return <FoundChild data={child} />
  })

  return (
    <div>
      <h1>name:{ngo.name}</h1>
      <h1>address: {ngo.address}</h1>
      <h1>district: {ngo.district}</h1>
      <div>{childState}</div>
    </div>
  )

  // if (status === 'Loading') {
  //   return <p>Loading</p>
  // } else if (status === 'Succeeded') {
  //   return foundChildData.map((e) => {
  //     console.log(e)

  //     if (e.isAccepted === 'Yes') {
  //       return (
  //         <React.Fragment>
  //           <h4>{e.name} has already been Accepted </h4>
  //         </React.Fragment>
  //       )
  //     } else if (e.isAccepted === 'No' && e.isVerified === 'Yes') {
  //       return (
  //         <React.Fragment>
  //           <h4> {e.name} is not yet Accepted</h4>
  //           <h4> To accept them click on the button below</h4>
  //           <Button onClick="e.isAccepted = 'Yes' "> I Accept </Button>
  //         </React.Fragment>
  //       )
  //     }
  //   })
  // } else {
  //   return <p>{error}</p>
  // }
}

export default NgoDashboard
