import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import toast from 'react-hot-toast';
import axios from 'axios';


export default function ControlledAccordions({childData}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const assignScheme = async (scheme) => {
    const notification = toast.loading('Assigning Scheme...');
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const resp = await axios.put(`http://localhost:5000/ngo/assign/${childData?._id}`, {scheme}, {headers});
      toast.success(resp?.data?.message, {id:notification});
    } catch (err) {
      console.error(err);
      toast.error('Error', {id: notification})
    }
  }

  

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
                                {childData?.schemes.find(name => name === "The special schools/Rehabilitation Centres provide") ? (
                                  <CheckCircleIcon sx={{ color: "green" }} />
                                ) : (
                                  <CancelIcon sx={{ color: "red" }} />
                                )}
                              </Typography>
        <Button
            variant="text"
            disabled={childData?.schemes.find(name => name === "The special schools/Rehabilitation Centres provide") }
            onClick={() => assignScheme("The special schools/Rehabilitation Centres provide")}
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
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Present Status of NCLP Scheme</Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          At present about 6000 special schools are in operation under NCLP scheme. As on date more than 10 lakhs children have been mainstreamed into the formal education system under the Scheme.
          </Typography>
      
        </AccordionDetails>
        <Typography>
                                {childData?.schemes.find(name => name === "Present Status of NCLP Scheme") ? (
                                  <CheckCircleIcon sx={{ color: "green" }} />
                                ) : (
                                  <CancelIcon sx={{ color: "red" }} />
                                )}
                              </Typography>
        <Button
            variant="text"
            disabled={childData?.schemes.find(name => name === "Present Status of NCLP Scheme") }
            onClick={() => assignScheme("Present Status of NCLP Scheme")}
          >
            Availed
          </Button>
      </Accordion>
      
      </Container>
    </div>
  );
}
