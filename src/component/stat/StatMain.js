import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import PtaMain from '../pta/PtaMain'

export default function StatMain({

}) {
    const {

        authstate,

    } = useContext(Context)
    const {

        userdl,
        workoutdl,
        
    } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const split = location.pathname.split('/');
    const [statmainstate, setstatmainstate] = useState({statmainid: 'apptfoot', statmainindex: 0})
    const [statmainstyle, setstatmainstyle] = useState()

    const [statmainrendertwo, setstatmainrendertwo] = useState('')
    const apptfoot = [
        {
            statmainindex: 0,
            statmainrender: <section className="">
                <CardMain>
                    <button onClick={() => {
                        navigate(`/user/userform`)
                    }} className="">
                    <PostMain postmaindata={authstate && authstate} postmainstatic={{postmainid: 'useraddress', postmainindex: null}} />
                    </button>
                </CardMain>
            </section>,
            statmainrenderthree: () => {
                return <section className="">
                <CardMain>
                    <button onClick={() => {
                        navigate(`/favourite/favouritemain`)
                    }} className="">
                        fav
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
                    }} className="">
                      ← back
                    </button>
                </CardMain>
            </section>,
            statmainrenderthree: () => {
                const filter = workoutdl[0].spreaddata.filter(data => data.breadid === split[3])
                if(filter.length !== 0){
                    const assign = Object.assign(filter[0], userdl[0]?.spreaddata[0])
                    return <section className="">
                        <CardMain>
                            <button className="">
                                <PtaMain ptamaindata={assign} ptamainstatic={{ptamainid: 'workoutiframe'}} />
                            </button>
                        </CardMain>
                    </section>
                } else {
                    return <section className="">
                        <CardMain>
                            <button className="">
                                share
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

    const [appstatic, setappstatic] = useApp(statmain, statmainstate.statmainid, statmainstate.statmainindex)
    const statmainrender = appstatic && appstatic

    useEffect(() => {
        if(location && location.pathname.includes('main')){
            setstatmainstate({statmainid: 'apptfoot', statmainindex: 0})
        }
        else {
            setstatmainstate({statmainid: 'apptfoot', statmainindex: 1})
        }
    }, [location])

    useEffect(() => {
        const filter = appul?.filter(data => data?.breadaction === location.pathname)        
        if(filter && filter.length !== 0){
            setstatmainrendertwo(filter[0].breadtitle)
        }
    }, [location])


    window.onscroll = function (){
        if (((window.innerHeight + document.documentElement.scrollTop) >= window.innerHeight + (window.innerHeight * 0.2))) {
            setstatmainstyle('!bg-white')
        } 
        if (((window.innerHeight + document.documentElement.scrollTop) < window.innerHeight + (window.innerHeight * 0.1))) {
            setstatmainstyle('!bg-transparent')
        }
    }

  return (
    <div>
        <motion.main className={`grid grid-cols-12 items-center duration-1000 ${statmainstyle}`}>
            <section className="col-span-3">
                {statmainrender?.map(data => (<>
                    {data?.statmainrender}
                </>))}
            </section>
            <section className="col-span-6 flex justify-center items-center">
                {statmainrendertwo && statmainrendertwo}
            </section>
            <section className="col-span-3">
                {statmainrender?.map(data => (<>
                    {data?.statmainrenderthree()}
                </>))}
            </section>
        </motion.main>
    </div>
  )
}
