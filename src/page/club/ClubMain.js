import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import CtaMain from '../../component/cta/CtaMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
import TabMain from '../../layout/tab/TabMain'

export default function ClubMain() {
  const {

    ticketdl,
    clubdl,

  } = useContext(Context)
  const navigate = useNavigate()

  // if(ticketdl && ticketdl[0]?.spreaddata?.length > 0) return null

  return (
    <div>
        <main className="">
            {/* <section className="">
              <CardMain>
              <CtaMain ctamainstatic={{ctamainid: 'clubembed', ctamainindex: 0}} />
              </CardMain>
            </section> */}

            <section className="">
                <TabMain tabmainstatic={{tabmainid: 'clubfieldset', tabmainindex: null}} />
            </section>

        </main>
    </div>
  )
}
