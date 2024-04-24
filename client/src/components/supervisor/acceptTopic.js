import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../common/navBar'
import Table from 'react-bootstrap/Table'

const Topics = (props) => (
  <>
    {props.topics.status == 'pending' ? (
      <tr>
        <td>{props.topics.gid}</td>
        <td>{props.topics.topic}</td>
        <td>
          <button
            type='submit'
            className='btn btn-primary'
            onClick={() => {
              props.update(props.topics)
            }}
          >
            Accept
          </button>
        </td>
      </tr>
    ) : (
      ''
    )}
  </>
)

export default function AcceptTopic() {
  const [data, setData] = useState([])
  let sp = localStorage.getItem('userS')
  let sname = localStorage.getItem('userN')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/topic/${sp}`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const Update = async (top) => {
    axios.post(`http://localhost:5000/topic/update/${top._id}`, {
      status: 'Accepted',
    })
    let topicId = top.gid
    axios
      .get(`http://localhost:5000/group/searchByGid/${topicId}`)
      .then((response) => {
        const id = response.data[0]._id
        axios.post(`http://localhost:5000/group/updateSupervisor/${id}`, {
          supervisor: sname,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    setData(data.filter((el) => el._id != top._id))
  }

  const topicList = () => {
    return data.map((currentTopic) => {
      return (
        <Topics topics={currentTopic} update={Update} key={currentTopic._id} />
      )
    })
  }

  return (
    <div>
      <NavBar />
      <div className='container mt-3'>
        <h3>Accept Topics</h3>
        <Table className='talbe'>
          <thead className='thead-light'>
            <tr>
              <th>Group ID</th>
              <th>Topic</th>
              <th>Accept/Reject</th>
            </tr>
          </thead>
          <tbody>{topicList()}</tbody>
        </Table>
      </div>
    </div>
  )
}
