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

import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Login(props) {
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user')

    if (loggedInUser != null) {
    }
  }, [])

  //  const [details, setDetails]=useState({email:"",password:""});
  const [email, setEmail] = useState('')
  const [data, setData] = useState('')
  const [password, setPassword] = useState('')

  if (props.logout) {
    localStorage.removeItem('user')
    localStorage.removeItem('userP')
    localStorage.removeItem('userS')
    localStorage.removeItem('userN')
    localStorage.removeItem('userI')
    localStorage.removeItem('groupID')
    window.location = '/'
  }

  async function SweatAlert(text) {
    // await sleep(1000)
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: text,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    axios
      .post('http://localhost:5000/user/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data == 'granted') {
          console.log('success')
          localStorage.setItem('user', email)
          axios
            .get(`http://localhost:5000/user/${email}`, {
              params: {
                email: email,
              },
            })
            .then(function (response) {
              setData(response.data)
              console.log(response.data)
              console.log(data)
              localStorage.setItem('userS', response.data.specialization)
              localStorage.setItem('userP', response.data.position)
              localStorage.setItem('userN', response.data.name)
              localStorage.setItem('userI', response.data.id)

              window.location = '/dashBoard'
            })
        } else if (res.data == 'denied') {
          SweatAlert('Incorrect Password')
        } else {
          SweatAlert('User Not Found')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const theme = createTheme()

  return (
    <div data-testid="login-1">
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
              Sign in
            </Typography>
            <Box
              component='form'
              onSubmit={submitHandler}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoFocus
              />
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='/contact' variant='body2'>
                    Any Issues? Contact Us
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='reg' variant='body2'>
                    {"Don't have an account? Sign Up"}
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
