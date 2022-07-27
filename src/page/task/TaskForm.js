import React from 'react'
import { useParams } from 'react-router-dom'
import FieldMain from '../../component/field/FieldMain'

export default function TaskForm() {

  return (
    <div>
        <main className="">
            <section className="">
                <FieldMain fieldmainstatic={{fieldmainid: 'taskinput', fieldmainindex: 1}} />
            </section>
        </main>
    </div>
  )
}
