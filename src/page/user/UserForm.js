import React from 'react'

import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'

export default function UserForm() {
    
  return (
    <div>
        <main className="">
            <section className="">
              <CardMain />
              <CardMain />
              <CardMain>
                <FieldMain fieldmainstatic={{fieldmainid:'userinput', fieldmainindex: 0}} />
              </CardMain>
            </section>
        </main>
    </div>
  )
}
