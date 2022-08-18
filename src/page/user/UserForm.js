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
                <FieldMain fieldmainstatic={{fieldmainid:'userinput', fieldmainindex: 2}} fieldmainstyle={{button: `!l-button`}} />
              </SheetMain>
              {/* <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid:'userinput', fieldmainindex: 3}} />
              </SheetMain> */}
              <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid:'userinput', fieldmainindex: 1}} fieldmainstyle={{button: `!l-button`}} />
              </SheetMain>
              <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid:'userinput', fieldmainindex: 0}} fieldmainstyle={{button: `!bg-red-800 !border-red-800`}} />
              </SheetMain>
            </section>
          {/* </SpreadMain> */}
        </main>
    </div>
  )
}
