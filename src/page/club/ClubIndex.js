import React from 'react'

import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import StatMain from '../../component/stat/StatMain'
import useClientTwo from '../../hook/useClientTwo.tsx'
import useSlice from '../../hook/useSplit'

export default function ClubIndex() {
  const [splitstaticthree, setsplitstaticthree] = useSlice(3)

  const [clientstatic, setclientstatic] = useClientTwo({
          id: 'clubindex',
          from: `ticket`,
          select: `*, userid (*)`,
          order: [`ticketid`, { ascending: false }],
          eq: ['clubid', splitstaticthree],
          limit: 5,
  })

  return (
    <div>
        <main className="">
            <section className="">
                <PostMain postmainstatic={{postmainid: 'clubaddress', postmainindex: 1}} />
            </section>
            <section className="">
                <StatMain statmaindata={clientstatic && clientstatic} statmainstatic={{statmainid: 'clubtable', statmainindex: 1}} />
            </section>
            <section className="">
                <StatMain statmainstatic={{statmainid: 'clubtable', statmainindex: 0}} />
            </section>
        </main>
    </div>
  )
}
