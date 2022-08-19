import {
  Box,
  Modal,
  Container,
  Typography,
  TextField,
  Button,
} from '@mui/material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import React from 'react'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '200px', lg: '400px' },
  bgcolor: 'background.paper',
  borderRadius: '10px',
  p: 4,
  '&:focus': {
    outline: 'none',
  },
}

const EditModal = ({ editField, open, handleClose, handleEdit }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container
          maxWidth={false}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <Typography
            sx={{ fontSize: 30, marginBottom: '10px', textAlign: 'center' }}
            component="h4"
          >
            Editing {editField?.label}
          </Typography>
          {editField?.type === 'textarea' ? (
            <TextField
              type="text"
              multiline
              rows={4}
              id={editField?.label}
              placeholder={editField?.placeholder}
              value={editField?.value}
              label={editField?.label}
              onChange={(e) => editField?.handleChange(e.target.value)}
            />
          ) : (
            <TextField
              type={editField?.type}
              id={editField?.label}
              placeholder={editField?.placeholder}
              value={editField?.value}
              label={editField?.label}
              onChange={(e) => editField?.handleChange(e.target.value)}
            />
          )}
          <Button variant="outlined" onClick={handleEdit}>
            <ChevronRightIcon />
            <Typography
              component="span"
              sx={{ display: { xs: 'none', md: 'inline' } }}
            >
              Modify
            </Typography>
          </Button>
        </Container>
      </Box>
    </Modal>
  )
}

export default EditModal
