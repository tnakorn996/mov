import React, { useContext } from 'react'
import { RiMoreLine } from 'react-icons/ri'
import { useLocation, useNavigate } from 'react-router-dom'

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
    const location = useLocation()

    function dtaMainAction(first: {
        appid: string;
        appidtwo: string;
        appidthree: string;
        appindex: number
    }) {
        // console.log('dtamaindata', dtamaindata)
        // console.log('first', first)
        setappstate(first)
        // setdtamainstate(!dtamainstate)

        // document.location.href = dtamaindata.spreadhref;
        // window.location.replace(dtamaindata.spreadhref)
        // window.location.href = dtamaindata.spreadhref
        if (dtamaindata.spreadhref) return window.history.replaceState(null, "", dtamaindata.spreadhref)
        return null
    }

    const appiframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'modalmain',
                    appidthree: 'appdialog',
                    appindex: 0,
                }
            }
        },
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'previewmain',
                    appidthree: 'apparticle',
                    appindex: 1,
                }
            }
        },
    ]

    const useriframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'previewmain',
                    appidthree: 'userarticle',
                    appindex: 0,
                }
            }
        },
    ]

    const contractiframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'modalmain',
                    appidthree: 'contractdialog',
                    appindex: 0,
                }
            }
        },
    ]

    const imageiframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'previewmain',
                    appidthree: 'imagearticle',
                    appindex: 0,
                }
            }
        },
    ]

    const searchiframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'modalmain',
                    appidthree: 'searchdialog',
                    appindex: 0,
                }
            }
        }
    ]

    const messageiframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'modalmain',
                    appidthree: 'messagedialog',
                    appindex: 0,
                }
            }
        }
    ]

    const guideiframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'modalmain',
                    appidthree: 'guidedialog',
                    appindex: 0,
                }
            }
        }
    ]

    const weightiframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'modalmain',
                    appidthree: 'weightdialog',
                    appindex: 0,
                }
            }
        }
    ]

    const qualityiframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'modalmain',
                    appidthree: 'qualitydialog',
                    appindex: 0,
                }
            }
        }
    ]

    const achievementiframe = [
        {
            dtamainrender: () => {
                return {
                    appid: 'backdropmain',
                    appidtwo: 'previewmain',
                    appidthree: 'achievementarticle',
                    appindex: 0,
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
            dtamainid: 'imageiframe',
            dtamainref: imageiframe
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
            dtamainid: 'guideiframe',
            dtamainref: guideiframe
        },
        {
            dtamainid: 'weightiframe',
            dtamainref: weightiframe
        },
        {
            dtamainid: 'qualityiframe',
            dtamainref: qualityiframe
        },
        {
            dtamainid: 'achievementiframe',
            dtamainref: achievementiframe
        },
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
                        <section onClick={() => {
                            dtaMainAction(data?.dtamainrender())
                        }
                        } className="">
                            {children}
                        </section>
                    </>))}
                </section>
            </main>
        </div>
    )
}
