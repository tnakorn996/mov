import React from 'react'

import ZoomMain from '../../layout/zoom/ZoomMain'

export default function QualityIndex() {
  return (
    <div>
      <main className="">
        <section className="max-h-[80vh]">
          <ZoomMain zoommainstatic={{ zoommainid: 'qualityform' }} />
        </section>
      </main>
    </div>
  )
}
