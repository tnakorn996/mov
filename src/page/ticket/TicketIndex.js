import React, { useContext, useEffect, useState } from 'react'

// import { supabase } from '../../lib/supabase'
import useSplit from '../../hook/useSplit'
import useClientTwo from '../../hook/useClientTwo.tsx'
import CtaMain from '../../component/cta/CtaMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import SheetMain from '../../layout/sheet/SheetMain'
import StatMain from '../../component/stat/StatMain'
// import useClient from '../../hook/useClient'

export default function TicketIndex() {
  const {
    authstate


  } = useContext(Context)
  const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    
  const [clientstatic, setclientstatic] = useClientTwo({
    id: 'ticketindex',
    from: `task`,
    select: `*, userid (*)`,
    order: [`weightid`, { ascending: false }],
    eq: ['workoutid', splitstaticthree],
    limit: 5,
  })

  // const [clientstatictwo, setclientstatictwo] = useClientTwo({
  //   id: 'ticketindex',
  //   from: `task`,
  //   select: `*, userid (*)`,
  //   order: [`userid`, { ascending: false }],
  //   eq: ['userid', authstate?.user?.id, 'workoutid', splitstaticthree],
  //   limit: 5,
  // })


  // console.log('clientstatictwso', clientstatictwo)

  return (
    <div>
        <main className="">
          <section className="">
              <PostMain postmainstatic={{postmainid:'ticketaddress', postmainindex: 1}} />
          </section>
          <section className="">
            {/* <StatMain statmainstatic={{statmainid:'tickettable', statmainindex: 0}} /> */}
            <StatMain  statmainstatic={{statmainid:'tickettable', statmainindex: 1}} />
          </section>
          <section className="">
            <StatMain stamaindata={clientstatic && clientstatic} statmainstatic={{statmainid:'tickettable', statmainindex: 0}} />
          </section>
        </main>
    </div>
  )
}
