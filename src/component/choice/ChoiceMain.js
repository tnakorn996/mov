import React, { useContext, useEffect, useState } from 'react'

import { workoutul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../../layout/card/CardMain'
import SheetMain from '../../layout/sheet/SheetMain'
import ZoomMain from '../../layout/zoom/ZoomMain'

export default function ChoiceMain({
    choicemainref,
    choicemainstatic,

}) {
    const {

        choicemainstate, setchoicemainstate,

    } = useContext(Context)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const [choicemainbool, setchoicemainbool] = useState(true)

    const workoutlabel = [
        {
            choicemainindex: 0,
            choicemaindatatwo: workoutul.filter(data => data.breadid === splitstaticthree),
            choicemaindata: () => {
                return <ZoomMain zoommainstatic={{zoommainid: 'workoutformtwo'}} />
            }
        }
    ]

    const choicemain = [
        {
            choicemainid: 'workoutlabel',
            choicemainref: workoutlabel,
        },
    ]

    const [appstatic, setappstatic] = useApp(choicemain, choicemainstatic.choicemainid, choicemainstatic.choicemainindex, splitstaticthree)

    useEffect(() => {
      setchoicemainstate()
    }, [])
    
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
            {appstatic?.map(data => (<>
            <section className={`hidden fixed top-0 left-0 w-screen h-screen  bg-white ${choicemainbool === false && `!block`}`}>
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
            </section>
            <section className="">
                <input ref={choicemainref} value={ choicemainstate || data?.choicemaindatatwo[0]?.breaddata[0]?.breadhead} onClick={() => {
                    setchoicemainbool(!choicemainbool)
                }} className="text-center  l-button" />
            </section>
        </>))}
        </main>
    </div>
  )
}
