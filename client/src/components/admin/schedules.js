import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import NavBar from '../common/navBar'
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
import { Input, InputBase } from '@mui/material'

const GroupSchedule = () => {
  let params = useParams()
  console.log(params)
  const [data, setData] = useState([])
  const [evaluation1, setEv1] = useState('')
  const [evaluation2, setEv2] = useState('')
  const [link1, setLink1] = useState('')
  const [link2, setLink2] = useState('')
  const [linkF, setLinkF] = useState('')
  const [final_evaluation, setFinalEv] = useState('')

  const theme = createTheme()

  // const loadData = () => {
  //   let p = params.gid
  //   axios.get(`http://localhost:5000/group/get/${p}`).then(function (response) {
  //     setData(response.data)
  //     console.log(response.data)
  //   })
  // }

  // useEffect(() => {
  //   loadData()
  // }, [])

  let p = params._id
  console.log(p)
  async function Submit(e) {
    e.preventDefault()
    const Obj = {
      groupID: params._id,
      evaluation1,
      evaluation2,
      final_evaluation,
      link1,
      link2,
      linkF,
    }

    axios
      .post('http://localhost:5000/schedule/add', Obj)

      .then((res) => console.log(res.data))

    alert('Succesfully Scheduled')
  }

  return (
    <>
      <NavBar />
      <div className='container'>
        <>
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
                <Box
                  component='form'
                  onSubmit={Submit}
                  noValidate
                  sx={{ mt: 3 }}
                >
                  <Typography component='h1' variant='h5'>
                    Group Id:{params._id}
                  </Typography>

                  <br />
                  <br />
                  <br />
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Input
                        type='date'
                        value={evaluation1}
                        onChange={(e) => setEv1(e.target.value)}
                        variant='filled'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label='Evalution 1 Link'
                        type='text'
                        value={link1}
                        onChange={(e) => setLink1(e.target.value)}
                        variant='filled'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input
                        type='date'
                        value={evaluation2}
                        onChange={(e) => setEv2(e.target.value)}
                        variant='filled'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label='Evalution 2 Link'
                        type='text'
                        value={link2}
                        onChange={(e) => setLink2(e.target.value)}
                        variant='filled'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Input
                        type='date'
                        value={final_evaluation}
                        onChange={(e) => setFinalEv(e.target.value)}
                        variant='filled'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label='Final Evalution Link'
                        type='text'
                        value={linkF}
                        onChange={(e) => setLinkF(e.target.value)}
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
                  </Grid>

                  <Stack direction='' spacing={2}>
                    <Button type='submit' variant='contained'>
                      Schedule
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </>
      </div>
    </>
  )
}

export default GroupSchedule

//  <form className='container' onSubmit={Submit}>
//             <h3>Group Id:{params._id}</h3>
//                 <br />
//                 <br />
//                 <label>Evaluation 1 :</label>
//                 <input
//                   type='date'
//                   value={evaluation1}
//                   onChange={(e) => setEv1(e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label>Link :</label>
//                 <input
//                   type='text'
//                   value={link1}
//                   onChange={(e) => setLink1(e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label>Evaluation 2 :</label>
//                 <input
//                   type='date'
//                   value={evaluation2}
//                   onChange={(e) => setEv2(e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label>Link :</label>
//                 <input
//                   type='text'
//                   value={link2}
//                   onChange={(e) => setLink2(e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label>Final Evaluation :</label>
//                 <input
//                   type='date'
//                   value={final_evaluation}
//                   onChange={(e) => setFinalEv(e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <label>Link :</label>
//                 <input
//                   type='text'
//                   value={linkF}
//                   onChange={(e) => setLinkF(e.target.value)}
//                 />
//                 <br />
//                 <br />
//                 <button className='btn btn-dark' type='submit'>
//                   Schedule dates
//                 </button>
//               </form>
