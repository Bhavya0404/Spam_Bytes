import { Box, Typography } from '@mui/material'
import React from 'react'

import Navbar from '../components/Navbar'
import HeroSection from './HeroSection'
import AboutUs from './AboutUs'
import Footer from './Footer'
import HowDoWeFunction from './HowDoWeFunction'
import { MiddleNavbar } from './MiddleNavbar'
import Statistics from './Statistics'

import ashok from '../assets/images/ashokst.png'
import logo from '../assets/images/logoblue.png'
import { Link } from 'react-router-dom'
import Map from './Map'

const HomePage = () => {
  return (
    <div>
      <Navbar/>

      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
        }}
      >
<<<<<<< HEAD
        <HeroSection />
        <Map />
        <AboutUs />
        <HowDoWeFunction />
        <Footer />

     
=======
        <Statistics />
        {/* footer */}
        {/* <Map /> */}
        {/* footer */}
>>>>>>> 912cbf85c7196fae96e110a9bbf07420b28f67b5
      </Box>
    </div>
  )
}

export default HomePage
