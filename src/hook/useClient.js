import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import { supabase } from '../lib/supabase'
import useSplit from './useSplit'

export default function useClient(clientmainstatic, clientmainstatictwo, clientmainstaticthree) {
    // const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const [clientstatic, setclientstatic] = useState()
    
    useEffect(() => {
      if(!splitstaticthree) return 
      ll(splitstaticthree)
    }, [splitstaticthree])

    const ll = async (splitstaticthree) => {
        const user = supabase.auth.user()
        const { data, error} = await supabase.from('task').select(`*, userid (*)`).eq('userid', user.id, 'workoutid', splitstaticthree).limit(5)
        if(data) {
            setclientstatic(data)
            // console.log('data', data)
        }
    }

    // useEffect(() => {


    // }, [clientmainstatic, clientmainstatictwo, clientmainstaticthree, clientmainid, clientmainindex])

  return [clientstatic, setclientstatic]
    
}