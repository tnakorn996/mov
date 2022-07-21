import React, { useState } from 'react'

import FieldMain from '../../component/field/FieldMain'

export default function AuthForm() {
  const [modalmainstate, setmodalmainstate] = useState(true)
  return (
    <div>
        <main className="">
          <section className="">
            <button onClick={() => setmodalmainstate(!modalmainstate)} className="">state</button>
          </section>
            <section className="">
                {modalmainstate === true && <FieldMain fieldmainstatic={{fieldmainid:'authinput', fieldmainindex: 0}} /> }
                {modalmainstate === false &&<FieldMain fieldmainstatic={{fieldmainid:'authinput', fieldmainindex: 1}} /> }
            </section>
        </main>
    </div>
  )
}
