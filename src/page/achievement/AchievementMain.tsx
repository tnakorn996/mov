import React from 'react'

import BreadMain from '../../component/bread/BreadMain'
import CardMain from '../../layout/card/CardMain'
import TabMain from '../../layout/tab/TabMain'

export default function AchievementMain() {
  
    return (
    <div>
        <main className="">
            <section className="">
                <CardMain children={undefined} />
                <CardMain children={undefined} />
                <BreadMain />
                <TabMain tabmainstatic={{ tabmainid: 'achievementfieldset', tabmainindex: null }} tabmainref={undefined} tabmainstyle={undefined} />
            </section>
        </main>
    </div>
  )
}
