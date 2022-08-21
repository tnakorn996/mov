import React, { useContext, useEffect, useState } from 'react'
import useSplit from './useSplit'

import { Context } from '../context/context'
import { useLocation } from 'react-router-dom'

export default function useAd() {
    const {
        setappstate, appstate, 
        ttamainstate,

    } = useContext(Context)
    // console.log('appstate', appstate)
    const location = useLocation()
    const [adstatic, setadstatic] = useState()

    useEffect(() => {
      if(location && location.pathname){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
      }
    }, [location.pathname])

    // useEffect(() => {
    //    devAction()
    // }, [])

    useEffect(() => {
       devAction()
    }, [ttamainstate])

    function devAction() {
        const parse = JSON.parse(localStorage['mov.themetframe'])
        const local = Object.assign(...parse)
        // console.log('local', local)
        if(typeof local === 'undefined') return null
        if (local.themeid === `dark`) {
          document.documentElement.classList.add(`dark`)
        } 
        if (local !== 'undefined' && local.themeid !== `dark`) {
          document.documentElement.classList.remove(`dark`)
        } 


        // if (typeof local !== 'undefined') {
        // document.documentElement.classList.remove(local.themeid)
        // }

        // Whenever the user explicitly chooses light mode
        // localStorage['mov.themeiframe'].themeiframeid  = 'light'

        // Whenever the user explicitly chooses dark mode
        // localStorage['mov.themeiframe'].themeiframeid  = 'dark'

        // Whenever the user explicitly chooses to respect the OS preference
        // localStorage.removeItem('mov.themeiframe')
    }
    

  return [adstatic, setadstatic]
}