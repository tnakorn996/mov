import React from 'react'

export default function SpreadMain({
    children

}) {
  return (
    <div>
        <main className="">
            <section className="min-h-screen  bg-slate-100">
                {children}
            </section>
        </main>
    </div>
  )
}
