import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'

import { Context } from '../../context/context'
import ModalMain from '../modal/ModalMain.tsx'
import PreviewMain from '../../component/preview/PreviewMain'
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
            backdropmainrender: () => {
              return backDropMainRender(<PreviewMain />)
            } 
        }
    ]

    const modalmain = [
        {
            backdropmainindex: 0,
            backdropmainrender: () => {
              return backDropMainRender(<ModalMain />)
            } 
        }
    ]

    const backdropmain = [
        {
            backdropmainid: 'previewmain',
            backdropmainref: previewmain,
        },
        {
            backdropmainid: 'modalmain',
            backdropmainref: modalmain,
        },
    ]

    const [appstatic, setappstatic] = useApp(backdropmain, appstate.appidtwo, appstate.appindextwo || 0)

    if(appstate && appstate.appid !== 'backdropmain') return null

  return (
    <div>
        <main className="">
          <section className="z-50 w-screen h-screen fixed top-0 left-0  bg-slate-900 bg-opacity-40">
            {appstatic?.map((data, index) => (<>
                <motion.figure key={index} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="duration-100">
                    {data?.backdropmainrender()}
                </motion.figure>
              </>))}
          </section>
        </main>
    </div>
  )
}

export function backDropMainRender(component) {
  return (
    <div>
      {component}
    </div>
  )
}
