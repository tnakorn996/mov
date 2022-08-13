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

    } = useContext(Context)
    // const navigate = useNavigate()


    const apparea = [
        {
            feedmainindex: 0,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: null,
                    // feedmainrender: appul.filter(data => data.breadid.includes('main') ),
                    feedmainrender: () => {
                        return appul.filter(data => data.breadid.includes('main') )
                    }
                },
            ],
        },
    ]

    const contractarea = [
        {
            feedmainindex: 0,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'People you may know',
                    // feedmainrender:  userdl[2].spreaddata,
                    feedmainrender: () => {
                        return  userdl[2].spreaddata
                    }
                },
            ],
        },
        {
            feedmainindex: 1,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Recent followers',
                    // feedmainrender:  contractdl[1].spreaddata,
                    feedmainrender: () => {
                        return contractdl[1].spreaddata
                    }
                    // feedmainrender: [],
                },
                {
                    feedmaintitle: `Who you're following`,
                    // feedmainrender:  contractdl[0].spreaddata,
                    feedmainrender: () => {
                        return contractdl[0].spreaddata
                    }
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
                    // feedmainrender: workoutdl[0].spreaddata,
                    feedmainrender: () => {
                        return workoutdl[0].spreaddata
                    }
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
                    // feedmainrender: taskdl[0].spreaddata,
                    feedmainrender: () => {
                        return taskdl[0].spreaddata
                    }
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
                    // feedmainrender: clubdl[0].spreaddata,
                    feedmainrender: () => {
                        return  clubdl[0].spreaddata
                    }
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
                    // feedmainrender: ticketdl[0].spreaddata,
                    feedmainrender: () => {
                        return  ticketdl[0].spreaddata
                    }
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
                    // feedmainrender: favouritedl[0].spreaddata,
                    feedmainrender: () => {
                        return favouritedl[0].spreaddata
                    }
                },
            ],
        },
        {
            feedmainindex: 1,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Favourite clubs',
                    // feedmainrender: favouritedl[1].spreaddata,
                    feedmainrender: () => {
                        return favouritedl[1].spreaddata
                    }
                },
            ],
        },
    ]

     const achievementarea = [
        {
            feedmainindex: 0,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Ranks',
                    // feedmainrender: achievementdl[0].spreaddata,
                    feedmainrender: () => {
                        return achievementdl[0].spreaddata
                    }
                },
                 {
                    feedmaintitle: 'Workouts',
                    // feedmainrender: achievementdl[1].spreaddata,
                    feedmainrender: () => {
                        return achievementdl[1].spreaddata
                    }
                },
                 {
                    feedmaintitle: 'Clubs',
                    // feedmainrender: achievementdl[2].spreaddata,
                    feedmainrender: () => {
                        return achievementdl[2].spreaddata
                    }
                },

            ],
        },
        {
            feedmainindex: 1,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'Your rewards',
                    // feedmainrender: awarddl[0].spreaddata,
                    feedmainrender: () => {
                        return awarddl[0].spreaddata
                    }
                },
            ],
        },
    ]

    const messagearea = [
        {
            feedmainindex: 0,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'New message',
                    feedmainrender: () => {
                                return (messagedl[0].spreaddata().concat(
                                    messagedl[1].spreaddata(), 
                                    messagedl[3].spreaddata())).filter(data => data.spreadrender().booltwo === true && data.spreadrender().bool === true)
                    }
                },
                {
                    feedmaintitle: 'Other messages',
                    feedmainrender: () => {
                                return  (messagedl[0].spreaddata().concat(
                                    messagedl[1].spreaddata(), 
                                    messagedl[3].spreaddata())).filter(data => data.spreadrender().booltwo === false && data.spreadrender().bool === true)
                    }
                },
            ],
        },
         {
            feedmainindex: 1,
            feedmainslice: 10,
            feedmaindata: [
                {
                    feedmaintitle: 'New annoucement',
                    // feedmainrender: (messagedl[2].spreaddata()).filter(data => data.spreadrender().booltwo === true && data.spreadrender().bool === true),
                    feedmainrender: () => {
                        return  (messagedl[2].spreaddata()).filter(data => data.spreadrender().booltwo === true && data.spreadrender().bool === true)
                    }
                },
                {
                    feedmaintitle: 'Other annoucement',
                    // feedmainrender: (messagedl[2].spreaddata()).filter(data => data.spreadrender().booltwo === false && data.spreadrender().bool === true),
                    feedmainrender: () => {
                        return (messagedl[2].spreaddata()).filter(data => data.spreadrender().booltwo === false && data.spreadrender().bool === true)
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
            feedmainid: 'messagearea',
            feedmainref: messagearea,
        },

    ]

    const [appstatic, setappstatic] = useApp(feedmain, feedmainstatic.feedmainid, feedmainstatic.feedmainindex, fieldmainstate, messagedl)

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
                        {dat?.feedmainrender() && dat?.feedmainrender()?.length > 0 && (<>
                        {dat?.feedmaintitle !== null && (<>
                        <div className="flex flex-row items-center justify-between">
                            <CardMain>
                            <h1 className="m-h5">{dat?.feedmaintitle}</h1>
                            </CardMain>
                            {/* {feedmainstatic.feedmainid === 'workoutarea' && 
                            <CardMain>
                                <button onClick={() => setfeedmainstate(!postmainstate)} className="l-button"><RiGridFill /></button>
                                <button onClick={() => setfeedmainstate(!postmainstate)} className="l-button"><RiLayoutGridFill /></button>
                            </CardMain>
                            } */}
                        </div>

                        </>)}
                        <figure className="">
                            {dat?.feedmainrender() && dat?.feedmainrender()?.length > 0 && dat?.feedmainrender()?.map(post => (<>
                                {(feedmainstatic.feedmainid === 'apparea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'appaddress', postmainindex: 0}} />}

                                {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'useraddress', postmainindex: 0}} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}
                                {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={{postmainid: 'contractaddress', postmainindex: 0}} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}

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

                            </>))}
                        </figure>
                        </>)}

                    </>))}
                </>))}
            </section>
        </main>
    </div>
  )
}