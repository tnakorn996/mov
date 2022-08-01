import React, { useContext } from 'react'

import useSplit from '../../hook/useSplit'
import useApp from '../../hook/useApp'
import PostMain from '../../layout/post/PostMain'
import SheetMain from '../../layout/sheet/SheetMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
import { clubul } from '../../content/content'

export default function StatMain({
    statmainstatic,

}) {
    const {

        taskdl,

    } = useContext(Context)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)

    const tickettable = [
        {
            statmaindex: 0,
            statmainrender: <TicketIndexRender data={taskdl[0]?.spreaddata} props={{param: splitstaticthree}} />,
        }
    ]

    const statmain = [
        {
            statmainid: 'tickettable',
            statmainref: tickettable,
        }
    ]

    const [appstatic, setappstatic] = useApp(statmain, statmainstatic.statmainid, statmainstatic.statmainindex, splitstaticthree)

  return (
    <div>
        <main className="">
            <section className="">
                {appstatic?.map(data => (<>
                    {data?.statmainrender}
                </>))}
            </section>
        </main>
    </div>
  )
}

export function TicketIndexRender({
    props,
    data
}) {
    const filter = data?.filter(data => data.workoutid === props?.param)
    const filtertwo = clubul?.filter(data => data.breadid === props?.param)
    if(filter.length > 0 && filtertwo.length > 0) {
        const assign = [Object.assign(filter[0], filtertwo[0])]
        return (
          <div>
              <section className="">
                <CardMain>
                  <figcaption className="flex flex-row gap-2  uppercase">
                      {assign?.map((data, index) => (<>
                        <p className="text-2xl l-h6 font-medium">{data?.weightid}</p>
                        <p className="text-2xl m-h6 font-medium">/ {data?.breadnumber}</p>
                      </>))}
                  </figcaption>
                </CardMain>
                <CardMain>
                  <figure className="">
      
                  </figure>
                </CardMain>
              </section>
          </div>
        )
    } else {
        return null
    }
}

