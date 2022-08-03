import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function TopMain({
    children

}) {
    const location = useLocation()
    const param = useParams()

    useEffect(() => {
      if(location && location.pathname){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
      }
    }, [location.pathname])
    
  return (
    <div>
        <main className="">
            <section className="">
                {children}
            </section>
        </main>
    </div>
  )
}
