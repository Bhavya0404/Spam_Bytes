import React from "react";
import AnimatedRoutes from "./AnimatedRoutes";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Government = () => {
  return (
    <AnimatedRoutes>
      
        
    <Container>
    <Box sx={{ 
      position: 'relative',
       marginTop: '10px' ,
       m: 1,
      borderRadius: 5,
       border: 3
       }}
       >
                  <Typography
                variant="h4"
                component="p"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  textAlign: 'left',
                  marginTop: "10px",
                  fontSize: { xs: 25, sm: 32 },
                  borderBottom: 3
                }}
              >
               &nbsp;&nbsp; NCLP
              </Typography>

              <Typography variant="h5" gutterBottom>
              &nbsp;&nbsp;&nbsp; National Child Labour Project SCHEME
      </Typography>
      
      <Typography variant="body1" gutterBottom>
      &nbsp;&nbsp;&nbsp; Government had initiated the National Child Labour Project (NCLP) Scheme in 1988 to rehabilitate working children in 12 child labour endemic districts of &nbsp;&nbsp;&nbsp;&nbsp;the country.
              </Typography>

      <h2>&nbsp;&nbsp;&nbsp;Objective of the Scheme:</h2>
      <p>
        <ul>
          <li>
          This is the major Central Sector Scheme for the rehabilitation of child
           labour.
          </li>
          <li>
          The Scheme seeks to adopt a sequential approach with focus on
        rehabilitation of children working in hazardous occupations & processes
        in the first instance.
          </li>
          <li>
          Under the Scheme, survey of child labour engaged
        in hazardous occupations & processes has been conducted.
          </li>
          <li>
          The identified
        children are to be withdrawn from these occupations & processes and then
        put into special schools in order to enable them to be mainstreamed into
        formal schooling system.
          </li>
          <li>
          Project Societies at the district level are fully funded for opening up of special schools/Rehabilitation Centres for the rehabilitation of child labour.

          </li>
          <li>
          <strong>The special
        schools/Rehabilitation Centres provide:</strong>
          <li>
           Non-formal/bridge education
          </li>
          <li>
          Skilled/vocational training
          </li>
          <li>
          Mid Day Meal
          </li>
          <li>
          Stipend @ Rs.150/- per child
        per month.
          </li>
          <li>
          Health care facilities through a doctor appointed for a group
        of 20 schools.
          </li>
          </li>
         
        </ul>
           
         
      </p>
      <p>
      <h2>&nbsp;&nbsp;&nbsp;The Target group:</h2>

      <Typography variant="body1" gutterBottom>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The project societies are required to conduct survey to identify children working in hazardous occupations and processes. These children will then form <br></br>&nbsp;&nbsp;&nbsp;&nbsp; the target group for the project society. Of the children identified those in the age group 5-8 years will have to be mainstreamed directly to formal <br></br>&nbsp;&nbsp;&nbsp;&nbsp; educational system through the SSA. Working children in the age group of 9- 14 years will have to be rehabilitated through NCLP schools established by <br></br>&nbsp;&nbsp;&nbsp;&nbsp; the Project Society.             
       </Typography>

       <h2>&nbsp;&nbsp;&nbsp;Project Implementation:</h2>

       <Typography variant="body1" gutterBottom>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The entire project is required to be implemented through a registered society under the Chairmanship of administrative head of the district, namely,<br></br>&nbsp;&nbsp;&nbsp;&nbsp; District Magistrate/Collector/Dy. Commissioner of the District. Members of the society may be drawn from concerned Government Departments, <br></br>&nbsp;&nbsp;&nbsp;&nbsp; representatives of Panchayati Raj Institutions, NGOs, Trade Unions, etc.              
       </Typography>

       <h2>&nbsp;&nbsp;&nbsp;Funding pattern:</h2>

       <Typography variant="body1" gutterBottom>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The projects have been taken up in the Central Sector, the entire funding is done by the Central Government (Ministry of Labour & Employment). Funds are <br></br> &nbsp;&nbsp;&nbsp;&nbsp; released to the concerned Project Societies depending upon the progress of project activities.      
        </Typography>

        <h2>&nbsp;&nbsp;&nbsp;Present Status of NCLP Scheme:</h2>

        <Typography variant="body1" gutterBottom>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At present about 6000 special schools are in operation under NCLP scheme. As on date more than 10 lakhs children have been mainstreamed into the <br></br> &nbsp;&nbsp;&nbsp;&nbsp; formal education system under the Scheme.       
         </Typography>
 
      </p>
    </Box>
          </Container>
      
    </AnimatedRoutes>
  );
};

export default Government;
