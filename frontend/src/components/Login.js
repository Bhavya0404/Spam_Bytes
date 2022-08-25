import React, { useState } from 'react'
import axios from 'axios'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router-dom'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material'
import toast from 'react-hot-toast'
import loginLogo from '../assets/images/loginFinal.svg'
import Navbar from './Navbar'

const Login = ({ onChange }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [userType, setUserType] = useState('IN')
  const data = { email, password }

  const handleOnChangeUser = (event) => {
    setUserType(event.target.value)
  }

  const handleLogin = async () => {
    setEmailError(false)
    setPasswordError(false)

    if (!email) {
      setEmailError(true)
      return
    }

    if (!password) {
      setPasswordError(true)
      return
    }

    try {
      const resp = await axios.post('http://localhost:5000/auth/login', data)
      if (resp.status === 200) {
        localStorage.setItem('token', resp.data.token)
        if (resp.data.user.acType === userType) {
          navigate(`/${userType.toLowerCase()}`)
        } else {
          toast.error('Unauthorized User Type')
        }
      } else {
        toast.error(resp?.message)
      }
    } catch (err) {
      toast.error(err?.response?.data?.message)
      console.error(err)
    } finally {
      setEmail('')
      setPassword('')
    }
  }

  return (
    <div>
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
              height: { lg: '100%', xs: '70%' },
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
              <Box sx={{ minHeight: 'auto' }}>
                <Typography variant="h3">Welcome back</Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  height: '80%',
                }}
              >
                <FormControl>
                  <TextField
                    sx={{
                      mb: 5,
                      display: 'block',
                    }}
                    variant="outlined"
                    label="Email"
                    placeholder="Enter Email"
                    type="email"
                    required
                    fullWidth
                    error={emailError}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <TextField
                    sx={{
                      display: 'block',
                    }}
                    variant="outlined"
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    value={password}
                    error={passwordError}
                    required
                    fullWidth
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <FormLabel id="userType" sx={{ marginTop: '20px' }}>
                    <Typography variant="subtitle2">Login as</Typography>
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="userType"
                    name="userTypeBut"
                    defaultValue="IN"
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'row',
                    }}
                  >
                    <FormControlLabel
                      value="IN"
                      control={<Radio />}
                      onChange={handleOnChangeUser}
                      label="User"
                    />
                    <FormControlLabel
                      value="NGO"
                      control={<Radio />}
                      onChange={handleOnChangeUser}
                      label="NGO"
                    />
                    <FormControlLabel
                      value="ADMIN"
                      control={<Radio />}
                      onChange={handleOnChangeUser}
                      label="Nodal Officer"
                    />
                  </RadioGroup>
                </FormControl>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    onClick={() => navigate('/forgotpassword')}
                    sx={{ width: '50%', justifyContent: 'flex-end' }}
                  >
                    Forgot Password or Change password
                  </Button>
                </Box>
                <Button
                  size="large"
                  variant="contained"
                  onClick={handleLogin}
                  sx={{
                    backgroundColor: 'black',
                    mt: 5,
                    width: '50%',
                  }}
                >
                  LOGIN
                </Button>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Login
