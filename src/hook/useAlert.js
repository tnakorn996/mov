import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

export default function useAlert(alertmainstate) {
    const [alertstatic, setalertstatic] = useState()

    useEffect(() => {
        if(alertmainstate){
            setalertstatic({
                alertmainid: alertmainstate.alertmainid && alertmainstate.alertmainid, 
                alertmainindex: alertmainstate.alertmainindex && alertmainstate.alertmainindex,
                alertmaintitle: alertmainstate.alertmaintitle && alertmainstate.alertmaintitle,
                alertmainsubtitle: alertmainstate.alertmainsubtitle && alertmainstate.alertmainsubtitle,
            })
        }
    }, [alertmainstate])

  return [alertstatic, setalertstatic]
    
}