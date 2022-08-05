import React from 'react'

import CtaMain from '../../component/cta/CtaMain'
import StatMain from '../../component/stat/StatMain'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import SheetMain from '../../layout/sheet/SheetMain'

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
            {/* <section className="">
              <CardMain>
                <CtaMain ctamainstatic={{ctamainid: 'userembed', ctamainindex: 0}} />
              </CardMain>
            </section> */}
        </main>
    </div>
  )
}
