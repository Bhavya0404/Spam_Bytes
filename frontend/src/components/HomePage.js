import { Box, Container, Typography } from '@mui/material'
// import { Container } from '@mui/system'
import React from 'react'
import AnimatedRoutes from './AnimatedRoutes'

import mainPic from '../assets/images/mainPage.webp'
import Navbar from '../components/Navbar'
import DonateButton from './DonateButton'
import { useSelector } from 'react-redux'
import { selectFoundChild } from '../features/foundchild/FoundChildSlice'

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
