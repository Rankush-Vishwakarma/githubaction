import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../common/navBar'

export default function DisfilesAdmin() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:5000/adminfile/get`)
      .then((res) => {
        setData(res.data)
      })
      .catch(function (error) {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <NavBar />
      <div className='mt-5' style={{ maxWidth: 1200, margin: 'auto' }}>
        <h3>ADD New Assignments</h3>
        <table class='table'>
          <thead class='thead-dark'>
            <tr scope='row'>
              <th>Specialization</th>
              <th>Description</th>
              <th>File</th>
              <th>File</th>
              <th>File</th>
              <th>File</th>
              <th>File</th>
              <th>File</th>
              <th>File</th>
              <th>File</th>
              <th>File</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => {
              0
              return (
                <tr scope='row'>
                  <td>{row.specialization}</td>
                  <td>{row.description}</td>
                  <td>{row.ev1doc}</td>
                  <td>{row.ev1pre_start}</td>
                  <td>{row.ev1pre_end}</td>
                  <td>{row.ev2doc}</td>
                  <td>{row.ev2pre_start}</td>
                  <td>{row.ev2pre_end}</td>
                  <td>{row.ev3doc}</td>
                  <td>{row.ev3pre_start}</td>
                  <td>{row.ev3pre_end}</td>
                  <td>{row.filepdf}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
