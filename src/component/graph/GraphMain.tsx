import React, { useContext, useEffect } from 'react'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useDev from '../../hook/useDev.tsx'
// import useDev from '../../hook/useDev.tsx'

export default function GraphMain({
    graphmainstatic,

}) {
    const {
        setappstate,
        
        messagedl,

    } = useContext(Context)
    const [devstatic, setdevstatic] = useDev()

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
                // return messagedl[0].breaddata.concat(messagedl[1].breaddata, messagedl[2].breaddata)
            }
        }
    ]

    const graphmain = [
        {
            graphmainid: 'appbase',
            graphmainref: appbase,
        }
    ]

    const [appstatic, setappstatic] = useApp(graphmain, graphmainstatic.graphmainid, graphmainstatic.graphmainindex)
    // console.log('graphsstadtic', appstatic)

  return (
    <div>
        <main className="">
            <section className="">


            </section>
        </main>
    </div>
  )
}
