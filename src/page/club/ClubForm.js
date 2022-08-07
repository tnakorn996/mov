import React from 'react'

import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'
import SheetMain from '../../layout/sheet/SheetMain'
import SpreadMain from '../../layout/spread/SpreadMain'

export default function ClubForm() {
  return (
    <div>
        {/* <main className="bg-slate-100">
            <section className="">
                      <CardMain />
                <CardMain />
                <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid: 'clubinput', fieldmainindex: 0}} />
                </SheetMain>
            </section>
        </main> */}
        <SpreadMain>
        <main className="">
            <section className="">
                <CardMain />
                <CardMain />
                <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid: 'clubinput', fieldmainindex: 0}} />
                </SheetMain>
            </section>
        </main>
      </SpreadMain>
    </div>
  )
}
