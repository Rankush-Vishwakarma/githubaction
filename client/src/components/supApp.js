import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AcceptTopic from './supervisor/acceptTopic'
import CoSupAcceptTopic from './supervisor/cAcceptTopic'

const SupApp = () => {
  return (
    <>
      <div>
        <Routes>
          <Route exact path={'/acceptTopic'} element={<AcceptTopic />} />
          <Route
            exact
            path={'/coSupAcceptTopic'}
            element={<CoSupAcceptTopic />}
          />
        </Routes>
      </div>
    </>
  )
}
export default SupApp
