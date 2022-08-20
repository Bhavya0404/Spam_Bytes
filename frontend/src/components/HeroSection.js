import { Box, Button, Container, Typography } from '@mui/material'
import mainPic from '../assets/images/narendra.png'
import React from 'react'
import AnimatedRoutes from './AnimatedRoutes'
import Navbar from '../components/Navbar'
import DonateButton from './DonateButton'
import { useSelector } from 'react-redux'
import { selectFoundChild } from '../features/foundchild/FoundChildSlice'
import { width } from '@mui/system'

const HeroSection = () => {
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
  return (
    <Box sx={{ width: '100%', height: '600px', display: 'flex' }}>
      <Box sx={{ width: '100%', height: '600px', position: 'absolute' }}>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '600px',
            position: 'absolute',
            zIndex: '-2',
          }}
          src={mainPic}
        />
        <Box
          sx={{
            width: '100%',
            height: '600px',
            backgroundColor: 'black',
            opacity: '60%',
            position: 'absolute',
            zIndex: '-1',
          }}
        />
      </Box>

      <Container
        sx={{
          position: 'relative',
          color: 'white',
          width: '50%',
          height: '100%',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '200px',
        }}
      >
        <Box>
          <Typography variant="h1">Pencil</Typography>
          <Typography variant="h6">
            A Ministry of Labour and Employment initiative
          </Typography>
          {/* <DonateButton /> */}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-evenly',
            }}
          >
            <DonateButton />
            <Button variant="contained" size="large">
              Large
            </Button>
          </Box>
        </Box>
      </Container>
      <Container
        sx={{
          position: 'relative',
          color: 'white',
          width: '50%',
          height: '100%',
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '200px',
        }}
      ></Container>
    </Box>
  )
}

export default HeroSection
