import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Submittype() {
  const [evaluation1, setEv1] = useState('')
  const [evaluation2, setEv2] = useState('')
  const [evaluation3, setEv3] = useState('')

  const obj = {
    evaluation1,
    evaluation2,
    evaluation3,
  }

  async function Submit(e) {
    e.preventDefault()

    axios.post('http://localhost:5000/submittype/add', obj).then((res) => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <div>
        <h3>Evaluation</h3>
      </div>
      <div>
        <from onSubmit={Submit}>
          <label>Evaluation 1</label>
          <input
            type='date'
            value={evaluation1}
            onChange={(e) => setEv1(e.target.value)}
          />
          <br />

          <label>Evaluation 2</label>
          <input
            type='date'
            value={evaluation1}
            onChange={(e) => setEv2(e.target.value)}
          />
          <br />

          <label>Evaluation 3</label>
          <input
            type='date'
            value={evaluation1}
            onChange={(e) => setEv3(e.target.value)}
          />
          <br />
        </from>
      </div>
    </div>
  )
}
