import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function useSlice(splitslice) {
    const [splitstatic, setsplitstatic] = useState()
    const location = useLocation()
    
    useEffect(() => {
        const split = location.pathname.split('/');
        setsplitstatic(split[splitslice])
    }, [location.pathname, splitslice])

  return [splitstatic, setsplitstatic]
}