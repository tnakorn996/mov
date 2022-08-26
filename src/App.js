
import React, {useState, useRef, useEffect, useContext} from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion'

import './App.css';
import { Context } from './context/context';
import OverlayMain from './layout/overlay/OverlayMain';
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
import AchievementMain from './page/achievement/AchievementMain.tsx';
import AchievementIndex from './page/achievement/AchievementIndex.tsx';
import MessageMain from './page/message/MessageMain.tsx';
import MessageIndex from './page/message/MessageIndex.tsx';
import MessageForm from './page/message/MessageForm.tsx';
import AwardIndex from './page/award/AwardIndex.tsx';
import AwardForm from './page/award/AwardForm.tsx';
import ArticleIndex from './page/article/ArticleIndex.tsx';
import AppMain from './page/app/AppMain.tsx';
import GraphMain from './component/graph/GraphMain.tsx';
import SearchMain from './page/search/SearchMain.tsx';
import AppIndex from './page/app/AppIndex.tsx';
import GuideMain from './page/guide/GuideMain.tsx';
import GuideIndex from './page/guide/GuideIndex.tsx';
import SettingMain from './page/setting/SettingMain.tsx';
import SettingIndex from './page/setting/SettingIndex.tsx';
import ThemeForm from './page/theme/ThemeForm.tsx';
import ImageForm from './page/image/ImageForm.tsx';
import ImageIndex from './page/image/ImageIndex.tsx';
import FeedbackIndex from './page/feedback/FeedbackIndex.tsx';
import QualityIndex from './page/quality/QualityIndex.tsx';
import FeedbackMain from './page/feedback/FeedbackMain.tsx';

export default function App() {
  const {
    appstate,

    authstate,

  } = useContext(Context)
  const location = useLocation()
  const navigate = useNavigate()
  // console.log('appstate', appstate)

  return (
      <div className="App">
        <OverlayMain>
        <GraphMain graphmainstatic={{graphmainid: 'messagebase', graphmainindex: 0}} />
        <GraphMain graphmainstatic={{graphmainid: 'guidebase', graphmainindex: 0}} />
        <motion.main className={`relative min-h-screen  duration-300 ${appstate && `!scale-95`}`}>
          <section className="z-30 fixed top-0 left-0 w-screen">
            {/* <button onClick={() => {
             navigate(`/guide/guidemain`)
            }} className="m-button">Message</button> */}

            {(authstate !== null && authstate !== undefined) && <BarMain />}
          </section>
          <section className="w-screen min-h-[80vh]">
            {/* <AnimatePresence exitBeforeEnter> */}
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<AuthMain />} /> 
              <Route path='/app/appmain' element={<AppMain />} /> 
              <Route path='/app/appindex/:id' element={<AppIndex />} /> 

              <Route path='/auth/authmain' element={<AuthMain />} /> 
              <Route path='/auth/authform' element={<AuthForm />} /> 

              <Route path='/user/userindex/:userid' element={<UserIndex />} /> 
              <Route path='/user/userform' element={<UserForm />} /> 

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
              
              <Route path='/achievement/achievementmain' element={<AchievementMain />} /> 
              <Route path='/achievement/achievementindex/:achievementid' element={<AchievementIndex />} /> 

              <Route path='/award/awardindex/:awardid' element={<AwardIndex />} /> 
              <Route path='/award/awardform/:awardid' element={<AwardForm />} /> 

              <Route path='/weight/weightindex/:id' element={<SearchMain />} /> 

              <Route path='/quality/qualityindex/:id' element={<QualityIndex />} /> 

              <Route path='/favourite/favouritemain' element={<FavouriteMain />} /> 

              <Route path='/article/articleindex/:articleid' element={<ArticleIndex />} /> 

              <Route path='/search/searchmain' element={<SearchMain />} /> 

              <Route path='/setting/settingmain' element={<SettingMain />} /> 
              <Route path='/setting/settingindex/:id' element={<SettingIndex />} /> 

              <Route path='/theme/themeform' element={<ThemeForm />} /> 

              <Route path='/image/imageform' element={<ImageForm />} /> 
              <Route path='/image/imageindex/:id' element={<ImageIndex />} /> 

              <Route path='/message/messagemain' element={<MessageMain />} /> 
              <Route path='/message/messageindex/:messageid' element={<MessageIndex />} /> 
              {/* <Route path='/message/messageform' element={<MessageForm />} />  */}

              <Route path='/guide/guidemain' element={<GuideMain />} /> 
              <Route path='/guide/guideindex/:guideid' element={<GuideIndex />} /> 

              <Route path='/feedback/feedbackmain' element={<FeedbackMain />} /> 
              <Route path='/feedback/feedbackindex/:id' element={<FeedbackIndex />} /> 

            </Routes> 
            {/* </AnimatePresence> */}
          </section>
          <section className="z-30 w-screen h-[10vh]">
            <NavMain />
          </section>
        </motion.main>
        <main className="">
            {(appstate && appstate.appid === 'backdropmain') && <BackdropMain />}
        </main>
        </OverlayMain>
      </div>

    );

}