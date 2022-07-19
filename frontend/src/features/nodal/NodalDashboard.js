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
import SideBar from "../../components/Sidebar";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

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

  {
    /* {isVisible && (
                  <>
                    <span>Map Location of child {currentChild.name}</span>
                    <MapView
                      childLocation={currentChild.lastKnownLocation}
                      officeLocation={nodalData.officeLocation}
                    />

                    
                  </>
                )} */
  }

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SideBar />

        {/* <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 1650,
              height: "50vh",
              mt: "100px",
            },
          }}
        >
          <Paper
            elevation={3}
            sx={
              {
                // width: "100%",
              }
            } */}
        {/* > */}

        <TableContainer
          sx={{
            overflowX: { lg: "hidden" },
            mx: "20px",
            mt: "100px",
            maxHeight: "500px",
          }}
        >
          <Table sx={{}} stickyHeader component={Paper}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>State</TableCell>
                <TableCell>District</TableCell>
                <TableCell
                  sx={{
                    display: {
                      xs: "none",
                      lg: { display: "flex", },
                    },
                  }}
                >
                  Contact ID
                </TableCell>
                <TableCell
                  sx={{
                    display: {
                      xs: "none",
                      lg: { display: "flex",  },
                    },
                  }}
                >
                  Account ID
                </TableCell>
                <TableCell>Is Accepted</TableCell>
                <TableCell
                  sx={{
                    display: {
                      xs: "none",
                      lg: { display: "flex",},
                    },
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {childData.map((child) => (
                <TableRow>
                  <TableCell>{child?.name}</TableCell>

                  <TableCell>{child?.state}</TableCell>
                  <TableCell>{child?.district}</TableCell>
                  <TableCell
                    sx={{
                      display: {
                        xs: "none",
                        lg: { display: "flex",  },
                      },
                    }}
                  >
                    {child?.rzp_contactId}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: {
                        xs: "none",
                        lg: { display: "flex",  },
                      },
                    }}
                  >
                    {child?.rzp_fundAcId}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: {
                        xs: "none",
                        lg: { display: "flex", },
                      },
                    }}
                  >
                    {child?.isAccepted ? "True" : "False"}
                  </TableCell>
                  <TableCell>
                    <Link to={`/child/${child?._id}`}>
                      <Button variant="contained">View Details</Button>
                    </Link>
                  </TableCell>

                  {/* <TableCell
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
                              />{" "}
                              <br></br>
                              <label htmlFor="accNo">Account Number </label>
                              <input
                                type="number"
                                id="accNo"
                                placeholder="Enter Account Number"
                                value={accountNumber}
                                onChange={(e) =>
                                  setAccountNumber(e.target.value)
                                }
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
                                onClick={() =>
                                  processPayoutForChild(child?._id)
                                }
                              >
                                Process Payout
                              </Button>
                            </div>
                          </Box>
                        </Modal>
                      </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* </Paper>
        </Box> */}
      </Box>
    </div>
  );
};

export default NodalDashboard;
