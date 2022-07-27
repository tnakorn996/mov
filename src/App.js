
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'

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
import TicketMain from './page/ticket/TicketMain';
import FavouriteMain from './page/favourite/FavouriteMain';
import BackdropMain from './layout/backdrop/BackdropMain';
import UserIndex from './page/user/UserIndex';

export default function App() {
  const {
    statmainstate,
    navmainstate,

    authstate,
    

  } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()


  return (
      <div className="App">
        <BackdropMain>
        <OverlayMain>
        <TopMain >
        <main className="relative">
          <section className="z-30 sticky top-0 left-0 w-screen h-[10vh]">
            {authstate && <StatMain />}
          </section>
          <section className="w-screen min-h-[80vh]">
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<AuthForm />} /> 

              <Route path='/auth/authform' element={<AuthForm />} /> 

              <Route path='/user/userindex/:userid' element={<UserIndex />} /> 
              <Route path='/user/userform/:userid' element={<UserForm />} /> 

              <Route path='/workout/workoutmain' element={<WorkoutMain />} /> 
              <Route path='/workout/workoutindex/:workoutid' element={<WorkoutIndex />} /> 

              <Route path='/task/taskmain' element={<TaskMain />} /> 
              <Route path='/task/taskform' element={<TaskForm />} /> 
              <Route path='/task/taskform/:taskid' element={<TaskForm />} /> 
              <Route path='/task/taskindex/:taskid' element={<TaskIndex />} /> 

              <Route path='/club/clubmain' element={<ClubMain />} /> 
              <Route path='/club/clubform' element={<ClubForm />} /> 
              <Route path='/club/clubindex/:clubid' element={<ClubIndex />} /> 

              <Route path='/ticket/ticketmain' element={<TicketMain />} /> 
              <Route path='/ticket/ticketform/:ticketid' element={<TicketForm />} /> 
              <Route path='/ticket/ticketindex/:ticketid' element={<TicketIndex />} /> 

              <Route path='/favourite/favouritemain' element={<FavouriteMain />} /> 
            </Routes> 
          </section>
          <section className="z-30 w-screen h-[10vh]">
            {authstate && <NavMain />}
          </section>
        </main>
        </TopMain>
        </OverlayMain>
        </BackdropMain>
      </div>

    );

}