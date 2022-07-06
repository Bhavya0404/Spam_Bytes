import React from 'react'
import { useSelector } from "react-redux";
import { selectFoundChild, getFoundChildStatus, getFoundChildError } from './FoundChildSlice'

const AllFoundChild = () => {
    const status = useSelector(getFoundChildStatus)
    const foundChildData = useSelector(selectFoundChild)
    const error = useSelector(getFoundChildError)

    if(status === 'Loading'){
        return <p>Loading</p>
    } else if (status === 'Succeeded'){
        return foundChildData.map((e) => {
            console.log(e);
            return <h1>{e.name}</h1>
        })
    } else  {
        return <p>{error}</p>;
      }
}

export default AllFoundChild;