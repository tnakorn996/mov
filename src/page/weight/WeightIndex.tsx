import React from 'react'

import ZoomMain from '../../layout/zoom/ZoomMain'

export default function WeightMain() {
  return (
    <div>
        <main className="">
            <section className="max-h-[80vh]">
                <ZoomMain zoommainstatic={{zoommainid: 'searchform'}} />
            </section>
        </main>
    </div>
  )
}
