import { Card } from '@mui/material'
import emailjs from 'emailjs-com'
import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import NavBar from './navBar'

export default function contact() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_51zjuws',
        'template8i_8Ip1wow',
        e.target,
        'user_JABO21I8Gm6sxByJH17Nu'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <div>
      <NavBar />
      <center>
        <h2>Contact Us</h2>
      </center>
      <div className='container'>
        <Card className='pb-3'>
          <form onSubmit={sendEmail}>
            <div className='row pt-5 mx-auto'>
              <div className='col-8 form-group mx-auto'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                  name='name'
                />
              </div>
              <div className='col-8 form-group pt-2 mx-auto'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email Address'
                  name='email'
                />
              </div>
              <div className='col-8 form-group pt-2 mx-auto'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Subject'
                  name='subject'
                />
              </div>
              <div className='col-8 form-group pt-2 mx-auto'>
                <textarea
                  className='form-control'
                  id=''
                  cols='30'
                  rows='8'
                  placeholder='Your message'
                  name='message'
                ></textarea>
              </div>

              <button
                style={{ width: '200px' }}
                type='submit'
                className='btn btn-primary'
                value='Send Message'
              >
                Send Message
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}
