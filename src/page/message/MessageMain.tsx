import React from 'react'

import BreadMain from '../../component/bread/BreadMain'
import FeedMain from '../../component/feed/FeedMain'
import CardMain from '../../layout/card/CardMain'
import TabMain from '../../layout/tab/TabMain'

export default function MessageMain() {

  return (
    <div>
        <main className="">
            <CardMain children={undefined} />
            <CardMain children={undefined} />
            <section className="">
              <BreadMain />
              {/* <FeedMain feedmainstatic={{feedmainid:'messagearea', feedmainindex: 0}} /> */}
            </section>
            <section className="">
              <TabMain tabmainstatic={{ tabmainid: 'messagefieldset', tabmainindex: 0 }} 
              tabmainref={undefined} 
              tabmainstyle={undefined} />
            </section>
        </main>
    </div>
  )
}
