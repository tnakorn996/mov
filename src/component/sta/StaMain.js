import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri'
import { useParams } from 'react-router-dom'

import { Context } from '../../context/context'
import FieldMain from '../field/FieldMain'
// import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'

export default function StaMain({
    stamainstatic,

}) {
    const {
        appstate,
        fieldmainstate,
        dtamainstate,

        contractdl,
        textdl,
        questdl,

    } = useContext(Context)
    const param = useParams()
    // const url = (new URL(window.location)).pathname
    const [splitstatic, setsplitstatic] = useSplit(1)
    const [splitstatictwo, setsplitstatictwo] = useSplit(2)
    const [splitstaticthree, setsplitstaticthree] = useSplit(3)

    const [stamainrender, setstamainrender] = useState()

    // function staMainAction(first) {
    //     if(!first || !Object.assign(...first).spreaddata) return null
    //     return Object.assign(...first).spreaddata.filter(data => 
    //         data.receiverid.userid === param.userid
    //         || data.spreadidtwo === url)
    // }

    const useriframe = [
        {
            stamainrender: () => {
                return <FieldMain fieldmainstatic={{fieldmainid: 'contractinput', fieldmainindex: 0}} />
            }
        },
        {
            stamainrender: () => {
                return <FieldMain fieldmainstatic={{fieldmainid: 'contractinput', fieldmainindex: 1}} fieldmainstyle={{button: `!l-button`}} />
            }
        },
    ]

    const messageiframe = [
        {
            stamainrender: () => {
                return <FieldMain fieldmainstatic={{fieldmainid: 'textinput', fieldmainindex: 0}} fieldmainstyle={{button: `!l-button`}} />
            }
        },
        {
            stamainrender: () => {
                return <FieldMain fieldmainstatic={{fieldmainid: 'textinput', fieldmainindex: 1}} fieldmainstyle={{button: `!l-button`}} />
            }
        },
    ]

    const guideiframe = [
        {
            stamainrender: () => {
                return <FieldMain fieldmainstatic={{fieldmainid: 'questinput', fieldmainindex: 0}} fieldmainstyle={{button: `!l-button`}} />
            }
        },
        {
            stamainrender: () => {
                return <FieldMain fieldmainstatic={{fieldmainid: 'questinput', fieldmainindex: 1}} fieldmainstyle={{button: `!l-button`}} />
            }
        },
    ]

    const stamain = [
        {
            stamainid: 'useriframe',
            stamainref: useriframe,
            stamaindata: () => {
                return contractdl && contractdl[0]?.spreaddata?.filter(data => data.receiverid.userid === param.userid || data.receiverid.userid === splitstaticthree)
            } 
            // stamaindata: staMainAction(contractdl),
        },
        {
            stamainid: 'messageiframe',
            stamainref: messageiframe,
            stamaindata: () => {
                return textdl && textdl[0]?.spreaddata?.filter(data => data.spreadidtwo === splitstaticthree)
            } 
            // stamaindata: staMainAction(textdl),
        },
        {
            stamainid: 'guideiframe',
            stamainref: guideiframe,
            stamaindata: () => {
                return questdl && questdl[0]?.spreaddata?.filter(data => data.spreadidtwo === splitstaticthree)
            } 
            // stamaindata: staMainAction(textdl),
        },
    ]

    useEffect(() => {
        const filter = stamain.filter(data => data.stamainid === stamainstatic.stamainid)
        const ref = Object.assign(...filter).stamaindata()
        const reftwo = Object.assign(...filter).stamainref
        // console.log('ref', ref, reftwo)
        if(typeof ref === 'undefined') return null
        if(ref && ref.length !== 0){
            const filtertwo = reftwo.filter(data => reftwo.indexOf(data) === 1)
            setstamainrender(filtertwo)
        }
        if(ref && ref.length === 0){
            const filtertwo = reftwo.filter(data => reftwo.indexOf(data) === 0)
            setstamainrender(filtertwo)
        }
    }, [stamainstatic, fieldmainstate, dtamainstate, splitstaticthree])

    if(typeof stamainstatic === 'undefined') return null

  return (
    <div>
        <main className="">
            <section className="z-20">
                {stamainrender && stamainrender.map((data) => (
                    data?.stamainrender()
                ))}
            </section>
        </main>
    </div>
  )
}

