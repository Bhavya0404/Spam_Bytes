import { Box, Button, Container, Typography } from '@mui/material'
import mainPic from '../assets/images/narendra.png'
import React from 'react'
import AnimatedRoutes from './AnimatedRoutes'
import Navbar from '../components/Navbar'
import DonateButton from './DonateButton'
import { useSelector } from 'react-redux'
import { selectFoundChild } from '../features/foundchild/FoundChildSlice'
import { width } from '@mui/system'
import conferences from '../assets/images/pngegg (3) 1.png'
import announcement from '../assets/images/pngegg (1) 1.png'
import compimg from '../assets/images/pngegg 1.png'
import media from '../assets/images/pngegg (2) 1.png'
import map from '../assets/images/map.png'

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
    <Box>
    
    <Box sx={{ width: '100%', height: '800px', display: 'flex' }}>
      <Box sx={{ width: '100%', height: '800px', position: 'absolute' }}>
        <Box
          component="img"
          sx={{
            width: '100%',
            height: '800px',
            position: 'absolute',
            zIndex: '-2',
          }}
          src={mainPic}
        />
        <Box
          sx={{
            width: '100%',
            height: '800px',
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

    {/* Complaint */}


    <Box
    sx={{
      position: 'relative',
      width: '100%',
      height: '215px',
      display: 'flex',
      marginTop: '20px',
      marginBottom: '20px'
      
    }}
    >
      <Box sx={{ width: '8%', height: '100%',  background: '#FF5C58',}}/>

      <Button sx={{
        width: {xs: '35%', md: '20%'},
        height: '100%',
        marginLeft: '10px',}}>

        <Box
        sx={{
          width: '100%',
          height: '100%',
          background: 'rgba(254, 143, 143, 0.7)',  
          display: 'flex' ,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
            <Box
          component="img"
          sx={{
            width: '45%',
            height: '45%',
          }}
          src={compimg}
        >
        </Box>

        <Typography
            variant="h4"
            sx={{ color:'black', fontSize: {xs: '1rem', md: '1.2rem', lg: '1.4'}, mt: "15px"}}
            >File a Complaint</Typography> 
      
         
        </Box>

      </Button>
    </Box>
   </Box>
  )
}

export default HeroSection
