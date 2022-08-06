import React from 'react'

import StatMain from '../../component/stat/StatMain'
import CardMain from '../../layout/card/CardMain'

export default function UserIndex() {

  return (
    <div>
        <main className="">
            <section className="">
              <CardMain />
              <CardMain />
                {/* <PostMain postmainstatic={{postmainid: 'useraddress', postmainindex: 1}} /> */}
                <StatMain statmainstatic={{statmainid: 'usertable', statmainindex: 1}} />
            </section>
            <section className="">
            </section>
        </main>
    </div>
  )
}
