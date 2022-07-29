import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {RiGridFill, RiLayoutGridFill} from 'react-icons/ri'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'

export default function FeedMain({
    feedmainstatic,

}) {
    const {
        fieldmainstate,
        feedmainstate, setfeedmainstate,
        postmainstate, setpostmainstate,

        userdl,
        workoutdl,
        taskdl,
        clubdl,
        ticketdl,
        favouritedl,
        frienddl,

    } = useContext(Context)
    const navigate = useNavigate()
    const [feedmainslice, setfeedmainslice] = useState(null)

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

    // function ll(first= this.props.first, second= this.props.second) {
    //     if(first < second){setfeedmainslice(feedmainslice + 3)}
    // }

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
                        <h1 className="m-h4">{dat?.feedmaintitle}</h1>
                        </CardMain>
                        <figure className="">
                            {dat?.feedmainrender?.map(post => (<>
                                {(feedmainstatic.feedmainid === 'contractarea') && <PostMain postmaindata={post} postmainstatic={{postmainid: 'useraddress', postmainindex: 0}} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}
                                {feedmainstatic.feedmainid === 'workoutarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 0}} />}
                                {feedmainstatic.feedmainid === 'taskarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'taskaddress', postmainindex: 0}} />}
                                {feedmainstatic.feedmainid === 'clubarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'clubaddress', postmainindex: 0}} />}
                                {feedmainstatic.feedmainid === 'ticketarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'ticketaddress', postmainindex: 0}} />}
                                {(feedmainstatic.feedmainid === 'favouritearea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 0}} />}
                                {(feedmainstatic.feedmainid === 'favouritearea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'clubaddress', postmainindex: 0}} />}
                            </>))}
                        </figure>
                    </>))}
                </>))}
            </section>
            {/* <section className="">
                {appstatic?.map(data => (<>
                    {data?.feedmaindata?.map(dat => (<>
                    <figure className="">
                        {dat?.feedmainrender?.map(da => (<>
                            {((feedmainslice < da?.spreaddata.length) && (data?.feedmainslice < da?.spreaddata.length)) && <button onClick={() => ll(data?.feedmainslice, da?.spreaddata.length)} className="w-full  l-button">See more</button>} 
                        </>))}
                    </figure>
                    </>))}
                </>))}
            </section> */}
        </main>
    </div>
  )
}
