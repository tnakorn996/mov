import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiBookmark3Fill, RiBookmarkFill, RiCss3Fill, RiInboxLine, RiMenu5Line, RiUserAddLine } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'


import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import BadgeMain from '../../layout/badge/BadgeMain'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import AtaMain from '../ata/AtaMain.tsx'
import PtaMain from '../pta/PtaMain'

export default function BarMain() {
    const {
        setappstate,

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
    
    const apptfoot = [
        {
            barmainindex: 0,
            barmainrender: () => {
                return appTfootRender({
                            props:{
                                navigate: () => {navigate(`/user/userindex/${authstate?.user?.id}`)},
                                component: <BadgeMain badgemainstatic={{badgemainid: 'messagespan', badgemainindex: 0}}  />,
                                icon: <PostMain postmaindata={authstate && authstate} postmainstatic={{postmainid: 'useraddress', postmainindex: 0}} />,
                            },
                        })

            },
            barmainrenderthree: () => {
                return appTfootRender({
                            props:{
                                navigate: () => {},
                                // component: <BadgeMain badgemainstatic={{badgemainid: 'favouritespan', badgemainindex: 0}}  />,
                                // icon:<RiBookmarkFill className="m-h5" />
                                icon: <AtaMain atamaindata={{spreadhref: `/app/appmain`}} atamainstatic={{atamainid: 'appiframe', atamainindex: 0}}><RiMenu5Line className="m-h6" /></AtaMain>
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
                    empty.push(filter[0])
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
                    empty.push(filter[0])
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

    useEffect(() => {
        // if(location && location.pathname.includes('')){
        //     setbarmainstate({barmainid: 'apptfoot', barmainindex: 2})
        // }
        if(location && location.pathname.includes('main')){
            setbarmainstate({barmainid: 'apptfoot', barmainindex: 0})
        }
        if(location && location.pathname.includes('index')) {
            setbarmainstate({barmainid: 'apptfoot', barmainindex: 1})
        }
        setappstate()

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

  return (
    <div>
        <motion.main className={`h-[70px] grid grid-cols-12 items-center duration-500 ${barmainstyle?.main}`}>
            <section className="col-span-3">
                <CardMain>
                {appstatic?.map(data => (<>
                    {data?.barmainrender()}
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
                {appstatic?.map(data => (<>
                    {data?.barmainrenderthree()}
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
                    <button onClick={navigate} className="relative m-h6">
                        <div className="absolute -top-[10px] -right-[10px]">
                        {component}
                        </div>
                        {icon}
                    </button>
                </section>
            </div>
      )
    }
