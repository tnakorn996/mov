import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { supabase } from '../lib/supabase'
import useSplit from './useSplit'

export default function useClientTwo(clientmaindata: any, clientmainstatic: any, clientmainstatictwo: any, clientmainstaticthree: any) {
  const location = useLocation()
  const navigate = useNavigate()
  const [splitstatic, setsplitstatic] = useSplit(1)
  const [splitstatictwo, setsplitstatictwo] = useSplit(2)
  const [splitstaticthree, setsplitstaticthree] = useSplit(3)
  const [clientstatic, setclientstatic] = useState()

  useEffect(() => {
    if (typeof clientmaindata !== 'undefined') {
      return clientAction(clientmaindata)
    }
  }, [splitstatic])

  const clientAction = async (first: {
    from: string;
    select: string | undefined;
    order: any[];
    eq: any[];
    limit: number
  }) => {
    const user = supabase.auth.user()

    if (typeof first !== 'undefined' && user) {
      const { data, error } = await supabase.from(first.from).select(first.select)
        .order(first.order[0], first.order[1])
        .eq(first.eq[0], first.eq[1], first.eq[2], first.eq[3])
        .limit(first.limit)
      if (data) {
        // console.log('data.....', data)
        return setclientstatic(data)
      } else {
        // alert(error)
      }
    }
  }

  return [clientstatic, setclientstatic]

}
