import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri'
import { useParams } from 'react-router-dom'

import { Context } from '../../context/context'
import CtaMain from '../cta/CtaMain'
import FieldMain from '../field/FieldMain'
// import useApp from '../../hook/useApp'

export default function StaMain({
    stamainstatic,
    stamaindata,
    stamainstyle,

}) {
    const {
        // stamainstate, setstamainstate,

        contractdl,

    } = useContext(Context)
    const param = useParams()
    const [stamainstate, setstamainstate] = useState()

    const [stamainrender, setstamainrender] = useState()

    const useriframe = [
        {
            stamainindex: 0,
            stamainrender: <section className="">
                <FieldMain fieldmaindata={stamaindata} fieldmainstatic={{fieldmainid: 'contractinput', fieldmainindex: 0}} />
            </section>,
        },
        {
            stamainindex: 1,
            stamainrender: <section className="">
                <FieldMain fieldmaindata={stamaindata} fieldmainstatic={{fieldmainid: 'contractinput', fieldmainindex: 1}} fieldmainstyle={{button: `!bg-white l-button`}} />
                {/* <CtaMain ctamainstatic={{ctamainid: 'contractembed', ctamainindex: 0}} /> */}
            </section>,
        },
    ]

    const stamain = [
        {
            stamainid: 'useriframe',
            stamainref: useriframe,
            stamaindata: (contractdl[0].spreaddata).filter(data => data.receiverid.userid === stamaindata.userid || data.receiverid.userid === param.userid),
        },
    ]

    useEffect(() => {
      if(stamainstatic){
        const filter = stamain.filter(data => data.stamainid === stamainstatic.stamainid)
        const ref = filter[0].stamaindata
            if(ref && ref.length !== 0){
                const filtertwo = filter[0].stamainref.filter(data => data.stamainindex === 1)
                setstamainrender(filtertwo)
                // setstamainstate(true)
            }
            if(ref && ref.length === 0){
                const filtertwo = filter[0].stamainref.filter(data => data.stamainindex === 0)
                setstamainrender(filtertwo)
                // setstamainstate(false)
            } 
      }
    }, [stamainstatic])

    // useEffect(() => {
    //         const filter = stamain.filter(data => data.stamainid === stamainstatic.stamainid)
    //         if(stamainstate === true){
    //             const filtertwo = filter[0].stamainref.filter(data => data.stamainindex === 1)
    //             setstamainrender(filtertwo)
    //         }
    //         if(stamainstate === false){
    //             const filtertwo = filter[0].stamainref.filter(data => data.stamainindex === 0)
    //             setstamainrender(filtertwo)
    //         } 
    // }, [stamainstate])
    // console.log('stamainstate', stamainstate)

  return (
    <div>
        <main className="">
            <section className="">
                {stamainrender && stamainrender.map(data => (<>
                    <article onClick={() => {
                        setstamainstate(!stamainstate)
                    }} className="z-20">
                        {data?.stamainrender}
                    </article>
                </>))}
            </section>
        </main>
    </div>
  )
}
