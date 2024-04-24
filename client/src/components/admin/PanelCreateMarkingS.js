import React, { useState } from 'react'
import NavBar from '../common/navBar'
import Table from 'react-bootstrap/Table'
import { Dropdown, Button } from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function PanelCreateMarkingSchemes() {
  const [row, setRow] = useState({
    evCiterion: '',
    poor: '',
    avg: '',
    vgood: '',
    mark: '',
  })

  function handleChangeInput(value) {
    return setRow((prev) => {
      return { ...prev, ...value }
    })
  }

  async function onSubmit(e) {
    e.preventDefault()

    const newItem = { ...row }

    await fetch('http://localhost:5000/markingScheme/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    }).catch((error) => {
      window.alert(error)
      return
    })
  }
  return (
    <div>
      <NavBar />

      <div className='container'>
        <form onSubmit={onSubmit}>
          <h1>Panel Member Marking Scehme</h1>
          <select
            name='subject'
            id='subject'
            placeholder='Select the specilaization'
          >
            <option value='' selected='selected'>
              Information technology
            </option>
            <option value='' selected='selected'>
              Software engineering
            </option>
            <option value='' selected='selected'>
              Data science
            </option>
            <option value='' selected='selected'>
              Cyber security
            </option>
            <option value='' selected='selected'>
              Intractive media
            </option>
            <option value='' selected='selected'>
              Network engineering
            </option>
          </select>
          <Table striped bordered hover variant='dark'>
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Very good</th>
                <th>Average</th>
                <th>Poor</th>
                <th>Total Mark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type='text'
                    id='evCiterion'
                    value={row.evCiterion}
                    onChange={(e) =>
                      handleChangeInput({ evCiterion: e.target.value })
                    }
                  />
                </td>
                <td>
                  <textarea
                    type='text'
                    id='vgood'
                    value={row.vgood}
                    onChange={(e) =>
                      handleChangeInput({ vgood: e.target.value })
                    }
                  />
                </td>

                <td>
                  <textarea
                    type='text'
                    id='avg'
                    value={row.avg}
                    onChange={(e) => handleChangeInput({ avg: e.target.value })}
                  />
                </td>
                <td>
                  <textarea
                    type='text'
                    id='poor'
                    value={row.poor}
                    onChange={(e) =>
                      handleChangeInput({ poor: e.target.value })
                    }
                  />
                </td>
                <td>
                  <input
                    type='number'
                    id='mark'
                    value={row.mark}
                    onChange={(e) =>
                      handleChangeInput({ mark: e.target.value })
                    }
                  />
                </td>
              </tr>

              <Button>Add row</Button>
            </tbody>
          </Table>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}
