
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion'

import './App.css';
import { Context } from './context/context';
import OverlayMain from './layout/overlay/OverlayMain';
import TopMain from './layout/top/TopMain';
import NavMain from './component/nav/NavMain';
import BarMain from './component/bar/BarMain';
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
import AuthMain from './page/auth/AuthMain';
import ContractMain from './page/contract/ContractMain';
import ScreenMain from './layout/screen/ScreenMain.tsx';
import AchievementMain from './page/achievement/AchievementMain.tsx';
import AchievementIndex from './page/achievement/AchievementIndex.tsx';

export default function App() {
  const {
    setappstate, appstate,

    authstate,
    

  } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()

  return (
      <div className="App">
        <OverlayMain>
        <TopMain >
        <main className="relative">
          <section className="z-30 fixed top-0 left-0 w-screen">
            {/* <button onClick={() => {
              setappstate({appid: 'backdropmain', appidtwo: 'previewmain', appidthree: 'apparticle', appindexthree: 0})
            }} className="m-button">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quia?</button> */}
            {(authstate !== null && authstate !== undefined) && <BarMain />}
          </section>
          <section className="w-screen min-h-[80vh]">
            {/* <AnimatePresence> */}
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<AuthMain />} /> 

              <Route path='/auth/authmain' element={<AuthMain />} /> 
              <Route path='/auth/authform' element={<AuthForm />} /> 

              <Route path='/user/userindex/:userid' element={<UserIndex />} /> 
              <Route path='/user/userform/:userid' element={<UserForm />} /> 

              <Route path='/contract/contractmain' element={<ContractMain />} /> 
              {/* <Route path='/contract/contractform/:contractid' element={<ContractForm />} />  */}

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
              
              <Route path='/achievement/achievementmain' element={<AchievementMain />} /> 
              <Route path='/achievement/achievementindex/:achievementid' element={<AchievementIndex />} /> 

            </Routes> 
            {/* </AnimatePresence> */}
          </section>
          <section className="z-30 w-screen h-[10vh]">
            <NavMain />
          </section>
          <section className="">
            {(appstate && appstate.appid === 'backdropmain') && <BackdropMain />}
          </section>
        </main>
        </TopMain>
        </OverlayMain>
      </div>

    );

}