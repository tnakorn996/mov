import React, { useContext, useEffect, useRef, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { workoutul } from '../../content/content'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../card/CardMain'
import PostMain from '../post/PostMain'

export default function ZoomMain({
    zoommainstatic,

}) {
    const [zoommainvalue, setzoommainvalue] = useState('')
    const [zoommainindex, setzoommainindex] = useState(0)
    const {
        zoommainstate, setzoommainstate,

        workoutdl,
        taskdl,
        clubdl,
        ticketdl,
        searchdl,
        
    } = useContext(Context)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const EMPTY = ''

    const workoutform = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommainrender: () => {
                        return []
                    },
                },
            ]
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'All workout',
                    zoommainrender: () => {
                        return workoutdl[0].spreaddata && workoutdl[0].spreaddata.filter(data => data.breadauthor?.toLowerCase().includes(zoommainvalue) || data.breadtitle?.toLowerCase().includes(zoommainvalue))
                    },

                },
            ]
        },
    ]

    const clubform = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommainrender: () => {
                        return []
                    },
                },
            ]
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: 'All club',
                    zoommainrender: () => {
                        return clubdl[0].spreaddata && clubdl[0].spreaddata.filter(data => data.breadauthor?.toLowerCase().includes(zoommainvalue) || data.breadtitle?.toLowerCase().includes(zoommainvalue))
                    } 
                },
            ]
        },
    ]

        const searchform = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: null,
                    zoommainrender: () => {
                        const filter = workoutul.filter(data => data.breadid === splitstaticthree)
                        return filter[0]?.breaddata
                    },
                },
            ]
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                {
                    zoommaintitle: null,
                    zoommainrender: () => {
                        const filter = workoutul.filter(data => data.breadid === splitstaticthree)
                        return filter[0]?.breaddata.filter(data => data.breadhead?.toLowerCase().includes(zoommainvalue) || data.breadbody?.toLowerCase().includes(zoommainvalue))
                    } 
                },
            ]
        },
    ]

    const zoommain = [
        {
            zoommainid: 'workoutform',
            zoommainref: workoutform,
        },
        {
            zoommainid: 'clubform',
            zoommainref: clubform,
        },
        {
            zoommainid: 'searchform',
            zoommainref: searchform,
        },
    ]

    useEffect(() => {
        if(typeof zoommainvalue === 'undefined'){setzoommainindex(0)}
        if(typeof zoommainvalue !== 'undefined'){setzoommainindex(1)}
    }, [zoommainvalue])

    const [appstatic, setappstatic] = useApp(zoommain, zoommainstatic.zoommainid, zoommainindex, zoommainvalue, splitstaticthree)

    // if(!workoutdl && !taskdl && !clubdl && !ticketdl) return null
    
  return (
    <div>
        <main autoFocus={false}  className="">
            <section className="">
                <CardMain>
                <div className="relative flex items-center  l-h6">
                    <input autoFocus={false} onChange={p => setzoommainvalue(p.target.value.toLowerCase())} value={zoommainvalue} className="l-input" placeholder='Search' />
                    <div className="absolute right-0">
                        <CardMain>
                        <RiSearchLine  />
                        </CardMain>
                    </div>
                </div>
                </CardMain>
            </section>
            {appstatic?.map((data, index) => (<>
            <section key={index}className="">
                    {data?.zoommaindata?.map((dat, inde) => (<>
                    <div key={inde}>
                    <figcaption className="">
                        <CardMain>
                        <h1 className="m-h5">{dat?.zoommaintitle}</h1>
                        </CardMain>
                    </figcaption>
                    <figure className="">
                        {dat?.zoommainrender()?.map(post => (<>
                            {zoommainstatic.zoommainid === 'workoutform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 0}} />}
                            {zoommainstatic.zoommainid === 'searchform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 2}} />}
                            {zoommainstatic.zoommainid === 'taskform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'taskaddress', postmainindex: null}} />}
                            {zoommainstatic.zoommainid === 'clubform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'clubaddress', postmainindex: null}} />}
                            {zoommainstatic.zoommainid === 'ticketform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'ticketaddress', postmainindex: null}} />}
                        </>))}
                    </figure>
                    </div>
                    </>))}
            </section>
            </>))}
            {/* <section className="">
                <PostMain postmainstatic={{postmainid: 'searchaddress', postmainindex: 0}} />
            </section> */}
        </main>
    </div>
  )
}
