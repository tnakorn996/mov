import React, { useContext, useEffect, useRef, useState } from 'react'

import '../tab/index.css'
import FeedMain from '../../component/feed/FeedMain'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import CardMain from '../card/CardMain'
import ZoomMain from '../zoom/ZoomMain'
import BadgeMain from '../badge/BadgeMain'
import SignMain from '../../component/sign/SignMain.tsx'
import { appul } from '../../content/content'
import useSlice from '../../hook/useSplit'

export default function TabMain({
    tabmainref,
    tabmainstatic,
    tabmainstyle,

}) {
    const {

        tabmainstate, settabmainstate,

    } = useContext(Context)
    const ref = useRef()
    const [slicestaticthree, setsplitstaticthree] = useSlice(3)

    const [tabmainrender, settabmainrender] = useState()

    useEffect(() => {
        settabmainstate({tabmainindex: 0})
    }, [])
    
    useEffect(() => {
      if(tabmainstatic){
          const filter = tabmain.filter(data => data.tabmainid === tabmainstatic.tabmainid)
          const array = []
          const assign = Object.assign(...filter).tabmainref
          for(let i = 0; i < assign.length; i++){
            array.push({
                tabmaintitle: assign[i].tabmaintitle,
                tabmainindex: assign.indexOf(assign[i])
            })
          }
          return  settabmainrender(array)
      }
    }, [tabmainstatic])

    useEffect(() => {
        if(tabmainstate && tabmainstate.tabmainindex === 0){
            ref?.current?.scrollTo(0, 0)
        }
        else {
            ref?.current?.scrollTo((window.innerWidth) * tabmainstate.tabmainindex, 0)
        }
    }, [tabmainstate, tabmainrender])

    function tabMainRender({feedmainstatic, zoommainstatic}) {
        return (
            <div className="">
                <section className="w-screen  snap-center overflow-hidden">
                    {feedmainstatic && <FeedMain feedmainstatic={feedmainstatic} />}
                    {zoommainstatic && <ZoomMain zoommainstatic={zoommainstatic} />}
                </section>
            </div>
        )
    }

    const userfieldset = [
        {
            tabmaintitle: 'Recommend',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'contractarea', feedmainindex: 0},
                })
            }
        },
        {
            tabmaintitle: 'fix this',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'contractarea', feedmainindex: 1},
                })
            }
        },
    ]

    const contractfieldset = [
        {
            tabmaintitle: 'Recommend',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'contractarea', feedmainindex: 0},
                })
            }
        },
        {
            tabmaintitle: 'Updates',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'contractarea', feedmainindex: 1},
                })
            }
        },
        {
            tabmaintitle: 'Search',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'contractarea', feedmainindex: 2},
                })
            }
        },
    ]

    const workoutfieldset = [
        {
            tabmaintitle: 'For You',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'workoutarea', feedmainindex: 0}
                })
            }
        },
        {
            tabmaintitle: 'History',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'taskarea', feedmainindex: 0}
                })
            }
        },
    ]

    const clubfieldset = [
        {
            tabmaintitle: 'For You',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'clubarea', feedmainindex: 0}
                })
            }
        },
        {
            tabmaintitle: 'History',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'ticketarea', feedmainindex: 0}
                })
            }
        },
    ]


    const favouritefieldset = [
        {
            tabmaintitle: 'Workouts',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'favouritearea', feedmainindex: 0}
                })
            }
        },
        {
            tabmaintitle: 'Challenges',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'favouritearea', feedmainindex: 1}
                })
            }
        },
    ]

    const achievementfieldset = [
        {
            tabmaintitle: 'For You',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'achievementarea', feedmainindex: 0}
                })
            }
        },
        {
            tabmaintitle: 'History',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'achievementarea', feedmainindex: 1}
                })
            }
        },
    ]

    const messagefieldset = [
        {
            tabmaintitle: 'For You',
            tabmainrender: () => {
                return tabMainRender({
                    // feedmainstatic:{feedmainid: 'messagearea', feedmainindex: 0}
                    zoommainstatic:{zoommainid: 'messageform'}
                })
            }
        },
        {
            tabmaintitle: 'Update',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'messagearea', feedmainindex: 1}
                })
            }
        },
    ]

    const guidefieldset = [
        {
            tabmaintitle: 'Getting started',
            tabmainrender: () => {
                return tabMainRender({
                    feedmainstatic:{feedmainid: 'guidearea', feedmainindex: 0}
                })
            }
        },
    ]


    const searchfieldset = [
        {
            tabmaintitle: 'Workout',
            tabmainrender: () => {
                return tabMainRender({
                    zoommainstatic:{zoommainid: 'workoutform'}
                })
            } 
        },
        {
            tabmaintitle: 'Challenge',
            tabmainrender: () => {
                return tabMainRender({
                    zoommainstatic:{zoommainid: 'clubform'}
                })
            } 
            
        },
    ]

    const tabmain = [
        {
            tabmainid: 'userfieldset',
            tabmainref: userfieldset,
        },
        {
            tabmainid: 'contractfieldset',
            tabmainref: contractfieldset,
        },
        {
            tabmainid: 'workoutfieldset',
            tabmainref: workoutfieldset,
        },
        {
            tabmainid: 'clubfieldset',
            tabmainref: clubfieldset,
        },
        {
            tabmainid: 'favouritefieldset',
            tabmainref: favouritefieldset,
        },
        {
            tabmainid: 'achievementfieldset',
            tabmainref: achievementfieldset,
        },
        {
            tabmainid: 'messagefieldset',
            tabmainref: messagefieldset,
        },
        {
            tabmainid: 'guidefieldset',
            tabmainref: guidefieldset,
        },
        {
            tabmainid: 'searchfieldset',
            tabmainref: searchfieldset,
        }
    ]

    const [appstatic, setappstatic] = useApp(tabmain, tabmainstatic.tabmainid, tabmainstatic.tabmainindex)

    // function ll(first=this.props.first){
    //     settabmaintouchstart(first.targetTouches[0].clientX)
    // }
    // function kk(first=this.props.first){
    //     settabmaintouchend(first.targetTouches[0].clientX)
    // }
    // function jj(){
    //     if(tabmaintouchstart - tabmaintouchend > 20){
    //         settabmainstate({tabmainindex: 1})
    //     }
    //     if(tabmaintouchstart - tabmaintouchend < - 20){
    //         settabmainstate({tabmainindex: 0})
    //     }
    // }


