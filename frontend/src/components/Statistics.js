import React from 'react'
import { Box, Typography } from '@mui/material'
import map from '../assets/images/map.png'
import Map from './Map'

const Statistics = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { lg: '100vh', xs: 'auto' },
        display: 'flex',
        flexDirection: { lg: 'row', xs: 'column-reverse' },
        backgroundColor: 'primary.main',
      }}
    >
      <Box
        sx={{
          width: { lg: '50%', xs: '100%' },
          height: { lg: '100vh', xs: '70vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Map />
      </Box>
      <Box
        sx={{
          width: { lg: '50%', xs: '100%' },
          height: { lg: '100%', xs: '40vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { lg: 'center', xs: 'space-evenly' },
          alignItems: { xs: 'center', lg: 'flex-start' },
        }}
      >
        <Box
          sx={{
            height: '23%',
            textDecoration: 'underline',
            color: 'primary.contrastText',
          }}
        >
          <Typography variant="h1">Statistics</Typography>
        </Box>
        <Box sx={{ height: '15%' }}>
          <Typography variant="h3" sx={{ color: 'primary.light' }}>
            2500+
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.contrastText' }}
          >
            Reported Cases
          </Typography>
        </Box>
        <Box sx={{ height: '15%' }}>
          <Typography variant="h3" sx={{ color: 'primary.light' }}>
            2500+
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.contrastText' }}
          >
            Reported Cases
          </Typography>
        </Box>
        <Box sx={{ height: '15%' }}>
          <Typography variant="h3" sx={{ color: 'primary.light' }}>
            2500+
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.contrastText' }}
          >
            Reported Cases
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Statistics
