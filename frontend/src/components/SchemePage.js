import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  

  return (
    <div>
      <Container
      sx={{
        width: { xs: "80%", md: "160%" },
        height: "75%",
      }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }}>
          The special schools/Rehabilitation Centres provide
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          </Typography>
        </AccordionDetails>
        <Typography>
                                {/* {childData?.isVerified ? (
                                  <CheckCircleIcon sx={{ color: "green" }} />
                                ) : (
                                  <CancelIcon sx={{ color: "red" }} />
                                )} */}
                              </Typography>
        <Button
            variant="text"
            // disabled={childData?.isVerified }
            // onClick={handlescheme}
          >
            Availed
          </Button>

      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
      
        </AccordionDetails>
        <Typography>
                                {/* {childData?.isVerified ?  (
                                  <CheckCircleIcon sx={{ color: "green" }} />
                                ) : (
                                  <CancelIcon sx={{ color: "red" }} />
                                )} */}
                              </Typography>
        <Button
            variant="text"
            // disabled={childData?.isVerified  }
            // onClick={handlescheme}
          >
            Availed
          </Button>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
         <Typography>
                                {/* {childData?.isVerified  ?(
                                  <CheckCircleIcon sx={{ color: "green" }} />
                                ) : (
                                  <CancelIcon sx={{ color: "red" }} />
                                )} */}
                              </Typography>
        <Button
            variant="text"
            // disabled={childData?.isVerified  }
            // onClick={handlescheme}
          >
            Availed
          </Button>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
        <Typography>
                                {/* {childData?.isVerified  ?  (
                                  <CheckCircleIcon sx={{ color: "green" }} />
                                ) : (
                                  <CancelIcon sx={{ color: "red" }} />
                                )} */}
                              </Typography>
        <Button
            variant="text"
            // disabled={childData?.isVerified  }
            // onClick={handlescheme}
          >
            Availed
          </Button>
      </Accordion>
      </Container>
    </div>
  );
}
