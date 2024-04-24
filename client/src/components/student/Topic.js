import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from '../common/navBar'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload'
import { Button } from '@mui/material'
import { Card } from '@mui/material'
import './style/c.css'

export default function Topics() {
  const [data, setData] = useState([])
  const sp = localStorage.getItem('userS')

  useEffect(() => {
    axios
      .get(`http://localhost:5000/adminfile/get/${sp}`)
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
      <Card className='bod mt-5' style={{ maxWidth: 800, margin: 'auto' }}>
        <h2 style={{ margin: 'auto' }} className='text-center'>
          Research Details
        </h2>

        {data.map((row) => {
          return (
            <div>
              <tr>
                <div className='m'>{row.specialization}</div>
                 <br />
                <div className='f'>
                  <div className='m'>Description : </div>
                  <div> {row.description}</div>
                </div>
                <br />
                <div className='f'>
                  <div className='m'>Document :</div>
                  <div> {row.filepdf}</div>
                  <div>
                  <form
                    method='get'
                    action={'http://localhost:5000/upload/' + row.filepdf}
                  >
                    <Button type='submit' style={{width:"50px"}}>
                      <SimCardDownloadIcon />
                    </Button>
                    
                    </form>
                    </div>
                  <br />
                </div>
                <div className='m'>Evaluation 1</div>
                Document Submition Date: {row.ev1doc}
                <br />
                <div>
                  Precentation Start Date: {row.ev1pre_start}
                  &emsp;&emsp; Precentation end Date: {row.ev1pre_end}
                  <br />
                  <br />
                </div>
                <div className='m'>Evaluation 2</div>
                Document Submition Date: {row.ev2doc}
                <br />
                <div>
                  Precentation Start Date: {row.ev1doc}
                  &emsp;&emsp; Precentation end Date: {row.ev1doc}
                  <br />
                  <br />
                </div>
                <div className='m'>Evaluation 3</div>
                Document Submition Date: {row.ev3doc}
                <br />
                <div>
                  Precentation Start Date: {row.ev1doc}
                  &emsp;&emsp; Precentation end Date: {row.ev1doc}
                  <br />
                  <br />
                </div>
              </tr>
              <br />
            </div>
          )
        })}
      </Card>
    </div>
  )
}
