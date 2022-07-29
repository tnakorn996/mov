import React from 'react'
import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'

export default function ContractForm() {
  return (
    <div>
        <main className="">
            <section className="">
                <CardMain />
                <CardMain />
                <FieldMain fieldmainstatic={{fieldmainid: 'contractinput', fieldmainindex: 1}} fieldmainstyle={{button: `!bg-white l-button`}} />
            </section>
        </main>
    </div>
  )
}
