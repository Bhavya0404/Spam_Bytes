import { Typography } from '@mui/material'
import { bgcolor, Box, positions } from '@mui/system'
import React from 'react'
import logo from '../assets/images/logoblue.png'
import ashok from '../assets/images/ashokst.png'
import link1 from '../assets/images/link1.png'
import link2 from '../assets/images/link2.jpg'
import link3 from '../assets/images/link3.png'
import link4 from '../assets/images/link4.jpg'
import link5 from '../assets/images/link5.png'
import link6 from '../assets/images/link6.png'
import link7 from '../assets/images/link7.png'
import link8 from '../assets/images/link8.png'
import link9 from '../assets/images/link9.jpg'
import link10 from '../assets/images/link10.png'




const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '100vh',  sm:'40vh' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        
        bgcolor: 'secondary.main'
      
      }}
    >
      <Box
        sx={{
          width: { xs: '95%', sm: '45%', md: '33%' },
          height: { xs: '20vh', sm: '100%' },
          marginLeft: '10px',
          
        }}
      >
        <Box
          component="img"
          sx={{
            marginTop: '10px',
            marginLeft: '10px',
            width: '40%',
            height: { xs: '20vh', md: '30%', lg:'50%' },
          }}
          src={ashok}
        ></Box>
        <Box
          component="img"
          sx={{
            marginTop: '10px',
            marginLeft: '10px',
            width: '40%',
            height: { xs: '20vh', md: '30%', lg:'50%' },
          }}
          src={logo}
        ></Box>
        <Box
          sx={{
            width: '100%',
            height: { xs: '30%', sm: '45%' },
            marginTop: '20px',     
          }}
        >
          
          <Typography variant="subtitle2" sx={{ color: 'primary.main', height:  {  md: '50px', xs: '300px' } }}>
            Platform for Effective Enforcement for No Child Labour
          </Typography> 
          
        </Box>
      </Box>
      <Box
        sx={{
          height: { xs: '20vh', sm: '100%' },
          width:{lg: '100%', xs:'700px'},
          
          display:'flex',
          flexDirection:'column',
          
        }}
      >

        <a href="https://www.india.gov.in/">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link1}
        />
        </a>
        <a href="https://ncpcr.gov.in/">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link2}
        />
        </a>
        <a href="https://www.nic.in/">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link3}
        />
        </a>
        <a href="https://www.mha.gov.in/">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link4}
        />
        </a>
        <a href="https://labour.gov.in/">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link5}
        />
        </a>
      
        
      </Box>
      <Box
        sx={{
          height: { xs: '20vh', sm: '100%' },
          width:{lg: '100%', xs:'700px'},
          marginLeft: '10px',
          marginRight: '10px',
          marginTop: '15px',
          display:'flex',
          flexDirection:'column',
        }}
      >
        <a href="https://www.esic.nic.in/">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link6}
        />
        </a>
        <a href="https://www.epfindia.gov.in/site_en/index.php">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link7}
        />
        </a>
        <a href="https://clc.gov.in/clc/">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link8}
        />
        </a>
        <a href="https://wcd.nic.in/">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link9}
        />
        </a>
        <a href="https://www.digitalindia.gov.in/">
        <Box
          component="img"
          sx={{
    
            width: { xs: '30%', sm: '40%', md: '30%' },
            height: { xs: '7vh', sm: '6vh', md: '5vh' },
          }}
          src={link10}
        />
        </a>
      </Box>
    </Box>
  )
}

export default Footer
