import React from 'react'

import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'
import SheetMain from '../../layout/sheet/SheetMain'
import SpreadMain from '../../layout/spread/SpreadMain'

export default function AwardForm() {

  return (
    <div>
        <SpreadMain>
        <main className="">
            <section className="">
                <CardMain children={undefined} />
                <CardMain children={undefined} />
                <SheetMain>
                <FieldMain 
                fieldmainstatic={{ fieldmainid: 'awardinput', fieldmainindex: 1 }} 
                fieldmainstyle={undefined} 
                fieldmaindata={undefined} />
                </SheetMain>
            </section>
        </main>
      </SpreadMain>
    </div>
  )
}
