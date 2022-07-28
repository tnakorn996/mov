import React from 'react'
import { useParams } from 'react-router-dom'
import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'

export default function TaskForm() {

  return (
    <div>
        <main className="">
            <section className="">
                <CardMain />
                <CardMain />
                <FieldMain fieldmainstatic={{fieldmainid: 'taskinput', fieldmainindex: 1}} />
            </section>
        </main>
    </div>
  )
}
