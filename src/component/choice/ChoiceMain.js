import React, { useContext, useEffect, useState } from 'react'

import { feedbackul, workoutul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../../layout/card/CardMain'
import SheetMain from '../../layout/sheet/SheetMain'
import ZoomMain from '../../layout/zoom/ZoomMain'
import DtaMain from '../../component/dta/DtaMain.tsx'
import { useLocation } from 'react-router-dom'

export default function ChoiceMain({
    choicemainref,
    choicemainstatic,

}) {
    const {

        choicemainstate, setchoicemainstate,

    } = useContext(Context)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    // console.log('splitstaticthree', splitstaticthree)

    const workoutlabel = [
        {
            choicemainindex: 0,
            choicemainrender: () => {
                return {
                    dtamaindata: {spreadhref: `/weight/weightindex/${splitstaticthree}`},
                    dtamainstatic: {dtamainid: 'weightiframe', dtamainindex: 0}
                }
            },
            choicemainrendertwo: () => {
                return workoutul.filter(data => data.breadid === splitstaticthree)
            }
        }
    ]

    const feedbacklabel = [
        {
            choicemainindex: 0,
            choicemainrender: () => {
                return {
                    dtamaindata: {spreadhref: `/quality/qualityindex/${splitstaticthree}`},
                    dtamainstatic: {dtamainid: 'qualityiframe', dtamainindex: 0}
                }
            },
            choicemainrendertwo: () => {
                return feedbackul.filter(data => data.breadid === splitstaticthree)
            }
        }
    ]

    const choicemain = [
        {
            choicemainid: 'workoutlabel',
            choicemainref: workoutlabel,
        },
        {
            choicemainid: 'feedbacklabel',
            choicemainref: feedbacklabel,
        },
    ]

    const [appstatic, setappstatic] = useApp(choicemain, choicemainstatic.choicemainid, choicemainstatic.choicemainindex, splitstaticthree)
// console.log('appstatic', appstatic)
// console.log('splitstaticthree', splitstaticthree)
    useEffect(() => {
        if(appstatic) {
            appstatic?.map((data) => (
                    setchoicemainstate(data?.choicemainrendertwo()[0]?.breaddata[0]?.breadhead)
            ))
        }
    }, [appstatic])

    // console.log('choicemainstate', choicemainstate)
    
  return (
    <div>
        <main className="">
            {appstatic?.map((data, index) => (<>
                <section key={index} className="">
                    <DtaMain 
                        // dtamaindata={data?.choicemainrender()?.dtamaindata}
                        dtamainstatic={data?.choicemainrender()?.dtamainstatic} >

                        <input hidden ref={choicemainref} value={ choicemainstate } />
                        <button className="w-[70px] flex justify-center  m-h5  l-button shadow-md" >
                            {choicemainstate}
                        </button>

                    </DtaMain>
                </section>
            </>
            ))}
        </main>
    </div>
  )
}
