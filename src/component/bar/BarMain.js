import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiBookmark3Fill, RiBookmarkFill, RiCss3Fill, RiUserAddLine } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'


import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import BadgeMain from '../../layout/badge/BadgeMain'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import PtaMain from '../pta/PtaMain'

export default function BarMain({

}) {
    const {
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
            barmainrender: <section className="">
                    <button className="">
                    <PostMain postmaindata={authstate && authstate} postmainstatic={{postmainid: 'useraddress', postmainindex: 0}} />
                    </button>
            </section>,
            barmainrenderthree: () => {
                return <section className="">
                <CardMain>
                    <button onClick={() => {
                        navigate(`/favourite/favouritemain`)
                    }} className="relative flex justify-center justify-items-center items-center">
                        <div className="absolute -top-[10px] -right-[10px]">
                        <BadgeMain badgemainstatic={{badgemainid: 'favouritespan', badgemainindex: 0}}  />
                        </div>
                        <RiBookmarkFill className="m-h5" />
                    </button>
                </CardMain>
            </section>
            } 
        },
        {
            barmainindex: 1,
            barmainrender: <section className="">
                <CardMain>
                    <button onClick={() => {
                        navigate(-1)
                    }} className="text-2xl">
                        ←
                    </button>
                </CardMain>
            </section>,
            barmainrenderthree: () => {
                const empty = []
                if(splitstatictwo === 'workout' || splitstatictwo === 'task'){
                    const filter = workoutdl[0].spreaddata.filter(data => data.breadid === splitstaticthree)
                    empty.push(filter[0])
                    if(empty.length !== 0){
                        const assign = Object.assign(empty[0], userdl[0]?.spreaddata[0])
                        return <BarMainRender props={{assign: assign, ptamainid: 'workoutiframe'}} />
                    }
                }
                if(splitstatictwo === 'club'|| splitstatictwo === 'ticket'){
                    const filter = clubdl[0].spreaddata.filter(data => data.breadid === splitstaticthree)
                    empty.push(filter[0])
                    if(empty.length !== 0){
                        const assign = Object.assign(empty[0], userdl[0]?.spreaddata[0])
                        return <BarMainRender props={{assign: assign, ptamainid: 'clubiframe'}} />
                    }
                }
                if(splitstatictwo === 'user'){
                    return <section className="">
                        <CardMain>
                            <button onClick={() => {
                                navigate(`/contract/contractmain`)
                            }} className="">
                                <RiUserAddLine className="m-h6" />
                            </button>
                        </CardMain>
                    </section>
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

    function BarMainRender({props}) {
      return (
        <div>
            <section className="">
                <CardMain>
                    <button className="">
                        <PtaMain ptamaindata={props.assign} ptamainstatic={{ptamainid: props.ptamainid}} />
                    </button>
                </CardMain>
            </section>
        </div>
      )
    }
    

    const [appstatic, setappstatic] = useApp(barmain, barmainstate.barmainid, barmainstate.barmainindex)
    const barmainrender = appstatic && appstatic

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
        <motion.main className={`grid grid-cols-12 items-center duration-500 ${barmainstyle?.main}`}>
            <section className="col-span-3">
                {barmainrender?.map(data => (<>
                    {data?.barmainrender}
                </>))}
            </section>
            <section className="col-span-6 flex justify-center items-center gap-1">
                <RiCss3Fill className='m-h6' />
                <h1 className={barmainstyle?.h1}>
                {barmainrendertwo && barmainrendertwo}
                </h1>
            </section>
            <section className="col-span-3 flex justify-end">
                {barmainrender?.map(data => (<>
                    {data?.barmainrenderthree()}
                </>))}
            </section>
        </motion.main>
    </div>
  )
}