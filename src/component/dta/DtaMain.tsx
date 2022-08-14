import React, { useContext } from 'react'
import { RiMoreLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'

export default function AtaMain({
    dtamaindata,
    dtamainstatic,
    children,
    component,

}) {
    const {
        setappstate, appstate,
        dtamainstate, setdtamainstate,


    } = useContext(Context)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    // const navigate = useNavigate()

    function dtaMainAction(first: { 
        appid: string; 
        appidtwo: string; 
        appidthree: string; 
        appindex: number 
    }) {
        
        return () => {
            // console.log('dtamaindata', dtamaindata)
            setappstate(first)
            // setdtamainstate(!dtamainstate)
            
            // document.location.href = dtamaindata.spreadhref;
            // window.location.replace(dtamaindata.spreadhref)
            // window.location.href = dtamaindata.spreadhref
            if(dtamaindata.spreadhref) return  window.history.replaceState(null, "", dtamaindata.spreadhref)
            return null
        }
    }

    const appiframe = [
        {
            dtamainindex: 0,
            dtamainrender: () => {
                return {
                    navigate: dtaMainAction({
                            appid: 'backdropmain',
                            appidtwo: 'modalmain',
                            appidthree: 'appdialog',
                            appindex: 0,
                        })
                }
            } 
        },
        {
            dtamainindex: 1,
            dtamainrender: () => {
                return {
                    navigate: dtaMainAction({
                            appid: 'backdropmain',
                            appidtwo: 'previewmain',
                            appidthree: 'apparticle',
                            appindex: 1,
                        })
                }
            } 
        },
    ]

    const useriframe = [
        {
            dtamainindex: 0,
            dtamainrender: () => {
                return {
                    navigate: dtaMainAction({
                            appid: 'backdropmain',
                            appidtwo: 'previewmain',
                            appidthree: 'userarticle',
                            appindex: 0,
                        })
                }
            } 
        },
    ]

    const contractiframe = [
        {
            dtamainindex: 0,
            dtamainrender: () => {
                return {
                    navigate: dtaMainAction({
                            appid: 'backdropmain',
                            appidtwo: 'modalmain',
                            appidthree: 'contractdialog',
                            appindex: 0,
                        })
                }
            } 
        },
    ]

    const searchiframe = [
        {
            dtamainindex: 0,
            dtamainrender: () => {
                return {
                    navigate: dtaMainAction({
                            appid: 'backdropmain',
                            appidtwo: 'modalmain',
                            appidthree: 'searchdialog',
                            appindex: 0,
                        }),
                }
            } 
        }
    ]
        
    const messageiframe = [
        {
            dtamainindex: 0,
            dtamainrender: () => {
                return {
                    navigate: dtaMainAction({
                            appid: 'backdropmain',
                            appidtwo: 'modalmain',
                            appidthree: 'messagedialog',
                            appindex: 0,
                        })
                }
            } 
        }
    ]

    const weightiframe = [
        {
            dtamainindex: 0,
            dtamainrender: () => {
                return {
                    navigate: dtaMainAction({
                            appid: 'backdropmain',
                            appidtwo: 'modalmain',
                            appidthree: 'weightdialog',
                            appindex: 0,
                        })
                }
            } 
        }
    ]

    const dtamain = [
        {
            dtamainid: 'appiframe',
            dtamainref: appiframe
        },
        {
            dtamainid: 'useriframe',
            dtamainref: useriframe
        },
        {
            dtamainid: 'contractiframe',
            dtamainref: contractiframe
        },
        {
            dtamainid: 'searchiframe',
            dtamainref: searchiframe
        },
        {
            dtamainid: 'messageiframe',
            dtamainref: messageiframe
        },
        {
            dtamainid: 'weightiframe',
            dtamainref: weightiframe
        }
    ]

    const [appstatic, setappstatic] = useApp(dtamain, dtamainstatic.dtamainid, dtamainstatic.dtamainindex, splitstaticthree)
// console.log('appstatic', appstatic)
  return (
    <div>
        <main className="">
            <section onClick={() => {
                setdtamainstate(!dtamainstate)
            }} className="">
                {appstatic && appstatic?.map((data: { dtamainrender: () => any }) => (<>
                    <section onClick={data?.dtamainrender()?.navigate} className="">
                        {children}
                    </section>
                </>))}
            </section>
        </main>
    </div>
  )
}
