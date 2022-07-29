import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiBookmark3Fill, RiBookmarkFill, RiCss3Fill, RiUserAddLine } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'


import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import PtaMain from '../pta/PtaMain'

export default function StatMain({

}) {
    const {
        authstate,

        userdl,
        workoutdl,
        clubdl,
        
    } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [statmainstate, setstatmainstate] = useState({statmainid: 'apptfoot', statmainindex: 0})
    const [statmainstyle, setstatmainstyle] = useState()
    const [splitstatictwo, setsplistatictwo] = useSplit(1)
    const [splitstaticthree, setsplistaticthree] = useSplit(3)

    const [statmainrendertwo, setstatmainrendertwo] = useState('')
    
    const apptfoot = [
        {
            statmainindex: 0,
            statmainrender: <section className="">
                    <button className="">
                    <PostMain postmaindata={authstate && authstate} postmainstatic={{postmainid: 'useraddress', postmainindex: 0}} />
                    </button>
            </section>,
            statmainrenderthree: () => {
                return <section className="flex flex-row">
                <CardMain>
                    <button onClick={() => {
                        navigate(`/favourite/favouritemain`)
                    }} className="">
                        <RiBookmark3Fill className="m-h5" />
                    </button>
                </CardMain>
            </section>
            } 
        },
        {
            statmainindex: 1,
            statmainrender: <section className="">
                <CardMain>
                    <button onClick={() => {
                        navigate(-1)
                    }} className="text-2xl">
                        ←
                    </button>
                </CardMain>
            </section>,
            statmainrenderthree: () => {
                const empty = []
                if(splitstatictwo === 'workout' || splitstatictwo === 'task'){
                    const filter = workoutdl[0].spreaddata.filter(data => data.breadid === splitstaticthree)
                    empty.push(filter[0])
                    if(empty.length !== 0){
                        const assign = Object.assign(empty[0], userdl[0]?.spreaddata[0])
                        return <StatMainRender props={{assign: assign, ptamainid: 'workoutiframe'}} />
                    }
                }
                if(splitstatictwo === 'club'|| splitstatictwo === 'ticket'){
                    const filter = clubdl[0].spreaddata.filter(data => data.breadid === splitstaticthree)
                    empty.push(filter[0])
                    if(empty.length !== 0){
                        const assign = Object.assign(empty[0], userdl[0]?.spreaddata[0])
                        return <StatMainRender props={{assign: assign, ptamainid: 'clubiframe'}} />
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

    const statmain = [
        {
            statmainid: 'apptfoot',
            statmainref: apptfoot,
        }
    ]

    function StatMainRender({props}) {
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
    

    const [appstatic, setappstatic] = useApp(statmain, statmainstate.statmainid, statmainstate.statmainindex)
    const statmainrender = appstatic && appstatic

    useEffect(() => {
        // if(location && location.pathname.includes('')){
        //     setstatmainstate({statmainid: 'apptfoot', statmainindex: 2})
        // }
        if(location && location.pathname.includes('main')){
            setstatmainstate({statmainid: 'apptfoot', statmainindex: 0})
        }
        if(location && location.pathname.includes('index')) {
            setstatmainstate({statmainid: 'apptfoot', statmainindex: 1})
        }

    }, [location])

    useEffect(() => {
        const filter = appul?.filter(data => data?.breadaction.includes(location.pathname.split(`/`)[1]))        
        if(filter && filter.length !== 0){
            setstatmainrendertwo(filter[0].breadtitle)
        }
    }, [location])

    window.onscroll = function (){
        if (((window.innerHeight + document.documentElement.scrollTop) >= window.innerHeight + (window.innerHeight * 0.1))) {
            setstatmainstyle({main: '!bg-white', h1: '!block '})
        } 
        if (((window.innerHeight + document.documentElement.scrollTop) < window.innerHeight + (window.innerHeight * 0.05))) {
            setstatmainstyle({main: '!bg-transparent', h1: '!hidden'})
        }
    }

  return (
    <div>
        <motion.main className={`grid grid-cols-12 items-center duration-500 ${statmainstyle?.main}`}>
            <section className="col-span-3">
                {statmainrender?.map(data => (<>
                    {data?.statmainrender}
                </>))}
            </section>
            <section className="col-span-6 flex justify-center items-center gap-1">
                <RiCss3Fill className='m-h6' />
                <h1 className={statmainstyle?.h1}>
                {statmainrendertwo && statmainrendertwo}
                </h1>
            </section>
            <section className="col-span-3 flex justify-end">
                {statmainrender?.map(data => (<>
                    {data?.statmainrenderthree()}
                </>))}
            </section>
        </motion.main>
    </div>
  )
}