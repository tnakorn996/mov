import React from 'react'

import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'

export default function ClubForm() {
  return (
    <div>
        <main className="">
            <section className="">
                      <CardMain />
                <CardMain />
                <FieldMain fieldmainstatic={{fieldmainid: 'clubinput', fieldmainindex: 0}} />
            </section>
        </main>
    </div>
  )
}
