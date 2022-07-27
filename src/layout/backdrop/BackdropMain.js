import React from 'react'

export default function BackdropMain({

    children,

}) {

    const previewmain = [
        {
            backdropmainindex: 0,
            // backdropmainrender: <PreviewMain />
        }
    ]

    const backdropmain = [
        {
            backdropmainid: 'previewmain',
            backdropmainref: previewmain,
        }
    ]


  return (
    <div>
        <main className="">
            {/* <section className="z-40 w-screen h-screen fixed top-0 left-0  bg-slate-900 bg-opacity-40">
                ss
            </section> */}
            <section className="">
                {children}
            </section>
        </main>
    </div>
  )
}
