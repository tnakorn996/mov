import React from 'react'

import StatMain from '../../component/stat/StatMain'
import useClientTwo from '../../hook/useClientTwo.tsx'
import useSplit from '../../hook/useSplit'
import CardMain from '../../layout/card/CardMain'
import TabMain from '../../layout/tab/TabMain'

export default function UserIndex() {
  const [splitstaticthree, setsplitstaticthree] = useSplit(3)
  const [clientstatic, setclientstatic] = useClientTwo({
    id: 'userindex',
    from: `award`,
    select: `*, userid (*)`,
    order: [`awardid`, { ascending: false }],
    eq: ['userid', splitstaticthree],
    limit: 100,
  })

  // console.log('clientstatic', clientstatic)

  return (
    <div>
        <main className="">
            <section className="">
              <CardMain />
              <CardMain />
              <StatMain statmainstatic={{statmainid: 'usertable', statmainindex: 0}} />
              <StatMain statmaindata={clientstatic && clientstatic} statmainstatic={{statmainid: 'usertable', statmainindex: 1}} />
            </section>
            <section className="">
              <TabMain tabmainstatic={{tabmainid: 'userfieldset'}} />
            </section>
        </main>
    </div>
  )
}
