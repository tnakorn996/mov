import React, { useContext, useState } from 'react'

import FieldMain from '../../component/field/FieldMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'

export default function AuthForm() {
  const {
    authformstate, setauthformstate,

  } = useContext(Context)

  return (
    <div>
        <main className="">
          <CardMain />
          <CardMain />
            <section className="">
              <CardMain>
                {authformstate === true && <FieldMain fieldmainstatic={{fieldmainid:'authinput', fieldmainindex: 0}} />}
                {authformstate === false && <FieldMain fieldmainstatic={{fieldmainid:'authinput', fieldmainindex: 1}} />}
              </CardMain>
            </section>
        </main>
    </div>
  )
}
