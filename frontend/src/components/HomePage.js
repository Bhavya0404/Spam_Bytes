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

const HomePage = () => {
  const foundChildData = useSelector(selectFoundChild)
  const hotspot = new Map()

  foundChildData.filter((child) => {
    if (child.isVerified) {
      if (!hotspot.get(child.district)) {
        hotspot.set(child.district, 1)
      } else {
        let number = hotspot.get(child.district)
        hotspot.set(child.district, number + 1)
      }
    }
  })

  const hotspotFinal = new Map([...hotspot].sort((a, b) => b[1] - a[1]))
  let size = hotspot.size
  let i = 0

  // hotspotFinal.forEach(function (value, key) {
  //   if (i < 2) {
  //     console.log(key + " " + value);
  //   }
  //   i++;
  // });

  // {hotspotFinal.forEach(function (value, key) {
  //   if (i < 2) {
  //     console.log(key + " " + value);
  //   }
  //   i++;
  // })}
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
          <AboutUs />
          <HowDoWeFunction />
        </AnimatedRoutes>
      </Box>
    </div>
  )
}

export default HomePage
