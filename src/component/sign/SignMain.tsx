import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useClient from '../../hook/useClient'
import CardMain from '../../layout/card/CardMain'
import SplashMain from '../../layout/splash/SplashMain'

interface SignMainProps {
    signmainstatic: {
        signmainid: string,
        signmainindex:  number,
        signmaindetail: string,
        signmainaction: string,
        signmainentitle: string,
    }
}

export default function SignMain({signmainstatic}: SignMainProps) {
    const navigate = useNavigate()
    const {
    setappstate,

    } = useContext(Context)
    // const [clientstatic, setclientstatic] = useClient()

    // function signMainRender(first) {
    //     const query = [
    //         { 
    //             signmainid: 


    //         }

    //     ]
    // }

    const appimg = [
        {
            signmainindex: 0,
            signmainstyle: {
                section: `bg-slate-900 w-screen h-screen`, 
            },
        },
        {
            signmainindex: 1,
            signmainstyle: {
                section: `bg-rose-700`, 
            },
        },
        {
            signmainindex: 2,
            signmaintitle: 'inform',
            // signmainstyle: {
            //     section: `bg-emerald-700`, 
            // },

            // signmainrender: () => {
            //     return appImgRender({
            //         component: signMainRender(signmainstatic),
            //     })
            // }
        },
    ]

    const signmain = [
        {
            signmainid: 'appimg',
            signmainref: appimg,
        }
    ]

    const[appstatic, setappstatic] = useApp(signmain, signmainstatic.signmainid, signmainstatic.signmainindex)

  return (
    <div>
        <main>
            {appstatic?.map((data: { signmainstyle: { section: any } }) => (<>
            <section className={`w-full text-2xl flex items-center ${data?.signmainstyle?.section}`}>
                <div className="">
                <figcaption className="">
                    <CardMain>
                    <p className="flex flex-row items-center gap-1 text-slate-200"><SplashMain splashmainstyle={`text-2xl`} /> BEASTY TRAING CLUB</p>
                    <p className="text-slate-400">{signmainstatic?.signmaindetail}</p>
                    </CardMain>
                </figcaption>
                <figure className="">
                    <CardMain>
                    {signmainstatic?.signmainaction && 
                    <button onClick={() => {
                        // navigate(-1)
                        navigate(signmainstatic?.signmainaction)
                        setappstate()
                    }} className="l-button uppercase">
                        {signmainstatic?.signmainentitle || 'Continue'}
                    </button>}
                    </CardMain>
                </figure>

                </div>
            </section>
            </>))}
        </main>
    </div>
  )
}


export function appImgRender({component}) {
  return (
    <div>
        <section className="">
            {component}
        </section>
    </div>
  )
}
