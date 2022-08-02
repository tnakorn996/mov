import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

export default function useApp(appmain, appmainid, appmainindex, appmainstatic, appmainstatictwo, appmainstaticthree) {
    const [appstatic, setappstatic] = useState()

    useEffect(() => {
      if(appmain !== undefined && appmainid !== undefined && appmainindex !== undefined ) {
        // console.log('appmain, appmainid, appmainindex', appmain, appmainid, appmainindex)
        const filter = appmain.filter(data => Object.values(data)[0] === appmainid)
        if(filter.length > 0 && appmainindex !== null){
          const filtertwo = Object.values(filter[0])[1].filter(data => Object.values(data)[0] === appmainindex)
          setappstatic(filtertwo)
        }
        if(filter.length > 0 && appmainindex === null){
          const filtertwo = Object.values(filter[0])[1]
          setappstatic(filtertwo)
        }
      } 
    }, [appmainstatic, appmainstatictwo, appmainstaticthree, appmainid, appmainindex])

  return [appstatic, setappstatic]
    
}