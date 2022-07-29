import React, { useContext, useEffect, useRef, useState } from 'react'
import FeedMain from '../../component/feed/FeedMain'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import CardMain from '../card/CardMain'
import ZoomMain from '../zoom/ZoomMain'

export default function TabMain({
    tabmainref,
    tabmainstatic,
    tabmainstyle,

}) {
    const {

        tabmainstate, settabmainstate,

    } = useContext(Context)
    const ref = useRef()
    const [tabmaintouchstart, settabmaintouchstart] = useState(0)
    const [tabmaintouchend, settabmaintouchend] = useState(0)

    const [tabmainrender, settabmainrender] = useState()

    const contractfieldset = [
        {
            tabmainindex : 0,
            tabmaintitle: 'Recommend',
            tabmainrender: <section className="w-screen  snap-center overflow-hidden">
                <FeedMain feedmainstatic={{feedmainid: 'contractarea', feedmainindex: 0}} />
            </section>
        },
        {
            tabmainindex : 1,
            tabmaintitle: 'Request',
            tabmainrender: <section className="w-screen  snap-center overflow-hidden">
                <FeedMain feedmainstatic={{feedmainid: 'ticketarea', feedmainindex: 0}} />
            </section>
        },
        {
            tabmainindex : 2,
            tabmaintitle: 'Browse',
            tabmainrender: <section className="w-screen  snap-center overflow-hidden">
                <ZoomMain zoommainstatic={{zoommainid: 'clubform'}} />
            </section>
        },
    ]

    const workoutfieldset = [
        {
            tabmainindex : 0,
            tabmaintitle: 'For You',
            tabmainrender: <section className="w-screen  snap-center overflow-hidden">
                <FeedMain feedmainstatic={{feedmainid: 'taskarea', feedmainindex: 0}} />
                <FeedMain feedmainstatic={{feedmainid: 'workoutarea', feedmainindex: 0}} />
            </section>
        },
        {
            tabmainindex : 1,
            tabmaintitle: 'Browse',
            tabmainrender: <section className="w-screen  snap-center overflow-hidden">
                <ZoomMain zoommainstatic={{zoommainid: 'workoutform'}} />
            </section>
        },
    ]

    const clubfieldset = [
        {
            tabmainindex : 0,
            tabmaintitle: 'Challenges',
            tabmainrender: <section className="w-screen  snap-center overflow-hidden">
                <FeedMain feedmainstatic={{feedmainid: 'ticketarea', feedmainindex: 0}} />
                <FeedMain feedmainstatic={{feedmainid: 'clubarea', feedmainindex: 0}} />
            </section>
        },
        {
            tabmainindex : 1,
            tabmaintitle: 'Browse',
            tabmainrender: <section className="w-screen  snap-center overflow-hidden">
                <ZoomMain zoommainstatic={{zoommainid: 'clubform'}} />
            </section>
        },
    ]

    const tabmain = [
        {
            tabmainid: 'workoutfieldset',
            tabmainref: workoutfieldset,
        },
        {
            tabmainid: 'clubfieldset',
            tabmainref: clubfieldset,
        },
        {
            tabmainid: 'contractfieldset',
            tabmainref: contractfieldset,
        },
    ]

    const [appstatic, setappstatic] = useApp(tabmain, tabmainstatic.tabmainid, tabmainstatic.tabmainindex)

    useEffect(() => {
        settabmainstate({tabmainindex: 0})
    }, [])
    
    useEffect(() => {
      if(tabmainstatic){
          const filter = tabmain.filter(data => data.tabmainid === tabmainstatic.tabmainid)
          const empty = []
          for(let i = 0; i < filter[0].tabmainref.length; i++){
            empty.push({
                tabmaintitle: filter[0].tabmainref[i].tabmaintitle,
                tabmainindex: filter[0].tabmainref[i].tabmainindex
            })
          }
            settabmainrender(empty)
      }
    }, [tabmainstatic])

    useEffect(() => {
        if(tabmainstate && tabmainstate.tabmainindex === 0){
            ref?.current?.scrollTo(0, 0)
        }
        else {
            ref?.current?.scrollTo(300 * tabmainstate.tabmainindex, 0)
        }
    }, [tabmainstate, tabmainrender])

    function ll(first=this.props.first){
        settabmaintouchstart(first.targetTouches[0].clientX)
    }
    function kk(first=this.props.first){
        settabmaintouchend(first.targetTouches[0].clientX)
    }
    function jj(){
        if(tabmaintouchstart - tabmaintouchend > 20){
            settabmainstate({tabmainindex: 1})
        }
        if(tabmaintouchstart - tabmaintouchend < - 20){
            settabmainstate({tabmainindex: 0})
        }
    }

    // if(tabmainref === undefined) return null
    // if(searchmainstate === null) return null
    
  return (
    <div>
        <main className="">
            <section className="">
                <figcaption className="flex flex-row items-center">
                    {tabmainrender?.map((data, index) => (<>
                        <article onClick={() => {
                            console.log('index', index)
                            settabmainstate({tabmainindex: index})
                        }} className={`border-b-2 border-white duration-1000 ${data?.tabmainindex === tabmainstate?.tabmainindex && 'border-black'}`}>
                            <CardMain>
                            {data.tabmaintitle}
                            </CardMain>
                        </article>
                    </>))}
                </figcaption>
            </section>
            <hr />
            <section className="">
                <figure ref={ref} onTouchStart={p => ll(p)} onTouchMove={p => kk(p)} onTouchEnd={() => jj()} className={`w-screen md:w-full min-h-screen grid grid-flow-col justify-start  overflow-x-scroll overflow-y-clip no-scrollbar snap-x snap-mandatory scroll-smooth duration-100 ${tabmainstyle && tabmainstyle}`}>
                {appstatic && appstatic.map(data => (<>
                    {data?.tabmainrender}
                </>))}
                </figure>
            </section>
        </main>
    </div>
  )
}
