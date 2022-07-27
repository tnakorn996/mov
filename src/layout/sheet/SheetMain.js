import React from 'react'

export default function SheetMain({

  children

}) {

  return (
        <main className="w-full h-full  bg-slate-300">
            <section className="bg-white border">
                {children}
            </section>
        </main>
  )
}
