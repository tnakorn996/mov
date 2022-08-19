import React, { useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiCloseLine } from 'react-icons/ri'
import { useLocation } from 'react-router-dom'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import MessageIndex from '../../page/message/MessageIndex.tsx'
import AppState from '../../page/app/AppState.tsx'
import AppIndex from '../../page/app/AppIndex.tsx'
import AchievementIndex from '../../page/achievement/AchievementIndex.tsx'
import SearchMain from '../../page/search/SearchMain.tsx'
import SignMain from '../sign/SignMain.tsx'
import CardMain from '../../layout/card/CardMain'
import ChipMain from '../../layout/chip/ChipMain.tsx'
import WeightIndex from '../../page/weight/WeightIndex.tsx'
import UserIndex from '../../page/user/UserIndex'
import GuideIndex from '../../page/guide/GuideIndex.tsx'


export default function PreviewMain() {
  const {
    appstate, setappstate,

  } = useContext(Context)
  const location = useLocation()

  // useEffect(() => {
  //     window.history.replaceState(null, "", location.pathname)
  // }, [])

  function previewMainAction() {
    window.history.replaceState(null, "", location?.pathname)
    setappstate()
  }

  const apparticle = [
    {
      previewmainindex: 0,
      previewmainrender: () => {
        return appArticleRender({
          component: <MessageIndex />,
          navigate: () => {previewMainAction()}
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

  const userarticle = [
    {
      previewmainindex: 0,
      previewmainrender: () => {
        return appArticleRender({
          navigate: () => {previewMainAction()},
          component: <UserIndex />
        })
      },
    },
  ]

   const searcharticle = [
    {
      previewmainindex: 0,
      previewmainrender: () => {
        return appArticleRender({
          navigate: () => {previewMainAction()},
          component: <SearchMain />
        })
      },
    },
  ]

   const achievementarticle = [
    {
      previewmainindex: 0,
      previewmainrender: () => {
        return appArticleRender({
          navigate: () => {previewMainAction()},
          component: <AchievementIndex />
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


  const guidearticle = [
    {
      previewmainindex: 0,
      previewmainrender: () => {
        return appArticleRenderTwo({
          component: <GuideIndex />
        })
      },
    },
  ]

  const previewmain = [
    {
      previewmainid: 'apparticle',
      previewmainref: apparticle,
    },
    {
      previewmainid: 'userarticle',
      previewmainref: userarticle,
    },
    {
      previewmainid: 'searcharticle',
      previewmainref: searcharticle,
    },
    {
      previewmainid: 'achievementarticle',
      previewmainref: achievementarticle,
    },
    {
      previewmainid: 'guidearticle',
      previewmainref: guidearticle,
    },
  ]

  const [appstatic, setappstatic] = useApp(previewmain, appstate.appidthree, appstate.appindex)
// console.log('signmainstate, appstate', signmainstate, appstate)
if(typeof appstate === 'undefined') return null

  return (
    <div>
      <main className="">
        <section className="">
          {appstatic?.map((data, index) => (<>
          <div key={index}>
            {data?.previewmainrender()}
          </div>
          </>))}
        </section>
      </main>
    </div>
  )
}

  export function appArticleRender({component, navigate}) {
    return (
      <div>
        <motion.section initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className="w-screen max-h-[85vh] fixed bottom-0 left-0  bg-white rounded-t-3xl overflow-y-scroll duration-100">
          <div onClick={() => {navigate()}} className="z-30 absolute top-0 right-0">
          <CardMain>
          <ChipMain>
            <figure className=" bg-white">
            <CardMain>
            <RiCloseLine className="text-2xl" />
            </CardMain>
            </figure>
          </ChipMain>
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
        <section className="w-screen h-screen fixed top-0 right-0  bg-white">
          {component}
        </section>
      </div>
    )
  }