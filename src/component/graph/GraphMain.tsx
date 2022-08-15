import React, { useContext, useEffect } from 'react'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useDev from '../../hook/useDev.tsx'
import SplashMain from '../../layout/splash/SplashMain'
// import useDev from '../../hook/useDev.tsx'

export default function GraphMain({
    graphmainstatic,

}) {
    const {
        setappstate,

        // taskuserid,
        appdl,
        messagedl,

    } = useContext(Context)


    // useEffect(() => {
    //   graphMainRender()
    // }, [])

    // function graphMainRender() {
    //     if(!appstatic) return null
    //     const filter = appstatic[0].graphmainrender.filter((data: { spreadrender: () => undefined }) => data.spreadrender() !== undefined)
    //     setappstate({
    //         appid:'backdropmain',
    //         appidtwo: 'previewmain',
    //         appidthree: 'apparticle',
    //         appindextwo: 0
    //     })
    // }

    const appbase = [
        {
            graphmainindex: 0,
            graphmainrender: () => {
                return {
                    data: appdl[0]?.spreaddata(),
                    action: {
                        appid:'backdropmain',
                        appidtwo: 'previewmain',
                        appidthree: 'apparticle',
                        appindex: 1
                    }
                }
            }
        }
    ]

    const messagebase = [
        {
            graphmainindex: 0,
            graphmainrender: () => {
                return {
                    data: (messagedl[0]?.spreaddata()?.concat(
                        messagedl[1]?.spreaddata(), 
                        // messagedl[2]?.spreaddata(),  
                        messagedl[3]?.spreaddata()))?.filter(data => data?.spreadrender()?.booltwo === true && data?.spreadrender()?.bool === true),
                    action: {
                        appid:'backdropmain',
                        appidtwo: 'previewmain',
                        appidthree: 'apparticle',
                        appindex: 0
                    }
                } 
            }
        }
    ]

    const graphmain = [
        {
            graphmainid: 'appbase',
            graphmainref: appbase,
        },
        {
            graphmainid: 'messagebase',
            graphmainref: messagebase,
        },
    ]

    // console.log('graphmainstatic', graphmainstatic)
    const [appstatic, setappstatic] = useApp(graphmain, graphmainstatic.graphmainid, graphmainstatic.graphmainindex, graphmainstatic)
    const [devstatic, setdevstatic] = useDev({
            devstaticdata: appstatic && appstatic[0].graphmainrender().data,
            devstaticaction: appstatic && appstatic[0].graphmainrender().action
        })
        
    if(!appstatic || !devstatic) return null


  return (
    <div>
        <main className="">
            <section className="">


            </section>
        </main>
    </div>
  )
}
