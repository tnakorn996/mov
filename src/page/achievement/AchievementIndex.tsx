import React from 'react'

import CtaMain from '../../component/cta/CtaMain'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import StatMain from '../../component/stat/StatMain'

export default function ClubIndex() {
    
  return (
    <div>
        <main className="">
            <section className="">
                <PostMain postmainstatic={{ postmainid: 'achievementaddress', postmainindex: 1 }} postmaindata={undefined} postmainstyle={undefined} />
            </section>
            <section className="">
                <StatMain statmainstatic={{statmainid: 'acheivementtable', statmainindex: 0}} />
            </section>
        </main>
    </div>
  )
}
