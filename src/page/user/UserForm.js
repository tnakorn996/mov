import React from 'react'

import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'
import SpreadMain from '../../layout/spread/SpreadMain'
import SheetMain from '../../layout/sheet/SheetMain'

export default function UserForm() {
    
  return (
    <div>
        <main className="">
          {/* <SpreadMain> */}
            <section className="">
              <CardMain />
              <CardMain />
              <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid:'userinput', fieldmainindex: 2}} />
              </SheetMain>
              {/* <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid:'userinput', fieldmainindex: 3}} />
              </SheetMain> */}
              <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid:'userinput', fieldmainindex: 1}} />
              </SheetMain>
              <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid:'userinput', fieldmainindex: 0}} fieldmainstyle={{button: `!bg-rose-700 !border-rose-900`}} />
              </SheetMain>
            </section>
          {/* </SpreadMain> */}
        </main>
    </div>
  )
}
