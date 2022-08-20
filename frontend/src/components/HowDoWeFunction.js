import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import rightImg from '../assets/images/workImg.png'
const HowDoWeFunction = () => {
  return (
    <Box
      sx={{
        height: '800px',
        width: '100%',
        marginTop: '30px',
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
          display: 'flex',
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
          height: '800px',
          width: '50%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container
          sx={{
            height: '70%',
            width: '80%',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '100px',
            // alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{ height: '40%', display: 'flex', alignItems: 'center' }}
          >
            About us
          </Typography>
          <Typography variant="h5" sx={{ width: '80%', height: '60%' }}>
            PENCiL (Platform for Effective Enforcement for No Child Labour) an
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
