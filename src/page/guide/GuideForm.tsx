import React from 'react'

import StaMain from '../../component/sta/StaMain'
import CardMain from '../../layout/card/CardMain'

export default function GuideForm() {
  return (
    <div>
        <main className="">
            <section className="">
                <CardMain>
                    <StaMain 
                    stamainstatic={{ stamainid: 'guideiframe' }} 
                    /> 
                </CardMain>
            </section>
        </main>
    </div>
  )
}
