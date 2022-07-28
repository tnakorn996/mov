import React from 'react'

import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'

export default function TicketForm() {

  return (
    <div>
        <main className="">
            <section className="">
                      <CardMain />
                <CardMain />
                <FieldMain fieldmainstatic={{fieldmainid: 'ticketinput', fieldmainindex: 1}} />
            </section>
        </main>
    </div>
  )
}
