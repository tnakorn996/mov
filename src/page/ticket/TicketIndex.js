import React, { useContext, useEffect, useState } from 'react'

import { supabase } from '../../lib/supabase'
import useSplit from '../../hook/useSplit'
import CtaMain from '../../component/cta/CtaMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import SheetMain from '../../layout/sheet/SheetMain'
import StatMain from '../../component/stat/StatMain'

export default function TicketIndex() {
  const {


  } = useContext(Context)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)

    const [ticketindexrender, setticketindexrender] = useState()

    useEffect(() => {
      if(!splitstaticthree) return 
      ll(splitstaticthree)
    }, [splitstaticthree])
    
    const ll = async (first =this.props.first) => {
        const { data, error} = await supabase.from('task').select(`*, userid (*)`).eq('workoutid', first).limit(5)
        if(data) {
            setticketindexrender(data)
        }
    }

  return (
    <div>
        <main className="">
          <section className="">
              <PostMain postmainstatic={{postmainid:'ticketaddress', postmainindex: 1}} />
          </section>
          <section className="">
            <StatMain statmainstatic={{statmainid:'tickettable', statmainindex: 0}} />
          </section>
          <section className="">
            {ticketindexrender?.map((data, index) => (<>
            <SheetMain>
              <div className="flex flex-row gap-3">
              <p className="">{index + 1}</p>
              <PostMain postmaindata={data} postmainstatic={{postmainid:'ticketaddress', postmainindex: 2}} />
              </div>
            </SheetMain>
            </>))}
          </section>
        </main>
    </div>
  )
}
