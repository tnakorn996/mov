import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { RiBookmarkFill, RiBookmarkLine } from 'react-icons/ri'

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

    const workoutiframe = [
        {
            ptamainaction: ptaMainAction,
            ptamainrender: <section className="">
                <RiBookmarkLine className={ptamainstyle && ptamainstyle} />
            </section>,
        },
        {
            ptamainaction: ptaMainActionTwo,
            ptamainrender: <motion.section initial={{scale: 0.5}} animate={{scale: 1}} className="duration-100">
                <RiBookmarkFill className={ptamainstyle && ptamainstyle} />
            </motion.section>,
        },
    ]

    const clubiframe = [
        {
            ptamainaction: ptaMainAction,
            ptamainrender: <div className="">
                <RiBookmarkLine className={ptamainstyle && ptamainstyle} />
            </div>,
        },
        {
            ptamainaction: ptaMainActionTwo,
            ptamainrender: <motion.div initial={{scale: 0.5}} animate={{scale: 1}} className="duration-100">
                <RiBookmarkFill className={ptamainstyle && ptamainstyle} />
            </motion.div>,
        },
    ]

    const themeiframe = [
        {
            ptamainaction: ptaMainAction,
            ptamainrender: <div className="">
                <RiBookmarkLine className={ptamainstyle && ptamainstyle} />
            </div>,
        },
        {
            ptamainaction: ptaMainActionTwo,
            ptamainrender: <motion.div initial={{scale: 0.5}} animate={{scale: 1}} className="duration-100">
                <RiBookmarkFill className={ptamainstyle && ptamainstyle} />
            </motion.div>,
        },
    ]

    const ptamain = [
        {
            ptamainid: 'workoutiframe',
            ptamainidtwo: 'mov.workoutiframe',
            ptamainref: workoutiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("mov.workoutiframe"))).filter(data => data.breadid === ptamaindata.breadid && data.userid === ptamaindata.userid),
        },
        {
            ptamainid: 'clubiframe',
            ptamainidtwo: 'mov.clubiframe',
            ptamainref: clubiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("mov.clubiframe"))).filter(data => data.breadid === ptamaindata.breadid && data.userid === ptamaindata.userid),
        },
        {
            ptamainid: 'themeiframe',
            ptamainidtwo: 'mov.themeiframe',
            ptamainref: themeiframe,
            ptamaindata: (JSON.parse(window.localStorage.getItem("mov.themeiframe"))).filter(data => data.breadid === ptamaindata.breadid && data.userid === ptamaindata.userid),
        },
    ]

    useEffect(() => {
      if(ptamainstatic){
        const filter = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid)
        const ref = Object.assign(...filter).ptamaindata
        const reftwo = Object.assign(...filter).ptamainref
            if(ref && ref.length !== 0){
                const filtertwo = reftwo.filter(data => reftwo.indexOf(data) === 1)
                setptamainrender(filtertwo)
            }
            if(ref && ref.length === 0){
                const filtertwo = reftwo.filter(data => reftwo.indexOf(data) === 0)
                setptamainrender(filtertwo)
            } 
      }
    }, [ptamainstatic, ptamainstate])

    function ptaMainAction() {
        const name = `mov.${ptamainstatic.ptamainid}`
        const parse = JSON.parse(window.localStorage.getItem(name));
            const ref = parse || []
            ref.push(ptamaindata)
            window.localStorage.setItem(name, JSON.stringify(ref))
            setptamainstate(!ptamainstate)
    }

    function ptaMainActionTwo() {
        const name = `mov.${ptamainstatic.ptamainid}`
        const parse = JSON.parse(window.localStorage.getItem(name)).filter(data => data.breadid !== ptamaindata.breadid && data.userid === ptamaindata.userid)
            const ref = parse || []
            window.localStorage.setItem(name, JSON.stringify(ref))
            setptamainstate(!ptamainstate)
    }

  return (
    <div>
        <main className="">
            <section className="">
                {ptamainrender && ptamainrender.map((data, index) => (<>
                    <article key={index} onClick={() => {
                        data?.ptamainaction()
                    }} className="z-20">
                        {data?.ptamainrender}
                    </article>
                </>))}
            </section>
        </main>
    </div>
  )
}
