import React from 'react'

export default function ThemeMain({
    children
}) {
  return (
    <div>
        <main className="bg-white dark:bg-slate-800">
            <section className="">
                {children}
            </section>
        </main>
    </div>
  )
}
