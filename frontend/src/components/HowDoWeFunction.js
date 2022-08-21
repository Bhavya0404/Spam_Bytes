import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import rightImg from '../assets/images/workImg.png'
const HowDoWeFunction = () => {
  return (
    <Box
      sx={{
        height: { sm: '90vh', xs: '100vh' },
        width: '100%',
        marginTop: { sm: '30px', xs: 0 },
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(254, 143, 143, 0.4)',
      }}
    >
      {/* left */}
      <Box
        sx={{
          height: '100%',
          width: '50%',
          display: { sm: 'flex', xs: 'none' },
          alignItems: 'center',
          justifyContent: 'center',
          //   marginLeft: '100px',
        }}
      >
        <Box component="img" src={rightImg} />
      </Box>
      {/* right */}
      <Box
        sx={{
          height: { sm: '100%', xs: '100vh' },
          width: { sm: '50%', xs: '100%' },
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            height: { sm: '70%', xs: '100%' },
            width: '80%',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: { sm: '100px', xs: 0 },
            // alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              height: { sm: '40%', xs: '30%' },
              display: 'flex',
              alignItems: 'center',
              fontSize: { xs: '80px' },
            }}
          >
            How do we function
          </Typography>
          <Typography
            variant="h5"
            sx={{ width: { sm: '80%', xs: '100%' }, height: '60%' }}
          >
            lPENCiL (Platform for Effective Enforcement for No Child Labour) an
            electronic platform for effective enforcement for no child labour
            developed by Ministry of Labour and Employment. PENCiL Portal has
            following components:Child Tracking System, Complaint Corner, State
            Government, National Child Labour Project, Convergence.
          </Typography>
        </Container>
      </Box>
      {/* right */}
    </Box>
  )
}

export default HowDoWeFunction
