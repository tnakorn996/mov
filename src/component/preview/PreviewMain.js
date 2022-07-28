import React, { useContext } from 'react'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'

export default function PreviewMain() {
  const {
    appstate,

  } = useContext(Context)

  const workoutarticle = [
    {
      previewmainindex: 0,
      previewmainrender: <WorkoutArticle />,

    }
  ]

  const previewmain = [
    {
      previewmainid: 'workoutarticle',
      previewmainref: workoutarticle,
    }
  ]

  const [appstatic, setappstatic] = useApp(previewmain, appstate.appidthree, appstate.appindexthree)

  function WorkoutArticle() {
    return (
      <div>
        <section className="w-screen h-screen  bg-white">
          <h1 className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, esse?</h1>
        </section>
      </div>
    )
  }

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
