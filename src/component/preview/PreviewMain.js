import React, { useContext } from 'react'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import AppState from '../../page/app/AppState.tsx'
import SignMain from '../sign/SignMain.tsx'

export default function PreviewMain() {
  const {
    appstate,
    signmainstate,

  } = useContext(Context)

  // function previewMainRender() {
  //   if(!signmainstate) return null
  //   return <SignMain signmainstatic={{
  //       signmainid: signmainstate?.signmainid, 
  //       signmainindex: signmainstate?.signmainindex, 
  //       signmaindetail: signmainstate?.signmaindetail,
  //       signmainaction: signmainstate?.signmainaction,
  //   }} /> 
  // }

  const apparticle = [
    {
      previewmainindex: 0,
      previewmainrender: () => {
        return appArticleRender({
          component: <AppState />
        })
      },
    }
  ]

  // const taskarticle = [
  //   {
  //     previewmainindex: 0,
  //     previewmainrender: () => {
  //       return appArticleRender({
  //         component: previewMainRender()
  //       })
  //     },
  //   }
  // ]

  const previewmain = [
    {
      previewmainid: 'apparticle',
      previewmainref: apparticle,
    },

    // {
    //   previewmainid: 'taskarticle',
    //   previewmainref: taskarticle,
    // }
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

  export function appArticleRender({component}) {
    return (
      <div>
        <section className="w-screen h-screen">
          {component}
            {/* <SignMain signmainstatic={{
              signmainid: first?.signmainid, 
              signmainindex: first?.signmainindex, 
              signmaindetail: first?.signmaindetail,
              signmainaction: first?.signmainaction,
              }} /> */}
        </section>
      </div>
    )
  }