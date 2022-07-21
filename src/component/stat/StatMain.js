import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import CardMain from '../../layout/card/CardMain'
import BioMain from '../bio/BioMain'

export default function StatMain({

}) {
    const {

        authstate,

    } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const [statmainstate, setstatmainstate] = useState({statmainid: 'apptfoot', statmainindex: 0})

    const [statmainrendertwo, setstatmainrendertwo] = useState('')

    const apptfoot = [
        {
            statmainindex: 0,
            statmainrender: <section className="">
                <CardMain>
                    <button onClick={() => {
                        navigate(`/user/userform`)
                    }} className="">
                    <BioMain biomainstatic={{biomainid:'useraddress', biomainindex: 0}} />
                    </button>
                </CardMain>
            </section>
        },
        {
            statmainindex: 1,
            statmainrender: <section className="">
                <CardMain>
                    <button onClick={() => {
                        navigate(-1)
                    }} className="">
                       back
                    </button>
                </CardMain>
            </section>
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
            const filter = appul?.filter(data => data?.breadaction === location.pathname)        
            if (filter.length > 0){setstatmainrendertwo(filter[0].breadtitle)} 
            setstatmainstate({statmainid: 'apptfoot', statmainindex: 0})
        }
        else {
            setstatmainstate({statmainid: 'apptfoot', statmainindex: 1})
        }
    }, [location])

    // useEffect(() => {
    //   if(!authstate){
    //     navigate(`/auth/authform`)
    //   }
    // }, [authstate])

  return (
    <div>
        <main className="grid grid-cols-12 items-center  bg-white">
            <section className="col-span-4">
                {statmainrender?.map(data => (<>
                    <figure className="">
                        {data?.statmainrender}
                    </figure>
                </>))}
            </section>
            <section className="col-span-8 flex justify-center">
                {statmainrendertwo && statmainrendertwo}
            </section>
        </main>
    </div>
  )
}
