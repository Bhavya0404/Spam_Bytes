import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import leftImage from '../assets/images/Rectangle_44.png'
import rightImmg from '../assets/images/aboutUsKid.png'
const AboutUs = () => {
  return (
    <Box
      sx={{
        height: { sm: '90vh', xs: '100vh' },
        width: '100%',
        marginTop: { sm: '30px', xs: 0 },
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {/* left */}
      <Box
        sx={{
          height: { sm: '90vh', xs: '100vh' },
          width: { sm: '50%', xs: '100%' },
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          marginLeft: { sm: '4%', xs: 0 },
        }}
      >
        <Box
          component="img"
          sx={{
            width: { sm: '90%', xs: 'auto' },
            height: { sm: '70vh', xs: '400px' },
            position: 'absolute',
            display: { sm: 'flex', xs: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
          src={leftImage}
        ></Box>
        <Container
          sx={{
            height: { sm: '70%', xs: '100vh' },
            width: { sm: '80%', xs: '100%' },
            margin: { xs: 0 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            marginLeft: { sm: '4%' },
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
            About us
          </Typography>
          <Typography
            variant="h5"
            sx={{ width: '100%', height: { sm: '60%', xs: '70%' } }}
          >
            PENCiL (Platform for Effective Enforcement for No Child Labour) an
            electronic platform for effective enforcement for no child labour
            developed by Ministry of Labour and Employment. PENCiL Portal has
            following components:Child Tracking System, Complaint Corner, State
            Government, National Child Labour Project, Convergence.
          </Typography>
        </Container>
      </Box>
      {/* right */}
      <Box
        sx={{
          height: '100%',
          width: '50%',
          display: { sm: 'flex', xs: 'none' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box component="img" src={rightImmg} />
      </Box>
    </Box>
  )
}

export default AboutUs
