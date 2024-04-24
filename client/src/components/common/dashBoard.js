import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from './navBar'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { List, ListItem } from '@mui/material'
import { ListGroup } from 'react-bootstrap'
import Grid from '@mui/material/Grid'
import { Link } from '@mui/material'

export default function DashBoard() {
  //Panel Member
  const [data, setData] = useState([])
  const [scheduleP, setScheduleP] = useState([])

  const loadData = () => {
    let name = localStorage.getItem('userN')
    axios
      .get(`http://localhost:5000/group/panel/${name}`)
      .then(function (response) {
        setData(response.data)

        console.log(response)

        const id = response.data[0].gid

        axios
          .get(`http://localhost:5000/schedule/get/${id}`)
          .then(function (response) {
            setScheduleP(response.data)
            console.log(response.data)
          })
      })

    //  axios
    //    .get(`http://localhost:5000/schedule/get/${id}`)
    //    .then(function (response) {
    //      setSchedule(response.data)
    //      console.log(response)
    //    })
  }

  useEffect(() => {
    loadData()
  }, [])

  //End

  //Supervisour
  const [sdata, setSData] = useState([])

  const loadSData = () => {
    let name = localStorage.getItem('userN')
    axios
      .get(`http://localhost:5000/group/supervisour/${name}`)
      .then(function (response) {
        setSData(response.data)
      })
  }

  useEffect(() => {
    loadSData()
  }, [])
  //End

  //co-supervisor
  const [csdata, setCSData] = useState([])

  const loadCSData = () => {
    let name = localStorage.getItem('userN')
    axios
      .get(`http://localhost:5000/group/cosupervisour/${name}`)
      .then(function (response) {
        setCSData(response.data)
      })
  }

  useEffect(() => {
    loadCSData()
  }, [])
  //End

  //Admin
  //End

  //Student
  const [stData, setStData] = useState([])

  const [schedule, setSchedule] = useState([])

  const loadStData = () => {
    let name = localStorage.getItem('userN')
    axios
      .get(`http://localhost:5000/group/student/${name}`)
      .then(function (response) {
        setStData(response.data)

        const id = response.data[0].gid

        axios
          .get(`http://localhost:5000/schedule/get/${id}`)
          .then(function (response) {
            setSchedule(response.data)
          })
      })
  }

  useEffect(() => {
    loadStData()
  }, [])
  //End

  return (
    <>
      <NavBar />

      <div className='container'>
        {localStorage.getItem('userP') == 'Panel Member' ? (
          <>
            <h1>Hello! {localStorage.getItem('userN')}</h1>

            <Card sx={{ minWidth: 275 }}>
              {data.map((group) => {
                return (
                  <>
                    <dvi dvi className='container'>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          {group.gid}
                        </Typography>
                        <Typography variant='h5' component='div'></Typography>
                        <Typography
                          sx={{ mb: 1.5 }}
                          color='text.secondary'
                        ></Typography>
                        <Typography variant='body2'>
                          <ListGroup>
                            <ListItem>{group.first}</ListItem>
                            <ListItem>{group.second}</ListItem>
                            <ListItem>{group.third}</ListItem>
                            <ListItem>{group.forth}</ListItem>
                          </ListGroup>
                          <br />
                        </Typography>
                      </CardContent>

                      <CardActions>
                        <NavLink to={`/viewMarking/${group.gid}`}>
                          <button className='btn btn-dark'>View</button>
                        </NavLink>
                      </CardActions>
                    </dvi>
                  </>
                )
              })}
            </Card>
            <>
              <Card sx={{ minWidth: 275 }}>
                {scheduleP.map((group) => {
                  return (
                    <>
                      <dvi dvi className='container'>
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 25 }}
                            color='text.secondary'
                            gutterBottom
                          >
                            Viva Schedule
                          </Typography>
                          <Typography variant='h5' component='div'></Typography>
                          <Typography
                            sx={{ mb: 1.5 }}
                            color='text.secondary'
                          ></Typography>
                          <Typography variant='body2'>
                            <ListGroup>
                              <ListItem>
                                {group.evaluation1}-
                                <Link href={group.link1}>
                                  Evaluation 1 Link
                                </Link>{' '}
                              </ListItem>
                              <ListItem>
                                {group.evaluation2}-
                                <Link href={group.link2}>
                                  Evaluation 2 Link
                                </Link>
                              </ListItem>
                              <ListItem>
                                {group.final_evaluation}-
                                <Link href={group.linkF}>
                                  Final Evaluation Link
                                </Link>
                              </ListItem>
                            </ListGroup>
                            <br />
                          </Typography>
                        </CardContent>
                      </dvi>
                    </>
                  )
                })}
              </Card>
            </>
          </>
        ) : localStorage.getItem('userP') == 'Supervisor' ? (
          <>
            <h1>Hello! {localStorage.getItem('userN')}</h1>
            <Card sx={{ minWidth: 275 }}>
              {sdata.map((group) => {
                return (
                  <>
                    <div className='container'>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          {group.gid}
                        </Typography>
                        <Typography variant='h5' component='div'></Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                          Co-Supervisor-{group.co_supervisor}
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant='body2'>
                              <ListGroup>
                                <ListItem>{group.first}</ListItem>
                                <ListItem>{group.second}</ListItem>
                                <ListItem>{group.third}</ListItem>
                                <ListItem>{group.forth}</ListItem>
                              </ListGroup>
                              <br />
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <CardActions>
                              <NavLink to={`/viewMarking/${group.gid}`}>
                                <button className='btn btn-dark'>View</button>
                              </NavLink>
                              <NavLink to={`/message/${group.gid}`}>
                                <button className='btn btn-primary'>
                                  Chat
                                </button>
                              </NavLink>
                            </CardActions>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </div>
                  </>
                )
              })}
            </Card>
          </>
        ) : localStorage.getItem('userP') == 'co-supervisor' ? (
          <>
            <h1>Hello! {localStorage.getItem('userN')}</h1>
            <Card sx={{ minWidth: 275 }}>
              {csdata.map((group) => {
                return (
                  <>
                    <div className='container'>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          {group.gid}
                        </Typography>
                        <Typography variant='h5' component='div'></Typography>
                        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                          Supervisor-{group.supervisor}
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <Typography variant='body2'>
                              <ListGroup>
                                <ListItem>{group.first}</ListItem>
                                <ListItem>{group.second}</ListItem>
                                <ListItem>{group.third}</ListItem>
                                <ListItem>{group.forth}</ListItem>
                              </ListGroup>
                              <br />
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <CardActions>
                              <NavLink to={`/message/${group.gid}`}>
                                <button className='btn btn-primary'>
                                  Chat
                                </button>
                              </NavLink>
                            </CardActions>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </div>
                  </>
                )
              })}
            </Card>
          </>
        ) : localStorage.getItem('userP') == 'Admin' ? (
          <>
            <center>
              <CardContent>
                <Typography
                  sx={{ fontSize: 30 }}
                  color='text.secondary'
                  gutterBottom
                >
                  Welcome to Admin Dash Board
                </Typography>
              </CardContent>
            </center>
            {/* <Card sx={{ minWidth: 275 }}>
            return (

    
      
   
  );
   </Card> */}

            <h1>Hello! {localStorage.getItem('userN')}</h1>
          </>
        ) : localStorage.getItem('userP') == 'Student' ? (
          <>
            <h1>Hello! {localStorage.getItem('userN')}</h1>
            <Card className='p-2' sx={{ minWidth: 275 }}>
              {stData.map((group) => {
                return (
                  <>
                    <div className='container bod'>
                      <CardContent>
                        <Typography
                          sx={{ fontSize: 30 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          {group.gid}
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                            <Typography
                              variant='h5'
                              component='div'
                            ></Typography>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                              Supervisor-{group.supervisor} <br />
                              <br />
                              <br />
                              Co-Supervisor-{group.co_supervisor} <br />
                              <br />
                              <br />
                              Panel Member-{group.panelMember}
                            </Typography>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                              Group Members
                              <br />*{group.first}
                              <br />*{group.second}
                              <br />*{group.third}
                              <br />*{group.forth}
                              <br />
                            </Typography>
                          </Grid>

                          {/* <Grid item xs={12} sm={2}> */}
                          {/* <Typography sx={{ mb: 1.5 }} color='text.secondary'> */}
                          <NavLink to={`/message/${group.gid}`}>
                            <button className='btn btn-primary'>
                              Group Chat
                            </button>
                          </NavLink>
                          {/* </Typography> */}
                          {/* </Grid> */}
                        </Grid>
                      </CardContent>
                    </div>
                    <Card className='bod mt-3' sx={{ minWidth: 275 }}>
                      {schedule.map((group) => {
                        return (
                          <>
                            <dvi dvi className='container'>
                              <CardContent>
                                <Typography
                                  sx={{ fontSize: 25 }}
                                  color='text.secondary'
                                  gutterBottom
                                >
                                  Viva Schedule
                                </Typography>
                                <Typography
                                  variant='h5'
                                  component='div'
                                ></Typography>
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color='text.secondary'
                                ></Typography>
                                <Typography variant='body2'>
                                  <ListGroup>
                                    <ListItem>
                                      {group.evaluation1}-
                                      <Link href={group.link1}>
                                        Evaluation 1 Link
                                      </Link>{' '}
                                    </ListItem>
                                    <ListItem>
                                      {group.evaluation2}-
                                      <Link href={group.link2}>
                                        Evaluation 2 Link
                                      </Link>
                                    </ListItem>
                                    <ListItem>
                                      {group.final_evaluation}-
                                      <Link href={group.linkF}>
                                        Final Evaluation Link
                                      </Link>
                                    </ListItem>
                                  </ListGroup>
                                  <br />
                                </Typography>
                              </CardContent>
                            </dvi>
                          </>
                        )
                      })}
                    </Card>
                  </>
                )
              })}
            </Card>
          </>
        ) : (
          <p>not found:{localStorage.getItem('userP')}</p>
        )}
      </div>
    </>
  )
}
