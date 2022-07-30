import React from 'react'
import { useParams } from 'react-router-dom'
import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'
import SheetMain from '../../layout/sheet/SheetMain'
import SpreadMain from '../../layout/spread/SpreadMain'

export default function TaskForm() {

  return (
    <div>
      <SpreadMain>
        <main className="">
            <section className="">
                <CardMain />
                <CardMain />
                <SheetMain>
                <FieldMain fieldmainstatic={{fieldmainid: 'taskinput', fieldmainindex: 1}} />
                </SheetMain>
            </section>
        </main>
      </SpreadMain>
    </div>
  )
}
