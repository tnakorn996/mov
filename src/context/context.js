
import React, { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { clubul, workoutul } from '../content/content'

import {supabase} from '../lib/supabase'

export const Context = createContext()

export const Provider = ({ 
    children 
}) => {
    // const navigate = useNavigate()
    // const location = useLocation()
    // const param = useParams()
    const [appstate, setappstate] = useState('')
    const [statmainstate, setstatmainstate] = useState('')
    const [fieldmainstate, setfieldmainstate] = useState(true)
    
    const parseuseruserid = JSON.parse(window.localStorage.getItem("mov.useruserid"));
    const parsetaskuserid = JSON.parse(window.localStorage.getItem("mov.taskuserid"));
    const parsetask = JSON.parse(window.localStorage.getItem("mov.task"));
    const parseticketuserid = JSON.parse(window.localStorage.getItem("mov.ticketuserid"));
    if(!parseuseruserid) {window.localStorage.setItem("mov.useruserid", JSON.stringify([]))}
    if(!parsetaskuserid) {window.localStorage.setItem("mov.taskuserid", JSON.stringify([]))}
    if(!parsetask) {window.localStorage.setItem("mov.task", JSON.stringify([]))}
    if(!parseticketuserid) {window.localStorage.setItem("mov.ticketuserid", JSON.stringify([]))}
    const [authstate, setauthstate] = useState('')

    useEffect(() => {
        setauthstate(supabase.auth.session())
        supabase.auth.onAuthStateChange((_event, session) => {
            setauthstate(session)
        })

    }, [])
    
    useEffect(() => {
        if(authstate){
            pp(authstate.user.id)
            oo(authstate.user.id)
            ii(authstate.user.id)
            uu(authstate.user.id)
        } 
    }, [authstate, fieldmainstate])

    const pp = async (first =this.props.first) => {
        const { data, error} = await supabase.from('user').select(`*`).eq('userid', first)
        if(data) {window.localStorage.setItem('mov.useruserid', JSON.stringify(data))}
    }

    const oo = async (first =this.props.first) => {
        const { data, error} = await supabase.from('task').select(`*`).eq('userid', first)
        if(data) {window.localStorage.setItem('mov.taskuserid', JSON.stringify(data))}
    }

    const ii = async (first =this.props.first) => {
        const { data, error} = await supabase.from('task').select(`*`)
        if(data) {window.localStorage.setItem('mov.task', JSON.stringify(data))}
    }

    const uu = async (first =this.props.first) => {
        const { data, error} = await supabase.from('ticket').select(`*`).eq('userid', first)
        if(data) {window.localStorage.setItem('mov.ticketuserid', JSON.stringify(data))}
    }

    ////////////////////////////////////////////////


    ////////////////////////////////////////////////

    const workoutdl = [
        {
            spreadid: 'new',
            spreadtitle: 'New Workouts',
            // spreaddata:  parseclub?.filter(data => data?.clubid !== parseticket[0]?.clubid) || parseclub,
            spreaddata:  workoutul,
        },
        {
            spreadid: 'pick',
            spreadtitle: 'Top pick',
            // spreaddata:  parseclub?.filter(data => data?.clubid !== parseticket[0]?.clubid) || parseclub,
            spreaddata:  workoutul,
        },
    ]

    const taskdl =[
        {
            spreadid: 'my',
            spreadtitle: 'Your Workouts',
            spreaddata: parsetaskuserid && parsetaskuserid,
        },
        {
            spreadid: 'all',
            spreadtitle: 'Global',
            spreaddata: parsetask && parsetask,
        },
    ]

    const clubdl = [
        {
            spreadid: 'all',
            spreadtitle: 'Join a challenge',
            // spreaddata:  parseclub?.filter(data => data?.clubid !== parseticket[0]?.clubid) || parseclub,
            spreaddata:  clubul,
        },
    ]

    const ticketdl =[
        {
            spreadid: 'my',
            spreadtitle: 'My challenges',
            spreaddata: parseticketuserid && parseticketuserid,
        },
    ]

    ////////////////////////////////////////////////

    return (
        <Context.Provider value={{
        appstate, setappstate,
        statmainstate, setstatmainstate,
        fieldmainstate, setfieldmainstate,
        // fix this V parse get rid of it
        parseuseruserid, 
        authstate, setauthstate,
        taskdl,
        workoutdl,
        ticketdl,
        clubdl,
        
        }} >
        {children}
      </Context.Provider>
    )
}
