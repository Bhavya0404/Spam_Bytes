import { Divider, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import right from '../assets/images/right.svg'
import complaintImg from '../assets/images/complaint.svg'
import announcement from '../assets/images/announce.svg'
import complaint from '../assets/images/complaint.svg'
import conference from '../assets/images/conference.svg'
import media from '../assets/images/media.svg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundColor: 'secondary.main',
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
      }}
    >
      <Container
        sx={{
          width: { md: '40%', xs: '100%' },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: { md: '5%', xs: 0 },
          // alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '15%',
            display: 'flex',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Typography variant="h2" sx={{ color: 'primary.contrastText' }}>
            ABOUT US
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ color: 'primary.contrastText' }}>
            PENCiL (Platform for Effective Enforcement for No Child Labour) an
            electronic platform for effective enforcement for no child labour
            developed by Ministry of Labour and Employment. PENCiL Portal has
            following components:Child Tracking System, Complaint Corner, State
            Government, National Child Labour Project, Convergence.
          </Typography>
        </Box>
      </Container>
      {/* right */}
      <Container
        sx={{
          width: { md: '60%', xs: '100%' },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: { md: '5%', xs: 0 },
          alignItems: 'center',
          // backgroundColor: '#ffff',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '80%',
            height: { md: '70%', xs: '90%' },
            justifyContent: 'space-around',
          }}
        >
          {/* inside data */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: { md: '25%', xs: '40%' },
              justifyContent: 'space-between',
              // margin: '2%',
              marginBottom: '2%',
            }}
          >
            <Divider
              color=""
              sx={{ borderBottomWidth: 2, color: 'secondary.contrastText' }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                height: '100%',
              }}
            >
              <Box component="img" src={complaintImg} sx={{ width: '15%' }} />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '60%',
                }}
              >
                <Typography variant="h4" sx={{ color: 'primary.light' }}>
                  File a complaint
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '3%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Link to="/ChildComplaint">
                  <Box component="img" src={right} sx={{ width: '100%' }} />
                </Link>
              </Box>
            </Box>
          </Box>
          {/* 2 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: { md: '25%', xs: '40%' },
              justifyContent: 'space-between',
              // margin: '2%',
              marginBottom: '2%',
            }}
          >
            <Divider sx={{ borderBottomWidth: 2, color: 'primary.lightt' }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                width: '100%',
                height: '100%',
              }}
            >
              <Box component="img" src={announcement} sx={{ width: '15%' }} />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '60%',
                }}
              >
                <Typography variant="h4" sx={{ color: 'primary.light' }}>
                  Announcement
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '3%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Link to="/goverment">
                  <Box component="img" src={right} sx={{ width: '100%' }} />
                </Link>
              </Box>
            </Box>
          </Box>
          {/* 3 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: { md: '25%', xs: '40%' },
              justifyContent: 'space-between',
              // margin: '2%',
              marginBottom: '2%',
            }}
          >
            <Divider
              sx={{ borderBottomWidth: 2, color: 'secondary.contrastText' }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '100%',
                height: '100%',
              }}
            >
              <Box component="img" src={media} sx={{ width: '15%' }} />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '60%',
                }}
              >
                <Typography variant="h4" sx={{ color: 'primary.light' }}>
                  Donate
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '3%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <a href="https://rzp.io/l/j1mJC49tXe">
                  <Box component="img" src={right} sx={{ width: '100%' }} />
                </a>
              </Box>
            </Box>
          </Box>

          {/* 4 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: { md: '25%', xs: '40%' },
              justifyContent: 'space-between',
              // margin: '2%',
              marginBottom: '2%',
            }}
          >
            <Divider sx={{ borderBottomWidth: 2, color: 'primary.light' }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',

                width: '100%',
                height: '100%',
              }}
            >
              <Box component="img" src={conference} sx={{ width: '15%' }} />

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '60%',
                }}
              >
                <Typography variant="h4" sx={{ color: 'primary.light' }}>
                  Conference
                </Typography>
              </Box>
              <Box
                sx={{
                  width: '3%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Link to="/reportchild">
                  <Box component="img" src={right} sx={{ width: '100%' }} />
                </Link>
              </Box>
            </Box>

            <Divider
              sx={{ borderBottomWidth: 2, color: 'secondary.contrastText' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default AboutUs
