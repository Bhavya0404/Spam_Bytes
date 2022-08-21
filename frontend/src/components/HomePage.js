import { Box } from '@mui/material'
import React from 'react'
import AnimatedRoutes from './AnimatedRoutes'
import Navbar from '../components/Navbar'
import HeroSection from './HeroSection'
import AboutUs from './AboutUs'
import HowDoWeFunction from './HowDoWeFunction'
import { MiddleNavbar } from './MiddleNavbar'
import Statistics from './Statistics'

const HomePage = () => {
  return (
    <div>
      <Navbar />

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
          <MiddleNavbar />
          <Statistics />
          <AboutUs />
          <HowDoWeFunction />
        </AnimatedRoutes>
      </Box>
    </div>
  )
}

export default HomePage
