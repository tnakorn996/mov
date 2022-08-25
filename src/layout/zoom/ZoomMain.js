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
        fieldmainstate,

        workoutdl,
        taskdl,
        clubdl,
        ticketdl,
        searchdl,
        messagedl,
        
    } = useContext(Context)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)

 
    const workoutform = [
        {
            zoommaindata: [
                {
                    zoommainrender: () => {
                        return appFormRender({
                            data: [],
                            postmainstatic: {postmainid: 'workoutaddress', postmainindex: 0}
                        })
                    },
                },
            ]
        },
        {
            zoommaindata: [
                {
                    zoommaintitle: 'All workout',
                    zoommainrender: () => {
                         return appFormRender({
                            data:  workoutdl[0].spreaddata && workoutdl[0].spreaddata.filter(data => data.breadauthor?.toLowerCase().includes(zoommainvalue) || data.breadtitle?.toLowerCase().includes(zoommainvalue)),
                            postmainstatic: {postmainid: 'workoutaddress', postmainindex: 0}
                        })
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
                         return appFormRender({
                            data:  [],
                            postmainstatic: {postmainid: 'clubaddress', postmainindex: null}
                        })
                    },
                },
            ]
        },
        {
            zoommaindata: [
                {
                    zoommaintitle: 'All club',
                    zoommainrender: () => {
                         return appFormRender({
                            data:  clubdl[0].spreaddata && clubdl[0].spreaddata.filter(data => data.breadauthor?.toLowerCase().includes(zoommainvalue) || data.breadtitle?.toLowerCase().includes(zoommainvalue)),
                            postmainstatic: {postmainid: 'clubaddress', postmainindex: null}
                        })
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
                         return appFormRender({
                            data:  filter[0]?.breaddata,
                            postmainstatic: {postmainid: 'workoutaddress', postmainindex: 2}
                        })
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
                         return appFormRender({
                            data:  filter[0]?.breaddata.filter(data => data.breadhead?.toLowerCase().includes(zoommainvalue) || data.breadbody?.toLowerCase().includes(zoommainvalue)),
                            postmainstatic: {postmainid: 'workoutaddress', postmainindex: 2}
                        })
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
                         return appFormRender({
                            data:  filter,
                            postmainstatic: {postmainid: 'messageaddress', postmainindex: 0}
                        })
                    },
                },
                {
                    zoommaintitle: `Other messages`,
                    zoommainrender: () => {
                        const filter = messageFormAction()?.filter(data => data.spreadrender().booltwo === false && data.spreadrender().bool === true)
                         return appFormRender({
                            data:  filter,
                            postmainstatic: {postmainid: 'messageaddress', postmainindex: 0}
                        })
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
                         return appFormRender({
                            data:  filtertwo,
                            postmainstatic: {postmainid: 'messageaddress', postmainindex: 0}
                        })
                    } 
                },
            ]
        },
    ]

    const settingform = [
        {
            zoommaindata: [
                {
                    zoommaintitle: null,
                    zoommainrender: () => {
                         return appFormRender({
                            data:  settingul,
                            postmainstatic: {postmainid: 'settingaddress', postmainindex: 0}
                        })
                    },
                },
            ]
        },
        {
            zoommaindata: [
                {
                    zoommaintitle: null,
                    zoommainrender: () => {
                         return appFormRender({
                            data:  settingul.filter(data => data.breadid?.toLowerCase().includes(zoommainvalue) || data.breadtitle?.toLowerCase().includes(zoommainvalue)),
                            postmainstatic: {postmainid: 'settingaddress', postmainindex: 0}
                        })
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
        {
            zoommainid: 'messageform',
            zoommainref: messageform,
        },
        {
            zoommainid: 'settingform',
            zoommainref: settingform,
        },
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

    const [appstatic, setappstatic] = useApp(zoommain, zoommainstatic.zoommainid, zoommainindex, zoommainvalue, splitstaticthree, messagedl)
// console.log('appstatic', appstatic)
    // if(!workoutdl && !taskdl && !clubdl && !ticketdl) return null
    // console.log('fieldmainstate', fieldmainstate)
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

            {appstatic?.map((data, i) => (<>
            <section key={i} className="">
                {data?.zoommaindata?.map((dat, index) => (<>
                    <div key={index}>
                        <figcaption className="">
                            {dat?.zoommainrender()?.length > 0 && (<>
                            <CardMain>
                            <h1 className="m-h5">{dat?.zoommaintitle}</h1>
                            </CardMain>
                            </>)}
                        </figcaption>
                        <figure className="">
                            {dat?.zoommainrender()}
                        </figure>
                    </div>
                </>))}
            </section>
            </>))}

        </main>
    </div>
  )
}

export function appFormRender({data, postmainstatic}) {
  return (
    <div>
        <section className="">
            {data?.map((data, index) => (<>
                <PostMain key={index} postmaindata={data} postmainstatic={postmainstatic} />
            </>))}
        </section>
    </div>
  )
}
