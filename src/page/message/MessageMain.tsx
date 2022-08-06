import React from 'react'
import BreadMain from '../../component/bread/BreadMain'
import FeedMain from '../../component/feed/FeedMain'
import CardMain from '../../layout/card/CardMain'

export default function MessageMain() {

  return (
    <div>
        <main className="">
            <CardMain children={undefined} />
            <CardMain children={undefined} />
            <section className="">
              <BreadMain />
              <FeedMain feedmainstatic={{feedmainid:'messagearea', feedmainindex: 0}} />
            </section>
        </main>
    </div>
  )
}
