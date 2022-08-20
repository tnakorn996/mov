import React from 'react'

import CardMain from '../../layout/card/CardMain'
import ZoomMain from '../../layout/zoom/ZoomMain'

export default function SettingMain() {
  
  return (
    <div>
        <main className="">
          <section className="">
            <CardMain children={undefined} />
            <CardMain children={undefined} />
          </section>
            <section className="">
                <ZoomMain zoommainstatic={{zoommainid: 'settingform'}} />
            </section>
        </main>
    </div>
  )
}
