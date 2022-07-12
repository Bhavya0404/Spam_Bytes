import React from 'react'

const FoundChild = (props) => {
  const { data } = props
  console.log(data)
  return <div>
     <hr/>
    <h1>{data.name}</h1>
    <h1>{data.description}</h1>
    <h1>{data.address}</h1>
    <h1>{data.district}</h1>
    <hr/>
  </div>
}

export default FoundChild
