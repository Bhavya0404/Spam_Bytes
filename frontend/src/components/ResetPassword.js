import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import AnimatedRoutes from './AnimatedRoutes'

const ResetPassword = () => {
  const navigate = useNavigate()
  const { token, id } = useParams()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordErr, setPasswordErr] = useState(false)
  const [cPasswordErr, setCPasswordErr] = useState(false)
  const resetPassword = async () => {
    if (password.length <= 0) {
      setPasswordErr(true)
      toast.error('Password cannot be empty')
      return
    }
    if (confirmPassword.length <= 0) {
      setCPasswordErr(true)
      toast.error('Confirm Password field cannot be empty')
      return
    }

    if (password !== confirmPassword) {
      setPasswordErr(true)
      setCPasswordErr(true)
      toast.error('Password mismatch')
      return
    }
    const notification = toast.loading('Resetting Password...')
    const data = { token, userId: id, password }
    try {
      const resp = await axios.post(
        'http://localhost:5000/auth/resetPassword',
        data,
      )
      console.log(resp?.data)
      toast.success(resp?.data?.message, { id: notification })
      setPassword('')
      setConfirmPassword('')
      navigate('/login')
    } catch (err) {
      console.error(err)
      toast.error('Error Occured', { id: notification })
    }
  }
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <AnimatedRoutes>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: 4,
            minWidth: '40%',
          }}
        >
          <Typography
            sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}
          >
            Reset Password
          </Typography>
          <TextField
            label="Password"
            placeholder="Enter New Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordErr}
          />
          <TextField
            type="password"
            placeholder="Confirm New Password"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={cPasswordErr}
          />
          <Button variant="outlined" onClick={resetPassword}>
            Reset Password
          </Button>
        </Paper>
      </AnimatedRoutes>
    </Box>
  )
}

export default ResetPassword
