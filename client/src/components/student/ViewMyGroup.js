import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import bootstrap from 'react-bootstrap'

export default function ViewMyGroup() {
  const [data, setData] = useState([])

  let email = localStorage.getItem('user')

  const loadData = () => {
    axios
      .post('http://localhost:5000/group/check', {
        email: email,
      })
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <h classname='navi'>My Group Details</h>
      <table class='table'>
        {data.map((g) => {
          return (
            <tr>
              <tr>Group Name</tr>
              <tr>{g.gid}</tr>
              <tr />
              <br></br>
              <tr>Group Members</tr>
              <tr>{g.first}</tr>
              <tr>{g.second}</tr>
              <tr>{g.third}</tr>
              <tr>{g.forth}</tr>
              <br></br>
              <tr>Panel Member</tr>
              <tr>{g.panelMember}</tr>
              <br></br>
              <tr>Supervisor</tr>
              <tr>{g.supervisor}</tr>
              <br></br>
              <tr>Co-Supervisor</tr>
              <tr>{g.co_supervisor}</tr>
            </tr>
          )
        })}
      </table>
    </div>
  )
}
