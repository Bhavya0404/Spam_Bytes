import axios from 'axios'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, FormControl } from '@mui/material'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { Typography } from '@mui/material'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/complaint1.svg'
import Navbar from '../components/Navbar'
const ChildComplaint = () => {
  const [aadharno, setAadhar] = useState('')
  const [desc, setDesc] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async () => {
    const data = { aadhar_no: aadharno, description: desc }
    const notification = toast.loading('Raising Complaint...')
    try {
      const resp = await axios.post(
        'http://localhost:5000/pencil/complaints',
        data,
      )
      if (resp.status === 201) {
        toast.success(
          `Complaint Raised w/ id ${resp?.data?.newComplaint?._id}`,
          {
            id: notification,
          },
        )
      } else {
        console.error(resp)
        toast.error('Error Occurred', { id: notification })
      }
    } catch (err) {
      console.log(err)
      toast.error(err?.message, { id: notification })
    } finally {
      setAadhar('')
      setDesc('')
    }
  }

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#E3ECF3',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: { lg: '80%', xs: 'auto' },
            marginTop: '100px',
            display: 'flex',
          }}
        >
          {/* for lg */}

          <Box
            sx={{
              width: { lg: '40%' },
              height: '100%',
              backgroundColor: 'secondary.main',
              display: { lg: 'flex', xs: 'none' },
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '20px 0 0 20px',
            }}
          >
            <Box
              component="img"
              src={logo}
              sx={{ width: '70%', height: 'auto' }}
            />
          </Box>
          <Box
            sx={{
              width: { lg: '60%', xs: '100%' },
              height: { lg: '100%', xs: '70%' },
              backgroundColor: 'secondary.light',
              borderRadius: '0 20px 20px 0',
            }}
          >
            <Container
              sx={{
                padding: '5%',
                width: { xs: '100%', md: '100%' },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ height: '25%' }}>
                <Typography variant="h3">Child Complaint Page</Typography>
              </Box>
              <Box sx={{ height: '65%', position: 'relative', width: '100%' }}>
                <TextField
                  required
                  fullWidth
                  id="outlined-required"
                  label="Aadhar Number"
                  value={aadharno}
                  onChange={(e) => setAadhar(e.target.value)}
                />

                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  value={desc}
                  sx={{ width: '100%' }}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Button
                  onClick={handleSubmit}
                  size="large"
                  sx={{ mt: '30px', backgroundColor: 'black', width: '70%' }}
                  variant="contained"
                >
                  Submit
                </Button>
                <Button
                  onClick={() => navigate('/')}
                  size="large"
                  sx={{ mt: '30px', width: '70%' }}
                  variant="outlined"
                >
                  Back to Home
                </Button>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ChildComplaint
