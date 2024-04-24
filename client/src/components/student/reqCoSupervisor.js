import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../common/navBar'
import Table from 'react-bootstrap/Table'

const Supervisor = (props) => (
  <>
    {props.user.position == 'co-supervisor' &&
    props.user.specialization == localStorage.getItem('userS') ? (
      <tr>
        <td>{props.user.name}</td>
        <td>{props.user.specialization}</td>
        <td>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={() => {
              props.update()
            }}
          >
            Request
          </button>
        </td>
      </tr>
    ) : (
      ''
    )}
  </>
)

export default function RequestCoSupervisor() {
  const [group, setGroup] = useState([])
  const [topic, setTopic] = useState([])
  const [user, setUser] = useState([])
  const uemail = localStorage.getItem('user')
  const sp = localStorage.getItem('userS')

  const Info = () => {
    axios
      .post('http://localhost:5000/group/check', {
        email: uemail,
      })
      .then((response) => {
        setGroup(response.data[0])
        const gid = response.data[0].gid
        // const gid = response.data[0]
        // console.log(gid)
        axios
          .get(`http://localhost:5000/topic/searchBygid/${gid}`)
          .then((response) => {
            setTopic(response.data)
            setTopic(response.data[0])
          })
          .catch(function (error) {
            console.log(error)
          })
      })
      .catch(function (error) {
        console.log(error)
      })

    axios
      .get(`http://localhost:5000/user/`)
      .then((response) => {
        setUser(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    Info()
  }, [])

  const supervisorList = () => {
    return user.map((curretSupervisor) => {
      return (
        <Supervisor
          user={curretSupervisor}
          update={Update}
          key={curretSupervisor._id}
        />
      )
    })
  }

  const Update = () => {
    axios.post(`http://localhost:5000/topic/update/${topic._id}`, {
      status: 'cRequested',
    })
    setUser(user.filter((el) => el._id != top._id))
    window.location.reload()
  }

  const loadComponent = () => {
    if (topic.status === 'Accepted') {
      return (
        <div>
          <div className='container'>
            <Table className='talbe'>
              <thead className='thead-light'>
                <tr>
                  <th>Co-Supervisor</th>
                  <th>Research Interest</th>
                  <th>Request</th>
                </tr>
              </thead>
              <tbody>{supervisorList()}</tbody>
            </Table>
          </div>
        </div>
      )
    } else if (topic.status === 'Pending') {
      return <div>Your research topic has not being Accepted Yet</div>
    } else if (topic.status === 'cRequested') {
      return <div>Co-supervisor has not yet Accepted the Request</div>
    } else if (topic.status === 'cAccepted') {
      return <div>Co-supervisor has Accept the Request</div>
    } else {
      return <div>Error Loading page</div>
    }
  }

  return (
    <div>
      <NavBar />
      <div className='container'>
        <h1>Co-Supervisor List</h1>
        <div>{loadComponent()}</div>
      </div>
    </div>
  )
}
