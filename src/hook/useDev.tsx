import React, { useContext, useEffect, useState } from 'react'
import useSplit from './useSplit'

import { Context } from '../context/context'

export default function useDev() {
    const {
        setappstate,

        messagedl,

    } = useContext(Context)
    const [splitstatic, setsplitstatic] = useSplit(1)
    const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [devstatic, setdevstatic] = useState()
    // console.log('splitstatic', splitstatic)
    // console.log('splitstatictwo', splitstatictwo.includes(`main`))
    
    useEffect(() => {
        const concat = messagedl[0].spreaddata.concat(messagedl[1].spreaddata, messagedl[2].spreaddata)
        const filter = concat.filter((data: { spreadrender: () => undefined }) => data.spreadrender() !== undefined)
        const filtertwo = filter.filter((data) => data.spreadrender().split(`/`)[1].includes(splitstatic))
        // console.log('filtertwo', filtertwo)
        if(filtertwo.length > 0 
            && splitstatictwo && splitstatictwo.includes(`main`) ) {
            setTimeout(() => {
                window.history.replaceState(null, "" , filtertwo[0].spreadhref)
                setappstate({
                    appid:'backdropmain',
                    appidtwo: 'previewmain',
                    appidthree: 'apparticle',
                    appindex: 0
                })
            }, 1000);
            // return setdevstatic(concat)
        }
        return null
    }, [splitstatic])

  return [devstatic, setdevstatic]
}