import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'

export default function CtaMain({
    ctamainstatic,

}) {
    const {


    } = useContext(Context)
    const navigate = useNavigate()
    const param = useParams()

    const taskembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Delete record',
            ctamainaction: `/task/taskform/${param?.taskid}`,
        },
    ]

    const clubembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Create club',
            ctamainaction: `/club/clubform/${param?.clubid}`,
        },
    ]

    const ticketembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'End program',
            ctamainaction: `/ticket/ticketform/${param?.ticketid}`,
        },
    ]

    const ctamain = [
        {
            ctamainid: 'taskembed',
            ctamainref: taskembed
        },
        {
            ctamainid: 'clubembed',
            ctamainref: clubembed
        },
        {
            ctamainid: 'ticketembed',
            ctamainref: ticketembed
        },
    ]

    const [appstatic, setappstatic] = useApp(ctamain, ctamainstatic.ctamainid, ctamainstatic.ctamainindex)
    const ctamainrender = appstatic && appstatic

  return (
    <div>
        <main className="">
            <section className="">
                {ctamainrender?.map(data => (<>
                <button onClick={() => {
                    navigate(data?.ctamainaction)
                }} className="w-full  m-button">{data?.ctamainentitle}</button>
                </>))}
            </section>
        </main>
    </div>
  )
}
