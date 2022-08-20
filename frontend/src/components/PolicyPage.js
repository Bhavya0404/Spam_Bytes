import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import pol from '../images/How-to-develop-and-implement-a-new-company-policy-1.jpg'
import { Stack } from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import AnimatedRoutes from './AnimatedRoutes'
import Navbar from './Navbar'

const PolicyPage = () => {
  return (
    <div>
      <Navbar />
      <Box
      sx={{
        bgcolor: 'background.paper',
        m: 1,
        borderColor: 'text.primary',
        width: '94rem',
        
        height: '50rem',
      }}
    >
      <AnimatedRoutes>
        <Card sx={{ maxWidth: 1500, borderRadius: 8,
        border: 3,}}>
          <CardActionArea>
          <Typography
                variant="h4"
                component="p"
                sx={{
                  fontWeight: 600,
                  mb: 5,
                  textAlign: 'center',
                  fontSize: { xs: 25, sm: 32 },
                }}
              >
                Child Labour Policy
              </Typography>
            <Stack sx={{ ml: 0.5, display: 'flex' }} direction="row" spacing={2}>
              <a
                href="https://pencil.gov.in/uploads/child_labour_policy/child_labour_policy.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <img width="1500" height="400" src={pol}></img>
              </a>
            </Stack>
            <CardContent>
              

              
              <Typography variant="body1" gutterBottom>
                Children are a valuable asset for any society. They constitute a
                very large segment of our population. As per 2011 Census, the
                persons below the age of 14 years account for 29% of the total
                population while persons between the age group 14-18 years
                account for another 10% of the total population. The child's
                natural place is at school and the playground. However many
                children are unfortunately denied these basic development
                opportunities in childhood. They instead get burdened with work
                because of poverty, irregular income streams for the family,
                economic shocks, ignorance, lack of access to social security,
                education, health facilities, food security etc. The 2013 World
                Report on Child Labour prepared by the ILO has observed that
                child labour can compromise the productive capacity of workers
                during adulthood and thereby constrain both national economic
                growth and efforts to reduce poverty. Recognizing that child
                labour is the outcome of multiple causes and has multiple
                dimensions, Government of India enacted legislation (1986) and
                prepared the national policy on child labour (1987) to tackle
                the problem with a multi-pronged approach. The important pillars
                of the national policy on the elimination of child labour have
                been as under:
              </Typography>

              <Typography variant="body1" gutterBottom>
                i) Legislative Action Plan--Strict and effective enforcement of
                legal provisions relating to child labour under various laws.
              </Typography>

              <Typography variant="body1" gutterBottom>
                ii) Convergence of government developmental programmes – Focus
                on converging various developmental initiatives to alleviate
                poverty, provide access to social security, health and
                education, economic and social empowerment of the child workers
                and their families.
              </Typography>

              <Typography variant="body1" gutterBottom>
                iii) Project based plan of action – Implementation of National
                Child Labour Project Scheme (NCLPS) in the areas of high
                concentration of child labour.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </AnimatedRoutes>
    </Box>
    </div>
  )
}

export default PolicyPage
