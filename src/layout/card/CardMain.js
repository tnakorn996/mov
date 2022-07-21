import React from 'react'

export default function CardMain({
    children
}) {

  return (
    <div>
        <main className="">
            <section className="p-[20px]  bg-white">
                {children}
            </section>
        </main>
    </div>
  )
}
