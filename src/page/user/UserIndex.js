import React, { useEffect, useState } from 'react'

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

  const [clientstatictwo, setclientstatictwo] = useClientTwo({
    id: 'userindex',
    from: `task`,
    select: `taskpoint`,
    order: [`taskid`, { ascending: false }],
    eq: ['userid', splitstaticthree],
    limit: 100,
  })

const [clientstaticthree, setclientstaticthree] = useClientTwo({
    id: 'userindex',
    from: `ticket`,
    select: `ticketpoint`,
    order: [`ticketid`, { ascending: false }],
    eq: ['userid', splitstaticthree],
    limit: 100,
  })

  const [userindexrender, setuserindexrender] = useState()

  // console.log('clientstaticthree', clientstaticthree)
  useEffect(() => {
    if(Array.isArray(clientstatictwo) 
    && Array.isArray(clientstaticthree)) return setuserindexrender(clientstatictwo.concat(clientstaticthree))
  }, [clientstatictwo, clientstaticthree])

  return (
    <div>
        <main className="">
            <section className="">
              <CardMain />
              <CardMain />
              <StatMain statmainstatic={{statmainid: 'usertable', statmainindex: 0}} />
              <StatMain statmaindatatwo={userindexrender && userindexrender} statmaindata={clientstatic && clientstatic} statmainstatic={{statmainid: 'usertable', statmainindex: 1}} />
            </section>
            {/* <section className="">
              <TabMain tabmainstatic={{tabmainid: 'userfieldset'}} />
            </section> */}
        </main>
    </div>
  )
}
