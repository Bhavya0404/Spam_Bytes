import React, { useState } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import loginLogo from '../assets/images/login.svg'
import Navbar from './Navbar'
import toast from 'react-hot-toast'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCpassword] = useState('')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleRegister = async () => {
    const data = { email, password, cpassword, name, phoneNumber }
    const notification = toast.loading('Processing Registration...')
    try {
      const resp = await axios.post('http://localhost:5000/auth/register', data)

      if (resp.status === 201) {
        toast.success('Registration Successful', { id: notification })
      } else {
        toast.error('Error', { id: notification })
        console.error(resp)
      }
    } catch (err) {
      console.error(err)
      toast.error(err?.response?.data?.error?.details[0]?.message, {
        id: notification,
      })
    } finally {
      setEmail('')
      setPassword('')
      setName('')
      setCpassword('')
      setPhoneNumber('')
    }
  }

  return (
    <div>
      <Box>
        <Navbar />
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
                src={loginLogo}
                sx={{ width: '70%', height: 'auto' }}
              />
            </Box>
            <Box
              sx={{
                width: { lg: '60%', xs: '100%' },
                height: { lg: '100%', xs: 'auto' },
                backgroundColor: 'secondary.light',
                borderRadius: '0 20px 20px 0',
              }}
            >
              <Container
                sx={{
                  padding: '5%',
                  width: { xs: '100%', md: '80%' },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="h4">Registeration</Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    height: '80%',
                  }}
                >
                  <TextField
                    fullWidth
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                  <TextField
                    sx={{ mt: '20px' }}
                    fullWidth
                    id="standard-basic"
                    label="Phone Number"
                    variant="standard"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <TextField
                    sx={{ mt: '20px' }}
                    fullWidth
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    sx={{ mt: '20px' }}
                    fullWidth
                    id="standard-basic"
                    label="Password"
                    type="password"
                    variant="standard"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    sx={{ mt: '20px' }}
                    fullWidth
                    id="standard-basic"
                    label="Confirm Password"
                    variant="standard"
                    type="password"
                    placeholder="Confirm Password"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </Box>
                <Link
                  href="#"
                  sx={{
                    textDecoration: 'none',
                    textAlign: 'right',
                  }}
                >
                  <Typography sx={{ mt: '15px', fontWeight: '500' }}>
                    Already a user? Sign in
                  </Typography>
                </Link>
                <Button
                  onClick={handleRegister}
                  size="large"
                  sx={{ mt: '30px', backgroundColor: 'black', width: '70%' }}
                  variant="contained"
                >
                  Register
                </Button>
              </Container>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Register
