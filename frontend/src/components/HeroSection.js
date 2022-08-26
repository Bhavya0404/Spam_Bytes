import { Box, Button, Container, Typography } from '@mui/material'

import React from 'react'
import DonateButton from './DonateButton'
import { useNavigate } from 'react-router-dom'
import mainPic from '../assets/images/main.jpg'

const HeroSection = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        width: { xs: '100%' },
        height: { sm: '100vh', xs: '100vh' },
        display: 'flex',
        overflow: 'hidden',
        mt: "-19px"
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: { lg: '100vh', xs: '100vh' },
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          sx={{
            width: '100%',
            height: { lg: '100%', xs: '100vh' },
            position: 'absolute',
            zIndex: '-2',
          }}
          src={mainPic}
        />

        {/* <Box
          sx={{
            width: '100%',
            height: { lg: '100%', xs: '100vh' },
            backgroundColor: 'black',
            opacity: '60%',
            position: 'absolute',
            zIndex: '-1',
          }}
        /> */}
      </Box>

      <Container
        sx={{
          position: 'relative',
          color: 'common.black',
          width: { sm: '100%', xs: '100%' },
          height: { sm: '100%', xs: '100vh' },
          display: 'flex',
          alignItems: 'center',
          margin: { xs: 0 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            width: '80%',
            justifyContent: 'space-evenly',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              height: { md: '50%', xs: '60%' },
              width: { lg: '150%', md: '60%', sm: '100%', xs: '100%' },
              marginTop: '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              bgcolor: 'secondry.main',
              borderRadius: '50px',
            }}
          >
            <Box
              sx={{
                marginLeft: '10%',
              }}
            >
              <Typography variant="h1">PENCIL</Typography>
              <Typography variant="h4">
                A Ministry of Labour and 
                Employment Initiative
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              height: { md: '10%', xs: '100px' },
              width: { sm: '50%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: 'primary.main',
              borderRadius: '10px',
              marginLeft: '15%',
            }}
          >
            <Button onClick={() => navigate('/reportchild')}>
              <Typography
                variant="subtitle1"
                sx={{ textTransform: 'capitalize', color: 'common.white' }}
              >
                Register a Complaint
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              height: { md: '10%', xs: '100px' },
              width: { sm: '50%' },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              bgcolor: 'primary.main',
              borderRadius: '10px',
              marginLeft: '15%',
              marginTop: '5%'
            }}
          >
            <Button onClick={() => navigate('/ComplaintStatus')}>
              <Typography
                variant="subtitle1"
                sx={{ textTransform: 'capitalize', color: 'common.white' }}
              >
                Track Complaint
              </Typography>
            </Button>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '40%',
              justifyContent: 'space-evenly',
            }}
          ></Box>
        </Box>
      </Container>
      <Box
        sx={{
          width: '100%',
          height: '100%',

          display: { xs: 'none', lg: 'flex' },
        }}
      ></Box>
    </Box>
  )
}

export default HeroSection
