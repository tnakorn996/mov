import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { appul, settingul } from '../../content/content'
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
        for(const data of appul.concat(settingul)){
            if(location && location.pathname === data.breadaction){
                setbreadmainrender({
                    title: data.breadtitle, subtitle: data.breadsubtitle})
            }

        }
    }, [location])

    if(typeof breadmainrender === 'undefined') return null

  return (
    <div>
        <main className="">
            <section className="">
                <CardMain>
                <h1 className="text-2xl  m-h6">{breadmainrender.title}</h1>
                {breadmainrender.subtitle && (<>
                <br />
                 <p className="l-h5">{breadmainrender.subtitle}</p>
                </>)}
                </CardMain>
            </section>
        </main>
    </div>
  )
}
