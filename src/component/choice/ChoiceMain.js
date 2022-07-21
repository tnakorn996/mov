import React, { useState } from 'react'
import { workul } from '../../content/content'
import useApp from '../../hook/useApp'

export default function ChoiceMain({
    choicemainref,
    choicemainstatic,

}) {

    const worklabel = [
        {
            choicemainindex: 0,
            choicemaindata: [
                {
                    choicemainidtwo: 'bench',
                    choicemaintitle: 'Bench'
                },
                {
                    choicemainidtwo: 'deadlift',
                    choicemaintitle: 'Deadlift'
                },
                {
                    choicemainidtwo: 'squat',
                    choicemaintitle: 'Squat'
                },
            ],
        }
    ]

    const emojilabel = [
        {
            choicemainindex: 0,
            choicemaindata: [
                {
                    choicemainidtwo: 'one',
                    choicemaintitle: '😃'
                },
                {
                    choicemainidtwo: 'two',
                    choicemaintitle: '🥵'
                },
                {
                    choicemainidtwo: 'three',
                    choicemaintitle: '🤢'
                },
            ],
        }
    ]


    const weightlabel = [
        {
            choicemainindex: 0,
            choicemaindata: [
                {
                    choicemainidtwo: '20kg',
                    choicemaintitle: '20KG'
                },
                {
                    choicemainidtwo: '30kg',
                    choicemaintitle: '30KG'
                },
                {
                    choicemainidtwo: '40kg',
                    choicemaintitle: '40KG'
                },
                {
                    choicemainidtwo: '50kg',
                    choicemaintitle: '50KG'
                },
                {
                    choicemainidtwo: '100kg',
                    choicemaintitle: '100KG'
                },
            ],
        }
    ]

    const choicemain = [
        {
            choicemainid: 'worklabel',
            choicemainref: worklabel,
        },
        {
            choicemainid: 'emojilabel',
            choicemainref: emojilabel,
        },
        {
            choicemainid: 'weightlabel',
            choicemainref: weightlabel,
        },
    ]

    const [appstatic, setappstatic] = useApp(choicemain, choicemainstatic.choicemainid, choicemainstatic.choicemainindex)
    const choicemainrender = appstatic && appstatic

  return (
    <div>
        <main className="">
            <select ref={choicemainref} className="w-full">
                {choicemainrender?.map(data => (<>
                    {data?.choicemaindata?.map(dat => (<>
                    <option value={dat?.choicemainidtwo} className="">{dat?.choicemaintitle}</option>
                    </>))}
                </>))}
            </select>
        </main>
    </div>
  )
}
