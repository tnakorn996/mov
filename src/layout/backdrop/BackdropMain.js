import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import PreviewMain from '../../component/preview/PreviewMain'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'

export default function BackdropMain({

    children,

}) {
const {
    appstate, setappstate,

} = useContext(Context)

    const previewmain = [
        {
            backdropmainindex: 0,
            backdropmainrender: <PreviewMain />
        }
    ]

    const backdropmain = [
        {
            backdropmainid: 'previewmain',
            backdropmainref: previewmain,
        }
    ]

    // useEffect(() => {
    //     if(appstate){
    //         const filter = backdropmain.filter(data => data.backdropmainid === appstate.appid)
    //         const filtertwo = filter[0].backdropmainref.filter(data => data.backdropmainindex === appstate.appindex)
    //         setbackdropmainrender(filtertwo)
    //     }
    // }, [appstate])

    const [appstatic, setappstatic] = useApp(backdropmain, appstate.appidtwo, appstate.appindextwo || 0)

  return (
    <div>
        <main className="">
          <section className="z-50 w-screen h-screen fixed top-0 left-0  bg-slate-900 bg-opacity-40">
            <motion.figure initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="">
            {appstatic?.map(data => (<>
                    {data?.backdropmainrender}
                    </>))}
            </motion.figure>
          </section>
        </main>
    </div>
  )
}
