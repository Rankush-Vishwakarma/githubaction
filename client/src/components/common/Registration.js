import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Select } from '@mui/material'
import Swal from 'sweetalert2'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Registration() {
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [id, setId] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [password, setPassword] = useState('')
  const [rpassword, setRpassword] = useState('')

  var Group = {
    name,
    position,
    email,
    phone,
    address,
    id,
    specialization,
    password,
    rpassword,
  }

  async function SweatAlert(text, item) {
    // await sleep(1000)
    Swal.fire({
      icon: item,
      text: text,
    })
  }

  const passtouser = async () => {
    try {
      if (
        name == '' &&
        position == '' &&
        email == '' &&
        address == '' &&
        phone == '' &&
        id == '' &&
        specialization == '' &&
        password == '' &&
        rpassword == ''
      ) {
        SweatAlert('Please fill all the fields.', 'warning')
        window.location = '/reg'
      } else if (
        name == '' ||
        position == '' ||
        email == '' ||
        address == '' ||
        phone == '' ||
        id == '' ||
        specialization == '' ||
        password == '' ||
        rpassword == ''
      ) {
        SweatAlert('Please fill all the fields.', 'warning')
        window.location = '/reg'
      } else if (password != rpassword) {
        SweatAlert('Please enter the correct password', 'warning')
        window.location = '/reg'
      } else {
        const resp = await axios.post('/user/add', Group)
        console.log(resp.data)
        SweatAlert('Successfully insereted', 'success')

        navigate('/')
      }
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  const theme = createTheme()
  return (
    <div  data-testid="reg-1">
      <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' onSubmit={passtouser} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete='given-name'
                  name='firstName'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                  Required
                />
              </Grid>
              <Grid item xs={12}>
                <center>
                  <label>Position</label>
                </center>
                <select
                  class='form-select'
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  Required
                >
                  <option value='Student'>Student</option>
                  <option value='Supervisor'>Supervisor</option>
                  <option value='co-supervisor'>Co-Supervisor</option>
                  <option value='Panel Member'>Panel Member</option>
                </select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  autoComplete='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern='[a-z 0-9 .+-_%]+@+[a-z 0-9 +-_%]+\.[a-z]{2,3}'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='phone no'
                  label='Phone Number'
                  name='phone'
                  autoComplete='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern='[0-9].{11}'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='address'
                  label='Address'
                  name='address'
                  autoComplete='address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id='userId'
                  label='User ID Number'
                  name='id'
                  autoComplete='uid'
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <center>
                  {' '}
                  <label>Specialization</label>
                </center>
                <select
                  class='form-select'
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                >
                  <option value='Software Engineering'>
                    Software Engineering
                  </option>
                  <option value='Data Science'>Data Science</option>
                  <option value='Cyber Security'>Cyber Security</option>
                  <option value='Information Technology'>
                    Information Technology
                  </option>
                </select>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  autoComplete='new-password'
                  value={rpassword}
                  onChange={(e) => setRpassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid>
            </Grid>
            <Button
              type='submit'
              className='btn btn-primary'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
      </div>
  )
}
