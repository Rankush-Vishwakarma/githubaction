import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AdminApp from './components/adminApp'
import App from './components/App'
import PanelApp from './components/panelApp'
import StudentApp from './components/studentApp'
import SupApp from './components/supApp'

ReactDOM.render(
  <BrowserRouter>
    <App />
    <AdminApp />
    <PanelApp />
    <StudentApp />
    <SupApp />
  </BrowserRouter>,
  document.getElementById('root')
)
