import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import MapView from "./MapView";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "200px", lg: "600px" },
  bgcolor: "background.paper",
  borderRadius: "10px",
  p: 4,
  "&:focus": {
    outline: "none",
  },
  gap: 2,
};

const MapModal = ({
  open,
  handleClose,
  childLocation: cloc,
  officeLocation: oloc,
  ngo,
}) => {
  const [showInst, setShowInst] = useState(false);
  return (
    <Modal
      open={open}
      onClose={() => {
        setShowInst(false);
        handleClose();
      }}
    >
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
          <Typography component={"h5"} sx={{textAlign: 'center', fontWeight: 'bold', fontSize: '1.1rem'}}>
            Child Location Map
          </Typography>
          <MapView
            childLocation={cloc}
            ngo={ngo}
            officeLocation={oloc}
            showInst={showInst}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              color="error"
              variant="contained"
              onClick={handleClose}
              sx={{
                display: "flex",
                width: "20%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CloseIcon />
              <Typography sx={{ display: { xs: "none", lg: "inline" } }}>
                Close
              </Typography>
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setShowInst(!showInst)}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CloseIcon />
              <Typography sx={{ display: { xs: "none", lg: "inline" } }}>
                {!showInst ? "Show Directions" : "Hide Directions"}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default MapModal;
