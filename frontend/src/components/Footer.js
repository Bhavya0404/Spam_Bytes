import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import logo from '../assets/images/logoblue.png'
import ashok from '../assets/images/ashokst.png'
const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '570px', sm: '215px' },
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <Box
        sx={{
          width: { xs: '95%', sm: '45%', md: '33%' },
          height: { xs: '80%', sm: '100%' },
          marginLeft: '10px',
        }}
      >
        <Box
          component="img"
          sx={{
            marginTop: '10px',
            marginLeft: '10px',
            width: { xs: '15%', sm: '30%' },
            height: '70%',
          }}
          src={ashok}
        ></Box>
        <Box
          component="img"
          sx={{
            marginTop: '10px',
            marginLeft: '10px',
            width: { xs: '15%', sm: '50%' },
            height: '80%',
          }}
          src={logo}
        ></Box>
        <Box
          sx={{
            width: '100%',
            height: { xs: '15%', sm: '45%' },
            marginTop: '20px',
          }}
        >
          <Typography variant="subtitle2" sx={{ color: 'secondary.main' }}>
            Platform for Effective Enforcement for No Child Labour
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: '95%', sm: '45%', md: '33%' },
          height: { xs: '80%', sm: '100%' },
          marginLeft: '10px',
          marginTop: '15px',
        }}
      >
        <Typography variant="subtitle1" sx={{ color: 'secondary.main' }}>
          L I N K S{' '}
        </Typography>

        <a href="https://www.india.gov.in/">
          <Typography
            variant="body2"
            sx={{ marginTop: '30px', color: 'secondary.main' }}
          >
            www.india.gov.in
          </Typography>
        </a>
        <a href="https://ncpcr.gov.in/">
          <Typography
            variant="body2"
            sx={{ marginTop: '5px', color: 'secondary.main' }}
          >
            ncpcr.gov.in
          </Typography>
        </a>
        <a href="https://www.nic.in/">
          <Typography
            variant="body2"
            sx={{ marginTop: '5px', color: 'secondary.main' }}
          >
            www.nic.in
          </Typography>
        </a>
        <a href="https://www.mha.gov.in/">
          <Typography
            variant="body2"
            sx={{ marginTop: '5px', color: 'secondary.main' }}
          >
            www.mha.gov.in
          </Typography>
        </a>
        <a href="https://labour.gov.in/">
          <Typography
            variant="body2"
            sx={{ marginTop: '5px', color: 'secondary.main' }}
          >
            labour.gov.in
          </Typography>
        </a>
      </Box>
      <Box
        sx={{
          width: { xs: '95%', sm: '45%', md: '33%' },
          height: { xs: '80%', sm: '100%' },
          marginLeft: '10px',
          marginRight: '10px',
          marginTop: '15px',
        }}
      >
        <a href="https://www.esic.nic.in/">
          <Typography
            variant="body2"
            sx={{ marginTop: '70px', color: 'secondary.main' }}
          >
            www.esic.nic.in
          </Typography>
        </a>
        <a href="https://www.epfindia.gov.in/site_en/index.php">
          <Typography
            variant="body2"
            sx={{ marginTop: '5px', color: 'secondary.main' }}
          >
            www.epfindia.gov.in
          </Typography>
        </a>
        <a href="https://clc.gov.in/clc/">
          <Typography
            variant="body2"
            sx={{ marginTop: '5px', color: 'secondary.main' }}
          >
            clc.gov.in
          </Typography>
        </a>
        <a href="https://wcd.nic.in/">
          <Typography
            variant="body2"
            sx={{ marginTop: '5px', color: 'secondary.main' }}
          >
            wcd.nic.in
          </Typography>
        </a>
        <a href="https://www.digitalindia.gov.in/">
          <Typography
            variant="body2"
            sx={{ marginTop: '5px', color: 'secondary.main' }}
          >
            www.digitalindia.gov.in
          </Typography>
        </a>
      </Box>
    </Box>
  )
}

export default Footer
