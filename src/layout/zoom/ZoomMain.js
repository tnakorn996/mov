import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
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
        
    } = useContext(Context)
    const EMPTY = ''

    const workoutform = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: 'Find workout',
                    // zoommainrender: workoutdl[0].spreaddata
                    zoommainrender: [],
                },
            ]
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                // {
                //     zoommaintitle: 'Your workout',
                //     zoommainrender: taskdl[0].spreaddata && taskdl[0].spreaddata.filter(data => data.workoutid.toLowerCase().includes(zoommainvalue)),
                // },
                {
                    zoommaintitle: 'All workout',
                    zoommainrender: workoutdl[0].spreaddata && workoutdl[0].spreaddata.filter(data => data.breadauthor?.toLowerCase().includes(zoommainvalue) || data.breadtitle?.toLowerCase().includes(zoommainvalue)),

                },
            ]
        },
    ]

    const clubform = [
        {
            zoommainindex: 0,
            zoommaindata: [
                {
                    zoommaintitle: 'Find club',
                    // zoommainrender: clubdl[0].spreaddata
                    zoommainrender: [],
                },
            ]
        },
        {
            zoommainindex: 1,
            zoommaindata: [
                // {
                //     zoommaintitle: 'Your club',
                //     zoommainrender: ticketdl[0].spreaddata && ticketdl[0].spreaddata.filter(data => data.clubid?.toLowerCase().includes(zoommainvalue)),
                // },
                {
                    zoommaintitle: 'All club',
                    zoommainrender: clubdl[0].spreaddata && clubdl[0].spreaddata.filter(data => data.breadauthor?.toLowerCase().includes(zoommainvalue) || data.breadtitle?.toLowerCase().includes(zoommainvalue)),
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
    ]

    useEffect(() => {
        if(zoommainvalue === EMPTY){setzoommainindex(0)}
        if(zoommainvalue !== EMPTY){setzoommainindex(1)}
    }, [zoommainvalue])

    const [appstatic, setappstatic] = useApp(zoommain, zoommainstatic.zoommainid, zoommainindex, zoommainvalue)

    // if(!workoutdl && !taskdl && !clubdl && !ticketdl) return null
    
  return (
    <div>
        <main className="">
            <section className="">
                <CardMain>
                <input onChange={p => setzoommainvalue(p.target.value.toLowerCase())} value={zoommainvalue} className="l-input" placeholder='Search' />
                </CardMain>
            </section>
            <section className="">
                {appstatic?.map(data => (<>
                    {data?.zoommaindata?.map(dat => (<>
                    <figcaption className="">
                        <CardMain>
                        <h1 className="m-h5">{dat?.zoommaintitle}</h1>
                        </CardMain>
                    </figcaption>
                    <figure className="">
                        {dat?.zoommainrender?.map(post => (<>
                            {zoommainstatic.zoommainid === 'workoutform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: null}} />}
                            {zoommainstatic.zoommainid === 'taskform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'taskaddress', postmainindex: null}} />}
                            {zoommainstatic.zoommainid === 'clubform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'clubaddress', postmainindex: null}} />}
                            {zoommainstatic.zoommainid === 'ticketform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'ticketaddress', postmainindex: null}} />}
                        </>))}
                    </figure>
                    </>))}
                </>))}
            </section>
        </main>
    </div>
  )
}
