import React, { useState } from "react";
import {
  selectFoundChild,
  getFoundChildStatus,
  getFoundChildError,
} from "../features/foundchild/FoundChildSlice";
import { useSelector } from "react-redux";
import { dividerClasses } from "@mui/material";
import Account from "./Account";
import Payout from "./Payout";

const Payment = () => {
  const [name, setName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [accountVisible, setAccountVisible] = useState(true);
  const [payoutVisible, setPayoutVisible] = useState(true);

  const [amount, setAmount] = useState("");

  const handleAccountChange = async () => {
    setAccountVisible(false);
    setPayoutVisible(false);
  };

  const handlePayoutChange = async () => {
    setAccountVisible(false);
    setPayoutVisible(false);
  };

  return (
    <div>
      {accountVisible ? (
        <button onClick={handleAccountChange}>Add Fund Accout</button>
      ) : (
        <div>
          <label htmlFor="childName">Name </label>
          <input
            type="text"
            id="childName"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br></br>
          <label htmlFor="ifsc">IFSC Code </label>
          <input
            type="text"
            id="ifsc"
            placeholder="Enter IFSC code"
            value={ifsc}
            onChange={(e) => setIfsc(e.target.value)}
            // {ifscError && onChange = {(e) => setIfsc(e.target.value)}}
          />{" "}
          <br></br>
          <label htmlFor="accNo">Account Number </label>
          <input
            type="number"
            id="accNo"
            placeholder="Enter Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />{" "}
          <br></br>
          <button>Add Account</button>
        </div>
      )}
      {payoutVisible ? (
        <button onClick={handlePayoutChange}>Create Payout</button>
      ) : (
        <div>
          <label htmlFor="amount">Amount </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />{" "}
          <br></br>
        </div>
      )}
    </div>
  );
};

export default Payment;
