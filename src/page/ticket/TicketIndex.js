import React, { useContext, useEffect, useState } from 'react'

import { supabase } from '../../lib/supabase'
import useSplit from '../../hook/useSplit'
import CtaMain from '../../component/cta/CtaMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import SheetMain from '../../layout/sheet/SheetMain'
import StatMain from '../../component/stat/StatMain'
import useClient from '../../hook/useClient'

export default function TicketIndex() {
  const {


  } = useContext(Context)
  const [clientstatic, setclientstatic] = useClient()
    
  return (
    <div>
        <main className="">
          <section className="">
              <PostMain postmainstatic={{postmainid:'ticketaddress', postmainindex: 1}} />
          </section>
          <section className="">
            {/* <StatMain statmainstatic={{statmainid:'tickettable', statmainindex: 0}} /> */}
            <SheetMain>
            <CtaMain ctamainstatic={{ctamainid: 'workoutembed', ctamainindex: 0}} />
            </SheetMain>
            <StatMain statmainstatic={{statmainid:'tickettable', statmainindex: 1}} />
          </section>

          <section className="">
            {clientstatic?.map((data, index) => (<>
            <SheetMain>
              <div className="flex flex-row gap-3">
              <p className="">{index + 1}</p>
              <PostMain postmaindata={data} postmainstatic={{postmainid:'ticketaddress', postmainindex: 2}} />
              </div>
            </SheetMain>
            </>))}
          </section>

          <section className="">
          <CardMain>
            <CtaMain ctamainstatic={{ctamainid:'ticketembed', ctamainindex: 0}} />
          </CardMain>
          </section>
        </main>
    </div>
  )
}
