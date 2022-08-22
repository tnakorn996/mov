import React from 'react'
import BreadMain from '../../component/bread/BreadMain'

import CardMain from '../../layout/card/CardMain'
import ZoomMain from '../../layout/zoom/ZoomMain'

export default function SettingMain() {
  
  return (
    <div>
        <main className="">
          <section className="">
            <CardMain children={undefined} />
            <CardMain children={undefined} />
            <BreadMain />
          </section>
            <section className="">
                <ZoomMain zoommainstatic={{zoommainid: 'settingform'}} />
            </section>
        </main>
    </div>
  )
}
