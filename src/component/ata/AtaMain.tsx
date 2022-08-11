import React, { useContext } from 'react'
import { RiMoreLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'

export default function AtaMain({
    atamaindata,
    atamainstatic,
    children,
    component,

}) {
    const {
        setappstate, appstate,


    } = useContext(Context)
    // const navigate = useNavigate()

    function ataMainRender(first: { 
        appid: string; 
        appidtwo: string; 
        appidthree: string; 
        appindex: number 
    }) {
        
        return () => {
            setappstate(first)
            
            // document.location.href = atamaindata.spreadhref;
            // window.location.replace(atamaindata.spreadhref)
            // window.location.href = atamaindata.spreadhref
            if(atamaindata.spreadhref) return  window.history.replaceState(null, "", atamaindata.spreadhref)
            return null
        }
    }
    
    const appiframe = [
        {
            atamainindex: 0,
            atamainrender: () => {
                return appIframe({
                    children: children,
                    props: {
                        navigate: ataMainRender({
                            appid: 'backdropmain',
                            appidtwo: 'modalmain',
                            appidthree: 'appdialog',
                            appindex: 0,
                        })
                    },
                })
            } 
        },
    ]

    const searchiframe = [
        {
            atamainindex: 0,
            atamainrender: () => {
                return appIframe({
                    children: children,
                    props: {
                        navigate: ataMainRender({
                            appid: 'backdropmain',
                            appidtwo: 'modalmain',
                            appidthree: 'searchdialog',
                            appindex: 0,
                        })
                    },
                })
            } 
        }
    ]
        
    const messageiframe = [
        {
            atamainindex: 0,
            atamainrender: () => {
                return appIframe({
                    children: children,
                    props: {
                        navigate: ataMainRender({
                            appid: 'backdropmain',
                            appidtwo: 'modalmain',
                            appidthree: 'messagedialog',
                            appindex: 0,
                        })
                    },
                })
            } 
        }
    ]

    const atamain = [
        {
            atamainid: 'appiframe',
            atamainref: appiframe
        },
        {
            atamainid: 'searchiframe',
            atamainref: searchiframe
        },
        {
            atamainid: 'messageiframe',
            atamainref: messageiframe
        }
    ]

    const [appstatic, setappstatic] = useApp(atamain, atamainstatic.atamainid, atamainstatic.atamainindex)
// console.log('appstatic', appstatic)
  return (
    <div>
        <main className="">
            <section className="">
                {appstatic && appstatic?.map((data: { atamainrender: () => any }) => (<>
                    {data?.atamainrender()}
                </>))}
            </section>
        </main>
    </div>
  )
}


export function appIframe({props, children}) {
    const {navigate} = props
    return (
        <div>
            <section onClick={navigate} className="">
            {children}
            </section>
        </div>
    )
}