import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

import useSplit from '../../hook/useSplit'
import useApp from '../../hook/useApp'
import useClient from '../../hook/useClient'
import PostMain, { postMainFunction, userAddressRender } from '../../layout/post/PostMain'
import SheetMain from '../../layout/sheet/SheetMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
import { achievementul, clubul } from '../../content/content'
import CtaMain from '../cta/CtaMain'
import StaMain from '../sta/StaMain'
import DtaMain from '../dta/DtaMain.tsx'
import { RiAddCircleFill, RiLoaderLine } from 'react-icons/ri'
import BadgeMain from '../../layout/badge/BadgeMain'
import AvaMain from '../../layout/ava/AvaMain.tsx'
import SplashMain from '../../layout/splash/SplashMain'
import ChipMain from '../../layout/chip/ChipMain.tsx'
import ThemeMain from '../../layout/theme/ThemeMain.tsx'
import ThemeMainTwo from '../../layout/theme/ThemeMainTwo.tsx'
import ScrollMain from '../../layout/scroll/ScrollMain'

export default function StatMain({
    statmainstatic,
    statmaindata,
    statmaindatatwo,

}) {
    const {
        authstate,


    } = useContext(Context)
    const navigate = useNavigate()
    // console.log('statmainstatic', statmainstatic)
    const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const [clientstatic, setclientstatic] = useClient()

    function statMainAction(first, component) {
        const filter = clientstatic?.filter(data => data[first] === splitstaticthree)

        if(filter !== undefined && filter !== null && filter.length > 0) {
            return component || component()
        } 
        return null
    }

    function statMainActionTwo(first) {
        const filter = clientstatic?.filter(data => data[first] === splitstaticthree)
        // console.log('clientstatic', clientstatic)
        // console.log('fisltesr', filter)
        if(filter !== undefined && filter !== null && filter.length > 0) {
            return filter
        } 
        return null
    }

    // function statMainActionTwo(data, first, second) {
    //     if(!clientstatic) return null
    //     const ref = data
    //     const filter = clientstatic?.filter(data => first === second)
    //     const filtertwo = ref.filter(data => data.breadid === splitstaticthree)
    //     if(filter && filter.length > 0 && filtertwo.length > 0) {
    //         const assign = [Object.assign(filter[0], filtertwo[0])]
    //         return assign
    //     } else {
    //         return null
    //     }
    // }


    const apptable = [
        {
            statmainrender: () => {
                return statMainAction('userid', appMainRenderTwo({data: clientstatic && clientstatic}))
            }
        },
    ]

    const usertable = [
        {
            statmainrender: () => {
                return statMainAction('userid', 
                userTableRender({
                        data: clientstatic && clientstatic,
                        authstate: authstate,
                        splitstaticthree: splitstaticthree
                    })
                )
            }
        },
        {
            statmainrender: () => {
                if(typeof statmaindatatwo === 'undefined') return null
                // console.log('statmaindatatwo', statmaindatatwo)
                const array = []
                for(const data of statmaindatatwo){
                    array.push(data['taskpoint'] || data['ticketpoint'])
                }
                const reduce = array.reduce((a, b) => b + a)
                return userTableRenderTwo({
                    data: statmaindata,
                    datatwo: reduce && reduce,
                })
            }
        },
    ]

    const contracttable = [
        {
            statmainrender: () => {
                return statMainAction(
                    'userid', 
                    contractTableRender({
                        authstate, 
                        splitstaticthree,
                    })
                )
            }
        },
    ]

    const imagetable = [
        {
            statmainrender: () => {
                return imageTableRenderTwo({
                    data: clientstatic
                })
            }
        },
    ]

    const workouttable = [
        {
            statmainrender: () => {
                return statMainAction('workoutid',  workoutTableRender())
            }
        },
    ]

    const tasktable = [
        {
            statmainrender: () => {
                return statMainAction('workoutid',  taskTableRender())
            }
        },
    ]

    const clubtable = [
        {
            statmainrender: () => {
                return  statMainAction('clubid',  clubTableRender())
            }
        },
        {
            statmainrender: () => {
                return  statMainAction('clubid',  clubTableRenderTwo({
                    data: statmaindata && statmaindata
                }))
            }
        },
    ]

    const tickettable = [
        {
            statmainrender: () => {
                // const sort =  statmaindata && statmaindata?.sort((a, b) => b.weightid.length - a.weightid.length)
                const sort =  clientstatic && clientstatic?.sort((a, b) => b.weightid.length - a.weightid.length)
                return  ticketTableRender({data: sort && sort})
            }
        },
        {
            statmainrender: () => {
                const filter = clientstatic?.filter(data => data.userid?.userid === authstate?.user?.id)
                const filtertwo = clubul?.filter(data => data.breadid === splitstaticthree)
                if(Array.isArray(filter) && Array.isArray(filtertwo)
                && filter.length > 0 && filtertwo.length > 0) {
                    // console.log('filter, filtertwo', filter, filtertwo)
                    const assign = [Object.assign(Object.assign(...filter), Object.assign(...filtertwo))]
                    return assign?.map((data) => (
                        ticketTableRenderTwo({
                            data: data
                        })
                    ))
                }

                // console.log('statmaindata', statmaindata)
                // statmaindata?.map((data) => (
                //     ticketTableRenderTwo({
                //         data: data
                //     })
                // ))

            }
        }
    ]

    const acheivementtable = [
        {
            statmainrender: () => {
                return statMainAction('achievementid', <AchievementTableRender data={clientstatic && clientstatic} />)
            }
        },
    ]

    const awardtable = [
        {
            statmainrender: () => {
                return awardTableRender({
                    data: statMainActionTwo('achievementid')
                })
            }
        },
        {
            statmainrender: () => {
                // console.log('clientstagtic, authstate', clientstatic, authstate)
                const filter = clientstatic?.filter(data => data.userid?.userid === splitstaticthree)
                const array = []
                achievementul?.forEach(data => {
                    for(const dat of filter){
                        if(dat.breadid === data.breadid){
                            const assign = [Object.assign(dat, data)]
                            array.push(assign)
                        }
                    }
                })
                if(array && array.length > 0) {
                    return array?.map((data) => (
                    achievementTableRenderTwo({
                        data: data,
                        navigate: `/achievement/achievementindex/${data?.breadid}`
                    })
                ))
                } else {
                    return null
                }
            }
        }
    ]


    const statmain = [
        {
            statmainid: 'apptable',
            statmainref: apptable,
        },
        {
            statmainid: 'usertable',
            statmainref: usertable,
        },
        {
            statmainid: 'contracttable',
            statmainref: contracttable,
        },
        {
            statmainid: 'imagetable',
            statmainref: imagetable,
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
        {
            statmainid: 'awardtable',
            statmainref: awardtable,
        },
    ]

//     const statmaintwo = (state, action) => {
//         switch (action.type) {
//             case "apptable":
//                 return apptable
//             case "decrement":
//                 return state.count - 1
//             default:
//                 return state;
//         }
//     }
//     const [appstatictwo, setappstatictwo] = useAppNew(statmaintwo, statmainstatic.statmainid, statmainstatic.statmainindex, clientstatic, splitstaticthree)
// console.log('appstatictwo', appstatictwo)

    const [appstatic, setappstatic] = useApp(statmain, statmainstatic.statmainid, statmainstatic.statmainindex, clientstatic,  splitstatictwo, splitstaticthree, statmaindata)

    // if(typeof clientstatic === 'undefined') return <section className="w-full h-full flex justify-center items-center duration-100">
        
    //     {/* <div className="w-full">
    //     <CardMain>
    //         <div className="animate-pulse">
    //         <ChipMain>
    //         <figure className="min-h-[10vh] " />
    //         </ChipMain>
    //         </div>
    //     </CardMain>
    //     </div> */}

    //     {/* <div className="animate-spin">
    //         <CardMain>
    //         <CardMain>
    //             <figure className="w-[50px] h-[50px] border animate-ping rounded-full" />
    //         </CardMain>
    //         </CardMain>
    //     </div> */}
    // </section> 

    if(typeof clientstatic === 'undefined') return null

    return (
        <div>
            <main className="">
                <section className="">
                    {appstatic?.map((data) => (
                        data?.statmainrender()
                    ))}
                </section>
            </main>
        </div>
        )
    }

    export function appMainRenderTwo({data}) {
        // console.log('data', data)
        return (
            <div>
                <section className="">
                <SheetMain>
                    <CardMain>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, aliquid!
                    </CardMain>
                </SheetMain>
                </section>
            </div>
        )
    }

    export function userTableRender({data, authstate, splitstaticthree}) {
        // console.log('data', data)
        return (
        <div>
            {data?.map((data, index) => (<>
            <div key={index}>
            <ChipMain chipmainstyle={{section: `!rounded-t-none`}}>
            <ScrollMain scrollmainstatic={{scrollmaintransform: 0.3}} >
            <div className="w-full flex flex-row justify-start">
            <section className="">
                <CardMain />
                <CardMain />
                <CardMain >
                    <div className="relative">
                        {authstate !== null && authstate !== undefined && authstate.user.id === splitstaticthree &&
                        <Link to={`/image/imageform`}>
                        <RiAddCircleFill className="absolute z-20 right-0 bottom-0 text-4xl" />
                        </Link>}
                    <ChipMain chipmainstyle={{section: `!rounded-full`}}>
                        <DtaMain 
                        dtamaindata={{spreadhref: `/image/imageindex/${data?.userid}`}}  
                        dtamainstatic={{
                            dtamainid:'imageiframe', 
                            dtamainindex: 0}} >
                            <figure className="w-[100px] h-[100px] flex flex-col justify-center items-center  text-white bg-gray-400">
                                <p className="text-4xl  uppercase">{data?.useremail?.slice(0, 1)}</p>
                                <img src={data?.userimage} alt="" className="absolute z-10 min-w-full min-h-full" />
                            </figure>
                        </DtaMain>
                    </ChipMain>
                    </div>
                </CardMain>
                <CardMain />
            </section>

            <section className="">
            <CardMain />
            <CardMain />
            <CardMain />
                <p className="text-2xl  m-h5 first-letter:uppercase">{data?.username !== null ?  data?.username : data?.useremail}</p>
                {/* <p className="l-h4">Member since {data?.created_at?.slice(0, 10)}</p> */}
                <p className="l-h5">{data?.userbio || `My Personal Best Collection`}</p>
            <CardMain />
            </section>      
            </div>
            </ScrollMain>
            </ChipMain>
            <section className="">
            <CardMain>
                {authstate !== null && authstate !== undefined && authstate.user.id === splitstaticthree ?
                <div className="flex flex-col gap-3">
                    <CtaMain ctamainstatic={{ctamainid: 'guideembed', ctamainindex: 0}} /> 
                    <CtaMain ctamainstatic={{ctamainid: 'userembed', ctamainindex: 0}} /> 
                </div>
                :<StaMain stamainstatic={{stamainid: 'useriframe'}}  /> }
            </CardMain>
            </section>
            </div>
            </>))}
        </div>
        )
    }

    export function userTableRenderTwo({data, datatwo}) {
        // console.log('data', data)
        return (
        <div>
            <section className="text-center">
                <CardMain>
                <ChipMain>
                    <CardMain>
                        <p className="l-h4">Beasty experiences score</p>
                        <br />
                        <p className="text-2xl  m-h6">+{datatwo} XP</p>
                    </CardMain>
                </ChipMain>
                </CardMain>
            </section>
            <section className="">
            <PostMain postmaindata={data} postmainstatic={{postmainid: 'useraddress', postmainindex: 3}} />
            </section>
        </div>
        )
    }

    export function contractTableRender({authstate, splitstaticthree}) {
        // const {authstate, splitstaticthree} = props
        // console.log('data', data)
        return (
        <div>
            <section className="">
            <CardMain>
                {authstate !== null && authstate !== undefined && authstate.user.id === splitstaticthree ?
                <CtaMain ctamainstatic={{ctamainid: 'userembed', ctamainindex: 0}} /> :
                <StaMain stamainstatic={{stamainid: 'useriframe'}}  /> }
            </CardMain>
            </section>
        </div>
        )
    }

    export function imageTableRenderTwo({data}) {
        return (
        <div>
            {data?.map((data, index) => (<>
            <section key={index} className="">
                <figure className="w-full h-[50ch] flex justify-center items-center  bg-slate-400">
                    <p className="text-9xl  uppercase">{data.username.slice(0, 1)}</p>
                    <img src={data.userimage} alt="" className="absolute z-20 max-h-[100ch] w-full" />
                </figure>
            </section>
            </>))}
        </div>
        )
    }

    export function workoutTableRender() {
        return (
            <div>
            <section className="">
                <SheetMain>
                <CtaMain ctamainstatic={{ctamainid: 'workoutembed', ctamainindex: 0}} />
                </SheetMain>
            </section>
        </div>
        )
    }

    export function taskTableRender() {
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

    export function clubTableRender() {
        return (
            <div>
            <section className="">
                <SheetMain>
                <CtaMain ctamainstatic={{ctamainid: 'clubembed', ctamainindex: 0}} />
                </SheetMain>
            </section>
        </div>
        )
    }

    export function clubTableRenderTwo({data, navigate}) {
        // console.log('data', data)
        return (
            <div>
            <section className="w-full">
            <CardMain>
                <div className="flex flex-row justify-center">
                    {data?.map((data, index) => (<>
                    <Link key={index} to={`/user/userindex/${data?.userid?.userid}`} >
                        <ChipMain chipmainstyle={{section: `!rounded-full`}}>
                        <figure className="relative w-[50px] h-[50px] flex justify-center items-center bg-slate-300 text-white">
                            <img src={data?.userid?.userimage} alt="" className="absolute z-10" />
                            <p className="absolute  uppercase m-h6">{data?.userid?.username?.slice(0, 1)}</p>
                        </figure>
                        </ChipMain>
                    </Link>
                    </>)
                    )}
                </div>
            </CardMain>
            </section>
        </div>
        )
    }

    export function ticketTableRender({data}) {
        // console.log('data', data)
        return (
            <div>
                <section className="">
                    {data?.map((data, index) => (<>
                    <CardMain>
                        <figcaption className="w-full grid grid-cols-12 gap-3 items-center">
                            <div className="col-span-1">
                                <ChipMain chipmainstyle={{section: `!rounded-full`}}>
                                <article className={`w-[20px] h-[20px] flex items-center justify-center  bg-slate-200 ${ll(index + 1)} ` }>
                                    <p className="l-h2">{index + 1}</p>
                                </article>
                                </ChipMain>
                            </div>
                            <div className="col-span-11">
                                <PostMain postmaindata={data} postmainstatic={{postmainid:'ticketaddress', postmainindex: 2}} />
                            </div>
                        </figcaption>
                    </CardMain>
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

    export function ticketTableRenderTwo({data}) {
        // console.log('datassx', data)
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
                <CtaMain ctamainstatic={{ctamainid: 'achievementembed', ctamainindex: 0}} />
                </SheetMain>
            </section>
        </div>
    )
    }

    export function achievementTableRenderTwo({data, navigate}) {
        return (
        <div >
            <section>
            <CardMain>
            <AvaMain>
                <Link to={navigate}>
                <figure>
                    <p className="p-[10px] m-h6">{data?.breadicon}</p>
                </figure>
                </Link>
            </AvaMain>
            </CardMain>
            </section>
        </div>
        )
    }
    
    export function awardTableRender({data}) {
        // console.log('data', data)
        return (
            <div>
                {data?.map((data, index) => (<>
                <div key={index}>
                <CardMain>
                <section className="flex flex-row justify-between">
                    <p className="m-h5">Started date</p>
                    <p className="l-h5">{postMainFunction(data?.created_at)} ago</p>
                </section>
                </CardMain>
                <section className="">
                    <SheetMain>
                    <CtaMain ctamainstatic={{ctamainid: 'awardembed', ctamainindex: 0}} />
                    </SheetMain>
                </section>
                </div>
                </>))}
        </div>
        )
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