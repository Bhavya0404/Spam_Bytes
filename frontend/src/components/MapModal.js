import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import MapView from './MapView'
import CloseIcon from '@mui/icons-material/Close'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '200px', lg: '600px' },
  bgcolor: 'background.paper',
  borderRadius: '10px',
  p: 4,
  '&:focus': {
    outline: 'none',
  },
  gap: 2,
}

const MapModal = ({
  open,
  handleClose,
  childLocation: cloc,
  officeLocation: oloc,
}) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
          <MapView childLocation={cloc} officeLocation={oloc} />
          <Button
            color="error"
            variant="contained"
            onClick={handleClose}
            sx={{
              display: 'flex',
              width: '20%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <CloseIcon />
            <Typography sx={{ display: { xs: 'none', lg: 'inline' } }}>
              Close
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default MapModal
