import React, { useContext } from 'react'

import useSplit from '../../hook/useSplit'
import useApp from '../../hook/useApp'
import useClient from '../../hook/useClient'
import PostMain from '../../layout/post/PostMain'
import SheetMain from '../../layout/sheet/SheetMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
import { clubul, workoutul } from '../../content/content'
import CtaMain from '../cta/CtaMain'

export default function StatMain({
    statmainstatic,

}) {
    const {

        taskdl,
        ticketdl,

    } = useContext(Context)
    // console.log('statmainstatic', statmainstatic)
    const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const [clientstatic, setclientstatic] = useClient()

    const workouttable = [
        {
            statmaindex: 1,
            statmainrender: () => {
                const filter = taskdl[0]?.spreaddata?.filter(data => data.workoutid === splitstaticthree)
                if(filter.length > 0) {
                    return <WorkoutTableRender />
                } else {
                    return null
                }
            }
        },
    ]

    // const tasktable = [
    //     {
    //         statmaindex: 1,
    //         statmainrender: () => {
    //             const filter = taskdl[0]?.spreaddata?.filter(data => data.workoutid === splitstaticthree)
    //             if(filter.length > 0) {
    //                 const filtertwo = workoutul[0]?.breaddata?.filter(data => data.breadhead === filter[0]?.weightid)
    //                 const assign = [Object.assign(filter[0], filtertwo[0])]
    //                 return assign?.map((data) => (<>
    //                 <TaskTableRenderTwo data={data} />
    //                 </>))
    //             } else {
    //                 return null
    //             }
    //         }
    //     },
    // ]

    const clubtable = [
        {
            statmaindex: 1,
            statmainrender: () => {
                const filter = ticketdl[0]?.spreaddata?.filter(data => data.clubid === splitstaticthree)
                if(filter.length > 0) {
                    return <ClubTableRender />
                } else {
                    return null
                }
            }
        },
    ]

    const tickettable = [
        {
            statmaindex: 0,
            statmainrender: () => {
                return  <TicketTableRender data={clientstatic && clientstatic} />
            }
        },
        {
            statmaindex: 1,
            statmainrender: () => {
                const filter = clientstatic?.filter(data => data.workoutid === splitstaticthree)
                const filtertwo = clubul?.filter(data => data.breadid === splitstaticthree)
                if(filter && filter.length > 0 && filtertwo.length > 0) {
                    const assign = [Object.assign(filter[0], filtertwo[0])]
                    return assign?.map((data) => (<>
                    <TicketTableRenderTwo data={data} />
                    </>))
                } else {
                    return null
                }
            }
        }
    ]

    const statmain = [
        {
            statmainid: 'workouttable',
            statmainref: workouttable,
        },
        // {
        //     statmainid: 'tasktable',
        //     statmainref: tasktable,
        // },
        {
            statmainid: 'clubtable',
            statmainref: clubtable,
        },
        {
            statmainid: 'tickettable',
            statmainref: tickettable,
        }
    ]

    const [appstatic, setappstatic] = useApp(statmain, statmainstatic.statmainid, statmainstatic.statmainindex, splitstaticthree, clientstatic)
    // console.log('appstatic', appstatic)
    if(clientstatic === undefined || clientstatic === null) return null
// console.log('clientstatic', clientstatic)
  return (
    <div>
        <main className="">
            <section className="">
                {appstatic?.map(data => (<>
                    {data?.statmainrender()}
                </>))}
            </section>
        </main>
    </div>
  )
}

export function handleDate(data) {
    // console.log('data', data)
        var floor = Math.floor((new Date() - data) / 1000);
        // console.log('floor', floor)
        var interval = floor / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = floor / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = floor / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = floor / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = floor / 60;
        if (interval > 1) {
            return Math.floor(interval) + " min";
        }
        return Math.floor(floor) + " seconds";
    }


export function WorkoutTableRender() {
    return (
        <div>
        <section className="">
            <SheetMain>
            {/* <CardMain> */}
            <CtaMain ctamainstatic={{ctamainid: 'workoutembed', ctamainindex: 0}} />
            {/* </CardMain> */}
            </SheetMain>
        </section>
    </div>
  )
}

// export function TaskTableRenderTwo({data}) {
//     // console.log('data', data)
//     return (
//         <div>
//         <section className="">
//             <CardMain>
//             <figcaption className="flex justify-between items-center">
//                 <p className="m-h5">Personal Best(PB)</p>
//                 <p className="l-h5 truncate">{data?.breadbody}</p>
//             </figcaption>
//             </CardMain>
//             <CardMain>
//             <figcaption className="flex justify-between items-center">
//                 <p className="m-h5">Date created</p>
//                 <p className="l-h5">{handleDate(data?.created_at)}</p>
//             </figcaption>
//             </CardMain>
//         </section>
//         <section className="">
//             <CardMain>
//             <CtaMain ctamainstatic={{ctamainid: 'taskembed', ctamainindex: 0}} />
//             </CardMain>
//         </section>
//     </div>
//   )
// }

export function ClubTableRender() {
    return (
        <div>
        <section className="">
            <SheetMain>
            {/* <CardMain> */}
            <CtaMain ctamainstatic={{ctamainid: 'clubembed', ctamainindex: 0}} />
            {/* </CardMain> */}
            </SheetMain>
        </section>
    </div>
  )
}

export function TicketTableRender({data}) {
    // console.log('data', data)
  return (
    <div>
        <section className="">
            {data?.map((data, index) => (<>
            <SheetMain>
                <div className="flex flex-row gap-3">
                <p className="">{index + 1}</p>
                <PostMain postmaindata={data} postmainstatic={{postmainid:'ticketaddress', postmainindex: 2}} />
                </div>
            </SheetMain>
            </>))}
        </section>
        <section className="">
          <CardMain>
            <CtaMain ctamainstatic={{ctamainid:'ticketembed', ctamainindex: 0}} />
          </CardMain>
        </section>
    </div>
  )
}

export function TicketTableRenderTwo({data}) {
    return (
      <div>
        <section className="">
        <SheetMain>
            <CtaMain ctamainstatic={{ctamainid: 'workoutembed', ctamainindex: 0}} />
        </SheetMain>
        </section>
          <section className="">
            <CardMain>
              <figcaption className="flex flex-row gap-2  uppercase">
                    <p className="text-2xl l-h6 font-medium">{data?.weightid}</p>
                    <p className="text-2xl m-h6 font-medium">/ {data?.breadnumber}</p>
              </figcaption>
            </CardMain>
              {/* <figure className="">
                {assign?.map((data, index) => (<>
                    <p className="text-2xl l-h6 font-medium">{data?.weightid}</p>
                    <p className="text-2xl m-h6 font-medium">/ {data?.breadnumber}</p>
                  </>))}
              </figure> */}
          </section>
      </div>
    )
}

