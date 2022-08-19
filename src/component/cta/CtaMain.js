import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

// import { appul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'

export default function CtaMain({

    ctamainstatic,

}) {
    const {
        setappstate,
        setauthformstate,


    } = useContext(Context)
    const navigate = useNavigate()
    // const param = useParams()
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    
    const authembed = [
        {
            ctamainentitle: 'Join Us',
            ctamainstyle: `l-button border-white`,
            ctamainaction: () => {
                setauthformstate(true)
                return `/auth/authform`
            },
        },
        {
            ctamainentitle: 'Sign In',
            ctamainstyle: `border-white bg-transparent`,
            ctamainaction: () => {
                setauthformstate(false)
                return `/auth/authform`
            },
        },
    ]

    const userembed = [
        {
            ctamainentitle: 'Edit profile',
            ctamainstyle: `l-button border-black`,
            ctamainaction: () => {
                return `/user/userform/${splitstaticthree}`
            },
        },
    ]

    const contractembed = [
        {
            ctamainentitle: 'Unfollow',
            ctamainstyle: `l-button border-black`,
            ctamainaction: () => {
                return `/contract/contractform/${splitstaticthree}`
            },
        },
    ]

    const workoutembed = [
        {
            ctamainentitle: 'View your progress',
            ctamainaction: () => {
                return `/task/taskindex/${splitstaticthree}`
            },
        },
    ]

    const taskembed = [
        {
            ctamainentitle: 'reset record',
            ctamainstyle: `l-button border-black`,
            ctamainaction: () => {
                return `/task/taskform/${splitstaticthree}`
            },
        },
    ]
    
    const clubembed = [
        {
            ctamainentitle: 'View your program',
            ctamainaction: () => {
                return `/ticket/ticketindex/${splitstaticthree}`
            },
        },
    ]

    const ticketembed = [
        {
            ctamainentitle: 'End program',
            ctamainstyle: `l-button border-black`,
            ctamainaction: () => {
                return `/ticket/ticketform/${splitstaticthree}`
            }
        },
    ]

    const achievementembed = [
        {
            ctamainentitle: 'View your reward',
            ctamainaction: () => {
                return `/award/awardindex/${splitstaticthree}`
            },
        },
    ]

    const awardembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'Give it back',
            ctamainstyle: `l-button border-black`,
            ctamainaction: () => {
                return `/award/awardform/${splitstaticthree}`
            },
        },
    ]

    const guideembed = [
        {
            ctamainindex: 0,
            ctamainentitle: 'To do list (3)',
            // ctamainstyle: `l-button border-black`,
            ctamainaction: () => {
                return `/guide/guidemain`
            },
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
        {
            ctamainid: 'guideembed',
            ctamainref: guideembed
        },
    ]

    const [appstatic, setappstatic] = useApp(ctamain, ctamainstatic.ctamainid, ctamainstatic.ctamainindex, splitstaticthree)

  return (
    <div>
        <main className="">
            <section className="flex flex-row items-center  gap-1">
                {appstatic?.map((data, index) => (<>
                <Link to={data?.ctamainaction()} className="w-full">
                <button key={index} className={`w-full  m-button uppercase ${data?.ctamainstyle}`}>
                    {data?.ctamainentitle}
                </button>
                </Link>
                </>))}
            </section>
        </main>
    </div>
  )
}
