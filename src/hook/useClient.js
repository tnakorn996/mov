import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import { supabase } from '../lib/supabase'
import useSplit from './useSplit'

export default function useClient(clientmainid, clientmainindex, clientmainstatic, clientmainstatictwo, clientmainstaticthree) {
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const [clientstatic, setclientstatic] = useState()
    
    useEffect(() => {
      if(!splitstaticthree) return 
      ll(splitstaticthree)
    }, [splitstaticthree])

    const ll = async (splitstaticthree) => {
        const { data, error} = await supabase.from('task').select(`*, userid (*)`).eq('workoutid', splitstaticthree).limit(5)
        if(data) {
            setclientstatic(data)
        }
    }

    // useEffect(() => {


    // }, [clientmainstatic, clientmainstatictwo, clientmainstaticthree, clientmainid, clientmainindex])

  return [clientstatic, setclientstatic]
    
}