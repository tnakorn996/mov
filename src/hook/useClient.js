import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'

import { supabase } from '../lib/supabase'
import useSplit from './useSplit'

export default function useClient(clientmainstatic, clientmainstatictwo, clientmainstaticthree) {
    const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const [clientstatic, setclientstatic] = useState()
    
    useEffect(() => {
      if(!splitstaticthree) return 
      clientRender(splitstaticthree)
    }, [splitstaticthree])

    function clientRenderTwo(userid) {
      // console.log('userid', userid)
      const query = [
        {
          id: 'userindex',
          from: `user`,
          select: `*`,
          order: [`userid`, { ascending: false }],
          eq: ['userid', splitstaticthree],
          limit: 5,
        },

        {
          id: 'workoutindex',
          from: `task`,
          select: `*`,
          order: [`taskid`, { ascending: false }],
          eq: ['userid', userid, 'workoutid', splitstaticthree],
          limit: 5,
        },
        {
          id: 'taskindex',
          from: `task`,
          select: `*`,
          order: [`taskid`, { ascending: false }],
          eq: ['userid', userid, 'workoutid', splitstaticthree],
          limit: 5,
        },

        {
          id: 'clubindex',
          from: `ticket`,
          select: `*`,
          order: [`ticketid`, { ascending: false }],
          eq: ['userid', userid, 'clubid', splitstaticthree],
          limit: 5,
        },
        {
          id: 'ticketindex',
          from: `task`,
          select: `*, userid (*)`,
          order: [`weightid`, { ascending: false }],
          eq: ['workoutid', splitstaticthree],
          limit: 5,
        },

        {
          id: 'achievementindex',
          from: `award`,
          select: `*`,
          order: [`awardid`, { ascending: false }],
          eq: ['userid', userid, 'clubid', splitstaticthree],
          limit: 5,
        },
        // {
        //   id: 'achievementindex',
        //   from: `award`,
        //   select: `*`,
        //   eq: ['userid', userid, 'clubid', splitstaticthree],
        //   limit: 5,
        // },
      ]
      const filter = query.filter(data => data.id === splitstatictwo)
      const ref = filter[0]
      return ref
    }

    const clientRender = async (splitstaticthree) => {
        const user = supabase.auth.user()
        const func = clientRenderTwo(user.id)
        // const string = func.eq.toString().replace(`,`, ` `)
        // const map = func.eq.map(data => Object.values(data.data))
        // const join = func.eq[0] + `, ` + func.eq[1]
        // const stringify = func.eq.map(data => JSON.stringify(data)).join()

        // console.log('func', func)
        // console.log('map', map)
        // console.log('join', join)
        // console.log('string', string)
        if(func !== null && func !== undefined) {
          const { data, error} = await supabase.from(func.from).select(func.select)
          .order(
            func.order[0], func.order[1], func.order[2], func.order[3]
          )
          .eq(
            func.eq[0], func.eq[1], func.eq[2], func.eq[3]
            ).limit(func.limit)
          if(data) {
            console.log('data', data)
            setclientstatic(data)
          } else {
            alert(error)
          }
        }
    }

  return [clientstatic, setclientstatic]
    
}
