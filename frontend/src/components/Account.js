import { accordionSummaryClasses } from '@mui/material';
import React, { useState } from 'react'


const Account = () => {
    const [name, setName] = useState("");
    const [ifsc, setIfsc] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [ifscError, setIfscError] = useState(true);

    // if(ifsc.length < 12 || ifsc.length > 11){
    //     setIfscError(false);
    // }

    // const handleAccount = async () => {
    //     const data = {createContact, addBankDetails, processPayout, getPayoutStatus}

    //     try {
    //         const resp = await axios.post('http://localhost:5000/account')
    //     }
    // }

  return (
    <div>
        <label htmlFor='childName'>Name </label>
        <input 
            type="text"
            id = "childName"
            placeholder="Enter Name"
            value={name}
            onChange = {(e) => setName(e.target.value)}
        /> <br></br>

        <label htmlFor='ifsc'>IFSC Code </label>
        <input 
            type="text"
            id = "ifsc"
            placeholder="Enter IFSC code"
            value = {ifsc}
            onChange = {(e) => setIfsc(e.target.value)}
            // {ifscError && onChange = {(e) => setIfsc(e.target.value)}}
        /> <br></br>

        <label htmlFor='accNo'>Account Number </label>
        <input 
            type="number"
            id = "accNo"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange = {(e) => setAccountNumber(e.target.value)}
        /> <br></br>

        <button >Add Account</button>
    </div>
  )
}

export default Account