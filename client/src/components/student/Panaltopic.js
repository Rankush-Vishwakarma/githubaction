import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import NavBar from '../common/navBar'
import './style/c.css'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

export default function Panaltopic() {
  const [status, setStatus] = useState('')
  const [link, setLink] = useState('')

  let params = useParams()

  const Update = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:5000/topic/updatel/${params._id}`, {
      link,
    })
  }
  console.log(params)

  const loadData = () => {
    axios
      .get(`http://localhost:5000/topic/u/${params._id}`)
      .then(function (response) {
        console.log(response.data)
        const data = response.data
        setStatus(data.status)
        setLink(data.link)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <NavBar />
      <div>
        <h3 className='navi  mt-5'>Update Topic</h3>

        <div className='bod m' style={{ maxWidth: 800, margin: 'auto' }}>
          <center>
            <div className=' form'>
              <form onSubmit={Update}>
                <div className='form-group'>
                  <label>Link</label>
                  <input
                    className='form-control'
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                  <br></br>
                </div>

                <button className='btn btn-primary' type='submit'>
                  Update
                </button>
              </form>
            </div>
          </center>
        </div>
      </div>
    </div>
  )
}
