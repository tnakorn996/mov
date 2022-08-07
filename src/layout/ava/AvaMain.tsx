import React from 'react'

export default function AvaMain({
    children,
    avamainstyle,

}) {
  return (
    <div>
        <main className="">
            <section className="">
            <figure className={`rounded-full  bg-slate-200 ${avamainstyle?.figure}`}>
                {children}
            </figure>
            </section>
        </main>
    </div>
  )
}
