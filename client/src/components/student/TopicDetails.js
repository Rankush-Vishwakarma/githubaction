import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import NavBar from '../common/navBar';


export default function TopicDetails() {
  let email = localStorage.getItem('user')

  const [topic, setTopic] = useState({})
  const [group, setGroup] = useState([])



  const loadData = () => {
    axios
      .post('http://localhost:5000/group/check', {
        email: email,
      })
      .then((response) => {
        setGroup(response.data[0])
        const gid = response.data[0].gid
        // const gid = response.data[0]
        console.log(gid)
        axios
          .get(`http://localhost:5000/topic/searchBygid/${gid}`)
          .then((response) => {
            setTopic(response.data[0])
          })
          .catch(function (error) {
            console.log(error)
          })
      })
      .catch(function (error) {
        console.log(error)
      })
    }

  useEffect(() => {
    loadData()
  }, [])


  // This following section will display the table with the records of individuals.
  return (
    <div>
      <NavBar/>
      <div>
 
      <center>
        <h3 className='navi mt-5'>Registered Topics</h3>
        <table class='table' style={{ marginTop: 50, width: 700 }}>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Specialization</th>
              <th>Status</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              

                            <td>{topic.topic}</td>
                            <td>{topic.specialization}</td>
                            <td>{topic.status}</td>
                            <td>{topic.link}</td>
                            <td> <Link to={`/panaltopic/${topic._id}`}>
                            <button className='btn btn-primary'>update</button>
                            </Link></td>
             </tr>                          
              
          </tbody>
        </table>
      </center>
      </div>

   
    </div>
  )
}