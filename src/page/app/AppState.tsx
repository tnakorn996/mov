import React, { useContext } from 'react'

import SignMain from '../../component/sign/SignMain.tsx'
import { Context } from '../../context/context'

export default function AppState() {
    const { 

    signmainstate, 

    } = useContext(Context)

  return (
    <div>
        <main className="">
            <section className="">
                <SignMain signmainstatic={{
                    signmainid: signmainstate?.signmainid, 
                    signmainindex: signmainstate?.signmainindex, 
                    signmaindetail: signmainstate?.signmaindetail,
                    signmainaction: signmainstate?.signmainaction,
                }} /> 
            </section>
        </main>
    </div>
  )
}
