import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'

export default function CtaMain({
    ctamainstatic,

}) {
    const {
        setauthmainstate,


    } = useContext(Context)
    const navigate = useNavigate()
    const param = useParams()

    const authembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Join Us',
            ctamainstyle: `l-button border-white`,
            ctamainaction: `/auth/authform`,
        },
        {
            ctamainindex: 1,
            ctamainentitle: 'Sign In',
            ctamainstyle: `border-white bg-transparent`,
            ctamainaction: `/auth/authform`,
        },
    ]

    const userembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Edit profile',
            ctamainstyle: `l-button border-black`,
            ctamainaction: `/user/userform/${param?.userid}`,
        },
    ]

    const contractembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Unfollow',
            ctamainstyle: `l-button border-black`,
            ctamainaction: `/contract/contractform/${param?.contractid}`,
        },
    ]

    const workoutembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'View your progress',
            ctamainaction: `/task/taskindex/${param?.workoutid}`,
        },
    ]

    const taskembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Delete record',
            ctamainstyle: `l-button border-black`,
            ctamainaction: `/task/taskform/${param?.taskid}`,
        },
    ]

    const clubembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'View your program',
            ctamainaction: `/ticket/ticketindex/${param?.clubid}`,
        },
    ]

    const ticketembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'End program',
            ctamainstyle: `l-button border-black`,
            ctamainaction: `/ticket/ticketform/${param?.ticketid}`,
        },
       
    ]

    const ctamain = [
        {
            ctamainid: 'authembed',
            ctamainref: authembed,
        },
        {
            ctamainid: 'userembed',
            ctamainref: userembed,
        },
        {
            ctamainid: 'contractembed',
            ctamainref: contractembed,
        },
        {
            ctamainid: 'workoutembed',
            ctamainref: workoutembed
        },
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
            <section className="flex flex-row items-center  gap-1">
                {ctamainrender?.map(data => (<>
                <button onClick={() => {
                    navigate(data?.ctamainaction)
                }} className={`w-full  m-button uppercase ${data?.ctamainstyle}`}>{data?.ctamainentitle}</button>
                </>))}
            </section>
        </main>
    </div>
  )
}
