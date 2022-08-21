import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri'
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'

import { Context } from '../../context/context'
import FieldMain from '../field/FieldMain'
// import useApp from '../../hook/useApp'

export default function TtaMain({
    ttamainstatic,
    ttamainstyle,

}) {
    const {
        ttamainstate, setttamainstate,

    } = useContext(Context)
    const [ttamainrender, setttamainrender] = useState()

    const name = `mov.${ttamainstatic.ttamainid}`

    const themetframe = [
        {
            ttamainaction: ttaMainAction,
            ttamainrender: () => {
                return appTframeRender({
                    component: <BsToggleOff className={ttamainstyle && ttamainstyle} />
                })
            } 
        },
        {
            ttamainaction: ttaMainActionTwo,
            ttamainrender: () => {
                return  <BsToggleOn className={ttamainstyle && ttamainstyle} />
            } 
        },
    ]

    const ttamain = [
        {
            ttamainid: 'themetframe',
            ttamainidtwo: 'mov.themetframe',
            ttamainref: themetframe,
            ttamaindata: (first: any[]) => {
                return first.filter(data => data.themeid === `dark`)
            },
            ttamainvalue: [{themeid: `dark`}],
            ttamainvaluetwo: [{themeid: `light`}],
        },
    ]

    // console.log('postmaindata', ttamaindata)
    const filter = ttamain.filter(data => data.ttamainid === ttamainstatic.ttamainid)

    useEffect(() => {
      if(ttamainstatic){
        const parse =  JSON.parse(localStorage[`mov.${ttamainstatic.ttamainid}`])
        console.log('parse', parse)
        const assign = Object.assign(...filter)
            if(parse && assign.ttamaindata(parse).length === 1){
                const filtertwo = assign.ttamainref.filter(data => assign.ttamainref.indexOf(data) === 1)
                setttamainrender(filtertwo)
            }
            console.log('first', assign.ttamaindata(parse))
            if(parse && assign.ttamaindata(parse).length === 0){
                const filtertwo = assign.ttamainref.filter(data => assign.ttamainref.indexOf(data) === 0)
                setttamainrender(filtertwo)
            } 
      }
    }, [ttamainstatic, ttamainstate])

    function ttaMainAction() {
        const assign = Object.assign(...filter)

        localStorage.setItem(name, JSON.stringify(assign.ttamainvalue))
        setttamainstate(!ttamainstate)
    }

    function ttaMainActionTwo() {
        const assign = Object.assign(...filter)

        localStorage.setItem(name, JSON.stringify(assign.ttamainvaluetwo))
        setttamainstate(!ttamainstate)
    }

  return (
    <div>
        <main className="">
            <section className="">
                {ttamainrender && ttamainrender.map((data, index) => (<>
                    <article key={index} onClick={() => {
                        data?.ttamainaction()
                    }} className="z-20 text-3xl">
                        {data?.ttamainrender()}
                    </article>
                </>))}
            </section>
        </main>
    </div>
  )
}

export function appTframeRender({component}) {
  return (
    <div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  className="duration-100">
        {component}
        </motion.div>
    </div>
  )
}
