import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './common/login'
import Registration from '../components/common/Registration'
import DashBoard from './common/dashBoard'
import Contact from './common/contact'
import Test from './common/test'
import Message from './common/message'

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route exact path={'/'} element={<Login />} />
          <Route exact path='/logout' element={<Login logout={true} />} />
          <Route exact path={'/reg'} element={<Registration />} />
          <Route exact path='/dashBoard' element={<DashBoard />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/t' element={<Test />} />
          <Route exact path={'/message/:gid'} element={<Message />} />
        </Routes>
      </div>
    </>
  )
}
export default App
