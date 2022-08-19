import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiBookmark3Fill, RiBookmarkFill, RiCss3Fill, RiInboxLine, RiMenu5Line, RiSearchLine, RiUserAddLine } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'


import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import BadgeMain from '../../layout/badge/BadgeMain'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import DtaMain from '../dta/DtaMain.tsx'
import PtaMain from '../pta/PtaMain'

export default function BarMain() {
    const {
        setappstate, appstate,

        authstate,
        userdl,
        workoutdl,
        clubdl,
        
    } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [barmainstate, setbarmainstate] = useState({barmainid: 'apptfoot', barmainindex: 0})
    const [barmainstyle, setbarmainstyle] = useState()
    const [splitstatictwo, setsplistatictwo] = useSplit(1)
    const [splitstaticthree, setsplistaticthree] = useSplit(3)

    const [barmainrendertwo, setbarmainrendertwo] = useState('')

    useEffect(() => {
        // if(location && location.pathname.includes('')){
        //     setbarmainstate({barmainid: 'apptfoot', barmainindex: 2})
        // }
        setappstate()
        if(location && location.pathname.includes('main')){
            setbarmainstate({barmainid: 'apptfoot', barmainindex: 0})
        }
        if(location && location.pathname.includes('index')) {
            setbarmainstate({barmainid: 'apptfoot', barmainindex: 1})
        }

    }, [location])

    useEffect(() => {
        const filter = appul?.filter(data => data?.breadaction.includes(location.pathname.split(`/`)[1]))        
        if(filter && filter.length !== 0){
            setbarmainrendertwo(filter[0].breadtitle)
        }
    }, [location])

    window.onscroll = function (){
        if (((window.innerHeight + document.documentElement.scrollTop) >= window.innerHeight + (window.innerHeight * 0.07))) {
            setbarmainstyle({main: '!bg-white', h1: '!block '})
        } 
        if (((window.innerHeight + document.documentElement.scrollTop) < window.innerHeight + (window.innerHeight * 0.07))) {
            setbarmainstyle({main: '!bg-transparent', h1: '!hidden'})
        }
    }

    const apptfoot = [
        {
            barmainindex: 0,
            barmainrender: () => {
                // if(userdl[0]?.spreaddata === 'undefined') return null
                const ref = userdl[0]?.spreaddata && Object.assign(...userdl[0]?.spreaddata)
                // console.log('ref', ref)
                return appTfootRender({
                            props:{
                                navigate: () => {navigate(`/user/userindex/${authstate?.user?.id}`)},
                                component: <BadgeMain badgemainstatic={{badgemainid: 'messagespan', badgemainindex: 0}}  />,
                                icon: <PostMain postmaindata={ref && ref} postmainstatic={{postmainid: 'useraddress', postmainindex: 0}} />,
                            },
                        })

            },
            barmainrenderthree: () => {
                return appTfootRender({
                            props:{
                                navigate: () => {},
                                // component: <BadgeMain badgemainstatic={{badgemainid: 'favouritespan', badgemainindex: 0}}  />,
                                // icon:<RiBookmarkFill className="m-h5" />
                                icon: <section className="flex flex-row items-center gap-5">
                                    <DtaMain dtamaindata={{}} dtamainstatic={{dtamainid: 'searchiframe', dtamainindex: 0}}><RiSearchLine className="m-h6" /></DtaMain>
                                    <DtaMain dtamaindata={{}} dtamainstatic={{dtamainid: 'appiframe', dtamainindex: 0}}><RiMenu5Line className="m-h6" /></DtaMain>
                                </section>
                                
                            },
                        })
            } 
        },
        {
            barmainindex: 1,
            barmainrender:() => {
                 return appTfootRender({
                            props:{
                                navigate: () => {navigate(-1)},
                                icon:<p className="text-2xl">←</p>
                            },
                        })
            
            },
            barmainrenderthree: () => {
                const empty = []

                if(splitstatictwo === 'workout' || splitstatictwo === 'task'){
                    const filter = workoutdl[0].spreaddata.filter(data => data.breadid === splitstaticthree)
                    empty.push(Object.assign(...filter))
                    if(empty.length !== 0){
                        const assign = Object.assign(empty[0], userdl[0]?.spreaddata[0])
                        // return <BarMainRenderThree props={{navigate: () => {}}} icon={<PtaMain ptamaindata={assign} ptamainstatic={{ptamainid:'workoutiframe'}} ptamainstyle={`!m-h5`} />} />
                        return appTfootRender({
                            props:{
                                navigate: () => {},
                                icon:<PtaMain ptamaindata={assign} ptamainstatic={{ptamainid:'workoutiframe'}} ptamainstyle={`!m-h5`} />
                            },
                        })
                    }
                }

                if(splitstatictwo === 'club'|| splitstatictwo === 'ticket'){
                    const filter = clubdl[0].spreaddata.filter(data => data.breadid === splitstaticthree)
                    empty.push(Object.assign(...filter))
                    if(empty.length !== 0){
                        const assign = Object.assign(empty[0], userdl[0]?.spreaddata[0])
                        // return <BarMainRenderThree props={{navigate: () => {}}}  icon={<PtaMain ptamaindata={assign} ptamainstatic={{ptamainid:'clubiframe'}} ptamainstyle={`!m-h5`} />} />
                        return appTfootRender({
                            props:{
                                navigate: () => {},
                                icon:<PtaMain ptamaindata={assign} ptamainstatic={{ptamainid:'clubiframe'}} ptamainstyle={`!m-h5`} />
                            },
                        })
                    }
                }

                if(splitstatictwo === 'user'){
                    return appTfootRender({
                        props:{
                            navigate: () => {navigate(`/message/messagemain`)},
                            component:<BadgeMain badgemainstatic={{badgemainid: 'messagespan', badgemainindex: 0}}  />,
                            icon:<RiInboxLine />
                        },
                    })
                }
            } 
        },
    ]

    const barmain = [
        {
            barmainid: 'apptfoot',
            barmainref: apptfoot,
        }
    ]
    

    const [appstatic, setappstatic] = useApp(barmain, barmainstate.barmainid, barmainstate.barmainindex)

  return (
    <div>
        <motion.main className={`h-[70px] grid grid-cols-12 items-center duration-500 ${barmainstyle?.main}`}>
            <section className="col-span-3">
                <CardMain>
                {appstatic?.map((data, index) => (<>
                    <div key={index}>
                    {data?.barmainrender()}
                    </div>
                </>))}
                </CardMain>
            </section>
            <section className="col-span-6 flex justify-center items-center gap-1">
                <RiCss3Fill className='m-h6' />
                <h1 className={barmainstyle?.h1}>
                {barmainrendertwo && barmainrendertwo}
                </h1>
            </section>
            <section className="col-span-3 flex justify-end items-center">
                <CardMain>
                {appstatic?.map((data, index) => (<>
                <div key={index}>
                    {data?.barmainrenderthree()}
                </div>
                </>))}
                </CardMain>
            </section>
        </motion.main>
    </div>
  )
}

    export function appTfootRender({props}) {
        const {navigate, component, icon} = props
        return (
            <div>
                <section className="">
                    <button onClick={() => {navigate()}} className="relative m-h6">
                        <div className="absolute -top-[10px] -right-[10px]">
                        {component}
                        </div>
                        {icon}
                    </button>
                </section>
            </div>
      )
    }