//   function ll(tabmainstatic) {
//       const replace = tabmainstatic.tabmainid.replace('fieldset', '')
//       const filter  = appul.filter(data => data.breadid.includes(replace))
//       // console.log('filter', replace, filter)
//     return {
//       entitle: filter[0]?.breadtitle,
//       action: filter[0]?.breadaction,
//     }
//   }
    
  return (
    <div>
        <main className="">
            <section className="">
                <figcaption className="flex flex-row items-center">
                    {tabmainrender?.map((data, index) => (<>
                        <article onClick={() => {
                            settabmainstate({tabmainindex: index})
                        }} className={`l-h4 border-b-[2.5px]  rounded-sm border-white dark:border-slate-800 duration-1000 ${data?.tabmainindex === tabmainstate?.tabmainindex && 'border-slate-700 dark:border-white text-black dark:text-white font-medium'}`}>
                            <CardMain>
                                <div className="flex flex-row gap-2">
                                {data.tabmaintitle}
                                {(tabmainstatic?.tabmainid === 'workoutfieldset' && index === 1) &&  <BadgeMain badgemainstatic={{badgemainid: 'taskspan', badgemainindex: 0}}  />}
                                
                                {(tabmainstatic?.tabmainid === 'clubfieldset' && index === 1) &&  <BadgeMain badgemainstatic={{badgemainid: 'ticketspan', badgemainindex: 0}}  />}

                                {(tabmainstatic?.tabmainid === 'favouritefieldset' && index === 0) &&  <BadgeMain badgemainstatic={{badgemainid: 'favouritespan', badgemainindex: 1}}  />}
                                {(tabmainstatic?.tabmainid === 'favouritefieldset' && index === 1) &&  <BadgeMain badgemainstatic={{badgemainid: 'favouritespan', badgemainindex: 2}}  />}

                                {(tabmainstatic?.tabmainid === 'achievementfieldset' && index === 1) &&  <BadgeMain badgemainstatic={{badgemainid: 'messagespan', badgemainindex: 0}}  />}

                                {(tabmainstatic?.tabmainid === 'messagefieldset' && index === 0) &&  <BadgeMain badgemainstatic={{badgemainid: 'messagespan', badgemainindex: 0}}  />}

                                {/* {(tabmainstatic?.tabmainid === 'guidefieldset' && index === 0) &&  <BadgeMain badgemainstatic={{badgemainid: 'messagespan', badgemainindex: 0}}  />} */}
                                </div>
                            </CardMain>
                        </article>
                    </>))}
                </figcaption>
            </section>
            <section className="no-scrollbar border-t dark:border-t-slate-700">
                {/* <figure ref={ref} onTouchStart={p => ll(p)} onTouchMove={p => kk(p)} onTouchEnd={() => jj()} className={`w-screen md:w-full min-h-screen grid grid-flow-col justify-start  overflow-x-scroll overflow-y-clip no-scrollbar snap-x snap-mandatory scroll-smooth duration-100 ${tabmainstyle && tabmainstyle}`}> */}
                <figure ref={ref} className={`w-screen md:w-full grid grid-flow-col justify-start  overflow-x-scroll overflow-y-clip no-scrollbar snap-x snap-mandatory scroll-smooth duration-100 ${tabmainstyle && tabmainstyle}`}>
                {appstatic && appstatic.map((data, index) => (<>
                <div key={index}>
                    {data?.tabmainrender()}
                </div>
                </>))}
                </figure>
            </section>
        </main>
    </div>
  )
}
