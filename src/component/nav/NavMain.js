import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { appul } from '../../content/content'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../../layout/card/CardMain'
import FieldMain from '../field/FieldMain'

export default function NavbarMain({
  navmainstatic,
  
}) {
  const {
    appstate,

    taskdl,
    ticketdl,

  } = useContext(Context)
  const location = useLocation()
  const split = location.pathname.split('/');
  const navigate = useNavigate()
  const [splitstatic, setsplitstatic] = useSplit(1)
  const [navmainstate, setnavmainstate] = useState({navmainid: 'apptbody', navmainindex: 0})

  const apptbody = [
    {
      navmainindex: 0,
      navmainrender: 
          <div className="p-[5px] bg-white">
              <div className="grid grid-flow-col text-center items-center  ">
                <article onClick={() => {
                  navigate(appul[2].breadaction)
                }} className={`m-h5 p-[10px] flex flex-col items-center  rounded-sm duration-500 ${splitstatic === 'workout' ? `!bg-slate-200` : ``} `}>
                  {appul[2].breadicon}
                  <p className="m-h2">{appul[2].breadtitle}</p>
                </article>

                <article onClick={() => {
                  navigate(appul[3].breadaction)
                }} className={`m-h5 p-[10px] flex flex-col items-center  rounded-sm duration-500 ${splitstatic === 'club' ? `!bg-slate-200` : ``} `}>
                  {appul[3].breadicon}
                  <p className="m-h2">{appul[3].breadtitle}</p>
                  
                </article>
              </div>
          </div>
        ,
    },

  ]

  const workouttbody = [
    {
      navmainindex: 0,
      navmainrender: (taskdl[0]?.spreaddata && (taskdl[0]?.spreaddata?.filter(data => data?.workoutid === split[3])).length === 0) ?  
      <CardMain>
        <motion.div  initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className=""><FieldMain fieldmainstatic={{fieldmainid: 'taskinput', fieldmainindex: 0}} /></motion.div> 
      </CardMain>
      : null,
    }
  ]

  const clubtbody = [
    {
      navmainindex: 0,
      navmainrender: (ticketdl[0]?.spreaddata && (ticketdl[0]?.spreaddata?.filter(data => data?.clubid === split[3])).length === 0) ?  
      <CardMain>
        <motion.div  initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className=""><FieldMain fieldmainstatic={{fieldmainid: 'ticketinput', fieldmainindex: 0}} /></motion.div> 
      </CardMain>
      : null,
    },
  ]

  // const tickettbody = [
  //   {
  //     navmainindex: 0,
  //     navmainrender: <button className="w-full  m-button">Leader board</button>,
  //   },
  // ]

  const navbarmain = [
    {
      navmainid: 'apptbody',
      navmainref: apptbody,
    },
    {
      navmainid: 'workouttbody',
      navmainref: workouttbody,
    },
    {
      navmainid: 'clubtbody',
      navmainref: clubtbody,
    },
    // {
    //   navmainid: 'tickettbody',
    //   navmainref: tickettbody,
    // },
  ]

  const [appstatic, setappstatic] = useApp(navbarmain, navmainstate.navmainid, navmainstate.navmainindex, splitstatic)
  const navmainrender = appstatic && appstatic

  useEffect(() => {
    navigate(`/auth/authform`)
  }, [])
  
  useEffect(() => {
    if((location.pathname.includes('main') || location.pathname.includes(''))) {
      setnavmainstate({navmainid: 'apptbody', navmainindex: 0})
    }
    if((location.pathname.includes('index'))) {
      const split = location.pathname.split('/');
      setnavmainstate({navmainid: `${split[1]}tbody`, navmainindex: 0})
    }
  }, [location])
  
  return (
    <div>
        <main className="">
        <section className="z-30 fixed bottom-0 left-0 w-screen flex items-center">
            {navmainrender?.map(data => (<>
            <div className="w-full">
              {data?.navmainrender}
            </div>
            </>))}
        </section>
        </main>
    </div>
  )
}
