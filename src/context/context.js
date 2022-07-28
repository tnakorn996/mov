
import React, { createContext, useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'

import { clubul, workoutul } from '../content/content'
import {supabase} from '../lib/supabase'
import SplashMain from '../layout/splash/SplashMain'

export const Context = createContext()

export const Provider = ({ 
    children 
}) => {
    const navigate = useNavigate()
    const location = useLocation()
    // const param = useParams()
    const [appstate, setappstate] = useState()
    const [authformstate, setauthformstate] = useState(false)
    const [fieldmainstate, setfieldmainstate] = useState(true)
    const [tabmainstate, settabmainstate] = useState({tabmainindex: 0})
    const [feedmainstate, setfeedmainstate] = useState({feedmainindex: 0})
    const [postmainstate, setpostmainstate] = useState(true)
    const [ptamainstate, setptamainstate] = useState(true)
    // const [zoommainstate, setzoommainstate] = useState(true)
    
    const [authstate, setauthstate] = useState()
    const [useruserid, setuseruserid] = useState()
    const [taskuserid, settaskuserid] = useState()
    const [task, settask] = useState()
    const [ticketuserid, setticketuserid] = useState()
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
            pp(authstate.user.id)
            oo(authstate.user.id)
            ii(authstate.user.id)
            uu(authstate.user.id)
        } 
    }, [authstate, fieldmainstate])

    const pp = async (first =this.props.first) => {
        const { data, error} = await supabase.from('user').select(`*`).eq('userid', first)
        if(data) {
            setuseruserid(data)
            // window.localStorage.setItem('mov.useruserid', JSON.stringify(data))
        }
    }

    const oo = async (first =this.props.first) => {
        const { data, error} = await supabase.from('task').select(`*`).eq('userid', first)
        if(data) {
            settaskuserid(data)
            // window.localStorage.setItem('mov.taskuserid', JSON.stringify(data))
        }
    }

    const ii = async (first =this.props.first) => {
        const { data, error} = await supabase.from('task').select(`*`)
        if(data) {
            settask(data)
            // window.localStorage.setItem('mov.task', JSON.stringify(data))
        }
    }

    const uu = async (first =this.props.first) => {
        const { data, error} = await supabase.from('ticket').select(`*`).eq('userid', first)
        if(data) {
            setticketuserid(data)
            // window.localStorage.setItem('mov.ticketuserid', JSON.stringify(data))
        }
    }

    ////////////////////////////////////////////////


    ////////////////////////////////////////////////

    const userdl = [
        {
            spreadid: 'my',
            spreadtitle: 'My details',
            // spreaddata:  parseuseruserid && parseuseruserid,
            spreaddata: useruserid && useruserid,
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

    // if(!useruserid && !taskuserid && !task && !ticketuserid) return <div className="w-screen h-screen flex justify-center items-center"><SplashMain splashmainstyle={`text-6xl`} /></div>
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
        // zoommainstate, setzoommainstate,
        // fix this V parse get rid of it
        authstate, setauthstate,
        useruserid, 
        userdl,
        taskdl,
        workoutdl,
        ticketdl,
        clubdl,
        favouritedl,
        
        }} >
        {children}
      </Context.Provider>
    )
}
