import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import { Button, Typography } from '@mui/material'

const EditButton = ({ onEdit }) => {
  return (
    <Button variant="text" sx={{ gap: 1 }} onClick={onEdit}>
      <EditIcon />
      <Typography component="span" sx={{ textTransform: 'capitalize' }}>
        Edit
      </Typography>
    </Button>
  )
}

export default EditButton
