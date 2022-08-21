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
      <Box sx={{position: 'relative', width: '8%', height: '300px',  background: '#FF5C58',}}/>
      <Button sx={{
        position: 'relative',
        width: '20%',
        height: '300px',
        marginLeft: '10px',}}>
      <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'rgba(254, 143, 143, 0.7)',       
      }}>
         <Box
          component="img"
          sx={{
            width: '50%',
            height: '50%',
            position: 'relative',
            display: 'flex',
            marginLeft: '25%',
            marginTop: '12%'
            
          }}
          src={compimg}
        >
          
          </Box> 
            <Typography
            variant="h4"
            sx={{ position:'relative', height: '20%', width:'20%', display: 'flex', marginLeft:'20%', marginTop:'15px', color:'black'}}
            >File a Complaint</Typography> 
      </Box></Button>


      <Button sx={{
        position: 'relative',
        width: '20%',
        height: '300px',
        marginLeft: '10px',}}>
      <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'rgba(254, 143, 143, 0.7)',       
      }}>
         <Box
          component="img"
          sx={{
            width: '50%',
            height: '50%',
            position: 'relative',
            display: 'flex',
            marginLeft: '25%',
            marginTop: '10%',
            
          }}
          src={announcement}
        >
          
          </Box> 
            <Typography
            variant="h4"
            sx={{ position:'relative', height: '20%', width:'20%', display: 'flex', marginLeft:'10%', color:'black'}}
            >Important Announcements</Typography> 
      </Box></Button>


      <Button sx={{
        position: 'relative',
        width: '20%',
        height: '300px',
        marginLeft: '10px',}}>
      <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'rgba(254, 143, 143, 0.7)',       
      }}>
         <Box
          component="img"
          sx={{
            width: '50%',
            height: '50%',
            position: 'relative',
            display: 'flex',
            marginLeft: '25%',
            marginTop: '12%',
            
          }}
          src={media}
        >
          
          </Box> 
            <Typography
            variant="h4"
            sx={{ position:'relative', height: '20%', width:'20%', display: 'flex', marginLeft:'35%', marginTop:'15px', color:'black'}}
            >Media</Typography> 
      </Box></Button>
      <Button sx={{
        position: 'relative',
        width: '20%',
        height: '300px',
        marginLeft: '10px',}}>
      <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'rgba(254, 143, 143, 0.7)',       
      }}>
         <Box
          component="img"
          sx={{
            width: '50%',
            height: '50%',
            position: 'relative',
            display: 'flex',
            marginLeft: '25%',
            marginTop: '12%'
            
          }}
          src={conferences}
        >
          
          </Box> 
            <Typography
            variant="h4"
            sx={{ position:'relative', height: '20%', width:'20%', display: 'flex', marginLeft:'20%', marginTop:'15px', color:'black'}}
            >Conferences</Typography> 
      </Box></Button>
      
      <Box sx={{position: 'relative', width: '10%', height: '300px', marginLeft: '15px', background: '#FF5C58',}}/>

    </Box>
    
    <Box
    sx={{
      width: '100%',
      height: '800px',
      backgroundColor: 'rgba(254, 143, 143, 0.3)',
      position: 'relative',
      marginTop:'100px',
      display: 'flex',
    }}>
      <Box
      sx={{
        height: '100%',
        width: '50%',
        position: 'absolute',
        alignItems: 'left',
        marginTop: '30px',
        marginLeft: '30px',
        }}>
          <Typography
          variant="h1"
          sx={{ height: '20%', display: 'flex',  color: '#FF5C58'}}>
            STATISTICS  </Typography>

          <Typography
          variant="h1"
          sx={{ display: 'flex',  color: '#FF5C58',}}>        
            2500
          </Typography>
          <Typography
          variant="h4"
          sx={{ height: '50px',display: 'flex',  color: '#FF5C58',}}>        
            Reported Cases
          </Typography>
          <Typography
          variant="h1"
          sx={{  display: 'flex',  color: '#FF5C58',}}>        
            2500
          </Typography>
          <Typography
          variant="h4"
          sx={{ height: '50px', display: 'flex',  color: '#FF5C58',}}>        
            Nodal Officers Appointed
          </Typography>
          <Typography
          variant="h1"
          sx={{  display: 'flex',  color: '#FF5C58',}}>        
            2500
          </Typography>
          <Typography
          variant="h4"
          sx={{  display: 'flex',  color: '#FF5C58',}}>        
            Children Enrolled in School
          </Typography>

      </Box>
      <Box
       sx={{
        height: '100%',
        width: '50%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:'50%'
      }}>
          <Box
          component="img"
          sx={{height:'90%'}}
          
          src={map}>
            

          </Box>
        
          

      </Box>

    </Box>
    </Box>
  )
}

export default HeroSection
