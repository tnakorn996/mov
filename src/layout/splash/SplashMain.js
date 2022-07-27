import React from 'react'
import { RiCss3Fill } from 'react-icons/ri'

export default function SplashMain({

  splashmainstyle,
  
}) {
  return (
    <div>
        <main className="">
            <section className="">
                <RiCss3Fill className={`m-h6 ${splashmainstyle && splashmainstyle}`} />
            </section>
        </main>
    </div>
  )
}
