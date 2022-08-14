import React from 'react'

import FieldMain from '../../component/field/FieldMain'
import StatMain from '../../component/stat/StatMain'
import CardMain from '../../layout/card/CardMain'

export default function ContractForm() {
  return (
    <div>
        <main className="">
            <section className="">
              <StatMain statmainstatic={{
                statmainid: 'contracttable', 
                statmainindex: 0}} />
            </section>
        </main>
    </div>
  )
}
