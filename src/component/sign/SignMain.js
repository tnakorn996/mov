import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import CardMain from '../../layout/card/CardMain'
import SplashMain from '../../layout/splash/SplashMain'

export default function SignMain({
    signmainstatic,

}
    ) {
    const navigate = useNavigate()
    const {
    setappstate,

    } = useContext(Context)

    const appimg = [
        {
            signmainindex: 0,
            signmainstyle: {
                section: `bg-slate-800 w-screen h-screen`, 
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
            {appstatic?.map(data => (<>
            <section className={`w-full text-2xl flex items-center ${data?.signmainstyle?.section}`}>
                <div className="">
                <figcaption className="">
                    <CardMain>
                    <p className="flex flex-row items-center gap-1 text-white"><SplashMain splashmainstyle={`text-2xl`} /> BEASTY TRAING CLUB</p>
                    <p className="text-slate-300">{signmainstatic?.signmaindetail}</p>
                    </CardMain>
                </figcaption>
                <figure className="">
                    <CardMain>
                    {signmainstatic?.signmainaction && 
                    <button onClick={() => {
                        navigate(signmainstatic?.signmainaction)
                        setappstate()
                    }} className="m-button uppercase">
                        Continue
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
