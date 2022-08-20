import { Box, Container, Typography } from '@mui/material'
// import { Container } from '@mui/system'
import React from 'react'
import AnimatedRoutes from './AnimatedRoutes'
import HeroSection from './HeroSection'

const HomePage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <AnimatedRoutes>
        <HeroSection />
      </AnimatedRoutes>
    </Box>
  )
}

export default HomePage
