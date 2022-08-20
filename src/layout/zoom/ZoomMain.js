import React, { useContext, useEffect, useRef, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { settingul, workoutul } from '../../content/content'

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
        messagedl,
        
    } = useContext(Context)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)

    const settingform = [
        {
            zoommaindata: [
                {
                    zoommaintitle: null,
                    zoommainrender: () => {
                        return settingul
                    },
                },
            ]
        },
        {
            zoommaindata: [
                {
                    zoommaintitle: null,
                    zoommainrender: () => {
                        return settingul.filter(data => data.breadid?.toLowerCase().includes(zoommainvalue) || data.breadtitle?.toLowerCase().includes(zoommainvalue))
                    } 
                },
            ]
        },
    ]

    const workoutform = [
        {
            zoommaindata: [
                {
                    zoommainrender: () => {
                        return []
                    },
                },
            ]
        },
        {
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
            zoommaindata: [
                {
                    zoommainrender: () => {
                        return []
                    },
                },
            ]
        },
        {
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


    const messageform = [
        {
            zoommaindata: [
                {
                    zoommaintitle: `New message`,
                    zoommainrender: () => {
                        const filter = messageFormAction()?.filter(data => data.spreadrender().booltwo === true && data.spreadrender().bool === true)
                        return filter
                    },
                },
                {
                    zoommaintitle: `Other messages`,
                    zoommainrender: () => {
                        const filter = messageFormAction()?.filter(data => data.spreadrender().booltwo === false && data.spreadrender().bool === true)
                        return filter
                    } 
                },
            ]
        },
        {
            zoommaindata: [
                {
                    zoommaintitle: `Search results`,
                    zoommainrender: () => {
                        const filter = messageFormAction()?.filter(data => (data.spreadrender().booltwo === true && data.spreadrender().bool === true)
                        || (data.spreadrender().booltwo === false && data.spreadrender().bool === true))
                        const filtertwo=  filter?.filter(data => data.spreadidtwo?.toLowerCase().includes(zoommainvalue) || data.spreaddetail?.toLowerCase().includes(zoommainvalue))
                        return filtertwo
                    } 
                },
            ]
        },
    ]

    


    const zoommain = [
        {
            zoommainid: 'settingform',
            zoommainref: settingform,
        },
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
        {
            zoommainid: 'messageform',
            zoommainref: messageform,
        }
    ]

    useEffect(() => {
        if(zoommainvalue === ''){setzoommainindex(0)}
        if(zoommainvalue !== ''){setzoommainindex(1)}
    }, [zoommainvalue])


    function messageFormAction() {
        const concat = messagedl[0].spreaddata().concat(
            messagedl[1].spreaddata(), 
            messagedl[3].spreaddata(), 
            messagedl[4].spreaddata())
        if(!Array.isArray(concat)) return null
        return concat
    }

    const [appstatic, setappstatic] = useApp(zoommain, zoommainstatic.zoommainid, zoommainindex, zoommainvalue, splitstaticthree)
// console.log('appstatic', appstatic)
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
                {data?.zoommaindata?.map((dat, i) => (<>
                    <div key={i}>
                        <figcaption className="">
                            <CardMain>
                            <h1 className="m-h5">{dat?.zoommaintitle}</h1>
                            </CardMain>
                        </figcaption>
                        <figure className="">
                            {dat?.zoommainrender()?.map((post, d) => (<>
                                <div key={d}>
                                {zoommainstatic.zoommainid === 'settingform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'settingaddress', postmainindex: 0}} />}
                                {zoommainstatic.zoommainid === 'workoutform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 0}} />}
                                {zoommainstatic.zoommainid === 'searchform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 2}} />}
                                {zoommainstatic.zoommainid === 'taskform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'taskaddress', postmainindex: null}} />}
                                {zoommainstatic.zoommainid === 'clubform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'clubaddress', postmainindex: null}} />}
                                {zoommainstatic.zoommainid === 'ticketform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'ticketaddress', postmainindex: null}} />}
                                {zoommainstatic.zoommainid === 'messageform' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'messageaddress', postmainindex: 0}} />}
                                </div>
                            </>))}
                        </figure>
                    </div>
                </>))}
            </section>
            </>))}

        </main>
    </div>
  )
}