import React from 'react'
import BreadMain from '../../component/bread/BreadMain'

import CardMain from '../../layout/card/CardMain'
import TabMain from '../../layout/tab/TabMain'

export default function ContractMain() {

  return (
    <div>
        <main className="">
            <section className="">
              <CardMain />
                <CardMain />
                <BreadMain />
                <TabMain tabmainstatic={{tabmainid:'contractfieldset', tabmainindex: null}} />
            </section>
        </main>
    </div>
  )
}
