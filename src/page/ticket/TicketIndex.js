import React, { useContext, useEffect, useState } from 'react'

import CtaMain from '../../component/cta/CtaMain'
import { clubul } from '../../content/content'
import { Context } from '../../context/context'

export default function TicketIndex() {
  const {

    taskdl,
    ticketdl,

  } = useContext(Context)
  const [ticketindexrender, setticketindexrender] = useState()

  useEffect(() => {
    if(clubul && taskdl){
      for(const data of clubul){
        const filter = taskdl[1].spreaddata.filter(dat => dat.workoutid === data.breadid)
        setticketindexrender(filter)
      }
    }
  }, [ticketdl])

  // console.log('taskdl[1]', taskdl[1])

  return (
    <div>
        <main className="">
            <section className="">
                tick index
            </section>
            <section className="">
              <CtaMain ctamainstatic={{ctamainid:'ticketembed', ctamainindex: 0}} />
            </section>
            <section className="">
              {ticketindexrender?.map(data => (<>
                <article className="">
                  <h1 className="">{data?.workoutid}</h1>
                </article>
              </>))}
            </section>
        </main>
    </div>
  )
}
