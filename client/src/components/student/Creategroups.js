import React, { useEffect, useState } from 'react'
import axios from 'axios'
import nextId from 'react-id-generator'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import NavBar from '../common/navBar'
import './style/c.css';

export default function Creategroups() {
  const gid = nextId()
  const [specialization, setSpecialization] = useState('')
  const [first, setFirst] = useState('')
  const [email1, setEmail1] = useState('')
  const [second, setSecond] = useState('')
  const [email2, setEmail2] = useState('')
  const [third, setThird] = useState('')
  const [email3, setEmail3] = useState('')
  const [forth, setForth] = useState('')
  const [email4, setEmail4] = useState('')
  const [supervisor, setSupervisor] = useState('none')
  const [co_supervisor, setCo_supervisor] = useState('none')
  const [panelMember, setPanelMember] = useState('none')

  var Group = {
    gid,
    specialization,
    first,
    email1,
    second,
    email2,
    third,
    email3,
    forth,
    email4,
    panelMember,
    supervisor,
    co_supervisor,
  }

  const passtogroup = async () => {
    try {
      const resp = await axios.post('/group/add', Group)
      console.log(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }

    const newItem = {
      gid,
    }
    axios

      .post('http://localhost:5000/marks/add', newItem)

      .then((res) => console.log(res.data))
  }

  return (
    <div>
      <NavBar />
      <div className='bod mt-5 mb-5 m' style={{ maxWidth: 600, margin: 'auto' }}>
      
          <div className=' form'>
            <div className='forminit'>
              <h3 className='navi'>Create Groups</h3>

              <div className='form-group'>
                <label>Group Name</label>
                <input
                  className='form-control'
                  value={gid}
                  onChange={(e) => setGid(e.target.value)}
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

              <div className='form-group'>
                <label>First Member</label>
                <input
                  className='form-control'
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                />
                <br></br>
              </div>

              <div className='form-group'>
                <label>First Member Email</label>
                <input
                  className='form-control'
                  value={email1}
                  onChange={(e) => setEmail1(e.target.value)}
                />
                <br></br>
              </div>

              <div className='form-group'>
                <label>Second Member</label>
                <input
                  className='form-control'
                  value={second}
                  onChange={(e) => setSecond(e.target.value)}
                />
                <br></br>
              </div>

              <div className='form-group'>
                <label>Second Member Email</label>
                <input
                  className='form-control'
                  value={email2}
                  onChange={(e) => setEmail2(e.target.value)}
                />
                <br></br>
              </div>

              <div className='form-group'>
                <label>Third Member</label>
                <input
                  className='form-control'
                  value={third}
                  onChange={(e) => setThird(e.target.value)}
                />
                <br></br>
              </div>

              <div className='form-group'>
                <label>Third Member Email</label>
                <input
                  className='form-control'
                  value={email3}
                  onChange={(e) => setEmail3(e.target.value)}
                />
                <br></br>
              </div>

              <div className='form-group'>
                <label>Forth Member</label>
                <input
                  className='form-control'
                  value={forth}
                  onChange={(e) => setForth(e.target.value)}
                />
                <br></br>
              </div>

              <div className='form-group'>
                <label>Forth Member Email</label>
                <input
                  className='form-control'
                  value={email4}
                  onChange={(e) => setEmail4(e.target.value)}
                />
                <br></br>
              </div>

              <button
                className='btn btn-primary'
                onClick={passtogroup}
                type='submit'
              >
                Create
              </button>
            </div>
          </div>
       
      </div>
    </div>
  )
}
