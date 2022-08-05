
import React, { createContext, useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'

import { achievementul, clubul, workoutul } from '../content/content'
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
            selectUser(authstate.user.id)
            selectUserUserid(authstate.user.id)
            selectContractSenderid(authstate.user.id)
            selectContractReceiverid(authstate.user.id)
            selectTask(authstate.user.id)
            selectTaskUserid(authstate.user.id)
            selectTicketUserid(authstate.user.id)
            selectAwardUserid(authstate.user.id)
        } 
    }, [authstate, fieldmainstate])

    const selectUser = async (first =this.props.first) => {
        const { data, error} = await supabase.from('user').select(`*`)
        if(data) {
            setuser(data)
        }
    }

    const selectUserUserid = async (first =this.props.first) => {
        const { data, error} = await supabase.from('user').select(`*`).eq('userid', first)
        if(data) {
            setuseruserid(data)
        }
    }

    const selectContractSenderid = async (first =this.props.first) => {
        const { data, error} = await supabase.from('contract').select(`*, receiverid (*)`).eq('senderid', first)
        if(data) {
            setcontractsenderid(data)
        }
    }

    const selectContractReceiverid = async (first =this.props.first) => {
        const { data, error} = await supabase.from('contract').select(`*, senderid (*)`).eq('receiverid', first)
        if(data) {
            setcontractreceiverid(data)
        }
    }

    const selectTask = async (first =this.props.first) => {
        const { data, error} = await supabase.from('task').select(`*`)
        if(data) {
            settask(data)
        }
    }

    const selectTaskUserid = async (first =this.props.first) => {
        const { data, error} = await supabase.from('task').select(`*`).eq('userid', first)
        if(data) {
            settaskuserid(data)
        }
    }

    const selectTicketUserid = async (first =this.props.first) => {
        const { data, error} = await supabase.from('ticket').select(`*`).eq('userid', first)
        if(data) {
            setticketuserid(data)
        }
    }

    const selectAwardUserid = async (first =this.props.first) => {
        const { data, error} = await supabase.from('award').select(`*`).eq('userid', first)
        if(data) {
            setawarduserid(data)
        }
    }

    ////////////////////////////////////////////////


    ////////////////////////////////////////////////

    const userdl = [
        {
            spreadid: 'my',
            spreadtitle: 'My details',
            spreaddata: useruserid && useruserid,
        },
        {
            spreadid: 'all',
            spreadtitle: 'All users',
            spreaddata: (user && user),
        },
        {
            spreadid: 'else',
            spreadtitle: 'Anyone else',
            spreaddata: (user && authstate) && user.filter(data => data.userid !== authstate.user.id),
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
            // spreaddata: parsetaskuserid && parsetaskuserid,
            spreaddata: taskuserid,
        },
        {
            spreadid: 'all',
            spreadtitle: 'Global',
            // spreaddata: parsetask && parsetask,
            spreaddata: task,
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
            spreaddata: (parseworkout && authstate !== null && authstate !== undefined) && parseworkout.filter(data => data.userid === authstate.user.id),
        },
        {
            spreadid: 'club',
            spreadtitle: 'Favourite camp',
            spreaddata: (parseclub && authstate !== null && authstate !== undefined) && parseclub.filter(data => data.userid === authstate.user.id),
        },
    ]

    const achievementdl =[
        {
            spreadid: 'user',
            spreadtitle: 'all users',
            spreaddata: achievementul.filter(data => data.breadid.includes('user')),
        },
        {
            spreadid: 'workout',
            spreadtitle: 'all workouts',
            spreaddata: achievementul.filter(data => data.breadid.includes('workout')),
        },
    ]

    const awarddl =[
        {
            spreadid: 'my',
            spreadtitle: 'My rewards',
            spreaddata: awarduserid,
            spreaddatatwo: [
                {
                    breadid: 'user-one',
                    breadbool: () => {
                        if(taskdl[0]?.spreaddata?.length >= 1){
                            return true
                        } else {
                            return false
                        }
                    }
                },
                       {
                    breadid: 'user-two',
                    breadbool: () => {
                        if(taskdl[0]?.spreaddata?.length >= 1){
                            return true
                        } else {
                            return false
                        }
                    }
                },
                       {
                    breadid: 'user-three',
                    breadbool: () => {
                        if(taskdl[0]?.spreaddata?.length >= 1){
                            return true
                        } else {
                            return false
                        }
                    }
                },

                {
                    breadid: 'workout-one',
                    breadbool: () => {
                        if(taskdl[0]?.spreaddata?.length >= 1){
                            return true
                        } else {
                            return false
                        }
                    }
                },
                {
                    breadid: 'workout-three',
                    breadbool: () => {
                        if(taskdl[0]?.spreaddata?.length >= 3){
                            return true
                        } else {
                            return false
                        }
                    }
                },
            ]
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
        // stamainstate, setstamainstate,
        // zoommainstate, setzoommainstate,
        // fix this V parse get rid of it
        authstate, setauthstate,
        useruserid, 
        userdl,
        contractdl,
        workoutdl,
        taskdl,
        clubdl,
        ticketdl,
        favouritedl,
        achievementdl,
        awarddl,
        
        }} >
        {children}
      </Context.Provider>
    )
}
