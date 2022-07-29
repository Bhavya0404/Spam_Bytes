import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectFoundChild } from '../foundchild/FoundChildSlice'
import { selectAllNgo, selectNgoByUserId } from './ngoSlice'
import FoundChild from './FoundChild'
import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import mainImg from '../../assets/images/ngoDash.webp'
import { display } from '@mui/system'

const NgoDashboard = () => {
  // const id = useParams()

  // console.log(id)
  const ngo = useSelector(selectAllNgo)
  console.log(ngo)
  // const ngo = useSelector((state) => selectNgoByUserId(state, id.ngoId))
  const childs = useSelector(selectFoundChild)
  if (!ngo) {
    return <h2>Page Not Found</h2>
  }
  let childState
  childState = childs.map((child) => {
    console.log(child.isVerified)

    if (
      child.district.toLowerCase() === ngo.district.toLowerCase() &&
      child.isVerified &&
      !child.isAccepted
    )
      return (
        <Grid spacing={2}>
          <FoundChild data={child} officeLocation={child.location} />
        </Grid>
      )
  })

  return (
    // <Box>
    <Box sx={{ margin: '0 ' }} maxWidth>
      <Box
        maxWidth
        sx={{
          margin: '0',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Container
          maxWidth
          sx={{
            margin: '0',
            height: '30rem',
            width: '100%',
            display: 'flex',
            // justifyContent: 'center',
            // alignItemsc: 'center',
            backgroundImage: `url(${mainImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: 'white',
          }}
        >
          <Typography
            variant="h3"
            component="h5"
            sx={{ justifyContent: 'center', margin: 'auto 0' }}
          >
            {ngo.name}
          </Typography>
        </Container>
        <Container maxWidth sx={{ margin: '0', minHeight: '50rem' }}>
          <Container
            sx={{ height: '10rem', display: 'flex', justifyContent: 'center' }}
          >
            <Typography
              variant="h3"
              sx={{
                margin: '20px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Located children in your area
            </Typography>
          </Container>
          <Container sx={{ margin: '20px', width: '100%' }} maxWidth>
            <Grid container spacing={2} columns={12}>
              {childState}
            </Grid>
          </Container>
        </Container>
      </Box>
    </Box>
    // <div>
    //   <h1>name:{ngo.name}</h1>
    //   <h1>address: {ngo.address}</h1>
    //   <h1>district: {ngo.district}</h1>
    //   <div>{childState}</div>
    // </div>
  )
}

export default NgoDashboard
