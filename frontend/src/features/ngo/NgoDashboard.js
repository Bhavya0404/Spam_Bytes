import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from "@mui/material";
import { selectFoundChild, getFoundChildStatus, getFoundChildError } from '../foundchild/FoundChildSlice'

const NgoDashboard = () => {
    //const id = useParams();

    //const ngo = useSelector((state) => selectNgoById(state, parseInt(id.ngo)))

   // if(!ngo){
   //     return (
   //         <h2>Page Not Found</h2>
   //     )
   // }


 // return (
   // <div>
   //     <h1>{ngo.name}</h1>
  //      <h1>{ngo.address}</h1>
  //      <h1>{ngo.isVerified}</h1>
  //  </div>
 // )
 

 const status = useSelector(getFoundChildStatus)
    const foundChildData = useSelector(selectFoundChild)
    const error = useSelector(getFoundChildError)

    if(status === 'Loading'){
        return <p>Loading</p>
    } else if (status === 'Succeeded'){
        return foundChildData.map((e) => {
            console.log(e);
            
            if(e.isAccepted === 'Yes')
            {
              return <React.Fragment>
              <h4>{e.name} has already been Accepted </h4>
              </React.Fragment>
            }
            else if(e.isAccepted === 'No' && e.isVerified === 'Yes')  
            {
              return <React.Fragment>
               <h4>     {e.name} is not yet Accepted</h4>
               <h4>     To accept them click on the button below</h4>
               <Button onClick = "e.isAccepted = 'Yes' ">   I Accept    </Button>
              </React.Fragment>
            }
            
            
        })
    } else  {
        return <p>{error}</p>;
      }
}

export default NgoDashboard
