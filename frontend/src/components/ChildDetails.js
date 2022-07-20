import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getFoundChildById,
  getFoundChildStatus,
} from "../features/foundchild/FoundChildSlice";
import Sidebar from "../components/Sidebar";
import sidebarMenus from "../components/sidebarMenus";
import {
  Box,
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Modal,
  TextField,
  TableHead,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";

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

const payoutModalstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ChildDetails = () => {
  const { childId } = useParams();
  const childData = useSelector((state) => getFoundChildById(state, childId));
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [amount, setAmount] = useState(0);
  const [accountVisible, setAccountVisible] = useState(false);
  const [payoutVisible, setPayoutVisible] = useState(false);
  const [payoutListVisible, setPayoutListVisible] = useState(false);
  const [payoutData, setPayoutData] = useState([]);
  const [payoutLoading, setPayoutLoading] = useState(true);

  const handleCloseAV = () => setAccountVisible(false);
  const handleClosePM = () => setPayoutVisible(false);
  const handleClosePL = () => setPayoutListVisible(false);

  useEffect(() => {
    const getPayoutData = async () => {
      const pData = [];
      await childData?.payouts.forEach(async (pID) => {
        console.log(pID);
        const resp = await axios.get(
          `http://localhost:5000/nodal/payoutStatus/${pID}`
        );
        console.log(resp?.data);
        pData.push(resp?.data);
      });
      setPayoutData(pData);
      setPayoutLoading(false);
    };
    getPayoutData();
  }, [childData?.payouts]);

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

  const [acceptChild, setAcceptChild] = useState(false);
  const [verfied, setVerifiedChild] = useState(false);
  const [hasSchool, setHasSchool] = useState(false);

  const accepted = () => {
    const x = window.confirm("Do you want to mark child as Accepted? ");
    if (x) {
      setAcceptChild(true);
    }
  };

  const verified = () => {
    const x = window.confirm("Do you want to mark child as Accepted? ");
    if (x) {
      setVerifiedChild(true);
    }
  };

  const allotedSchool = () => {
    const x = window.confirm("Do you want to mark child as Accepted? ");
    if (x) {
      setHasSchool(true);
    }
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Sidebar
          nSections={sidebarMenus.nodal.nSections}
          sectionList={sidebarMenus.nodal.sectionList}
          header="Child Details"
        />

        <Container
          maxWidth={false}
          sx={{
            width: "85%",
          }}
        >
          <Card sx={{ flex: 1, mt: "100px" }}>
            <CardContent>
              <Box
                sx={{
                  marginTop: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 20,
                    textAlign: "center",
                    marginBottom: "1rem",
                  }}
                >
                  Details of {childData?.name}
                </Typography>

                <Container
                  maxWidth={false}
                  sx={{
                    display: "flex",
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "30px",
                  }}
                >
                  <Box
                    sx={{
                      flex: 0.9,
                    }}
                  >
                    <TableContainer>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <Typography>Name</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{childData?.name}</Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Typography>Address</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{childData?.address}</Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Typography>State</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{childData?.state}</Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Typography>District</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{childData?.district}</Typography>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Typography>Description</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>{childData?.description}</Typography>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell>
                              <Typography>Is Accepted</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>
                                {childData?.isAccepted ? (
                                  <CheckCircleIcon sx={{ color: "green" }} />
                                ) : (
                                  <CancelIcon sx={{ color: "red" }} />
                                )}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                disabled={childData?.isAccepted || acceptChild}
                                onClick={accepted}
                              >
                                Mark As Accepted
                              </Button>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell>
                              <Typography>Is Verified</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>
                                {childData?.isVerified ? (
                                  <CheckCircleIcon sx={{ color: "green" }} />
                                ) : (
                                  <CancelIcon sx={{ color: "red" }} />
                                )}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                disabled={childData?.isVerified || verified}
                                onClick={verified}
                              >
                                Mark As Verfied
                              </Button>
                            </TableCell>
                          </TableRow>

                          <TableRow>
                            <TableCell>
                              <Typography>In School</Typography>
                            </TableCell>
                            <TableCell>
                              <Typography>
                                {childData?.inSchool ? (
                                  <CheckCircleIcon sx={{ color: "green" }} />
                                ) : (
                                  <CancelIcon sx={{ color: "red" }} />
                                )}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="contained"
                                disabled={childData?.hasSchool || hasSchool}
                                onClick={allotedSchool}
                              >
                                Have School
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <img
                      alt={childData?.name}
                      src={`data:image/png;base64, ${childData?.img}`}
                      style={{
                        objectFit: "contain",
                        height: "250px",
                        width: "200px",
                      }}
                    />
                    <Box display="flex" flexDirection="column" gap="10px">
                      <Button
                        variant="contained"
                        onClick={() => setPayoutVisible(true)}
                      >
                        Payout
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => setAccountVisible(true)}
                        disabled={!!childData?.rzp_fundAcId}
                      >
                        Create Fund Account
                      </Button>
                      <Button
                        variant="contained"
                        disabled={!!childData?.rzp_contactId}
                      >
                        Create Contact
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => setPayoutListVisible(true)}
                      >
                        View Payouts
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </CardContent>
          </Card>
        </Container>

        {/* Modals */}
        <Modal
          open={accountVisible}
          onClose={handleCloseAV}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Container
              sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Typography component="h4" fontSize={30} textAlign="center">
                Enter Account Details
              </Typography>
              <TextField
                type="text"
                id="ifsc"
                placeholder="Enter IFSC Code"
                label="IFSC Code"
                value={ifsc}
                onChange={(e) => setIfsc(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="accNo"
                type="number"
                label="Account Number"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                variant="outlined"
              />

              <Button
                onClick={() => createFundAcHandler(childData?._id)}
                variant="contained"
              >
                Add Account
              </Button>
            </Container>
          </Box>
        </Modal>
        <Modal
          open={payoutVisible}
          onClose={handleClosePM}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Container
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Typography component="h4" fontSize={30} textAlign="center">
                Process Payout
              </Typography>
              <TextField
                type="number"
                id="amount"
                placeholder="Enter Amount"
                value={amount}
                label="Amount"
                onChange={(e) => setAmount(e.target.value)}
              />

              <Button
                variant="contained"
                onClick={() => processPayoutForChild(childData?._id)}
              >
                Process Payout
              </Button>
            </Container>
          </Box>
        </Modal>
        <Modal
          open={payoutListVisible}
          onClose={handleClosePL}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={payoutModalstyle}>
            <Container>
              {payoutLoading ? (
                <Typography>Loading...</Typography>
              ) : (
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Payout ID</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Status</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {childData?.payouts?.map((payout, i) => (
                        <TableRow key={i}>
                          <TableCell>{payout}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </Container>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default ChildDetails;
