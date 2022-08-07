import React from 'react'

import StatMain from '../../component/stat/StatMain'
import CardMain from '../../layout/card/CardMain'
import TabMain from '../../layout/tab/TabMain'

export default function UserIndex() {

  return (
    <div>
        <main className="">
            <section className="">
              <CardMain />
              <CardMain />
              <StatMain statmainstatic={{statmainid: 'usertable', statmainindex: 1}} />
              {/* <StatMain statmainstatic={{statmainid: 'awardtable', statmainindex: 1}} /> */}
            </section>
            <section className="">
              <TabMain tabmainstatic={{tabmainid: 'userfieldset'}} />
            </section>
        </main>
    </div>
  )
}
