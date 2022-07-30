import React from 'react'

import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'
import SheetMain from '../../layout/sheet/SheetMain'

export default function ClubForm() {
  return (
    <div>
        <main className="bg-slate-100">
            <section className="">
                      <CardMain />
                <CardMain />
                <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid: 'clubinput', fieldmainindex: 0}} />
                </SheetMain>
            </section>
        </main>
    </div>
  )
}
