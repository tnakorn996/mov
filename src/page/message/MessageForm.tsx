import React from 'react'

import StaMain from '../../component/sta/StaMain'
import StatMain from '../../component/stat/StatMain'
import CardMain from '../../layout/card/CardMain'

export default function MessageForm() {
  return (
    <div>
        <main className="">
            <section className="">
              <CardMain>
                    <StaMain 
                    stamainstatic={{ stamainid: 'messageiframe' }} 
                    /> 
              </CardMain>
              {/* <StatMain statmainstatic={{ stamainid: 'messagetable', stamainindex: 0}} /> */}
            </section>
        </main>
    </div>
  )
}
