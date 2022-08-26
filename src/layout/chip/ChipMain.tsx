import React from 'react'

export default function ChipMain({
  children,
  chipmainstyle,
}) {
  return (
    <div>
      <main className="">
        <section className={`relative rounded-3xl overflow-hidden ${chipmainstyle?.section && chipmainstyle?.section}`}>
          {children}
          <div className="w-full h-full absolute top-0 left-0  bg-slate-400 opacity-10 " />
        </section>
      </main>
    </div>
  )
}
