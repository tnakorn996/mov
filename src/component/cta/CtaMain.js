import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'

export default function CtaMain({
    ctamainstatic,

}) {
    const {
        setauthmainstate,


    } = useContext(Context)
    const navigate = useNavigate()
    const param = useParams()
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)

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
            ctamainaction: `/user/userform/${splitstaticthree}`,
        },
    ]

    const contractembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Unfollow',
            ctamainstyle: `l-button border-black`,
            ctamainaction: `/contract/contractform/${splitstaticthree}`,
        },
    ]

    const workoutembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'View your progress',
            ctamainaction: `/task/taskindex/${splitstaticthree}`,
        },
    ]

    const taskembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Delete record',
            ctamainstyle: `l-button border-black`,
            ctamainaction: `/task/taskform/${splitstaticthree}`,
        },
    ]
    
    const clubembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'View your program',
            ctamainaction: `/ticket/ticketindex/${splitstaticthree}`,
        },
    ]

    const ticketembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'End program',
            ctamainstyle: `l-button border-black`,
            ctamainaction: `/ticket/ticketform/${splitstaticthree}`,
        },
    ]

    const achievementembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'View your reward',
            ctamainaction: `/award/awardindex/${splitstaticthree}`,
        },
    ]

    const awardembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Return reward',
            ctamainstyle: `l-button border-black`,
            ctamainaction: `/award/awardform/${splitstaticthree}`,
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

        {
            ctamainid: 'achievementembed',
            ctamainref: achievementembed
        },
        {
            ctamainid: 'awardembed',
            ctamainref: awardembed
        },
    ]

    const [appstatic, setappstatic] = useApp(ctamain, ctamainstatic.ctamainid, ctamainstatic.ctamainindex, splitstaticthree)

  return (
    <div>
        <main className="">
            <section className="flex flex-row items-center  gap-1">
                {appstatic?.map(data => (<>
                <button onClick={() => {
                    navigate(data?.ctamainaction)
                }} className={`w-full  m-button uppercase ${data?.ctamainstyle}`}>{data?.ctamainentitle}</button>
                </>))}
            </section>
        </main>
    </div>
  )
}
