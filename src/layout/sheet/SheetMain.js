import React from 'react'

export default function SheetMain({

  children

}) {

  return (
        <main className="mb-[10px]  border-y dark:border-y-slate-700">
            <section className="p-[20px]">
                {children}
            </section>
        </main>
  )
}
