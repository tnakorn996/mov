import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'

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
                {taskdl?.slice(0, 1)?.map(data => (<>
                <h1 className="m-h6">{data?.spreadtitle}</h1>
                    {data?.spreaddata?.map(dat => (<>
                    <CardMain>
                        <article onClick={() => {
                            navigate(`/task/taskindex/${dat?.taskid}`)
                        }} className="">{dat?.taskid}</article>
                    </CardMain>
                    </>))}
                </>))}
            </section>
            <section className="">
                {workoutdl?.map(data => (<>
                <h1 className="m-h6">{data?.spreadtitle}</h1>
                    {data?.spreaddata?.map(dat => (<>
                    <CardMain>
                        <article onClick={() => {
                            navigate(dat?.breadaction)
                        }} className="">{dat?.breadtitle}</article>
                    </CardMain>
                    </>))}
                </>))}
            </section>
        </main>
    </div>
  )
}
