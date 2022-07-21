import React, { useContext } from 'react'

import NavMain from '../../component/nav/NavMain'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'

export default function OverlayMain({
    overlaymainstatic,
    children,

}) {
    const {
        appstate,

    } = useContext(Context)

    // const navmain = [
    //     {
    //         overlaymainindex: 0,
    //         overlaymainrender: <NavMain />,
    //     }
    // ]

    const overlaymain = [
        // {
        //     overlaymainid: 'navmain',
        //     overlaymainref: navmain,
        // }
    ]

    // const [appstatic, setappstate] = useApp(overlaymain, appstate.appstateid, appstate.appstateindex)
    // const overlaymainrender = appstatic && appstatic

  return (
    <div>
        <main className="">
            <section className="">
                {/* {overlaymainrender?.map(data => (<>
                    {data?.overlaymainrender}
                </>))} */}
            </section>
            <section className="">
                {children}
            </section>

        </main>
    </div>
  )
}
