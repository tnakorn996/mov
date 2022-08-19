import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import BreadMain from '../../component/bread/BreadMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
import TabMain from '../../layout/tab/TabMain'

export default function WorkoutMain() {
    const {

        taskdl,
        workoutdl,

    } = useContext(Context)
    const navigate = useNavigate()

  return (
    <div>
        <main className="">
            <section className="">
                <CardMain />
                <CardMain />
                <BreadMain />
                <TabMain tabmainstatic={{tabmainid: 'workoutfieldset', tabmainindex: null}} />
            </section>
        </main>
    </div>
  )
}
