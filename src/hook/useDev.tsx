import React, { useContext, useEffect, useState } from 'react'
import useSplit from './useSplit'

import { Context } from '../context/context'

export default function useDev({
    devstaticdata,
    devstaticaction,

}) {
    const {
        setappstate, appstate, 

        // messagedl,

    } = useContext(Context)
    const [splitstatic, setsplitstatic] = useSplit(1)
    const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [devstatic, setdevstatic] = useState()
    // console.log('splitstatic', splitstatic)
    // console.log('splitstatictwo', splitstatictwo.includes(`main`))
    
    useEffect(() => {
        if(!devstaticdata) return null
        // if(appstate !== undefined) return null

        // console.log('devstaticdata', devstaticdata)
        const concat = devstaticdata
        const filter = concat.filter((data) => data.spreadrender().bool !== false)
        const filtertwo = filter.filter((data) => data.spreadrender().navigation.split(`/`)[1].includes(splitstatic))
        if(filtertwo.length > 0 
            && splitstatictwo && splitstatictwo.includes(`main`) ) {
            // && splitstatictwo) {
            setTimeout(() => {
                window.history.replaceState(null, "" , filtertwo[0].spreadhref)
                setappstate(devstaticaction)
            }, 1000);
        }
        return null
    }, [splitstatic])

  return [devstatic, setdevstatic]
}