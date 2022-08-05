import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { appul } from '../../content/content'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../../layout/card/CardMain'
import CtaMain from '../cta/CtaMain'
import FieldMain from '../field/FieldMain'

export default function NavbarMain({
  navmainstatic,
  
}) {
  const {
    appstate,

    authstate,
    taskdl,
    ticketdl,
    awarddl,

  } = useContext(Context)
  const location = useLocation()
  const split = location.pathname.split('/');
  const navigate = useNavigate()
  const [splitstatic, setsplitstatic] = useSplit(1)
  const [navmainstate, setnavmainstate] = useState({navmainid: 'apptbody', navmainindex: 0})

  const apptbody = [
    {
      navmainindex: 0,
      navmainrender: () => {
        return <div className="w-screen p-[5px] bg-white">
              <div className="grid grid-flow-col text-center items-center  ">
                {appul?.slice(3, 6)?.map((data, index) => (<>
                  <article onClick={() => {
                    navigate(data.breadaction)
                  }} className={`m-h5 p-[10px] flex flex-col items-center  rounded-sm duration-500 ${data?.breadid?.includes(splitstatic) ? `!bg-slate-200` : ``} `}>
                    {data.breadicon}
                    <p className="m-h2">{data.breadtitle}</p>
                  </article>
                </>))}
              </div>
          </div>
      }
    },
  ]

  const authtbody = [
    {
      navmainindex: 0,
      navmainrender: () => {
      return <CardMain>
        <motion.div  initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className="">
        <CtaMain ctamainstatic={{ctamainid: 'authembed', ctamainindex: null}} />
        </motion.div>
      </CardMain>
      }
    }
  ]

  const workouttbody = [
    {
      navmainindex: 0,
      navmainrender: () => {
        if((taskdl[0]?.spreaddata && (taskdl[0]?.spreaddata?.filter(data => data?.workoutid === split[3])).length === 0)) {
          return <CardMain>
            <motion.div  initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className="">
            <FieldMain fieldmainstatic={{fieldmainid: 'taskinput', fieldmainindex: 0}} />
            </motion.div>
          </CardMain>
        } else {
          return null
        }
      }
    }
  ]

  const clubtbody = [
    {
      navmainindex: 0,
      navmainrender: () => {
        if(ticketdl[0]?.spreaddata && (ticketdl[0]?.spreaddata?.filter(data => data?.clubid === split[3])).length === 0) {
          return <CardMain>
          <motion.div  initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className="">
          <FieldMain fieldmainstatic={{fieldmainid: 'ticketinput', fieldmainindex: 0}} />
          </motion.div>
        </CardMain>
        } else {
          return null
        }
      }
    },
  ]

  const achievementtbody = [
    {
      navmainindex: 0,
      navmainrender: () => {
        const filter = awarddl[0]?.spreaddata?.filter(data => data?.achievementid === split[3])
        const filtertwo = awarddl[0]?.spreaddatatwo?.filter(data => data?.breadid === split[3])
        // console.log('filtertwo', filtertwo[0]?.breadbool())
        if (awarddl[0]?.spreaddata 
          && filter.length === 0
          && filtertwo[0]?.breadbool()) {
          return <CardMain>
          <motion.div  initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className="">
          <FieldMain fieldmainstatic={{fieldmainid: 'awardinput', fieldmainindex: 0}} />
          </motion.div>
        </CardMain>
        } else {
          return null;
        }
      }
    },
  ]

  const navbarmain = [
    {
      navmainid: 'authtbody',
      navmainref: authtbody,
    },
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
    {
      navmainid: 'achievementtbody',
      navmainref: achievementtbody,
    },
  ]

  const [appstatic, setappstatic] = useApp(navbarmain, navmainstate.navmainid, navmainstate.navmainindex, splitstatic)

  useEffect(() => {
    if((location.pathname.includes('main') || location.pathname.includes(''))) {
      setnavmainstate({navmainid: 'apptbody', navmainindex: 0})
    }
    if((location.pathname.includes('form'))) {
      setnavmainstate({navmainid: 'apptbody', navmainindex: 1})
    }
    if((location.pathname.includes('authmain'))) {
      if( authstate === undefined ||  authstate ===  null){
        setnavmainstate({navmainid: 'authtbody', navmainindex: 0})
      }
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
            {appstatic?.map(data => (<>
            <div className="w-full">
              {data?.navmainrender()}
            </div>
            </>))}
        </section>
        </main>
    </div>
  )
}
