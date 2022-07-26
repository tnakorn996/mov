import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

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
                <TabMain tabmainstatic={{tabmainid: 'workoutfieldset', tabmainindex: null}} />
            </section>
        </main>
    </div>
  )
}
