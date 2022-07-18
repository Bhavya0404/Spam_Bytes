import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectFoundChild,
  getFoundChildStatus,
  getFoundChildError,
} from "../foundchild/FoundChildSlice";
import {
  getNodalById,
  getNodalData,
  getNodalError,
  getNodalStatus,
} from "./NodalSlice";
import MapView from "../../components/MapView";
import { useParams } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Hidden } from "@mui/material";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import axios from "axios";

import { Link } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Container from '@mui/material/Container';

const NodalDashboard = () => {
  const id = useParams();

  const statusFoundChild = useSelector(getFoundChildStatus);
  const foundChildData = useSelector(selectFoundChild);
  const errorFoundChild = useSelector(getFoundChildError);

  const statusNodal = useSelector(getNodalStatus);
  const nodalData = useSelector((state) => getNodalById(state, id.adminId));
  const errorNodal = useSelector(getNodalError);

  const [childData, setChildData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentChild, setCurrentChild] = useState({});

  const [name, setName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [accountVisible, setAccountVisible] = useState(false);
  const [payoutVisible, setPayoutVisible] = useState(false);

  const handleCloseAV = () => setAccountVisible(false);
  const handleClosePM = () => setPayoutVisible(false);

  const [amount, setAmount] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const createFundAcHandler = async (childId) => {
    const data = { id: childId, ac_no: accountNumber, ifsc };
    try {
      // const rstp = await axios.post(`http://localhost:5000/nodal/createContact`, {id: childId})
      // alert(rstp?.data?.message);
      const resp = await axios.post(
        `http://localhost:5000/nodal/addBankAc`,
        data
      );
      alert(resp?.data?.message);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  const processPayoutForChild = async (childId) => {
    const data = { id: childId, amount };
    try {
      const resp = await axios.post(
        `http://localhost:5000/nodal/processPayout`,
        data
      );
      alert(resp?.data?.message);
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  useEffect(() => {
    if (statusFoundChild === "Succeeded" && statusNodal === "Succeeded") {
      console.log(foundChildData);
      setChildData(
        foundChildData.filter(
          (child) =>
            child.state.toLowerCase() === nodalData.state.toLowerCase() &&
            child.district.toLowerCase() === nodalData.district.toLowerCase()
        )
      );
    }
  }, [statusFoundChild, statusNodal]);
  return (
    <div>
    
    <SideBar />
    
    <Box sx = {{
      display: "flex",
      justifyContent: 'center',
      // width: {xs: "100%",  md: "75%", lg: "81%", xl: "100%" },
      width: {xs: "100%" , md: "85%"},
      position: "absolute",

      left: {md: "240px"},
      
      // ml: {xs: "0", md: "240px"}
    }}>
    <Container maxWidth="false" sx = {{
      mr: {xs: "10px", md: "120px", lg: "50px"},
      ml: {xs: "10px"},
      width: {md: "89%", lg: "100%"}
    }} >
      <TableContainer sx = {{
        overflowX: {xl: 'hidden'},

      }}>
        <Table sx={{}} component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>State</TableCell>
              <TableCell>District</TableCell>
              <TableCell>Contact ID</TableCell>
              <TableCell>Account ID</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell>Is Accepted</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {childData.map((child) => (
              <TableRow>
                <TableCell>
                  <Link to={`/child/${child?._id}`}>{child?.name}</Link>
                </TableCell>

                {/* {isVisible && (
                  <>
                    <span>Map Location of child {currentChild.name}</span>
                    <MapView
                      childLocation={currentChild.lastKnownLocation}
                      officeLocation={nodalData.officeLocation}
                    />

                    
                  </>
                )} */}
                <TableCell>{child?.state}</TableCell>
                <TableCell>{child?.district}</TableCell>
                <TableCell>{child?.rzp_contactId}</TableCell>
                <TableCell>{child?.rzp_fundAcId}</TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyItems: "space-between",
                  }}
                >
                  <Button
                    disabled={child?.rzp_fundAcId}
                    onClick={() => setAccountVisible(true)}
                    variant="contained"
                  >
                    Create Fund Account
                  </Button>
                  <Button
                    onClick={() => setPayoutVisible(true)}
                    variant="contained"
                  >
                    Process Payout
                  </Button>
                  <Button variant="contained">Get Status</Button>

                  <Modal
                    open={accountVisible}
                    onClose={handleCloseAV}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <div>
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
                        <Button
                          onClick={() => createFundAcHandler(child?._id)}
                          variant="outline"
                        >
                          Add Account
                        </Button>
                      </div>
                    </Box>
                  </Modal>
                  <Modal
                    open={payoutVisible}
                    onClose={handleClosePM}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
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
                        <Button
                          variant="contained"
                          onClick={() => processPayoutForChild(child?._id)}
                        >
                          Process Payout
                        </Button>
                      </div>
                    </Box>
                  </Modal>
                </TableCell>
                <TableCell>{child?.isAccepted ? "True" : "False"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>
      </Box>
    </div>
  );
};

export default NodalDashboard;
