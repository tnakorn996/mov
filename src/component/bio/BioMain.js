import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'

export default function BioMain({
    fieldmainstate,

    biomainstatic,

}) {
    const {
        statstate,

        parseuseruserid,
        authstate,

    } = useContext(Context)
    const location = useLocation()
    // const [biomainrender, setbiomainrender] = useState()

    const useraddress = [
        {
            biomainindex: 0,
            biomaindata: authstate && (JSON.parse(window.localStorage.getItem("mov.user")) || parseuseruserid).filter(data => data.userid === authstate.user.id),
        }
    ]

    const biomain = [
        {
            biomainid: 'useraddress',
            biomainref: useraddress,
        }
    ]

    const [appstatic, setappstatic] = useApp(biomain, biomainstatic.biomainid, biomainstatic.biomainindex)
    const biomainrender = appstatic && appstatic
    // console.log('biomaisnrender', biomainrender)

    // useEffect(() => {
    //     if(appstatic) {
    //         setbiomainrender(appstatic)
    //     }
    // }, [appstatic])

    //  if(!biomainrender) return null
     
  return (
    <div>
        <main className="">
            <section className="">
                {biomainrender?.map(data => (<>
                    {data?.biomaindata?.map(dat => (<>
                    <figure className="">
                        <img src={dat?.userimage} alt="" className="h-[50px] w-[50px] bg-slate-400" />
                        {/* <h1 className="">{dat[Object.keys(dat).find(key => dat[key].toLowerCase().includes('id'))]}</h1> */}
                    </figure>
                    </>))}
                </>))}
            </section>
        </main>
    </div>
  )
}
