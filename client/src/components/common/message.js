import React, { useState, useEffect } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import axios from 'axios'
import './css/message.css'
import NavBar from './navBar'
import { useParams } from 'react-router'

export default function Message() {
  const params = useParams()
  const [messageList, setMessageList] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')
  const username = localStorage.getItem('userN')
  const email = localStorage.getItem('user')
  const position = localStorage.getItem('userP')
  const gid = params.gid

  const loadData = () => {
    axios.get(`http://localhost:5000/message/${gid}`)
      .then((response) => {
        setMessageList(response.data)
    
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        gid: gid,
        author: username,
        email: email,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      }

      axios
        .post('http://localhost:5000/message/add/', messageData)
        .then((res) => console.log(res.data))

      // setMessageList(...messageList, messageData)
      // setData(data.filter((el) => el._id != top._id))
      axios
        .get(`http://localhost:5000/message/${gid}`)
        .then((response) => {
          setMessageList(response.data)
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })

      setCurrentMessage('')
      window.location.reload()
    }
  }

  return (
    <div data-testid="msg-1">
      <NavBar />
      <div className='container chat-window pt-4'>
        <div className='chat-header'>
          <p>Group ID :- {gid}</p>
        </div>
        <div className='chat-body'>
          <ScrollToBottom className='message-container'>
            {messageList.map((messageContent) => {
              return (
                // <Messages username={username} messageContent={messageContent} />
                <div
                  className='message'
                  id={email === messageContent.email ? 'you' : 'other'}
                >
                  <div>
                    <div className='message-content'>
                      <p>{messageContent.message}</p>
                    </div>
                    <div className='message-meta'>
                      <p id='author'>{messageContent.author}</p>
                      <p id='time'>{messageContent.time}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </ScrollToBottom>
        </div>
        <div className='chat-footer'>
          <input
            type='text'
            value={currentMessage}
            placeholder='Hey...'
            onChange={(event) => {
              setCurrentMessage(event.target.value)
            }}
            onKeyPress={(event) => {
              event.key === 'Enter' && sendMessage()
            }}
          />
          <button onClick={sendMessage}>SEND &#9658;</button>
        </div>
      </div>
    </div>
  )
}
