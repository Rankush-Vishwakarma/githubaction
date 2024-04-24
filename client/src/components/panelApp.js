import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EvaluateTopice from './panelMember/evaluateTopic'
import ViewMarkingSchemes from './panelMember/markingScheme'

const PanelApp = () => {
  return (
    <>
      <div>
        <Routes>
          <Route
            exact
            path='/viewMarking/:gid'
            element={<ViewMarkingSchemes />}
          />
          <Route exact path='/evaluate' element={<EvaluateTopice />} />
        </Routes>

        {/* <Fpage/> */}
      </div>
    </>
  )
}
export default PanelApp
