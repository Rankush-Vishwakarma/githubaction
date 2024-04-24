import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import NavBar from '../common/navBar'

export default function EvaluateTopice() {
  const [data, setData] = useState([])
  const [gdata, setGdata] = useState('')
  const [topic, setTopic] = useState('')
  const [feedback, setFeedback] = useState('')
  const panelMember = localStorage.getItem('userN')
  const email = localStorage.getItem('user')

  const theme = createTheme()

  const check = () => {
    axios
      .post('http://localhost:5000/group/pCheck', {
        panelMember: panelMember,
      })
      .then((res) => {
        setGdata(res.data)

        const gid = res.data[0].gid

        axios
          .get(`http://localhost:5000/topic/searchBygid/${gid}`)
          .then((res) => {
            setData(res.data)
            console.log(res.data[0])
          })
      })
  }
  console.log(data._id)

  const Accept = () => {
    axios.post(`http://localhost:5000/topic/update/${data[0]._id}`, {
      status: 'pAccepted',
    })

    const messageData = {
      gid: data[0].gid,
      author: panelMember + '(Panel Memeber)',
      email: email,
      message: feedback,
      time:
        new Date(Date.now()).getHours() +
        ':' +
        new Date(Date.now()).getMinutes(),
    }
    console.log(messageData)
    axios
      .post('http://localhost:5000/message/add/', messageData)
      .then((res) => console.log(res.data))
  }

  const Reject = () => {
    axios.post(`http://localhost:5000/topic/update/${data[0]._id}`, {
      status: 'Rejected',
    })
    const messageData = {
      gid: data[0].gid,
      author: panelMember + '(Panel Memeber)',
      email: email,
      message: feedback,
      time:
        new Date(Date.now()).getHours() +
        ':' +
        new Date(Date.now()).getMinutes(),
    }
    console.log(messageData)
    axios
      .post('http://localhost:5000/message/add/', messageData)
      .then((res) => console.log(res.data))
  }
  const CheckAccept = () => {}
  useEffect(() => {
    check()
  }, [])

  return (
    <div>
      <NavBar />
      <div className='container'>
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
              <Box component='form' noValidate sx={{ mt: 3 }}>
                <Grid item xs={12}>
                  <Typography component='h1' variant='h5'>
                    Topic Accept or Reject
                  </Typography>
                </Grid>
                <br />
                <br />
                <br />
                <Grid container spacing={2}>
                  {data.map((topic) => {
                    return (
                      <>
                        <Grid item xs={12}>
                          <TextField
                            id='filled-read-only-input'
                            label='Group ID'
                            defaultValue={topic.gid}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant='filled'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            id='filled-read-only-input'
                            label='Topic'
                            defaultValue={topic.topic}
                            InputProps={{
                              readOnly: true,
                            }}
                            variant='filled'
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Box
                            sx={{
                              display: 'flex',
                              typography: 'body1',
                              '& > :not(style) + :not(style)': {
                                ml: 5,
                              },
                            }}
                          ></Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Link
                            href={topic.link}
                            label='Document'
                            underline='none'
                          >
                            Document
                          </Link>
                        </Grid>
                        <Grid item xs={12}>
                          <TextareaAutosize
                            maxRows={4}
                            aria-label='maximum height'
                            placeholder='Feedback'
                            style={{ width: 200 }}
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                          />
                        </Grid>
                      </>
                    )
                  })}
                </Grid>
                <Grid item xs={12}>
                  <Stack direction='row' spacing={2}>
                    <Button
                      type='submit'
                      variant='contained'
                      onClick={Accept}
                      color='success'
                    >
                      Accept
                    </Button>
                    <Button variant='contained' onClick={Reject} color='error'>
                      Reject
                    </Button>
                  </Stack>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  )
}

const LoadComp = () => {
  return (
    <>
      <p>Fuck</p>
    </>
  )
}
