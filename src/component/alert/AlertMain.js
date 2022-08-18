import React from 'react'
import useApp from '../../hook/useApp'

export default function AlertMain({
    alertmainstatic,

}) {

    const workoutcaption = [
        {
            alertmainindex: 0,
            alertmainicon: 'x',
            alertmainstyle: 'text-red-500'
        }
    ]
    const alertmain = [
        {
            alertmainid: 'workoutcaption',
            alertmainref: workoutcaption,
        }
    ]

    const [appstatic, setappstatic] = useApp(alertmain, alertmainstatic.alertmainid, alertmainstatic.alertmainindex)
    

  return (
    <div>
        <main className="">
            {appstatic?.map((data, index) => (<>
            <section key={index} className={` ${data?.alertmainstyle}`}>
                <figure className="">
a
                </figure>
                <figcaption className="">

                </figcaption>
            </section>
            </>))}
        </main>
    </div>
  )
}
