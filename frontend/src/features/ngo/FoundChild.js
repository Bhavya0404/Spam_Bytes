import React from 'react'
import MapView from '../../components/MapView'
import Button from '@mui/material/Button'
import axios from 'axios'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useDispatch, useSelector } from 'react-redux'
import { getFoundChildById } from '../foundchild/FoundChildSlice'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  IconButton,
  Modal,
  styled,
  Typography,
} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
}

const FoundChild = ({ data, location }) => {
  console.log(data)
  const updateChild = async (id) => {
    const datas = {
      isAccepted: 'true',
    }
    try {
      console.log(id)
      const child = await axios.put(
        `http://localhost:5000/foundchild/${id}`,
        datas,
      )
      console.log(child)
    } catch (err) {
      console.log(err)
    }
  }
  const openIndividual = () => {
    console.log('opening')
  }

  return (
    <div>
      {/* <hr />
      <h1>{data.name}</h1>
      <h1>{data.description}</h1>
      <h1>{data.address}</h1>
      <h1>{data.district}</h1>
      <MapView childLocation={data.location} officeLocation={location} />
      <Button variant="outlined" onClick={() => updateChild(data._id)}>
        Outlined
      </Button>
      <hr /> */}
      <Card sx={{ width: 400, height: 300, margin: '10px' }}>
        <CardMedia
          component="img"
          height="140"
          image={
            data.img ||
            `https://imgs.search.brave.com/VfOlmssamn3NTAP14DFpqr1z9pxdR7P4czo10TKxRuk/rs:fit:860:681:1/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8xNDYt/MTQ2ODQ3OV9teS1w/cm9maWxlLWljb24t/YmxhbmstcHJvZmls/ZS1waWN0dXJlLWNp/cmNsZS1oZC5wbmc`
          }
          alt="childImage"
          sx={{ backgroundSize: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name || 'NAN'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description || 'NAN'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.district || 'NAN'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => updateChild(data._id)}>
            Admit child
          </Button>
          <Button size="small" onClick={openIndividual}>
            See Full Details
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default FoundChild
