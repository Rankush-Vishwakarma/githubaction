import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import NavBar from '../common/navBar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

export default function Schedule() {
  const [data, setData] = useState([])

  const loadData = () => {
    axios.get('http://localhost:5000/group/').then((res) => {
      setData(res.data)
      console.log(res.data)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='container'>
      <NavBar />
      <Card sx={{ minWidth: 275 }}>
        {data.map((group, index) => {
          return (
            <>
              <CardContent>
                <Typography
                  sx={{ fontSize: 25 }}
                  color='text.secondary'
                  gutterBottom
                >
                  Group ID {group.gid}
                </Typography>
                <Typography variant='h5' component='div'>
                  Leader {group.first}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color='text.secondary'
                ></Typography>
                <Typography variant='body2'>
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <NavLink
                  to={`/groupSchedule/${group.gid}`}
                  className='btn btn-outline-dark me-2'
                >
                  Schedule
                </NavLink>
              </CardActions>
            </>
          )
        })}
      </Card>
    </div>
  )
}

// ;<table>
//   <tr>
//     <th>Group ID</th>
//     <th>Leader</th>
//   </tr>
//   {data.map((group, index) => {
//     return (
//       <tr>
//         <td>{group.gid}</td>
//         <td>{group.first}</td>

// <NavLink
//   to={`/groupSchedule/${group.gid}`}
//   className='btn btn-outline-dark me-2'
// >
//   Schedule
// </NavLink>
//       </tr>
//     )
//   })}
// </table>
