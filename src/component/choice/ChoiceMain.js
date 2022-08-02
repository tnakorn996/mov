import React, { useState } from 'react'

import { workoutul } from '../../content/content'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../../layout/card/CardMain'

export default function ChoiceMain({
    choicemainref,
    choicemainstatic,

}) {
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)
    const workoutlabel = [
        {
            choicemainindex: 0,
            choicemaindata: workoutul.filter(data => data.breadid === splitstaticthree)

        }
    ]

    const choicemain = [
        {
            choicemainid: 'workoutlabel',
            choicemainref: workoutlabel,
        },
    ]

    const [appstatic, setappstatic] = useApp(choicemain, choicemainstatic.choicemainid, choicemainstatic.choicemainindex, splitstaticthree)

  return (
    <div>
        <main className="">
            <select ref={choicemainref} className="p-[15px] w-full flex justify-center text-center  appearance-none l-h5 rounded-full font-medium">
                {appstatic?.map(data => (<>
                    {data?.choicemaindata[0]?.breaddata?.map(dat => (<>
                    <option value={dat?.breadhead} className="">{dat?.breadbody}</option>
                    </>))}
                </>))}
            </select>
        </main>
    </div>
  )
}
