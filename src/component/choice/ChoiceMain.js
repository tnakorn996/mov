import React, { useContext, useEffect, useState } from 'react'

import { workoutul } from '../../content/content'
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
        appstate,

        choicemainstate, setchoicemainstate,

    } = useContext(Context)
    const location = useLocation()
    // console.log('location', location)
    const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const [choicemainbool, setchoicemainbool] = useState(true)
    // console.log('splitstaticthree', splitstaticthree)

    const workoutlabel = [
        {
            choicemainindex: 0,
            choicemainhref: `/weight/weightindex/${splitstaticthree}`,
            choicemaindatatwo: workoutul.filter(data => data.breadid === splitstaticthree),
            // choicemaindata: () => {
            //     return <ZoomMain zoommainstatic={{zoommainid: 'workoutformtwo'}} />
            // }
        }
    ]

    const choicemain = [
        {
            choicemainid: 'workoutlabel',
            choicemainref: workoutlabel,
        },
    ]

    const [appstatic, setappstatic] = useApp(choicemain, choicemainstatic.choicemainid, choicemainstatic.choicemainindex, splitstaticthree)
// console.log('appstatic', appstatic)
// console.log('splitstaticthree', splitstaticthree)
    useEffect(() => {
        if(appstatic) {
            appstatic?.map((data) => (
                    setchoicemainstate(data?.choicemaindatatwo[0]?.breaddata[0]?.breadhead)
            ))
        }
    }, [appstatic])

    // console.log('choicemainstate', choicemainstate)
    
  return (
    <div>
        <main className="">
            {/* <select ref={choicemainref} className="p-[15px] w-full flex justify-center text-center  appearance-none l-h5 rounded-full font-medium">
                {appstatic?.map(data => (<>
                    {data?.choicemaindata()[0]?.breaddata?.map(dat => (<>
                    <option value={dat?.breadhead} className="">{dat?.breadbody}</option>
                    </>))}
                </>))}
            </select> */}


            {appstatic?.map((data, index) => (<>
            {/* <section className={`hidden fixed top-0 left-0 w-screen h-screen  bg-white ${choicemainbool === false && `!block`}`}>
                <figure className="h-[90vh]">
                    {data?.choicemaindata()}
                </figure>
                <figure className="">
                    <SheetMain>
                    <button onClick={() => {
                        setchoicemainbool(!choicemainbool)
                    }} className="w-full h-[5vh]">CANCLE</button>
                    </SheetMain>
                </figure>
            </section> */}
            <section key={index} className="">
                <DtaMain 
                dtamaindata={{spreadhref: data?.choicemainhref}}
                dtamainstatic={{dtamainid: 'weightiframe', dtamainindex: 0}} >
                    <input hidden ref={choicemainref} value={ choicemainstate } />
                    <button className="w-[70px] flex justify-center  m-h5  l-button shadow-md" >
                        {choicemainstate}
                    </button>
                </DtaMain>
            </section>
            </>))}
        </main>
    </div>
  )
}
