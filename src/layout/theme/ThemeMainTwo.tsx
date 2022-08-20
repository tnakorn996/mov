import React from 'react'

export default function ThemeMainTwo({
    children
}) {
  return (
    <div>
        <main className="bg-slate-200 dark:bg-slate-700">
            <section className="">
                {children}
            </section>
        </main>
    </div>
  )
}
