import React, { useContext } from 'react'
import { motion } from 'framer-motion'

import useSplit from '../../hook/useSplit'
import useApp from '../../hook/useApp'
import useClient from '../../hook/useClient'
import PostMain from '../../layout/post/PostMain'
import SheetMain from '../../layout/sheet/SheetMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
import { clubul, workoutul } from '../../content/content'
import CtaMain from '../cta/CtaMain'
import StaMain from '../sta/StaMain'
import { RiLoaderLine } from 'react-icons/ri'

export default function StatMain({
    statmainstatic,

}) {
    const {
        authstate,


    } = useContext(Context)
    // console.log('statmainstatic', statmainstatic)
    const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const [clientstatic, setclientstatic] = useClient()

    function statMainRender(first, component) {
        const filter = clientstatic?.filter(data => data[first] === splitstaticthree)
        // console.log('fislter', filter)
        if(filter !== undefined && filter !== null && filter.length > 0) {
            return component
        } else {
            return null
        }
    }

    const usertable = [
        {
            statmaindex: 1,
            statmainrender: () => {
                return statMainRender('userid', <UserTableRender data={clientstatic && clientstatic} props={{authstate: authstate, splitstaticthree: splitstaticthree}}  />)
            }
        },
    ]

    const workouttable = [
        {
            statmaindex: 1,
            statmainrender: () => {
                return statMainRender('workoutid', <WorkoutTableRender />)
            }
        },
    ]

    const tasktable = [
        {
            statmaindex: 1,
            statmainrender: () => {
                return statMainRender('workoutid', <TaskTableRender />)
            }
        },
    ]

    const clubtable = [
        {
            statmaindex: 1,
            statmainrender: () => {
                return statMainRender('clubid', <ClubTableRender />)
            }
        },
    ]

    const tickettable = [
        {
            statmaindex: 0,
            statmainrender: () => {
                return  statMainRender('workoutid', <TicketTableRender data={clientstatic && clientstatic} />)
            }
        },
        {
            statmaindex: 1,
            statmainrender: () => {
                // console.log('clientstagtic, authstate', clientstatic, authstate)
                const filter = clientstatic?.filter(data => data.userid?.userid === authstate?.user?.id)
                const filtertwo = clubul?.filter(data => data.breadid === splitstaticthree)
                // console.log('filter, filtertwo', filter, filtertwo)
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

    const acheivementtable = [
        {
            statmaindex: 0,
            statmainrender: () => {
                return statMainRender('achievementid', <AchievementTableRender data={clientstatic && clientstatic} />)
            }
        },
    ]

    const statmain = [
        {
            statmainid: 'usertable',
            statmainref: usertable,
        },

        {
            statmainid: 'workouttable',
            statmainref: workouttable,
        },
        {
            statmainid: 'tasktable',
            statmainref: tasktable,
        },
        {
            statmainid: 'clubtable',
            statmainref: clubtable,
        },
        {
            statmainid: 'tickettable',
            statmainref: tickettable,
        },

        {
            statmainid: 'acheivementtable',
            statmainref: acheivementtable,
        },
    ]

    const [appstatic, setappstatic] = useApp(statmain, statmainstatic.statmainid, statmainstatic.statmainindex, clientstatic)
    // console.log('appstatic', appstatic)
    if(clientstatic === undefined || clientstatic === null) return <motion.section  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 1 }}  className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center"><RiLoaderLine className="m-h6  animate-spin" /></motion.section> 
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

    export function ll(index) {
        const data = [
            {article: '!bg-amber-200'},
            {article: '!bg-slate-200'},
            {article: '!bg-rose-200'},
        ]
        for(let i = 0; i < data.length; i++){
            if(index === data.indexOf(data[i]) + 1){
                return data[i].article
            }
        }
    }

    export function UserTableRender({data, props}) {
        const {authstate, splitstaticthree} = props
        console.log('data', data)
        return (
        <div>
            {data?.map(data => (<>
            <section className="flex flex-col justify-center items-center">
            <CardMain>
            <figure className="w-[70px] h-[70px] flex flex-col justify-center items-center  text-white rounded-full bg-gray-400">
                <p className="text-4xl  uppercase">{data?.useremail.slice(0, 1)}</p>
            </figure>
            </CardMain>
            </section>
            <section className="flex flex-col justify-center text-center">
            <p className="l-h4">{data?.useremail}</p>
            <p className="l-h4">Member since {data?.created_at?.slice(0, 10)}</p>
            </section>
            <section className="">
            <CardMain>
                {authstate !== null && authstate !== undefined && authstate.user.id === splitstaticthree ?
                <CtaMain ctamainstatic={{ctamainid: 'userembed', ctamainindex: 0}} /> :
                <StaMain stamaindata={data} stamainstatic={{stamainid: 'useriframe'}}  /> }
            </CardMain>
            </section>
            </>))}
        </div>
        )
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

    export function TaskTableRender({data}) {
        // console.log('data', data)
        return (
            <div>
                <section className="">
                <SheetMain>
                <CtaMain ctamainstatic={{ctamainid: 'taskembed', ctamainindex: 0}} />
                </SheetMain>
                </section>
            </div>
        )
    }

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
                        <figcaption className="w-full grid grid-cols-12 gap-3">
                            <div className="col-span-1">
                                {/* <article className={`w-[20px] h-[20px] flex items-center justify-center  bg-slate-200 rounded-full 
                                ${index + 1 === 1 && 'bg-amber-200'}
                                ${index + 1 === 2 && 'bg-slate-200'}
                                ${index + 1 === 3 && 'bg-rose-200'}  ` }> */}
                                <article className={`w-[20px] h-[20px] flex items-center justify-center  bg-slate-200 rounded-full ${ll(index + 1)} ` }>
                                    <p className="l-h2">{index + 1}</p>
                                </article>
                            </div>
                            <div className="col-span-11">
                            <PostMain postmaindata={data} postmainstatic={{postmainid:'ticketaddress', postmainindex: 2}} />
                            </div>
                        </figcaption>
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
            </section>
        </div>
        )
    }

    export function AchievementTableRender() {
        return (
            <div>
            <section className="">
                <SheetMain>
                {/* <CardMain> */}
                <CtaMain ctamainstatic={{ctamainid: 'achievementembed', ctamainindex: 0}} />
                {/* </CardMain> */}
                </SheetMain>
            </section>
        </div>
    )
    }