import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import leftImage from '../assets/images/Rectangle_44.png'
import rightImmg from '../assets/images/aboutUsKid.png'
const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: '50vh' },
        height: { md: '90vh', xs: 'auto' },
        width: '100%',
        marginTop: { md: '30px', xs: 0 },
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {/* left */}
      <Box
        sx={{
          minHeight: { xs: '70%' },
          maxWidth: { md: '50%', xs: '100%' },
          height: { md: '80vh', xs: '100%' },

          width: { md: '50%', xs: '100%' },
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: { md: '4%', xs: 0 },
        }}
      >
        <Box
          component="img"
          sx={{
            width: { md: '90%', xs: 'auto' },
            height: { md: '90%' },
            position: 'absolute',
            display: { md: 'flex', xs: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
          }}
          src={leftImage}
        ></Box>
        <Container
          sx={{
            height: { md: '100%', xs: '100%' },
            width: { md: '90%', xs: '100%' },
            margin: { xs: 0 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            marginLeft: { md: '4%' },
            // alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              height: { md: '20%', xs: '10%' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: { xs: '60px', sm: '70px', md: '80px' },
            }}
          >
            About us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              width: '100%',
              height: { md: '69%', xs: '70%' },
              display: 'flex',
              justifyContent: 'center',
            }}
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
          display: { md: 'flex', xs: 'none' },
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
