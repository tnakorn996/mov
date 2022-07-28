import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { appul } from '../../content/content'
import CardMain from '../../layout/card/CardMain'

export default function BreadMain() {
    const location = useLocation()

    const [breadmainrender, setbreadmainrender] = useState()

    // const appa = [
    //     {
    //         breadmainindex: 0,
    //         breadmainrender: '',
    //     }
    // ]
    // const breadmain = [
    //     {
    //         breadmainid: 'appa',
    //         breadmainref: appa,
    //     }
    // ]

    useEffect(() => {
        for(const data of appul){
            if(location && location.pathname === data.breadaction){
                setbreadmainrender(data.breadtitle)
            }

        }
    }, [location])

  return (
    <div>
        <main className="">
            <section className="">
                <CardMain>
                <h1 className="text-2xl">{breadmainrender && breadmainrender}</h1>
                </CardMain>
            </section>
        </main>
    </div>
  )
}
