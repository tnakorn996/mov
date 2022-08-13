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
        messagedl,
    } = useContext(Context)

    const taskspan = [
        {
            badgemainindex: 0,
            badgemainrender: () => {return badgemainrender(taskdl[0], 'spreaddata')}
        }
    ]

    const ticketspan = [
        {
            badgemainindex: 0,
            badgemainrender: () => { return badgemainrender(ticketdl[0], 'spreaddata')}
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
            badgemainrender: () => { return badgemainrender(favouritedl[0], 'spreaddata')}
        },
        {
            badgemainindex: 2,
            badgemainrender: () => { return badgemainrender(favouritedl[1], 'spreaddata')}
        }
    ]

    // const messagespan = [
    //     {
    //         badgemainindex: 0,
    //         badgemainrender: () => {
    //             const array = []
    //             if(!messagedl) return null
    //             for(const data of messagedl[0]?.spreaddata){
    //                 if(data.spreadrender() !== undefined){
    //                     array.push(data)
    //                 }
    //             }
    //             return array.length
    //         }
    //     },
    // ]

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
        },
        // {
        //     badgemainid: 'messagespan',
        //     badgemainref: messagespan,
        // },
    ]

    const [appstatic, setappstatic] = useApp(badgemain, badgemainstatic.badgemainid, badgemainstatic.badgemainindex, ptamainstate, fieldmainstate, messagedl)

    function badgemainrender(first, second) {
        if(second === undefined || first === undefined) return null
        return first?.[second].length
    }

  return (
    <div>
        <main className="">
            <section className="">
                {appstatic?.map(data => (<>
                    {data?.badgemainrender() !== 0 ? (<>
                        <button className={`px-[7px] flex flex-row  bg-slate-200 ${badgemainstyle?.button}`}>
                        <p className="m-h1">{data?.badgemainrender()}</p>
                        </button>
                    </>) : null}
                </>))}
                {children}
            </section>
        </main>
        {/* {badgeMainRender({appstatic, children, badgemainstyle})} */}
    </div>
  )
}


// export function badgeMainRender({
//     appstatic,
//     children,
//     badgemainstyle,

// }) {
//   return (
//     <main className="">
//             <section className="">
//                 {appstatic?.map(data => (<>
//                     {data?.badgemainrender() !== 0 ? (<>
//                         <button className={`px-[7px] flex flex-row  bg-slate-200 shadow ${badgemainstyle?.button}`}>
//                         <p className="m-h1">{data?.badgemainrender()}</p>
//                         </button>
//                     </>) : null}
//                 </>))}
//                 {children}
//             </section>
//     </main>
//   )
// }
