import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  getFoundChildById,
  getFoundChildStatus,
} from "../features/foundchild/FoundChildSlice";
import Sidebar from "../components/Sidebar";
import sidebarMenus from "../components/sidebarMenus";
import ControlledAccordions from "../components/SchemePage";
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
  capitalize,
  Skeleton,
} from "@mui/material";
import { red, yellow, green, grey } from "@mui/material/colors";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { formatMoney } from "accounting";
import axios from "axios";
import EditButton from "./EditButton";
import EditModal from "./EditModal";
import UploadModal from "./UploadModal";
import MapModal from "./MapModal";
import { getNodal } from "../features/nodal/NodalSlice";
import { selectAllNgo } from "../features/ngo/ngoSlice";
import { toast } from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "200px", lg: "400px" },
  bgcolor: "background.paper",
  borderRadius: "10px",
  p: 4,
};

const payoutModalstyle = {
  ...style,
  width: { xs: "400px", md: "600px", lg: "800px" },
};

const ChildDetails = ({ ngo = false }) => {
  const navigate = useNavigate();
  const currentUser = useSelector(ngo ? selectAllNgo : getNodal);

  const { childId } = useParams();
  const childData = useSelector((state) => getFoundChildById(state, childId));
  const loading = useSelector(getFoundChildStatus);
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [amount, setAmount] = useState(0);

  const [addressEditValue, setAddressEditValue] = useState("");
  const [descriptionEditValue, setDescriptionEditValue] = useState("");
  const [nameEditValue, setNameEditValue] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);

  // Modal States
  const [accountVisible, setAccountVisible] = useState(false);
  const [payoutVisible, setPayoutVisible] = useState(false);
  const [payoutListVisible, setPayoutListVisible] = useState(false);
  const [payoutData, setPayoutData] = useState([]);
  const [payoutLoading, setPayoutLoading] = useState(true);
  const [nameEdit, setNameEdit] = useState(false);
  const [addressEdit, setAddressEdit] = useState(false);
  const [descriptionEdit, setDescriptionEdit] = useState(false);
  const [aadharEdit, setAadharEdit] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);

  const handleCloseAV = () => setAccountVisible(false);
  const handleClosePM = () => setPayoutVisible(false);
  const handleClosePL = () => setPayoutListVisible(false);
  const handleCloseDE = () => setDescriptionEdit(false);
  const handleCloseNE = () => setNameEdit(false);
  const handleCloseAE = () => setAddressEdit(false);
  const handleCloseMP = () => setMapOpen(false);
  const handleCloseAD = () => setAadharEdit(false);

  useEffect(() => {
    const getPayoutData = async () => {
      const pData = [];
      try {
        if (!childData?.payouts) return;
        for (const childPayoutId of childData.payouts) {
          const headers = {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          };
          const resp = await axios.get(
            `http://localhost:5000/nodal/payoutStatus/${childPayoutId}`,
            { headers }
          );
          pData.push(resp?.data);
        }
      } catch (err) {
        console.error(err);
      }
      setPayoutData(pData);
      setPayoutLoading(false);
    };
    if (ngo) return;
    getPayoutData();
  }, [childData?.payouts, ngo]);

  const handleCreateContact = async () => {
    const notification = toast.loading("Creating Contact...");
    const data = { id: childId };
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const resp = await axios.post(
        `http://localhost:5000/nodal/createContact`,
        data,
        { headers }
      );
      toast.success(resp?.data?.message, { id: notification });
      navigate(0);
    } catch (err) {
      console.error(err);
      toast.error(err, { id: notification });
    }
  };

  const handleLinkAadhar = async () => {
    const notification = toast.loading("Linking Aadhar to the Child...");
    if (aadharNo.length !== 12) {
      toast.error("Invalid Aadhar Number", { id: notification });
      return;
    }
    const data = { id: childId, aadhar_no: aadharNo };
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const resp = await axios.put(
        `http://localhost:5000/nodal/child/${childData?._id}`,
        data,
        { headers }
      );

      toast.success(resp?.data?.message, { id: notification });
      navigate(0);
    } catch (err) {
      console.error(err);
      toast.error("Error Occurred", { id: notification });
    }
  };

  const createFundAcHandler = async (childId) => {
    const data = { id: childId, ac_no: accountNumber, ifsc };
    const notification = toast.loading("Creating Fund A/c...");
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const resp = await axios.post(
        `http://localhost:5000/nodal/addBankAc`,
        data,
        { headers }
      );
      toast.success(resp?.data?.message, { id: notification });
      navigate(0);
    } catch (err) {
      console.error(err);
      toast.error(err?.message, { id: notification });
    }
  };

  const processPayoutForChild = async (childId) => {
    const data = { id: childId, amount };
    const notification = toast.loading(`Processing Payout of INR ${amount}...`);
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const resp = await axios.post(
        `http://localhost:5000/nodal/processPayout`,
        data,
        { headers }
      );
      toast.success(resp?.data?.message, { id: notification });
      setAmount(0);
      handleClosePM();
      navigate(0);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.error?.description, {
        id: notification,
      });
      setAmount(0);
    }
  };

  const [acceptChild, setAcceptChild] = useState(false);
  const [verified, setVerifiedChild] = useState(false);
  const [hasSchool, setHasSchool] = useState(false);

  const handleAccepted = async () => {
    const x = window.confirm("Do you want to mark child as Accepted? ");
    if (x) {
      const body = { isAccepted: true, acceptedBy: currentUser?._id };
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      try {
        const resp = await axios.put(
          `http://localhost:5000/nodal/child/${childData?._id}`,
          body,
          { headers }
        );
        toast.success(resp?.data?.message);
        setAcceptChild(true);
        navigate(0);
      } catch (err) {
        console.error(err);
        toast.error(err?.response?.data?.message);
      }
    }
  };

  const handleVerified = async () => {
    const x = window.confirm("Do you want to mark child as Accepted? ");
    if (x) {
      const body = { isVerified: true };
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      try {
        const resp = await axios.put(
          `http://localhost:5000/nodal/child/${childData?._id}`,
          body,
          { headers }
        );
        toast.success(resp?.data?.message);
        setVerifiedChild(true);
        navigate(0);
      } catch (err) {
        console.error(err);
        toast.error(err?.response?.data?.message);
      }
    }
  };

  const handleAllotedSchool = async () => {
    const x = window.confirm(
      "Do you want to mark the child as 'Enrolled in School' ? "
    );
    if (x) {
      const body = { inSchool: true };
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        };
        const resp = await axios.put(
          `http://localhost:5000/nodal/child/${childData?._id}`,
          body,
          { headers }
        );
        toast.success(resp?.data?.message);
        setHasSchool(true);
        navigate(0);
      } catch (err) {
        console.error(err);
        toast.error(err?.response?.data?.message);
      }
    }
  };

  const getColor = (status) => {
    if (status === "processed") return [green[50], green[600]];
    if (status === "processing") return [yellow[50], yellow[900]];
    if (
      status === "reversed" ||
      status === "rejected" ||
      status === "cancelled"
    )
      return [red[50], red[600]];
    return [grey[50], grey[600]];
  };

  const handleNameChange = async () => {
    const data = { name: nameEditValue };
    const notification = toast.loading("Updating Name...");
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const resp = await axios.put(
        `http://localhost:5000/nodal/child/${childData?._id}`,
        data,
        { headers }
      );
      toast.success(resp?.data?.message, { id: notification });
      setNameEditValue("");
      setNameEdit(false);
      navigate(0);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message, { id: notification });
    }
  };
  const handleAddressChange = async () => {
    const data = { address: addressEditValue };
    const notification = toast.loading("Updating Address...");
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const resp = await axios.put(
        `http://localhost:5000/nodal/child/${childData?._id}`,
        data,
        { headers }
      );
      toast.success(resp?.data?.message, { id: notification });
      setAddressEditValue("");
      setAddressEdit(false);
      navigate(0);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message, { id: notification });
    }
  };
  const handleDescriptionChange = async () => {
    const data = { description: descriptionEditValue };
    const notification = toast.loading("Updating Description...");
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const resp = await axios.put(
        `http://localhost:5000/nodal/child/${childData?._id}`,
        data,
        { headers }
      );
      toast.success(resp?.data?.message, { id: notification });
      setDescriptionEditValue("");
      setDescriptionEdit(false);
      navigate(0);
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message, { id: notification });
    }
  };
  const handleUpload = (e) => {
    const val = e.target.files[0];
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(val);
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(reader.error);
    });
    promise
      .then((res) => {
        toast.success("Image Uploaded");
        setImageFile(res);
        setUploadOpen(true);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err);
      });
  };
  function getRandomInt(max) {
    return Math.random() * (max - 6) + 6;
  }
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {ngo ? (
          <Sidebar
            nSections={sidebarMenus.ngo.nSections}
            sectionList={sidebarMenus.ngo.sectionList}
            header="Child Details"
          />
        ) : (
          <Sidebar
            nSections={sidebarMenus.nodal.nSections}
            sectionList={sidebarMenus.nodal.sectionList}
            header="Child Details"
          />
        )}

        {loading !== "Succeeded" ? (
          <Skeleton variant="rectangular" width={210} height={118} />
        ) : (
          <Container maxWidth={false}>
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
                      flexDirection: { xs: "column", md: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "30px",
                      gap: "30px",
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
                              <TableCell>
                                {!ngo && (
                                  <EditButton
                                    onEdit={() => setNameEdit(true)}
                                  />
                                )}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography>Address</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography>{childData?.address}</Typography>
                              </TableCell>
                              <TableCell>
                                {!ngo && (
                                  <EditButton
                                    onEdit={() => setAddressEdit(true)}
                                  />
                                )}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography>State</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography>{childData?.state}</Typography>
                              </TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography>District</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography>{childData?.district}</Typography>
                              </TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography>Description</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography>
                                  {childData?.description}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                {!ngo && (
                                  <EditButton
                                    onEdit={() => setDescriptionEdit(true)}
                                  />
                                )}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography>Grades</Typography>
                              </TableCell>
                              <TableCell>
                                {(childData?.isAccepted && (
                                  <Typography>
                                    {getRandomInt(9).toFixed(1)}/10
                                  </Typography>
                                )) || <Typography>NaN</Typography>}
                              </TableCell>
                              <TableCell></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography>Aadhar No.</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography>
                                  {childData?.aadhar_no
                                    ? "************ (Hidden)"
                                    : "Not Added"}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                {!ngo && !childData?.aadhar_no && (
                                  <Button
                                    variant="text"
                                    onClick={() => setAadharEdit(true)}
                                  >
                                    Add Aadhar No.
                                  </Button>
                                )}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography>Is Verified</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography>
                                  {childData?.isVerified || verified ? (
                                    <CheckCircleIcon sx={{ color: "green" }} />
                                  ) : (
                                    <CancelIcon sx={{ color: "red" }} />
                                  )}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                {!ngo && (
                                  <Button
                                    variant="text"
                                    disabled={childData?.isVerified || verified}
                                    onClick={handleVerified}
                                  >
                                    Mark As Verified
                                  </Button>
                                )}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography>Is Accepted</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography>
                                  {childData?.isAccepted || acceptChild ? (
                                    <CheckCircleIcon sx={{ color: "green" }} />
                                  ) : (
                                    <CancelIcon sx={{ color: "red" }} />
                                  )}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Button
                                  variant="text"
                                  disabled={
                                    !childData?.isVerified ||
                                    childData?.isAccepted ||
                                    acceptChild
                                  }
                                  onClick={handleAccepted}
                                >
                                  Mark As Accepted
                                </Button>
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <Typography>In School</Typography>
                              </TableCell>
                              <TableCell>
                                <Typography>
                                  {childData?.inSchool || hasSchool ? (
                                    <CheckCircleIcon sx={{ color: "green" }} />
                                  ) : (
                                    <CancelIcon sx={{ color: "red" }} />
                                  )}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                {!ngo && (
                                  <Button
                                    variant="text"
                                    disabled={
                                      !childData?.isVerified ||
                                      childData?.inSchool ||
                                      hasSchool
                                    }
                                    onClick={handleAllotedSchool}
                                  >
                                    Assign School
                                  </Button>
                                )}
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell>
                                <ControlledAccordions
                                  childData={childData}
                                  ngo={ngo}
                                />
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
                        alignItems: "center",
                        gap: 1.75,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 3,
                        }}
                      >
                        <img
                          alt={childData?.name}
                          src={
                            childData?.img
                              ? `${childData?.img}`
                              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"
                          }
                          style={{
                            objectFit: "contain",
                            height: "250px",
                            width: "200px",
                          }}
                        />
                        {!ngo && (
                          <Button
                            variant="text"
                            component="label"
                            sx={{ gap: 1 }}
                          >
                            <AddAPhotoIcon />
                            <Typography
                              component="span"
                              sx={{ textTransform: "capitalize" }}
                            >
                              Upload Photograph
                            </Typography>
                            <input
                              hidden
                              accept="image/png"
                              type="file"
                              value={image}
                              onChange={handleUpload}
                            />
                          </Button>
                        )}
                        <Button
                          variant="contained"
                          color="success"
                          sx={{ gap: 1 }}
                          onClick={() => setMapOpen(true)}
                        >
                          <LocationOnIcon />
                          <Typography
                            component="span"
                            sx={{ textTransform: "capitalize" }}
                          >
                            View Location
                          </Typography>
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          display: { xs: "grid", md: "flex" },
                          flexDirection: { md: "column" },
                          gridTemplateColumns: "repeat(2, 1fr)",
                          gap: 1.25,
                        }}
                      >
                        {!ngo &&
                          childData?.isVerified &&
                          !!childData?.rzp_fundAcId && (
                            <>
                              <Button
                                variant="contained"
                                sx={{ gap: 2 }}
                                onClick={() => setPayoutVisible(true)}
                              >
                                <PaymentIcon />
                                <Typography
                                  component="span"
                                  sx={{ textTransform: "capitalize" }}
                                >
                                  Payout
                                </Typography>
                              </Button>
                              <Button
                                variant="contained"
                                sx={{ gap: 2 }}
                                onClick={() => setPayoutListVisible(true)}
                              >
                                <AccountBalanceIcon />
                                <Typography
                                  component="span"
                                  sx={{ textTransform: "capitalize" }}
                                >
                                  View Payouts
                                </Typography>
                              </Button>
                            </>
                          )}
                        {!ngo && !!!childData?.rzp_fundAcId && (
                          <Button
                            variant="contained"
                            onClick={() => setAccountVisible(true)}
                            disabled={!!childData?.rzp_fundAcId}
                          >
                            Create Fund Account
                          </Button>
                        )}

                        {!ngo && !!!childData?.rzp_contactId && (
                          <Button
                            variant="contained"
                            onClick={() => handleCreateContact()}
                            disabled={!!childData?.rzp_contactId}
                          >
                            Create Contact
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Container>
                </Box>
              </CardContent>
            </Card>
          </Container>
        )}

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
              <Typography
                sx={{ fontSize: 30, marginBottom: "10px", textAlign: "center" }}
                component="h4"
              >
                Payout Details of {childData?.name}
              </Typography>
              {payoutLoading ? (
                <Typography>Loading...</Typography>
              ) : (
                <>
                  {/* Small to Large Screen Table */}
                  <TableContainer
                    sx={{ display: { xs: "inherit", lg: "none" } }}
                  >
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Payout ID</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {childData?.payouts?.map((payout, i) => {
                          const payoutDataId = payoutData.find(
                            (pD) => pD.id === payout
                          );
                          return (
                            <TableRow key={i}>
                              <TableCell>{payout?.slice(0, 9)}...</TableCell>
                              <TableCell>
                                {new Date(
                                  payoutDataId?.created_at * 1000
                                ).toLocaleDateString("en-in")}
                              </TableCell>

                              <TableCell>
                                <Container
                                  sx={{
                                    padding: "3px",
                                    borderRadius: "100px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: getColor(
                                      payoutDataId?.status
                                    )[0],
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: getColor(payoutDataId?.status)[1],
                                    }}
                                  >
                                    {capitalize(payoutDataId?.status)}
                                  </Typography>
                                </Container>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  {/* Large and above Screens */}
                  <TableContainer
                    sx={{ display: { xs: "none", lg: "inherit" } }}
                  >
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Payout ID</TableCell>
                          <TableCell>Date</TableCell>
                          <TableCell>Amount</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>UTR</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {childData?.payouts?.map((payout, i) => {
                          const payoutDataId = payoutData.find(
                            (pD) => pD.id === payout
                          );
                          return (
                            <TableRow key={i}>
                              <TableCell>{payout}</TableCell>
                              <TableCell>
                                {new Date(
                                  payoutDataId?.created_at * 1000
                                ).toDateString()}
                              </TableCell>
                              <TableCell>
                                <Typography component="span">
                                  {formatMoney(payoutDataId?.amount, {
                                    symbol: "₹ ",
                                    precision: 2,
                                  })}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Container
                                  sx={{
                                    padding: "3px",
                                    borderRadius: "100px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    backgroundColor: getColor(
                                      payoutDataId?.status
                                    )[0],
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: getColor(payoutDataId?.status)[1],
                                    }}
                                  >
                                    {capitalize(payoutDataId?.status)}
                                  </Typography>
                                </Container>
                              </TableCell>
                              <TableCell>
                                {payoutDataId?.status !== "processed"
                                  ? "N/A"
                                  : payoutDataId?.utr}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              )}
              <Button
                sx={{
                  marginTop: "10px",
                  gap: "4px",
                  backgroundColor: red[500],
                  "&:hover": { backgroundColor: red[700] },
                }}
                onClick={handleClosePL}
                variant="contained"
              >
                <CancelIcon />
                <Typography sx={{ display: { xs: "none", lg: "inline" } }}>
                  Close
                </Typography>
              </Button>
            </Container>
          </Box>
        </Modal>
        <Modal
          open={aadharEdit}
          onClose={handleCloseAD}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Container
              sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Typography component="h4" fontSize={30} textAlign="center">
                Link Aadhar to Child
              </Typography>
              <TextField
                type="number"
                id="aadharNo"
                placeholder="Enter Aadhar No. (12 Digit)"
                value={aadharNo}
                label="Aadhar No."
                onChange={(e) => setAadharNo(e.target.value)}
              />

              <Button variant="contained" onClick={handleLinkAadhar}>
                Link Aadhar
              </Button>
            </Container>
          </Box>
        </Modal>
        <EditModal
          handleClose={handleCloseNE}
          handleEdit={handleNameChange}
          open={nameEdit}
          editField={{
            type: "text",
            label: "Name",
            placeholder: "Enter Name",
            value: nameEditValue,
            handleChange: setNameEditValue,
          }}
        />
        <EditModal
          handleClose={handleCloseAE}
          handleEdit={handleAddressChange}
          open={addressEdit}
          editField={{
            type: "textarea",
            label: "Address",
            placeholder: "Enter Address",
            value: addressEditValue,
            handleChange: setAddressEditValue,
          }}
        />
        <EditModal
          handleClose={handleCloseDE}
          handleEdit={handleDescriptionChange}
          open={descriptionEdit}
          editField={{
            type: "textarea",
            label: "Description",
            placeholder: "Enter Description",
            value: descriptionEditValue,
            handleChange: setDescriptionEditValue,
          }}
        />
        <UploadModal
          handleClose={() => setUploadOpen(false)}
          imageChangeHandler={handleUpload}
          imageFile={imageFile}
          open={uploadOpen}
          onUpload={() => {}}
          setImageFile={setImageFile}
          setImage={setImage}
          id={childData?._id}
        />
        <MapModal
          open={mapOpen}
          handleClose={handleCloseMP}
          childLocation={childData?.lastKnownLocation}
          officeLocation={
            ngo ? currentUser?.location : currentUser?.officeLocation
          }
          _id={childData?._id}
          ngo={ngo}
        />
      </Box>
    </div>
  );
};

export default ChildDetails;
