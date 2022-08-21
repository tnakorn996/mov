import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri'
import { BsToggleOn, BsToggleOff } from 'react-icons/bs'

import { Context } from '../../context/context'
import FieldMain from '../field/FieldMain'
// import useApp from '../../hook/useApp'

export default function PtaMain({
    ptamainstatic,
    ptamaindata,
    ptamainstyle,

}) {
    const {
        ptamainstate, setptamainstate,

    } = useContext(Context)
    const [ptamainrender, setptamainrender] = useState()

    const name = `mov.${ptamainstatic.ptamainid}`

    const workoutiframe = [
        {
            ptamainaction: ptaMainAction,
            ptamainrender: () => {
                return  <RiBookmarkLine className={ptamainstyle && ptamainstyle} />
            } 
        },
        {
            ptamainaction: ptaMainActionTwo,
            ptamainrender: () => {
                return appIframeRender({
                    component:  <RiBookmarkFill className={ptamainstyle && ptamainstyle} />
                })
            } 
        }
    ]

    const clubiframe = [
        {
            ptamainaction: ptaMainAction,
            ptamainrender: () => {
                return <RiBookmarkLine className={ptamainstyle && ptamainstyle} />
            } 
        },
        {
            ptamainaction: ptaMainActionTwo,
            ptamainrender: () => {
                return appIframeRender({
                    component: <RiBookmarkFill className={ptamainstyle && ptamainstyle} />
                })
            } 
        },
    ]

    const ptamain = [
        {
            ptamainid: 'workoutiframe',
            ptamainidtwo: 'mov.workoutiframe',
            ptamainref: workoutiframe,
            ptamaindata: (first) => {
                return first.filter(data => data.breadid === ptamaindata.breadid && data.userid === ptamaindata.userid)
            },
            ptamaindatatwo: (first) => {
                return first.filter(data => data.breadid !== ptamaindata.breadid && data.userid === ptamaindata.userid)
            },
        },
        {
            ptamainid: 'clubiframe',
            ptamainidtwo: 'mov.clubiframe',
            ptamainref: clubiframe,
            ptamaindata: (first) => {
                return first.filter(data => data.breadid === ptamaindata.breadid && data.userid === ptamaindata.userid)
            },
            ptamaindatatwo: (first) => {
                return first.filter(data => data.breadid !== ptamaindata.breadid && data.userid === ptamaindata.userid)
            },
        },
    ]

    // console.log('postmaindata', ptamaindata)

    useEffect(() => {
      if(ptamainstatic){
        const filter = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid)
        const parse =  Object.assign(...filter).ptamaindata(JSON.parse(localStorage[`mov.${ptamainstatic.ptamainid}`]))
        // console.log('parse', parse)
        const assign = Object.assign(...filter).ptamainref
            if(parse && parse.length !== 0){
                const filtertwo = assign.filter(data => assign.indexOf(data) === 1)
                setptamainrender(filtertwo)
            }
            if(parse && parse.length === 0){
                const filtertwo = assign.filter(data => assign.indexOf(data) === 0)
                setptamainrender(filtertwo)
            } 
      }
    }, [ptamainstatic, ptamainstate])

    function ptaMainAction() {
        // const filter = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid)
        const parse = JSON.parse(localStorage[name])
        // const assign = Object.assign(...filter).ptamaindata(parse)
        parse.push(ptamaindata)

        localStorage.setItem(name, JSON.stringify(parse))
        setptamainstate(!ptamainstate)
    }

    function ptaMainActionTwo() {
        const filter = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid)
        const parse = JSON.parse(localStorage[name])
        // console.log('parse', parse)
        const assign = Object.assign(...filter).ptamaindatatwo(parse)

        localStorage.setItem(name, JSON.stringify(assign))
        setptamainstate(!ptamainstate)
    }

    ////////////////////////////////////////////////////

  return (
    <div>
        <main className="">
            <section className="">
                {ptamainrender && ptamainrender.map((data, index) => (<>
                    <article key={index} onClick={() => {
                        data?.ptamainaction()
                    }} className="z-20">
                        {data?.ptamainrender()}
                    </article>
                </>))}
            </section>
        </main>
    </div>
  )
}

export function appIframeRender({component}) {
  return (
    <div>
        <motion.section initial={{scale: 0.5}} animate={{scale: 1}} className="duration-100">
        {component}
        </motion.section>
    </div>
  )
}
