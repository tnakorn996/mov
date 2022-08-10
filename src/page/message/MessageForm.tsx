import React from 'react'

import StaMain from '../../component/sta/StaMain'
import CardMain from '../../layout/card/CardMain'

export default function MessageForm() {
  return (
    <div>
        <main className="">
            <section className="">
                    <StaMain 
                    stamainstatic={{ stamainid: 'messageiframe' }} 
                    /> 
            </section>
        </main>
    </div>
  )
}
