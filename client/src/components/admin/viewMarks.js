import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import NavBar from '../common/navBar'

export default function ViewMark() {
  const [mark, setMark] = useState([])

  const loadData = () => {
    axios.get('http://localhost:5000/marks/').then(function (response) {
      setMark(response.data)
      console.log(response)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <NavBar />
      <div className='container'>
        <h1>Group Marks</h1>
        <br />
        <br />
        <Table>
          <tbody>
            <tr>
              <th>Group ID</th>
              <th>Evaluation 1</th>
              <th>Evaluation 2</th>
              <th>Final Evaluation</th>
              <th>Document 1</th>
              <th>Document 2</th>
              <th>Final Document</th>
            </tr>

            {mark.map((mark) => {
              return (
                <>
                  <tr>
                    <td>{mark.gid}</td>
                    <td>{mark.ev1Mark}</td>
                    <td>{mark.ev2Mark}</td>
                    <td>{mark.finalevMark}</td>
                    <td>{mark.doc1}</td>
                    <td>{mark.doc2}</td>
                    <td>{mark.docfinal}</td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </Table>
      </div>
    </>
  )
}
