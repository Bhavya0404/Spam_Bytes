import { Box, Container } from '@mui/material'
// import { Container } from '@mui/system'
import React from 'react'
import AnimatedRoutes from './AnimatedRoutes'

const HomePage = () => {
  return (
    <Box sx={{ position: 'relative', marginTop: '100px' }}>
      <AnimatedRoutes>
        <h1>Homepage</h1>
      </AnimatedRoutes>
    </Box>
  )
}

export default HomePage
