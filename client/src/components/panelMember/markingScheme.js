import React, { useState, useEffect } from 'react'
import NavBar from '../common/navBar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router'
import Table from 'react-bootstrap/Table'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload'

export default function ViewMarkingSchemes() {
  let params = useParams()

  const [sdata, setSdata] = useState([])
  const [data, setData] = useState([])
  const [scheudle, setSchedule] = useState([])
  const [test, setTest] = useState([])
  const [values, setValues] = useState({ val: [] })
  const [selectEvaluType, setEvaluType] = useState()
  const [group, setGroupNo] = useState('')
  const [total, setTotal] = useState(0)
  let p = localStorage.getItem('userP')
  let s = localStorage.getItem('userS')

  //page navigate function
  const navigate = useNavigate()

  //calculate total marks
  const setVal = (e, i) => {
    let items = [data]
    let tot = 0

    if (Number.isNaN(e.target.value)) {
      items[0][i].mark = 0
      console.log(e.target.value)
    } else {
      items[0][i].mark = parseInt(e.target.value)
    }

    items[0].forEach((e) => {
      if (Number.isNaN(items[0][i].mark)) {
        items[0][i].mark = 0
        console.log(e.target.value)
      }
      tot += e.mark
    })

    if (tot > 50) {
      alert('please enter marks correctly')
      window.location('/')
    }

    setTotal(tot)
  }

  console.log('total', total)

  //add marks into the marks
  async function Submit(e) {
    // e.preventDefault()

    console.log(selectEvaluType)

    if (e === 'Evaluation 1') {
      console.log('gid', params.gid)
      axios
        .get(`http://localhost:5000/marks/getMark/${params.gid}`)
        .then(function (response) {
          console.log(response)
          let groupid = response.data[0]._id
          console.log(groupid)
          axios.post(`http://localhost:5000/marks/update/ev1/${groupid}`, {
            mark: total,
          })
        })
    } else if (e === 'Evaluation 2') {
      console.log(total)
      axios
        .get(`http://localhost:5000/marks/getMark/${params.gid}`)
        .then(function (response) {
          console.log(response)

          let groupid = response.data[0]._id

          axios.post(`http://localhost:5000/marks/update/ev2/${groupid}`, {
            mark: total,
          })
        })
    } else if (e === 'Final Evaluation') {
      axios
        .get(`http://localhost:5000/marks/getMark/${params.gid}`)
        .then(function (response) {
          console.log(response)
          let groupid = response.data[0]._id
          axios.post(`http://localhost:5000/marks/update/fev/${groupid}`, {
            total,
          })
        })
    } else if (e === 'Document 1') {
      axios
        .get(`http://localhost:5000/marks/getMark/${params.gid}`)
        .then(function (response) {
          console.log(response)
          let groupid = response.data[0]._id
          console.log('total', total)
          axios.post(`http://localhost:5000/marks/update/doc1/${groupid}`, {
            total,
          })
        })
    } else if (e === 'Document 2') {
      axios
        .get(`http://localhost:5000/marks/getMark/${params.gid}`)
        .then(function (response) {
          console.log(response)
          let groupid = response.data[0]._id
          axios.post(`http://localhost:5000/marks/update/doc2/${groupid}`, {
            total,
          })
        })
    } else if (e === 'Final Document') {
      axios
        .get(`http://localhost:5000/marks/getMark/${params.gid}`)
        .then(function (response) {
          console.log(response)
          let groupid = response.data[0]._id
          axios.post(`http://localhost:5000/marks/update/docf/${groupid}`, {
            total,
          })
        })
    }
  }
  const handleFilterInput = (event) => {
    let value = event.target.va
    setSelectedValue(value)
    props.handleRegionSearch(value)
  }
  //using loged users specalization and position filter the markingSceheme
  const loadData = () => {
    let id = params.gid
    axios
      .get(`http://localhost:5000/schedule/get/${id}`)
      .then(function (response) {
        setSchedule(response.data)
        console.log(response)
      })
  }

  const filter = (e) => {
    if (e === 'Evaluation 1') {
      setEvaluType(e)
      axios
        .post('http://localhost:5000/markingScheme/check', {
          specalization: s,
          position: p,
          evaluation: 'Evaluation 1',
        })
        .then((res) => {
          setData(res.data)

          console.log(res.data)
          console.log(s, p)
        })
      axios
        .get(`http://localhost:5000/ev1/get/${params.gid}`)
        .then((res) => {
          setSdata(res.data)
        })
        .catch((err) => console.log(err))
    } else if (e === 'Evaluation 2') {
      setEvaluType(e)
      axios
        .post('http://localhost:5000/markingScheme/check', {
          specalization: s,
          position: p,
          evaluation: 'Evaluation 2',
        })
        .then((res) => {
          setData(res.data)
          console.log(res.data)

          console.log(s, p)
        })

      axios
        .get(`http://localhost:5000/ev2/get/${params.gid}`)
        .then((res) => {
          setSdata(res.data)
        })
        .catch((err) => console.log(err))
    } else if (e === 'Final Evaluation') {
      setEvaluType(e)
      axios
        .post('http://localhost:5000/markingScheme/check', {
          specalization: s,
          position: p,
          evaluation: 'Final Evaluation',
        })
        .then((res) => {
          setData(res.data)
          console.log(res.data)
          console.log(s, p)
        })
      axios
        .get(`http://localhost:5000/ev3/get/${params.gid}`)
        .then((res) => {
          setSdata(res.data)
        })
        .catch((err) => console.log(err))
    } else if (e === 'Document 1') {
      setEvaluType(e)
      axios
        .post('http://localhost:5000/markingScheme/check', {
          specalization: s,
          position: p,
          evaluation: 'Document 1',
        })
        .then((res) => {
          setData(res.data)
          console.log(res.data)
          console.log(s, p)
        })
      axios
        .get(`http://localhost:5000/ev1/get/${params.gid}`)
        .then((res) => {
          setSdata(res.data)
        })
        .catch((err) => console.log(err))
    } else if (e === 'Document 2') {
      setEvaluType(e)
      axios
        .post('http://localhost:5000/markingScheme/check', {
          specalization: s,
          position: p,
          evaluation: 'Document 2',
        })
        .then((res) => {
          setData(res.data)
          console.log(res.data)
          console.log(s, p)
        })

      axios
        .get(`http://localhost:5000/ev2/get/${params.gid}`)
        .then((res) => {
          setSdata(res.data)
        })
        .catch((err) => console.log(err))
    } else if (e === 'Final Document') {
      setEvaluType(e)
      axios
        .post('http://localhost:5000/markingScheme/check', {
          specalization: s,
          position: p,
          evaluation: 'Final Document',
        })
        .then((res) => {
          setData(res.data)
          console.log(res.data)
          console.log(s, p)
        })
      axios
        .get(`http://localhost:5000/ev1/get/${params.gid}`)
        .then((res) => {
          setSdata(res.data)
        })
        .catch((err) => console.log(err))
    }
  }
  useEffect(() => {
    loadData()
    filter()
  }, [])

  // function Marking(){

  //               }

  return (
    <>
      <NavBar />

      <div className='container mt-5'>

        <card>
          {scheudle.map((sch) => {
            return (
              <>
                <ul>
                  <li>
                    Evaluation 1 :{sch.evaluation1} :
                    <Link href={sch.link1} label='Document' underline='none'>
                      link
                    </Link>
                  </li>
                  <li>
                    Evaluation 2 :{sch.evaluation2} :{' '}
                    <Link href={sch.link2} label='Document' underline='none'>
                      link
                    </Link>
                  </li>
                  <li>
                    Final evaluation :{' '}
                    <Link href={sch.linkF} label='Document' underline='none'>
                      link
                    </Link>
                  </li>
                </ul>
              </>
            )
          })}
        </card>
      </div>
      <div className='container'>
        {localStorage.getItem('userP') == 'Panel Member' ? (
          <>
            <div className='form-group'>
              <select
                value={selectEvaluType}
                onChange={(e) => filter(e.target.value)}
              >
                {/* <select  class="form-select" value={specialization} onChange={(e) => setSpecialization(e.target.value)}> */}
                <option value='Evaluation 1'>Evaluation 1</option>
                <option value='Evaluation 2'>Evaluation 2</option>
                <option value='Final Evaluation'>Final Evaluation</option>
              </select>
            </div>
          </>
        ) : localStorage.getItem('userP') == 'Supervisor' ? (
          <>
            <div className='form-group'>
              <select
                value={selectEvaluType}
                onChange={(e) => filter(e.target.value)}
              >
                {/* <select  class="form-select" value={specialization} onChange={(e) => setSpecialization(e.target.value)}> */}
                <option value='Document 1'>Document 1</option>
                <option value='Document 2'>Document 2</option>
                <option value='Final Document'>Final Document</option>
              </select>
            </div>
          </>
        ) : (
          ''
        )}
        <br />
        <br />

        {/*files display */}
        <div>
          {sdata.map((file) => {
            return (
              <div>
                {selectEvaluType === 'Document 1' ||
                selectEvaluType === 'Evaluation 1' ? (
                  <>
                    <form
                      method='get'
                      action={'http://localhost:5000/supload/' + file.ev1doc}
                    >
                      <button>
                        Download
                        <SimCardDownloadIcon />
                      </button>
                    </form>
                  </>
                ) : selectEvaluType === 'Document 2' ||
                  selectEvaluType === 'Evaluation 2' ? (
                  <>
                    <form
                      method='get'
                      action={'http://localhost:5000/supload/' + file.ev2doc}
                    >
                      <button>
                        Download
                        <SimCardDownloadIcon />
                      </button>
                    </form>
                  </>
                ) : selectEvaluType === 'Final Document' ||
                  selectEvaluType === 'Final Evaluation' ? (
                  <>
                    <form
                      method='get'
                      action={'http://localhost:5000/supload/' + file.ev3doc}
                    >
                      <button>
                        Download
                        <SimCardDownloadIcon />
                      </button>
                    </form>
                  </>
                ) : (
                  <></>
                )}
              </div>
            )
          })}
        </div>

        <>
          <Table>
            <tbody>
              <tr>
                <th>Criterion</th>
                <th>Very good</th>
                <th>Average</th>
                <th>Poor</th>
                <th>Mark</th>
              </tr>

              {data.map((markingScheme) => {
                return (
                  <>
                    <tr>
                      <td>{markingScheme.citerion}</td>
                      <td>{markingScheme.vgood}</td>
                      <td>{markingScheme.avg}</td>
                      <td>{markingScheme.poor}</td>
                      <td>{markingScheme.totMark}</td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </Table>
          <form>
            {/* striped bordered hover variant="dark" */}
            <label>Group Number :</label>
            <input
              type='text'
              id='groupNo'
              value={params.gid}
              onChange={(e) => setGroupNo(e.target.value)}
            />
            <Table>
              <thead>
                <tr>
                  <th>Citerion</th>
                  {/* <th>Comment</th> */}
                  <th>Mark</th>
                </tr>
              </thead>
              <tbody>
                {/* here */}
                {data.map((markingScheme, index) => {
                  return (
                    <>
                      <tr>
                        <td>{markingScheme.citerion}</td>
                        {/* <td>
                      <input type='text'
                       onChange={(e)=>setComm(e,index)} />
                    </td> */}
                        <td>
                          <input
                            type='number'
                            onChange={(e) => setVal(e, index)}
                          />
                        </td>
                      </tr>
                    </>
                  )
                })}
                <tr>
                  <td>Total Mark :</td>
                  <td>
                    <input type='text' value={total} />
                  </td>
                </tr>
              </tbody>
            </Table>
            <button
              onClick={() => {
                Submit(selectEvaluType)
              }}
            >
              Submit marks
            </button>
          </form>
        </>
      </div>
    </>
  )
}
