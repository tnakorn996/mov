import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiCloseLine } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import MessageIndex from '../../page/message/MessageIndex.tsx'
import AppState from '../../page/app/AppState.tsx'
import AppIndex from '../../page/app/AppIndex.tsx'
import SearchMain from '../../page/search/SearchMain.tsx'
import SignMain from '../sign/SignMain.tsx'
import CardMain from '../../layout/card/CardMain'
import WeightIndex from '../../page/weight/WeightIndex.tsx'


export default function PreviewMain() {
  const {
    appstate, setappstate,

  } = useContext(Context)
  const location = useLocation()

  // useEffect(() => {
  //     window.history.replaceState(null, "", location.pathname)
  // }, [])

  function previewMainRender() {
     window.history.replaceState(null, "", location?.pathname)
  }

  const apparticle = [
    {
      previewmainindex: 0,
      previewmainrender: () => {
        return appArticleRender({
          navigate: () => {
             window.history.replaceState(null, "", location?.pathname)
            setappstate()
          },
          component: <MessageIndex />
        })
      },
    },
    {
      previewmainindex: 1,
      previewmainrender: () => {
        return appArticleRenderTwo({
          component: <AppIndex />
        })
      },
    },
  ]

   const searcharticle = [
    {
      previewmainindex: 0,
      previewmainrender: () => {
        return appArticleRender({
          navigate: () => {
            window.history.replaceState(null, "", location?.pathname)
            setappstate()
          },
          component: <SearchMain />
        })
      },
    },
  ]

  // const weightarticle = [
  //   {
  //     previewmainindex: 0,
  //     previewmainrender: () => {
  //       return appArticleRender({
  //         navigate: () => {
  //           window.history.replaceState(null, "", location?.pathname)
  //           setappstate()
  //         },
  //         component: <WeightIndex />
  //       })
  //     },
  //   },
  // ]

  const previewmain = [
    {
      previewmainid: 'apparticle',
      previewmainref: apparticle,
    },
    {
      previewmainid: 'searcharticle',
      previewmainref: searcharticle,
    },
    // {
    //   previewmainid: 'weightarticle',
    //   previewmainref: weightarticle,
    // },
  ]

  const [appstatic, setappstatic] = useApp(previewmain, appstate.appidthree, appstate.appindex)
// console.log('signmainstate, appstate', signmainstate, appstate)
  return (
    <div>
      <main className="">
        <section className="">
          {appstatic?.map(data => (<>
            {data?.previewmainrender()}
          </>))}
        </section>
      </main>
    </div>
  )
}

  export function appArticleRender({component, navigate}) {
    return (
      <div>
        <motion.section initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className="w-screen max-h-[85vh] fixed bottom-0 left-0  bg-white rounded-t-3xl overflow-y-scroll duration-500">
          <div className="absolute top-0 right-0">
          <CardMain>
          <RiCloseLine onClick={navigate} className="text-2xl" />
          </CardMain>
          </div>
          {component}
        </motion.section>
      </div>
    )
  }

  export function appArticleRenderTwo({component}) {
    return (
      <div>
        <section className="w-screen h-screen fixed top-0 right-0">
          {component}
        </section>
      </div>
    )
  }

  export function appArticleRenderThree({component}) {
    return (
      <div>
        <section className="w-screen h-screen fixed top-0 right-0  bg-red-500">
          {component}
        </section>
      </div>
    )
  }