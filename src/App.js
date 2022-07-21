
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';

import './App.css';
import { Context } from './context/context';
import OverlayMain from './layout/overlay/OverlayMain';
import TopMain from './layout/top/TopMain';
import NavMain from './component/nav/NavMain';
import StatMain from './component/stat/StatMain';
import AuthForm from './page/auth/AuthForm';
import ClubForm from './page/club/ClubForm';
import ClubMain from './page/club/ClubMain';
import ClubIndex from './page/club/ClubIndex';
import TaskForm from './page/task/TaskForm';
import TaskMain from './page/task/TaskMain';
import UserForm from './page/user/UserForm';
import TicketForm from './page/ticket/TicketForm';
import TicketIndex from './page/ticket/TicketIndex';
import WorkoutMain from './page/workout/WorkoutMain'
import WorkoutIndex from './page/workout/WorkoutIndex';
import TaskIndex from './page/task/TaskIndex';

export default function App() {
  const {
    statmainstate,
    navmainstate,
    

  } = useContext(Context)

  return (
      <div className="App">
        <TopMain >
        <OverlayMain>
        <main className="relative">
          <section className="sticky top-0 left-0 w-screen min-h-[10vh]">
            <StatMain />
          </section>
          <section className="w-screen min-h-screen">
            <Routes>
              <Route path='/' element={<TaskMain />} /> 

              <Route path='/auth/authform' element={<AuthForm />} /> 

              <Route path='/user/userform' element={<UserForm />} /> 

              <Route path='/workout/workoutmain' element={<WorkoutMain />} /> 
              <Route path='/workout/workoutindex/:workoutid' element={<WorkoutIndex />} /> 

              <Route path='/task/taskmain' element={<TaskMain />} /> 
              <Route path='/task/taskform' element={<TaskForm />} /> 
              <Route path='/task/taskform/:taskid' element={<TaskForm />} /> 
              <Route path='/task/taskindex/:taskid' element={<TaskIndex />} /> 

              <Route path='/club/clubmain' element={<ClubMain />} /> 
              <Route path='/club/clubform' element={<ClubForm />} /> 
              <Route path='/club/clubindex/:clubid' element={<ClubIndex />} /> 

              <Route path='/ticket/ticketform/:ticketid' element={<TicketForm />} /> 
              <Route path='/ticket/ticketindex/:ticketid' element={<TicketIndex />} /> 

            </Routes> 
          </section>
          <section className="w-screen min-h-[10vh]">
            <NavMain />
          </section>
        </main>
        </OverlayMain>
        </TopMain>
      </div>

    );

}