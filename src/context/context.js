
import React, { createContext, useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'

import { achievementul, appul, articleul, clubul, workoutul } from '../content/content'
import {supabase} from '../lib/supabase'
import SplashMain from '../layout/splash/SplashMain'

export const Context = createContext()

export const Provider = ({ 
    children 
}) => {
    const navigate = useNavigate()
    // const location = useLocation()
    // const param = useParams()
    const [appstate, setappstate] = useState()
    const [authformstate, setauthformstate] = useState(false)
    const [fieldmainstate, setfieldmainstate] = useState(true)
    const [tabmainstate, settabmainstate] = useState({tabmainindex: 0})
    const [feedmainstate, setfeedmainstate] = useState({feedmainindex: 0})
    const [postmainstate, setpostmainstate] = useState(true)
    const [ptamainstate, setptamainstate] = useState(true)
    const [signmainstate, setsignmainstate] = useState()
    const [choicemainstate, setchoicemainstate] = useState()
    const [dtamainstate, setdtamainstate] = useState(true)
    // const [stamainstate, setstamainstate] = useState(true)
    // const [zoommainstate, setzoommainstate] = useState(true)
    
    const [authstate, setauthstate] = useState()
    const [user, setuser] = useState()
    const [useruserid, setuseruserid] = useState()
    const [contractsenderid, setcontractsenderid] = useState()
    const [contractreceiverid, setcontractreceiverid] = useState()
    const [task, settask] = useState()
    const [taskuserid, settaskuserid] = useState()
    const [ticketuserid, setticketuserid] = useState()
    const [awarduserid, setawarduserid] = useState()
    const [textuserid, settextuserid] = useState()
    const [search, setsearch] = useState([])
    const [userimage, setuserimage] = useState()
    // console.log('userimage', userimage)
    const parseworkout = JSON.parse(window.localStorage.getItem("mov.workoutiframe"));
    const parseclub = JSON.parse(window.localStorage.getItem("mov.clubiframe"));
    const parsefavourite = JSON.parse(window.localStorage.getItem("mov.favouriteiframe"));
    if(!parseworkout) {window.localStorage.setItem("mov.workoutiframe", JSON.stringify([]))}
    if(!parseclub) {window.localStorage.setItem("mov.clubiframe", JSON.stringify([]))}
    if(!parsefavourite) {window.localStorage.setItem("mov.favouriteiframe", JSON.stringify([]))}
    
    useEffect(() => {
        navigate(`/auth/authmain`)
    }, [])

    useEffect(() => {
        setauthstate(supabase.auth.session())
        supabase.auth.onAuthStateChange((_event, session) => {
            setauthstate(session)
        })
    }, [])

    useEffect(() => {
        if(authstate !== undefined && authstate !== null){
            const ref = authstate.user.id
            selectUser(ref)
            selectUserUserid(ref)
            selectContractSenderid(ref)
            selectContractReceiverid(ref)
            // selectTask(authstate.user.id)
            selectTaskUserid(ref)
            selectTicketUserid(ref)
            selectAwardUserid(ref)
            selectTextUserid(ref)
            // contextSelectUserimage(ref)
        } 
    }, [authstate, fieldmainstate])

    const selectUser = async (first) => {
        const { data, error} = await supabase.from('user').select(`*`)
        if(data) {setuser(data)}
    }

    const selectUserUserid = async (first) => {
        const { data, error} = await supabase.from('user').select(`*`).eq('userid', first)
        if(data) {setuseruserid(data)}
    }

    const selectContractSenderid = async (first) => {
        const { data, error} = await supabase.from('contract').select(`*, receiverid (*)`).eq('senderid', first)
        if(data) {setcontractsenderid(data)}
    }

    const selectContractReceiverid = async (first) => {
        const { data, error} = await supabase.from('contract').select(`*, senderid (*)`).eq('receiverid', first)
        if(data) {setcontractreceiverid(data)}
    }

    // const selectTask = async (first) => {
    //     const { data, error} = await supabase.from('task').select(`*`)
    //     if(data) {
    //         settask(data)
    //     }
    // }

    const selectTaskUserid = async (first) => {
        const { data, error} = await supabase.from('task').select(`*`).eq('userid', first)
        if(data) {settaskuserid(data)}
    }

    const selectTicketUserid = async (first) => {
        const { data, error} = await supabase.from('ticket').select(`*`).eq('userid', first)
        if(data) {setticketuserid(data)}
    }

    const selectAwardUserid = async (first) => {
        const { data, error} = await supabase.from('award').select(`*`).eq('userid', first)
        if(data) {setawarduserid(data)}
    }

    const selectTextUserid = async (first) => {
        const { data, error} = await supabase.from('text').select(`*`).eq('userid', first)
        if(data) {settextuserid(data)}
    }

    // const contextSelectUserimage = async (first) => {
    //     const { data, error } = await supabase.storage.from('image').download(`userimage/${first}`)
    //     setuserimage(data)
    // }

    function contextRender(first, second, third) {
        if(authstate === null && authstate === undefined ) return null
        if(first === null) return null
        return first.filter(data => data[second].includes(third))
    }

    function contextRenderItem(second, result) {
        if(textuserid && textuserid.filter(data => data?.spreadidtwo === second).length === 0){
            return Object.assign({booltwo: true}, result)
        } 
        return Object.assign({booltwo: false}, result)
    }

    function contextRenderTwo(first, second, navigation) {
        if(first  && awarduserid && awarduserid.filter(data => data?.achievementid === second).length === 0){
            return contextRenderItem(second, {navigation: navigation, bool: true} )
        } 
        return contextRenderItem(second, {navigation: navigation, bool: false} )
    }

    function contextRenderThree(first, second, navigation) {
        if(first && ticketuserid && ticketuserid.filter(data => data?.clubid === second).length === 0){
            return contextRenderItem(second, {navigation: navigation, bool: true} )
        } 
        return contextRenderItem(second, {navigation: navigation, bool: false} )
    }

    function contextRenderFour(first, second, navigation) {
        if(first) {
            return contextRenderItem(second, {navigation: navigation, bool: true} )
        }  
        return contextRenderItem(second, {navigation: navigation, bool: false} )
    }



    function contextRenderFive(first, second, navigation) {
        if(first) {
            return {navigation: navigation, bool: true}
        }  
        return {navigation: navigation, bool: false}
    }

    ////////////////////////////////////////////////

    const userdl = [
        {
            spreadid: 'my',
            spreadtitle: 'My user',
            spreaddata: useruserid && useruserid,
            // spreaddatatwo: userimage && userimage,
        },
        {
            spreadid: 'all',
            spreadtitle: 'All users',
            spreaddata: user && user,
        },
        {
            spreadid: 'else',
            spreadtitle: 'Anyone else',
            spreaddata: user && contextRender(user, 'userid', authstate?.user?.id)
        },
    ]

    const contractdl =[
        {
            spreadid: 'sender',
            spreadtitle: 'Following',
            spreaddata: contractsenderid,
        },
        {
            spreadid: 'receiver',
            spreadtitle: 'Follower',
            spreaddata: contractreceiverid,
        },
    ]

    const workoutdl = [
        {
            spreadid: 'new',
            spreadtitle: 'New Workouts',
            spreaddata:  workoutul,
        },
    ]

    const taskdl = [
        {
            spreadid: 'my',
            spreadtitle: 'Your Workouts',
            spreaddata: taskuserid,
        },
    ]

    const clubdl = [
        {
            spreadid: 'all',
            spreadtitle: 'Join a challenge',
            spreaddata:  clubul,
        },
    ]

    const ticketdl =[
        {
            spreadid: 'my',
            spreadtitle: 'Your challenges',
            spreaddata: ticketuserid,
        },
    ]

    const favouritedl =[
        {
            spreadid: 'workout',
            spreadtitle: 'Favourite workouts',
            spreaddata: contextRender(parseworkout, 'userid', authstate?.user?.id)

        },
        {
            spreadid: 'club',
            spreadtitle: 'Favourite camp',
            spreaddata: contextRender(parseclub, 'userid', authstate?.user?.id)
        },
    ]

    const achievementdl =[
        {
            spreadid: 'user',
            spreadtitle: 'User',
            spreaddata: contextRender(achievementul, 'breadid', 'user')
        },
        {
            spreadid: 'task',
            spreadtitle: 'Workout',
            spreaddata: contextRender(achievementul, 'breadid', 'task')
        },
        {
            spreadid: 'ticket',
            spreadtitle: 'Club',
            spreaddata: contextRender(achievementul, 'breadid', 'ticket')
        },
    ]

    const awarddl =[
        {
            spreadid: 'my',
            spreadtitle: 'My rewards',
            spreaddata: awarduserid,
        }
    ]

    const textdl =[
        {
            spreadid: 'my',
            spreadtitle: 'My texts',
            spreaddata: textuserid,
        }
    ]

    const searchdl =[
        {
            spreadid: 'my',
            spreadtitle: 'My search',
            spreaddata: search,
        }
    ]

    const appdl = [
        {
            spreadid: 'setting',
            spreadtitle: 'My setting',
            spreadicon: `✅`,
            spreaddata: () => {
                const array = [];
                // for(const data of settingul) {
                //         array.push({
                //             spreadidtwo: data.breadid,
                //             spreadhref: `/app/appindex/` + data.breadid,
                //             spreaddetail: `You have successfully added ` + data.breadtitle,
                //             spreadrender: () => {
                //                 return contextRenderFive(true, data.breadid, `/setting/settingindex/` + data.breadid)
                //             },
                //         })
                // }
                return array
            }
        },
    ]

    const messagedl =[
        {
            spreadid: 'club',
            spreadtitle: `Club's message`,
            spreadicon: `⚽️`,
            spreaddata: () => {
                const array = [];
                for(const data of clubul) {
                    array.push({
                        spreadidtwo: data.breadid,
                        spreadhref: `/message/messageindex/` + data.breadid,
                        spreaddetail: `You unlocked a new club of ${data.breadtitle}`,
                        spreadrender: () => {
                            return contextRenderThree(true , data.breadid, `/club/clubindex/` + data.breadid)
                        }
                    })
                }
                return array
              } 
        },
        {
            spreadid: 'achievement',
            spreadtitle: 'Achievement unlocked!',
            spreadicon: `🎉🥳`,
            spreaddata: () => {
                return [
                    {
                        spreadidtwo: 'task-one',
                        spreadhref: `/message/messageindex/task-one`,
                        spreaddetail: `You unlocked a new reward of 1-workout`,
                        spreadrender: () => {
                            return contextRenderTwo(taskuserid && taskuserid.length > 0 && taskdl[0]?.spreaddata?.length >= 1, `task-one`, `/achievement/achievementindex/task-one`)
                        }
                    },
                    {
                        spreadidtwo: 'task-three',
                        spreadhref: `/message/messageindex/task-three`,
                        spreaddetail: `You unlocked a new reward of 3-workouts`,
                        spreadrender: () => {
                            return contextRenderTwo(taskuserid && taskuserid.length > 0 && taskdl[0]?.spreaddata?.length >= 3, `task-three`, `/achievement/achievementindex/task-three`)
                        }
                    },

                    {
                        spreadidtwo: 'ticket-one',
                        spreadhref: `/message/messageindex/ticket-one`,
                        spreaddetail: `You unlocked a new reward of 1-club`,
                        spreadrender: () => {
                            return contextRenderTwo(ticketuserid && ticketuserid.length > 0 && ticketdl[0]?.spreaddata?.length >= 1, `ticket-one`, `/achievement/achievementindex/ticket-one`)
                        }
                    },
                    {
                        spreadidtwo: 'ticket-three',
                        spreadhref:`/message/messageindex/ticket-three`,
                        spreaddetail: `You unlocked a new reward of 3-clubs`,
                        spreadrender: () => {
                            return contextRenderTwo(ticketuserid && ticketuserid.length > 0 && ticketdl[0]?.spreaddata?.length >= 3, `ticket-three`, `/achievement/achievementindex/ticket-three`)
                        }
                    },
                ]
             }
              
        },
          {
            spreadid: 'article',
            spreadtitle: `Article's message`,
            spreadicon: `💬`,
            spreaddata: () => {
                const array = [];
                for(const data of articleul) {
                    array.push({
                        spreadidtwo: data.breadid,
                        spreadhref: `/message/messageindex/` + data.breadid,
                        spreaddetail: data.breadtitle,
                        spreadrender: () => {
                            return contextRenderFour(true , data.breadid, `/article/articleindex/` + data.breadid)
                        }
                    })
                }
                return array
            }
        },
        {
            spreadid: 'task',
            spreadtitle: `Task's message`,
            spreadicon: `❤️‍🔥`,
            spreaddata: () => {
                if(!taskuserid) return null
                const array = [];
                for(const data of workoutul) {
                    array.push({
                        spreadidtwo: data.breadid,
                        spreadhref: `/message/messageindex/` + data.breadid,
                        spreaddetail: `You earned XP of ` + data.breadpoint + ` from ` + data.breadtitle +`'s workout`,
                        spreadrender: () => {
                            return contextRenderFour(
                            (taskuserid?.filter(dat => dat.workoutid === data.breadid)).length === 1
                            , data.breadid, `/workout/workoutindex/` + data.breadid)
                        }
                    })
                }
                return array
            }
        },
        {
            spreadid: 'ticket',
            spreadtitle: `Ticket's message`,
            spreadicon: `❤️‍🔥❤️‍🔥`,
            spreaddata: () => {
                if(!ticketuserid) return null
                const array = [];
                for(const data of clubul) {
                    array.push({
                        spreadidtwo: data.breadid,
                        spreadhref: `/message/messageindex/` + data.breadid,
                        spreaddetail: `You earned XP of ` + data.breadpoint + ` from ` + data.breadtitle +`'s club`,
                        spreadrender: () => {
                            return contextRenderFour(
                            (ticketuserid?.filter(dat => dat.clubid === data.breadid)).length === 1
                            , data.breadid, `/club/clubindex/` + data.breadid)
                        }
                    })
                }
                return array
            }
        },
    ]

    if(
        authstate !== null 
        && authstate !== undefined 
        && !user 
        && !useruserid  
        && !taskuserid 
        && !task 
        && !ticketuserid
        && !awarduserid) return <div className="w-screen h-screen flex justify-center items-center"><SplashMain splashmainstyle={`text-6xl`} /></div>

    // if (taskuserid === null && taskuserid=== undefined) return <div className="w-screen h-screen flex justify-center items-center"><SplashMain splashmainstyle={`text-6xl`} /></div>

    ////////////////////////////////////////////////

    return (
        <Context.Provider value={{
        appstate, setappstate,
        authformstate, setauthformstate,
        fieldmainstate, setfieldmainstate,
        tabmainstate, settabmainstate,
        feedmainstate, setfeedmainstate,
        postmainstate, setpostmainstate,
        ptamainstate, setptamainstate,
        signmainstate, setsignmainstate,
        choicemainstate, setchoicemainstate,
        dtamainstate, setdtamainstate,
        // stamainstate, setstamainstate,
        // zoommainstate, setzoommainstate,
        // fix this V parse get rid of it
        authstate, setauthstate,
        search, setsearch,
        // V whts this
        useruserid, 
        appdl,
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
        textdl,
        searchdl,
        
        }} >
        {children}
      </Context.Provider>
    )
}