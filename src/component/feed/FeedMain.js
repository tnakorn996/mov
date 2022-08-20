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
        stamainstate,

        // taskuserid,
        // appdl,
        userdl,
        contractdl,
        workoutdl,
        taskdl,
        clubdl,
        ticketdl,
        favouritedl,
        achievementdl,
        awarddl,
        messagedl,
        guidedl,
        searchdl,

    } = useContext(Context)
    // const navigate = useNavigate()


    const apparea = [
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: null,
                    feedmainrender: () => {
                        return appul.filter(data => data.breadid.includes('main') )
                    }
                },
            ],
        },
    ]

    const contractarea = [
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'People you may know',
                    feedmainrender: () => {
                        return  userdl[1].spreaddata
                    }
                },
            ],
        },
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Recent followers',
                    feedmainrender: () => {
                        return contractdl[1].spreaddata
                    }
                    // feedmainrender: [],
                },
                {
                    feedmaintitle: `Who you're following`,
                    feedmainrender: () => {
                        return contractdl[0].spreaddata
                    }
                    // feedmainrender: [],
                },
            ],
        },
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: null,
                    feedmainrender: () => {
                        return searchdl[0].spreaddata
                    }
                    // feedmainrender: [],
                },
            ],
        },
    ]

    const workoutarea = [
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'New Workouts',
                    feedmainrender: () => {
                        return workoutdl[0].spreaddata
                    }
                },
            ],
        }
    ]

    const taskarea = [
        {
            feedmainslice: 3,
            feedmaindata: [
                {
                    feedmaintitle: 'Your Workouts',
                    feedmainrender: () => {
                        return taskdl[0].spreaddata
                    }
                },
            ],
        }
    ]
    
    const clubarea = [
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Join a Challenge',
                    feedmainrender: () => {
                        return  clubdl[0].spreaddata
                    }
                },
            ],
        }
    ]
    
    const ticketarea = [
        {
            feedmainslice: 3,
            feedmaindata: [
                {
                    feedmaintitle: 'My Challenges',
                    feedmainrender: () => {
                        return  ticketdl[0].spreaddata
                    }
                },
            ],
        }
    ]

     const favouritearea = [
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Favourite workouts',
                    feedmainrender: () => {
                        return favouritedl[0].spreaddata
                    }
                },
            ],
        },
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Favourite clubs',
                    feedmainrender: () => {
                        return favouritedl[1].spreaddata
                    }
                },
            ],
        },
    ]

     const achievementarea = [
        {
            feedmainslice: 10,
            feedmaindata: [
                // {
                //     feedmaintitle: 'Ranks',
                //     feedmainrender: () => {
                //         return achievementdl[0].spreaddata
                //         // return messagedl[1].spreaddata(), 
                //     }
                // },
                 {
                    feedmaintitle: 'Workouts',
                    feedmainrender: () => {
                        return achievementdl[1].spreaddata
                    }
                },
                 {
                    feedmaintitle: 'Clubs',
                    feedmainrender: () => {
                        return achievementdl[2].spreaddata
                    }
                },
                {
                    feedmaintitle: 'Followers',
                    feedmainrender: () => {
                        return achievementdl[3].spreaddata
                    }
                },

            ],
        },
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Your rewards',
                    feedmainrender: () => {
                        return awarddl[0].spreaddata
                    }
                },
            ],
        },
    ]

    const guidearea = [
        {
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: `All to-do's`,
                    feedmainrender: () => {
                        return (guidedl[0].spreaddata()).filter(data => data.spreadrender().booltwo === true)
                        // return (guidedl[0].spreaddata())
                    }
                },
                {
                    feedmaintitle: `Complete to-do's`,
                    feedmainrender: () => {
                        return (guidedl[0].spreaddata()).filter(data => data.spreadrender().booltwo === false)
                        // return (guidedl[0].spreaddata())

                    }
                },
            ],
        },
    ]

    // console.log('messagedl', messagedl)

    const feedmain = [
        {
            feedmainid: 'apparea',
            feedmainref: apparea,
        },
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
        {
            feedmainid: 'achievementarea',
            feedmainref: achievementarea,
        },
        {
            feedmainid: 'guidearea',
            feedmainref: guidearea,
        },


    ]

    const [appstatic, setappstatic] = useApp(feedmain, feedmainstatic.feedmainid, feedmainstatic.feedmainindex, fieldmainstate, messagedl)

    // if(Array.isArray(appstatic) && )
  return (
    <div>
        <main className="">
            {/* <section className="w-screen flex flex-row justify-end">
                <button onClick={() => setpostmainstate(!postmainstate)} className="l-button"><RiGridFill /></button>
                <button onClick={() => setpostmainstate(!postmainstate)} className="l-button"><RiLayoutGridFill /></button>
            </section> */}
            {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 2) && 
            <section className="">
                <PostMain postmainstatic={{postmainid: 'searchaddress', postmainindex: 0}} />
            </section>}
            {appstatic?.map((data, index) => (<>
            <section key={index} className="">
                    {data?.feedmaindata?.map((dat, i) => (<>
                        <article key={i}>

                        {dat?.feedmainrender() && dat?.feedmainrender()?.length > 0 && dat?.feedmaintitle !== null && (<>
                        <div className="flex flex-row items-center justify-between">
                        <CardMain>
                        <h1 className="m-h5">{dat?.feedmaintitle}</h1>
                        </CardMain>
                        </div>
                        </>)}

                            {dat?.feedmainrender() && dat?.feedmainrender()?.length > 0 && dat?.feedmainrender()?.map((post, x) => (<>
                            <div key={x}>
                                {(feedmainstatic.feedmainid === 'apparea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'appaddress', postmainindex: 0}} />}

                                {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'useraddress', postmainindex: 2}} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}
                                {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'contractaddress', postmainindex: 0}} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}
                                {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 2) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'useraddress', postmainindex: 2}} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}

                                {feedmainstatic.feedmainid === 'workoutarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 0}} />}

                                {feedmainstatic.feedmainid === 'taskarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'taskaddress', postmainindex: 0}} />}

                                {feedmainstatic.feedmainid === 'clubarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'clubaddress', postmainindex: 0}} />}

                                {feedmainstatic.feedmainid === 'ticketarea' && <PostMain postmaindata={post} postmainstatic={{postmainid: 'ticketaddress', postmainindex: 0}} />}

                                {(feedmainstatic.feedmainid === 'favouritearea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'workoutaddress', postmainindex: 0}} />}
                                {(feedmainstatic.feedmainid === 'favouritearea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'clubaddress', postmainindex: 0}} />}

                                {(feedmainstatic.feedmainid === 'achievementarea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'achievementaddress', postmainindex: 0}} />}
                                {(feedmainstatic.feedmainid === 'achievementarea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'awardaddress', postmainindex: 0}} />}

                                {/* {(feedmainstatic.feedmainid === 'awardarea') && <PostMain postmaindata={post} postmainstatic={{postmainid: 'awardaddress', postmainindex: 0}} />} */}

                                {(feedmainstatic.feedmainid === 'messagearea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'messageaddress', postmainindex: 0}} />}
                                {(feedmainstatic.feedmainid === 'messagearea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'messageaddress', postmainindex: 0}} />}

                                {(feedmainstatic.feedmainid === 'guidearea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'guideaddress', postmainindex: 0}} />}
                                {(feedmainstatic.feedmainid === 'guidearea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'guideaddress', postmainindex: 0}} />}
                            </div>
                            </>))}

                        </article>
                    </>))}
            </section>
        </>))}
        </main>
    </div>
  )
}