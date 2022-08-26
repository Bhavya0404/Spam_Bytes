import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Icon,
} from '@mui/material'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { Typography, Autocomplete } from '@mui/material'
import Navbar from '../components/Navbar'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import reportedImg from '../assets/images/report.svg'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import data from '../assets/dropdown.json'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import App from './voicenote'

const ReportChild = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  const [address, setAddress] = useState('')
  const [state, setState] = useState('')
  const [district, setDistrict] = useState('')
  const [email, setEmail] = useState('')
  const [pNo, setPnO] = useState('')
  const [districts, setDistricts] = useState([])

  const [canSubmit, setCanSubmit] = useState(true)
  const [loggedIn, setLoggedIn] = useState({})
  const [open, setOpen] = useState(true)
  useEffect(() => {
    ;(async () => {
      try {
        const headers = {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }
        const resp = await axios.get('http://localhost:5000/auth/chkAuth', {
          headers,
        })
        setLoggedIn(resp.data)
      } catch (err) {
        setLoggedIn({})
      }
    })()
  }, [])

  useEffect(() => {
    setDistrict('')
    setDistricts(data.find((t) => t.name === state)?.districts)
  }, [state])

  const handleUpload = (e) => {
    setCanSubmit(false)
    const val = e.target.files[0]
    const promise = new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(val)
      reader.onload = () => resolve(reader.result)
      reader.onerror = () => reject(reader.error)
    })
    promise
      .then((res) => {
        toast.success('Image Uploaded')
        setImg(res)
        setCanSubmit(true)
      })
      .catch((err) => {
        console.error(err)
        toast.error(err)
        setCanSubmit(true)
      })
  }

  useEffect(() => {
    if ('geolocation' in navigator) {
      console.log('Geolocation Available')
    } else {
      toast.error('Geolocation not available, allow it in your browser')
    }
  }, [])

  const handleReportChild = async () => {
    const notification = toast.loading('Submitting Report...')
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Access-Control-Allow-Origin': '*',
    }

    navigator.geolocation.getCurrentPosition(async (pos) => {
      let data = {
        name,
        description,
        img,
        address,
        state,
        district,
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      }

      if (!loggedIn?.loggedIn) {
        data = { ...data, isAnon: true, email, phoneNumber: pNo }
      } else {
        data = { ...data, isAnon: false }
      }

      try {
        const resp = await axios.post(
          'http://localhost:5000/pencil/report',
          data,
          { headers },
        )
        if (resp.status === 201) {
          toast.success(
            'Your complaint ID is : ' +
              resp?.data?.newFoundChild?._id +
              '  ' +
              name +
              '. You may track your reported child using this ID',
            { id: notification },
          )
        } else {
          toast.error('Error', { id: notification })
          console.error(resp)
        }
      } catch (err) {
        toast.error(
          err?.response?.data?.message?.details[0]?.message || err?.message,
          {
            id: notification,
          },
        )
        console.error(err)
      } finally {
        setName('')
        setAddress('')
        setDescription('')
        setImg('')
        setState('')
        setDistrict('')
        setEmail('')
        setPnO('')
      }
    })
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
            height: { lg: '90%', xs: 'auto' },
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
              src={reportedImg}
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
                height: { lg: '100%', xs: '100vh' },
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}
              >
                <Box>
                  <Box sx={{ minHeight: '10%' }}>
                    <Typography variant="h3">Report Child</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      height: { lg: '5%', xs: '10%', sm: '7%' },
                    }}
                  >
                    <Typography variant="body2" color={'secondry.main'}>
                      You are reporting{' '}
                      {loggedIn?.loggedIn ? (
                        <Typography
                          component="span"
                          variant="body1"
                          color="primary"
                          sx={{ fontWeight: 600 }}
                        >
                          as {`${loggedIn?.user?.name}`}
                        </Typography>
                      ) : (
                        <Typography
                          component="span"
                          variant="h6"
                          color="primary.light"
                          sx={{ fontWeight: 600 }}
                        >
                          Anonymously
                        </Typography>
                      )}{' '}
                    </Typography>

                    {!loggedIn?.loggedIn ? (
                      <Link to="/login">
                        <Typography variant="h6" color="primary">
                          Login Now
                        </Typography>
                      </Link>
                    ) : (
                      <Link to="/logout">
                        <Typography variant="h6" color="primary">
                          Logout to report Anonymously
                        </Typography>
                      </Link>
                    )}
                  </Box>
                </Box>
                <Box sx={{ height: '100%', marginTop: '3%', width: '70%' }}>
                  <Box
                    sx={{
                      height: '10%',
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        position: 'relative',
                        width: { lg: '50%', xs: '45%' },
                        backgroundColor: 'secondary.main',
                        color: 'primary.contrastColor',
                      }}
                      component="label"
                      type="file"
                      value={img}
                      onChange={handleUpload}
                    >
                      Upload Image
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </Box>

                  <Box>
                    {!loggedIn?.loggedIn && (
                      <>
                        <TextField
                          required
                          fullWidth
                          type="email"
                          id="outlined-required"
                          label="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </>
                    )}
                  </Box>
                  <Box sx={{ width: '100%', height: '10%', marginTop: '3%' }}>
                    <Box sx={{ width: '100%', display: 'flex' }}>
                      <Accordion sx={{ width: '100%' }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>
                            Additional child details (Optional)?
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-evenly',
                              height: { lg: '70%' },
                              gap: '10px',
                            }}
                          >
                            <TextField
                              id="outlined-basic"
                              fullWidth
                              label="Name"
                              variant="outlined"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                            <TextField
                              fullWidth
                              id="outlined-multiline-static"
                              multiline
                              rows={4}
                              label="Description"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                            />

                            <TextField
                              fullWidth
                              id="outlined-required"
                              label="Address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />

                            <Autocomplete
                              id="state"
                              options={data.map((d) => d.name)}
                              sx={{ width: 300 }}
                              renderInput={(params) => (
                                <TextField {...params} label="State" />
                              )}
                              value={state}
                              onChange={(_, dt) => {
                                setState(dt)
                              }}
                            />

                            {districts?.length > 0 && (
                              <Autocomplete
                                id="district"
                                options={districts}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                  <TextField {...params} label="District" />
                                )}
                                value={district}
                                onChange={(_, dt) => {
                                  setDistrict(dt)
                                }}
                              />
                            )}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </Box>
                                <App/>
                </Box>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: { lg: 'row', xs: 'row' },
                    height: { xs: '5%' },
                    width: '100%',
                    justifyContent: 'space-evenly',
                  }}
                >
                  <Button
                    onClick={handleReportChild}
                    sx={{
                      position: 'relative',
                      width: { lg: '40%', xs: '45%' },
                      backgroundColor: 'secondary.main',
                      color: 'primary.contrastColor',
                    }}
                    disabled={!canSubmit}
                    variant="contained"
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ReportChild
