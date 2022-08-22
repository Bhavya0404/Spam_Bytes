import React from 'react'
import { Box, Typography } from '@mui/material'
import map from '../assets/images/map.png'

const Statistics = () => {
  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          height: { xs: '2000', md: '800px' },
          backgroundColor: 'primary.main',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            height: '100%',
            // width: "50%",
            alignItems: 'left',
            // marginTop: "30px",
            marginLeft: '70px',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'primary.main',
              mt: '70px',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                height: '20%',
                display: 'flex',
                color: 'primary.contrastText',
                // fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem' },
              }}
            >
              STATISTICS{' '}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                display: 'flex',
                color: 'success.main',
                // fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem' },
              }}
            >
              2500
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                height: '50px',
                display: 'flex',
                color: 'primary.contrastText',
                // fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Reported Cases
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                display: 'flex',
                color: 'success.main',
                // fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem' },
              }}
            >
              2500
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                height: '50px',
                display: 'flex',
                color: 'primary.contrastText',
                // fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Nodal Officers Appointed
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                display: 'flex',
                color: 'success.main',
                // fontSize: { xs: '2rem', sm: '3rem', md: '4.5rem' },
              }}
            >
              2500
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                display: 'flex',
                color: 'primary.contrastText',
                // fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Children Enrolled in School
            </Typography>
          </Box>
        </Box>

        {/* MAP */}

        <Box
          sx={{
            height: '100%',
            // width: "50%",
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '50px',
          }}
        >
          <Box
            component="img"
            sx={{
              height: '90%',
              width: { xs: '100%' },
              mt: { xs: '70px', sm: '30px' },
              mb: '30px',
              marginLeft: { xs: '50px', md: 'none' },
            }}
            src={map}
          ></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Statistics
