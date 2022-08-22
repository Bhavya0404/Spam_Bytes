import { Box, Button, Container, Modal } from "@mui/material";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "200px", lg: "400px" },
  bgcolor: "background.paper",
  borderRadius: "10px",
  p: 4,
  "&:focus": {
    outline: "none",
  },
};

const UploadModal = ({
  open,
  handleClose,
  imageFile,
  image,
  imageChangeHandler,
  setImageFile,
  setImage,
  id,
}) => {
  const navigate = useNavigate();
  const handleUpload = async () => {
    const data = { img: imageFile };
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    try {
      const resp = await axios.put(
        `http://localhost:5000/nodal/child/${id}`,
        data,
        { headers }
      );
      toast.success(resp?.data?.message);
    } catch (err) {
      console.error(err);
      alert(err);
      toast.error(err?.response?.data?.message);
    }
    handleClose();
    setImageFile("");
    setImage("");
    navigate(0);
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Container
          maxWidth={false}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <img
            alt="Uploaded"
            src={`${imageFile}`}
            sx={{ width: 200, height: 200, objectFit: "contain" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                lg: "row",
                justifyContent: "space-between",
                gap: 1.5,
              },
            }}
          >
            <Button variant="outlined" color="info" component="label">
              Change Picture
              <input
                hidden
                accept="image/png"
                value={image}
                onChange={imageChangeHandler}
                type="file"
              />
            </Button>
            <Button variant="contained" color="success" onClick={handleUpload}>
              Confirm
            </Button>
          </Box>
        </Container>
      </Box>
    </Modal>
  );
};

export default UploadModal;
