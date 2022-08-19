import React from 'react'

import BreadMain from '../../component/bread/BreadMain'
import FeedMain from '../../component/feed/FeedMain'
import CardMain from '../../layout/card/CardMain'
import TabMain from '../../layout/tab/TabMain'

export default function GuieMain() {

  return (
    <div>
        <main className="">
            <CardMain children={undefined} />
            <CardMain children={undefined} />
            <section className="">
              {/* <BreadMain /> */}
            </section>
            <section className="">
              <TabMain tabmainstatic={{ tabmainid: 'guidefieldset', tabmainindex: null}}
              tabmainref={undefined} 
              tabmainstyle={undefined} />
            </section>
        </main>
    </div>
  )
}