// import { motion } from 'framer-motion'
// import React, { useContext, useEffect, useState } from 'react'
// import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri'
// import { useParams } from 'react-router-dom'

// import { Context } from '../../context/context'
// import CtaMain from '../cta/CtaMain'
// import FieldMain from '../field/FieldMain'
// // import useApp from '../../hook/useApp'
// import useSplit from '../../hook/useSplit'

// export default function StaMain({
//     stamainstatic,
//     stamaindata,
//     stamainstyle,

// }) {
//     const {
//         // stamainstate, setstamainstate,

//         contractdl,
//         textdl,

//     } = useContext(Context)
//     const param = useParams()
//     const [splitstaticthree, setsplitstaticthree] = useSplit(3)

//     const [stamainrender, setstamainrender] = useState()

//     const useriframe = [
//         {
//             stamainindex: 0,
//             stamainrender: () => {
//                 return staMainRender(<FieldMain fieldmainstatic={{fieldmainid: 'contractinput', fieldmainindex: 0}} />)
//             }
//         },
//         {
//             stamainindex: 1,
//             stamainrender: () => {
//                 return staMainRender(<FieldMain fieldmainstatic={{fieldmainid: 'contractinput', fieldmainindex: 1}} fieldmainstyle={{button: `!bg-white l-button`}} />)
//             }
            
//         },
//     ]

//     const messageiframe = [
//         {
//             stamainindex: 0,
//             stamainrender: () => {
//                 return staMainRender(<FieldMain fieldmainstatic={{fieldmainid: 'textinput', fieldmainindex: 0}} />)
//             }
//         },
//         {
//             stamainindex: 1,
//             stamainrender: () => {
//                 return staMainRender(<FieldMain fieldmainstatic={{fieldmainid: 'textinput', fieldmainindex: 1}} fieldmainstyle={{button: `!bg-white l-button`}} />)
//             }
            
//         },
//     ]


//     const stamain = [
//         {
//             stamainid: 'useriframe',
//             stamainref: useriframe,
//             stamaindata: (contractdl[0].spreaddata).filter(data => data.receiverid.userid === splitstaticthree),
//         },
//         {
//             stamainid: 'messageiframe',
//             stamainref: messageiframe,
//             stamaindata: (textdl[0].spreaddata).filter(data =>  data.spreadidtwo === splitstaticthree),
//         },
//     ]

//     useEffect(() => {
//       if(stamainstatic){
//         const filter = stamain.filter(data => data.stamainid === stamainstatic.stamainid)
//         const ref = filter[0].stamaindata
//             if(ref && ref.length !== 0){
//                 const filtertwo = filter[0].stamainref.filter(data => data.stamainindex === 1)
//                 setstamainrender(filtertwo)
//                 // setstamainstate(true)
//             }
//             if(ref && ref.length === 0){
//                 const filtertwo = filter[0].stamainref.filter(data => data.stamainindex === 0)
//                 setstamainrender(filtertwo)
//                 // setstamainstate(false)
//             } 
//       }
//     }, [stamainstatic])

//   return (
//     <div>
//         <main className="">
//             <section className="">
//                 {stamainrender && stamainrender.map(data => (<>
//                     <article className="z-20">
//                         {data?.stamainrender()}
//                     </article>
//                 </>))}
//             </section>
//         </main>
//     </div>
//   )
// }

// export function staMainRender(component) {
//   return (
//     <section className="">
//         {component}
//     </section>
//   )
// }

