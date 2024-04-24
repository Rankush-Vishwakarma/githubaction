import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Creategroups from './student/Creategroups'
import Registertopic from './student/Registertopic'
import ViewMyGroup from './student/ViewMyGroup'
import RequestCoSupervisor from './student/reqCoSupervisor'
import Topics from './student/Topic'
import Panaltopic from './student/Panaltopic'
import Filesub from './student/Filesub'
import TopicDetails from './student/TopicDetails'

const StudentApp = () => {
  return (
    <>
      <div>
        <Routes>
          <Route exact path={'/addgrp'} element={<Creategroups />} />
          <Route exact path={'/regtop'} element={<Registertopic />} />
          <Route exact path={'/grp'} element={<ViewMyGroup />} />
          <Route exact path={'/reqCo'} element={<RequestCoSupervisor />} />
          <Route exact path={'/topic'} element={<Topics />} />
          <Route exact path={'/subdoc'} element={<Filesub />} />
          <Route exact path={'/topdet'} element={<TopicDetails />} />
          <Route exact path={'/Panaltopic/:_id'} element={<Panaltopic />} />
        </Routes>
      </div>
    </>
  )
}
export default StudentApp
