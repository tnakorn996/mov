import React, { useContext } from 'react'
import { Context } from '../../context/context'

import useApp from '../../hook/useApp'

export default function BadgeMain({
    badgemainstatic,
    badgemainstyle,
    children,

}) {
    const {
        ptamainstate,
        fieldmainstate,
        
        taskdl,
        ticketdl,
        favouritedl,
    } = useContext(Context)

    const taskspan = [
        {
            badgemainindex: 0,
            badgemainrender: () => {
                return taskdl[0]?.spreaddata?.length
            }
        }
    ]

    const ticketspan = [
        {
            badgemainindex: 0,
            badgemainrender: () => {
                return ticketdl[0]?.spreaddata?.length
            }
        }
    ]

    const favouritespan = [
        {
            badgemainindex: 0,
            badgemainrender: () => {
                const array = []
                for(const data of favouritedl){
                    if(data.spreaddata.length > 0){
                        array.push(data.spreaddata.length)
                    }
                }
                return array.reduce(function(a, b) { return a + b; }, 0)
            }
        },
        {
            badgemainindex: 1,
            badgemainrender: () => {return favouritedl[0]?.spreaddata?.length}
        },
        {
            badgemainindex: 2,
            badgemainrender: () => {return favouritedl[1]?.spreaddata?.length}
        }
    ]

    const badgemain = [
        {
            badgemainid: 'taskspan',
            badgemainref: taskspan,
        },
        {
            badgemainid: 'ticketspan',
            badgemainref: ticketspan,
        },
        {
            badgemainid: 'favouritespan',
            badgemainref: favouritespan,
        }
    ]

    const [appstatic, setappstatic] = useApp(badgemain, badgemainstatic.badgemainid, badgemainstatic.badgemainindex, ptamainstate, fieldmainstate)

  return (
    <div>
        <main className="">
            <section className="">
                <button className={`px-[7px] flex flex-row  bg-slate-200 ${badgemainstyle?.button}`}>
                {appstatic?.map(data => (<>
                <p className="m-h1">{data?.badgemainrender()}</p>
                </>))}
                {children}
                </button>
            </section>
        </main>
    </div>
  )
}
