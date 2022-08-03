import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import BreadMain from '../../component/bread/BreadMain'

import CardMain from '../../layout/card/CardMain'
import TabMain from '../../layout/tab/TabMain'
import ScreenMain from '../../layout/screen/ScreenMain.tsx'

export default function ClubMain() {

  return (
    <div>
      <main className="">
            <section className="">
                      <CardMain />
                <CardMain />
                <BreadMain />
                <TabMain tabmainstatic={{tabmainid: 'clubfieldset', tabmainindex: null}} />
            </section>
      </main>
    </div>
  )
}
