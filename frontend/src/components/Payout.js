import React, { useState } from 'react'

const Payout = () => {
    const [amount, setAmount] = useState("");
  return (
    <div>
        <label htmlFor='amount'>Amount </label>
        <input 
            type="number"
            id = "amount"
            placeholder="Enter Amount"
            value={amount}
            onChange = {(e) => setAmount(e.target.value)}
        /> <br></br>
    </div>
  )
}

export default Payout