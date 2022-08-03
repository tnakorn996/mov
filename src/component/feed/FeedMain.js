import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {RiGridFill, RiLayoutGridFill} from 'react-icons/ri'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import SignMain from '../sign/SignMain.tsx'
import { appul } from '../../content/content'

export default function FeedMain({
    feedmainstatic,

}) {
    const {
        fieldmainstate,
        feedmainstate, setfeedmainstate,
        postmainstate, setpostmainstate,

        userdl,
        contractdl,
        workoutdl,
        taskdl,
        clubdl,
        ticketdl,
        favouritedl,

    } = useContext(Context)
    const navigate = useNavigate()

    const contractarea = [
        {
            feedmainindex: 0,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'People you may know',
                    feedmainrender:  userdl[2].spreaddata,
                },
            ],
        },
        {
            feedmainindex: 1,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Recent followers',
                    feedmainrender:  contractdl[1].spreaddata,
                    // feedmainrender: [],
                },
                {
                    feedmaintitle: `Who you're following`,
                    feedmainrender:  contractdl[0].spreaddata,
                    // feedmainrender: [],
                },
            ],
        },
    ]

    const workoutarea = [
        {
            feedmainindex: 0,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'New Workouts',
                    feedmainrender: workoutdl[0].spreaddata,
                },
            ],
        }
    ]

    const taskarea = [
        {
            feedmainindex: 0,
            feedmainslice: 3,
            feedmaindata: [
                {
                    feedmaintitle: 'Your Workouts',
                    // feedmainaction: `/task/taskmain/`,
                    feedmainrender: taskdl[0].spreaddata,
                },
            ],
        }
    ]
    
    const clubarea = [
        {
            feedmainindex: 0,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Join a Challenge',
                    feedmainrender: clubdl[0].spreaddata,
                },
            ],
        }
    ]
    
    const ticketarea = [
        {
            feedmainindex: 0,
            feedmainslice: 3,
            feedmaindata: [
                {
                    feedmaintitle: 'My Challenges',
                    // feedmainaction: `/ticket/ticketmain/`,
                    feedmainrender: ticketdl[0].spreaddata,
                },
            ],
        }
    ]

     const favouritearea = [
        {
            feedmainindex: 0,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Favourite workouts',
                    feedmainrender: favouritedl[0].spreaddata,
                },
            ],
        },
        {
            feedmainindex: 1,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Favourite clubs',
                    feedmainrender: favouritedl[1].spreaddata,
                },
            ],
        },
    ]


    const feedmain = [
        {
            feedmainid: 'contractarea',
            feedmainref: contractarea,
        },
        {
            feedmainid: 'workoutarea',
            feedmainref: workoutarea,
        },
        {
            feedmainid: 'taskarea',
            feedmainref: taskarea,
        },
        {
            feedmainid: 'clubarea',
            feedmainref: clubarea,
        },
        {
            feedmainid: 'ticketarea',
            feedmainref: ticketarea,
        },
        {
            feedmainid: 'favouritearea',
            feedmainref: favouritearea,
        },

    ]

    const [appstatic, setappstatic] = useApp(feedmain, feedmainstatic.feedmainid, feedmainstatic.feedmainindex, fieldmainstate)

  return (
    <div>
        <main className="">
            {/* <section className="w-screen flex flex-row justify-end">
                <button onClick={() => setpostmainstate(!postmainstate)} className="l-button"><RiGridFill /></button>
                <button onClick={() => setpostmainstate(!postmainstate)} className="l-button"><RiLayoutGridFill /></button>
            </section> */}
            <section className="">
                {appstatic?.map(data => (<>
                    {data?.feedmaindata?.map(dat => (<>
                        <CardMain>
                        <h1 className="m-h5">{dat?.feedmaintitle}</h1>
                        </CardMain>
                        <figure className="">
                            {dat?.feedmainrender?.length > 0 && dat?.feedmainrender?.map(post => (<>
                                {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'useraddress', postmainindex: 0}} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}
                                {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'contractaddress', postmainindex: 0}} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}
                                {feedmainstatic.feedmainid === 'workoutarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 0}} />}
                                {feedmainstatic.feedmainid === 'taskarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'taskaddress', postmainindex: 0}} />}
                                {feedmainstatic.feedmainid === 'clubarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'clubaddress', postmainindex: 0}} />}
                                {feedmainstatic.feedmainid === 'ticketarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'ticketaddress', postmainindex: 0}} />}
                                {(feedmainstatic.feedmainid === 'favouritearea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 0}} />}
                                {(feedmainstatic.feedmainid === 'favouritearea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'clubaddress', postmainindex: 0}} />}
                            </>))}
                        </figure>
                        <figure className="">
                            {dat?.feedmainrender?.length === 0 && (<>
                            <div className="bg-slate-800">
                                <CardMain>
                                <SignMain signmainstatic={{
                                    signmainid: 'appimg', 
                                    signmainindex: 2,
                                    signmaindetail: `Keep your training on track.`,
                                    signmainaction: `/workout/workoutmain`, 
                                    signmainentitle: `find a workouts`
                                }} />
                                </CardMain>
                            </div>
                            </>)}
                        </figure>
                    </>))}
                </>))}
            </section>
        </main>
    </div>
  )
}


// export function ll(feedmainstatic) {
//     const replace = feedmainstatic.feedmainid.replace('area', '')
//     const filter  = appul.filter(data => data.breadref.includes(replace))
//     console.log('filter', feedmainstatic.feedmainid, replace, filter)
//   return {
//     title: filter[0]?.breadtitle,
//     action: filter[0]?.breadaction,
//   }
// }
