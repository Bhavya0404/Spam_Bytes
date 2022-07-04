import React from 'react'
import { getNodalData, getNodalError, getNodalStatus} from "./NodalSlice";
import { useSelector } from 'react-redux';



const AllNodal = () => {
    const status = useSelector(getNodalStatus);
    const nodalData = useSelector(getNodalData);
    const error = useSelector(getNodalError);


    if(status === 'Loading'){
        return <p>Loading</p>
    } else if (status === 'Succeeded'){
        return nodalData.map((e) => {
            console.log(e);
            return <h1>{e.state}</h1>;
        })
    } else if (status === 'Error'){
        return <p>{error}</p>
    } 

}

export default AllNodal;