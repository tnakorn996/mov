import React, { useContext, useEffect, useState } from 'react'
import useSplit from './useSplit'

import { Context } from '../context/context'

export default function useDev({
    devstaticdata,
    devstaticaction,

}) {
    const {
        setappstate, appstate, 

    } = useContext(Context)
    // console.log('appstate', appstate)
    const [splitstatic, setsplitstatic] = useSplit(1)
    const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [devstatic, setdevstatic] = useState()
    
    useEffect(() => {
        if(!devstaticdata) return null
        // console.log('devstaticdata', devstaticdata)
        const concat = devstaticdata
        const filter = concat.filter((data) => data.spreadrender().bool === true)
        const filtertwo = filter.filter((data) => data.spreadrender().navigation.split(`/`)[1].includes(splitstatic))
        // console.log('filter', filter)
        // console.log('filtertwo', filtertwo)
        if(filtertwo.length > 0 
            && splitstatictwo
            && (splitstatictwo.includes(`main`) 
            || splitstatictwo.includes(`userindex`)) ) {
            // && splitstatictwo) {
            setTimeout(() => {
                window.history.replaceState(null, "" , filtertwo[0].spreadhref)
                setappstate(devstaticaction)
                // console.log('appstate', appstate)
            }, 1000);
        }
        return null
    }, [splitstatic])

  return [devstatic, setdevstatic]
}