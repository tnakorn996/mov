import React from 'react'

import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'
import SheetMain from '../../layout/sheet/SheetMain'
import SpreadMain from '../../layout/spread/SpreadMain'

export default function TicketForm() {

  return (
    <div>
        <main className="">
          {/* <SpreadMain> */}
            <section className="">
                <CardMain />
                <CardMain />
                <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid: 'ticketinput', fieldmainindex: 1}} />
                </SheetMain>
            </section>
          {/* </SpreadMain> */}
        </main>
    </div>
  )
}
