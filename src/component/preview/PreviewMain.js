import React, { useContext } from 'react'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import SignMain from '../sign/SignMain.tsx'

export default function PreviewMain() {
  const {
    appstate,
    signmainstate,

  } = useContext(Context)

  const apparticle = [
    {
      previewmainindex: 0,
      previewmainrender: <AppArticle />,
      

    }
  ]

  const previewmain = [
    {
      previewmainid: 'apparticle',
      previewmainref: apparticle,
    }
  ]

  function AppArticle() {
    return (
      <div>
        <section className="w-screen h-screen">
            <SignMain signmainstatic={{
              signmainid: signmainstate?.signmainid, 
              signmainindex: signmainstate?.signmainindex, 
              signmaindetail: signmainstate?.signmaindetail,
              signmainaction: signmainstate?.signmainaction,
              }} />
        </section>
      </div>
    )
  }

  const [appstatic, setappstatic] = useApp(previewmain, appstate.appidthree, appstate.appindex)


  return (
    <div>
      <main className="">
        <section className="">
          {appstatic?.map(data => (<>
            {data?.previewmainrender}
          </>))}
        </section>
      </main>
    </div>
  )
}
