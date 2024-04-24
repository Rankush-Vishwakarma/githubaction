import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../common/navBar'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import './style/c.css';

export default function Registertopic() {
  const [gid, setGid] = useState('')
  const [specialization, setSpecialization] = useState('')
  const [topic, setTopic] = useState('')
  const [status, setStatus] = useState('pending')
  const [link, setLink] = useState('')

  const [groups, setGroups] = useState([])

  useEffect(() => {
    axios.get('/group').then((response) => {
      setGroups(response.data)
    })
  }, [])

  useEffect(() => {
    async function getGroups() {
      const responseu = await fetch(`http://localhost:5000/group/`)

      const groups = await responseu.json()

      setGroups(groups)
    }

    getGroups()

    return
  })

  var Topic = {
    gid,
    specialization,
    topic,
    status,
    link,
  }

  const pass = async () => {
    try {
      const resp = await axios.post('/topic/add', Topic)
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  return (
    <div>
      <NavBar />
      <div className='container mt-5 m b' style={{ maxWidth: 700, margin: "auto" }}>

          <div className=' form'>
            <div className='forminit'>
              <h3 className='navi'>Topic Registration</h3>
              <Card className='container p-3'>
                <div className='form-group mt-3'>
                  <label>Group ID</label>
                  <select
                    class='form-select'
                    value={gid}
                    onChange={(e) => setGid(e.target.value)}
                  >
                    {groups.map((u) => (
                      <option value={u.gid}>{u.gid}</option>
                    ))}
                  </select>
                </div>
                <br></br>

                <div className='form-group'>
                  <label>Research Topic</label>
                  <input
                    className='form-control'
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                  />
                </div>
                <br></br>

                <div className='form-group'>
                  <label>Specialization</label>
                  <select
                    class='form-select'
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                  >
                    <option>Software Engineering</option>
                    <option>Data Science</option>
                    <option>Cyber Security</option>
                    <option>Information Technology</option>
                  </select>
                </div>
                <br></br>

                <div >
                  <button className="btn btn-primary"  onClick={pass} type='submit'>
                    Submit
                  </button>
                </div>
              </Card>
            </div>
            <br></br>
          </div>
    
      </div>
    </div>
  )
}
