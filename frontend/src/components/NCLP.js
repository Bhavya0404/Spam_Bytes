import { Box } from '@mui/material'
import React from 'react'
import pic from '../images/architecture.png'
import AnimatedRoutes from './AnimatedRoutes'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'



const NCLP = () => {
  return (
    <AnimatedRoutes>
      
        
      <Container>
      <Box sx={{ position: 'relative', marginTop: '10px' }}>
            
      

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
                About National Child Labour Project
              </Typography>

           

          <p>

          <Typography variant="button" display="block" gutterBottom>
          The NCLP Scheme seeks:
      </Typography>
            
            <Typography variant="subtitle1" gutterBottom>
             <strong>&nbsp;&nbsp;&nbsp;&nbsp;A.</strong> To eliminate all forms of child labour through
      </Typography>
    
            <Typography variant="subtitle1" gutterBottom>
            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i)</strong>&nbsp;Identification and withdrawal of all children in the
            Project Area from child labour, <br></br>
            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii)</strong> Preparing children withdrawn
            from work for mainstream education alongwith vocational training;<br></br>
            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii)</strong> Ensuring convergence of services provided by different
            government departments/agencies for the benefit of child and their
            family;<br></br><br></br>
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
             <strong>&nbsp;&nbsp;&nbsp;&nbsp;B.</strong> To contribute to the withdrawal of all adolescent workers
            from Hazardous Occupations / Processes and their skilling and
            integration in appropriate occupations through
      </Typography>
    
            <Typography variant="subtitle1" gutterBottom>
            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i)</strong>&nbsp;Identification and
            withdrawal of all adolescent workers from hazardous occupations /
            processes, <br></br>
            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii)</strong> Facilitating vocational training opportunities for
            such adolescents through existing scheme of skill developments;<br></br><br></br>
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
             <strong>&nbsp;&nbsp;&nbsp;&nbsp;C.</strong> Raising awareness amongst stakeholders and target communities, and
            orientation of NCLP and other functionaries on the issues of 'child
            labour' and 'employment of adolescent workers in hazardous
            occupations/processes'; and<br></br><br></br>
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
             <strong>&nbsp;&nbsp;&nbsp;&nbsp;D.</strong> Creation of a Child Labour
            Monitoring, Tracking and Reporting System. The scheme focuses on:
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i)</strong>&nbsp;All child workers below the age of 14 years in the identified target
            area. <br></br>Adolescent workers below the age of 18 years in the target
            area engaged in hazardous occupations / processes<br></br>
            <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii)</strong>  Families of
            Child workers in the identified target area The overall approach of
            the project is to create an enabling environment in the target area,
            where children are motivated and empowered through various measures
            to enroll in schools and refrain from working, and households are
            provided with alternatives to improve their income levels. NCLPS
            will be implemented in close coordination with State, District
            administration and Civil society. Elimination of Child Labour is
            joint responsibility of the Ministry of Labour and Employment and
            the State Governments. Other stakeholders such as District
            Administrations, local communities, civil society groups, NGO‟s,
            academicians and enforcement agencies have an important role to
            play. The scheme seeks to not only set up the implementation
            structure but also institutionalize monitoring and supervision for
            effective functioning of the scheme. NCLPS is a central sector
            scheme where 100% of the funding is provided by the Government of
            India through the Ministry of Labour and Employment. Funds under the
            existing NCLP scheme are released by the Central Government directly
            to the registered NCLP District Project Society under the
            chairpersonship of the administrative head of the district namely
            District Magistrate/District Collector (DM/DC)/Deputy Commissioner
            of the district who is under administrative control of the State
            Govt.
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
             <strong>&nbsp;&nbsp;&nbsp;&nbsp;The architecture of institutional mechanism under NCLP is as under:-</strong> 
      </Typography>
    
      <Stack sx={{ ml: 35, display: 'flex' , alignItems: "center"}} direction="row" spacing={2}>
              
                <img src={pic}></img>
              
            </Stack>
    

             

          </p>
          </Box>
          </Container>
      
    </AnimatedRoutes>
  )
}

export default NCLP
