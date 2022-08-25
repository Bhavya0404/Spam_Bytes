import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ChildComplaint = () => {
  return (
    <div>
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
    </div>
  )
}

export default ChildComplaint