import React, { useContext, useEffect, useReducer } from 'react'
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
    // const navigate = useNavigate()
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
                // return `/user/userform/${splitstaticthree}`
                return `/user/userform/`
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

    // function authembed(state, action) {
    //     switch (action) {
    //         case 0:
    //             return {
    //                 ctamainentitle: 'Join Us',
    //                 ctamainstyle: `l-button border-white`,
    //                 ctamainaction: () => {
    //                     setauthformstate(true)
    //                     return `/auth/authform`
    //                 },
    //             } 
    //         case 1:
    //             return  {
    //                 ctamainentitle: 'Sign In',
    //                 ctamainstyle: `border-white bg-transparent`,
    //                 ctamainaction: () => {
    //                     setauthformstate(false)
    //                     return `/auth/authform`
    //                 },
    //             }
    //         default:
    //             return null;
    //     }
    // }
    // const [authembedstatic, setauthembedstatic] = useReducer(authembed,  {});

    // function userembed(state, action) {
    //     switch (action) {
    //         case 0:
    //             return {
    //                 ctamainentitle: 'Edit profile',
    //                 ctamainstyle: `l-button border-black`,
    //                 ctamainaction: () => {
    //                     // return `/user/userform/${splitstaticthree}`
    //                     return `/user/userform/`
    //                 },
    //             }
    //         default:
    //             return null;
    //     }
    // }
    // const [userembedstatic, setuserembedstatic] = useReducer(userembed,  {});

    // function contractembed(state, action) {
    //     switch (action) {
    //         case 0:
    //             return {
    //                 ctamainentitle: 'Unfollow',
    //                 ctamainstyle: `l-button border-black`,
    //                 ctamainaction: () => {
    //                     return `/contract/contractform/${splitstaticthree}`
    //                 },
    //             }
    //         default:
    //             return null;
    //     }
    // }
    // const [contractembedstatic, setcontractembedstatic] = useReducer(contractembed,  {});

    // function workoutembed(state, action) {
    //     switch (action) {
    //         case 0:
    //             return {
    //                 ctamainentitle: 'View your progress',
    //                 ctamainaction: () => {
    //                 return `/task/taskindex/${splitstaticthree}`
    //                 },
    //             }
    //         default:
    //             return null;
    //     }
    // }
    // const [workoutembedstatic, setworkoutembedstatic] = useReducer(workoutembed,  {});

    // function ctamain(state, action) {
    //     switch (action) {
    //         case "authembed":
    //             return () => {

    //                 setauthembedstatic(ctamainstatic.ctamainindex)
    //                 return authembedstatic
    //             } 
    //         case "userembed":
    //             return () => {

    //                 setuserembedstatic(ctamainstatic.ctamainindex)
    //                 return userembedstatic
    //             } 
    //         case "contractembed":
    //             return () => {

    //                 setcontractembedstatic(ctamainstatic.ctamainindex)
    //                 return contractembedstatic
    //             } 
    //         case "workoutembed":
    //             return () => {

    //                 setworkoutembedstatic(ctamainstatic.ctamainindex)
    //                 return workoutembedstatic
    //             } 
    //         case "taskembed":
    //             return () => {

    //                 settaskembedstatic(ctamainstatic.ctamainindex)
    //                 return taskembedstatic
    //             } 
    //         case "clubembed":
    //             return () => {

    //                 setclubembedstatic(ctamainstatic.ctamainindex)
    //                 return clubembedstatic
    //             } 
    //         case "ticketembed":
    //             return () => {

    //                 setticketembedstatic(ctamainstatic.ctamainindex)
    //                 return ticketembedstatic
    //             } 
    //         case "achievementembed":
    //             return () => {

    //                 setachievementembedstatic(ctamainstatic.ctamainindex)
    //                 return achievementembedstatic
    //             } 
    //         case "awardembed":
    //             return () => {

    //                 setawardembedstatic(ctamainstatic.ctamainindex)
    //                 return awardembedstatic
    //             } 
    //         case "guideembed":
    //             return () => {

    //                 setguideembedstatic(ctamainstatic.ctamainindex)
    //                 return guideembedstatic
    //             } 
    //         default:
    //             return null;
    //     }
    // }

    // const [appstatic, setappstatic] = useReducer(ctamain,  {});

    // useEffect(() => {
    //   setappstatic(ctamainstatic.ctamainid)
    // }, [])

    if(typeof appstatic === 'undefined') return null
    
  return (
    <div>
        <main className="">
            <section className="flex flex-row items-center  gap-1">
                {appstatic?.map((data, index) => (<>
                <Link key={index} to={data?.ctamainaction()} className="w-full">
                <button className={`w-full  m-button uppercase ${data?.ctamainstyle}`}>
                    {data?.ctamainentitle}
                </button>
                </Link>
                </>))}
            </section>
        </main>
    </div>
  )
}
