import React from 'react'
import BreadMain from '../../component/bread/BreadMain'
import FieldMain from '../../component/field/FieldMain'
import CardMain from '../../layout/card/CardMain'
import SheetMain from '../../layout/sheet/SheetMain'

export default function ImageForm() {


  return (
    <div>
        <main className="">
            <section className="">
                <CardMain children={undefined} />
                <CardMain children={undefined} />
                <BreadMain />
                <SheetMain>
                <FieldMain 
                fieldmainstatic={{ fieldmainid: 'userinput', fieldmainindex: 2 }} 
                fieldmainstyle={{ button: `!l-button` }} 
                fieldmaindata={undefined} />
              </SheetMain>
            </section>
        </main>
    </div>
  )
}
