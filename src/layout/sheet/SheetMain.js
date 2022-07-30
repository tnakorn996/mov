import React from 'react'

export default function SheetMain({

  children

}) {

  return (
        <main className="mb-[10px] bg-white border-y">
            <section className="p-[20px]">
                {children}
            </section>
        </main>
  )
}
