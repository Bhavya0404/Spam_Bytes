import React from 'react'
import { Box, Typography } from '@mui/material'
import map from '../assets/images/map.png'
import {default as HMap}  from './Map'
import { getNodalData } from '../features/nodal/NodalSlice'
import { useSelector } from 'react-redux'
import { selectFoundChild } from '../features/foundchild/FoundChildSlice'
import { set } from '../features/statistics/Statistics'

const Statistics = () => {
  const foundChildData = useSelector(selectFoundChild)
  const nodalData = useSelector(getNodalData)
  const stateData = useSelector(set)

 const state = "Uttar Pradesh"
  console.log(stateData.state)
  let reportedCase = 0;
  let nodalOfficers = 0;
  let inSchool = 0;

  foundChildData.forEach((child) => {
    if (child.isVerified) {
      if(child.state === state){
        reportedCase++;
      }
      
      if(child.state === state && child.inSchool){
        inSchool++;
      }
    }
  })

  // console.log(reportedCase)
  // console.log(inSchool)

  // nodalData.forEach((nodal) => {
  //   console.log(nodal)
  // })


  // console.log(reportedCase)

  return (
    <Box
      sx={{
        width: '100%',
        height: { lg: '100vh', xs: 'auto' },
        display: 'flex',
        flexDirection: { lg: 'row', xs: 'column-reverse' },
        backgroundColor: 'primary.main',
      }}
    >
      <Box
        sx={{
          width: { lg: '50%', xs: '100%' },
          height: { lg: '100vh', xs: '70vh' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <HMap />
      </Box>
      <Box
        sx={{
          width: { lg: '50%', xs: '100%' },
          height: { lg: '100%', xs: '40vh' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { lg: 'center', xs: 'space-evenly' },
          alignItems: { xs: 'center', lg: 'flex-start' },
        }}
      >
        <Box
          sx={{
            height: '23%',
            textDecoration: 'underline',
            color: 'primary.contrastText',
          }}
        >
          <Typography variant="h1">Statistics</Typography>
        </Box>
        <Box sx={{ height: '15%' }}>
          <Typography variant="h3" sx={{ color: 'primary.light' }}>
            {reportedCase}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.contrastText' }}
          >
            Reported Cases
          </Typography>
        </Box>
        <Box sx={{ height: '15%' }}>
          <Typography variant="h3" sx={{ color: 'primary.light' }}>
            2500+
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.contrastText' }}
          >
            Nodal Officers Appointed
          </Typography>
        </Box>
        <Box sx={{ height: '15%' }}>
          <Typography variant="h3" sx={{ color: 'primary.light' }}>
            {inSchool}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'primary.contrastText' }}
          >
            Children Enrolled in School
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Statistics
