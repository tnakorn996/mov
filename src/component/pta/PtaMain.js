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
            ptamainindex: 0,
            ptamainaction: ll,
            ptamainrender: <section className="">
                <RiBookmarkLine className={ptamainstyle && ptamainstyle} />
            </section>,
        },
        {
            ptamainindex: 1,
            ptamainaction: kk,
            ptamainrender: <motion.section initial={{scale: 0.5}} animate={{scale: 1}} className="duration-100">
                <RiBookmarkFill className={ptamainstyle && ptamainstyle} />
            </motion.section>,
        },
    ]

    const clubiframe = [
        {
            ptamainindex: 0,
            ptamainaction: ll,
            ptamainrender: <section className="">
                <RiBookmarkLine className={ptamainstyle && ptamainstyle} />
            </section>,
        },
        {
            ptamainindex: 1,
            ptamainaction: kk,
            ptamainrender: <motion.section initial={{scale: 0.5}} animate={{scale: 1}} className="duration-100">
                <RiBookmarkFill className={ptamainstyle && ptamainstyle} />
            </motion.section>,
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
    ]

    useEffect(() => {
      if(ptamainstatic){
        const filter = ptamain.filter(data => data.ptamainid === ptamainstatic.ptamainid)
        const ref = Object.assign(...filter).ptamaindata
            if(ref && ref.length !== 0){
                const filtertwo = Object.assign(...filter).ptamainref.filter(data => data.ptamainindex === 1)
                setptamainrender(filtertwo)
            }
            if(ref && ref.length === 0){
                const filtertwo = Object.assign(...filter).ptamainref.filter(data => data.ptamainindex === 0)
                setptamainrender(filtertwo)
            } 
      }
    }, [ptamainstatic, ptamainstate])

    function ll() {
        const name = `mov.` + ptamainstatic.ptamainid
        const parse = JSON.parse(window.localStorage.getItem(name));
            const ref = parse || []
            ref.push(ptamaindata)
            window.localStorage.setItem(name, JSON.stringify(ref))
            setptamainstate(!ptamainstate)
    }

    function kk() {
        const name = `mov.` + ptamainstatic.ptamainid
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
