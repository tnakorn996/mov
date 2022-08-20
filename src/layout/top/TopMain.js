import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function TopMain({
    children

}) {
    const location = useLocation()
    const param = useParams()

    useEffect(() => {
      ll()
    }, [])

    useEffect(() => {
      if(location && location.pathname){
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})
      }
    }, [location.pathname])

    function ll(){
        if (localStorage['mov.themeiframe']) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }

        // Whenever the user explicitly chooses light mode
        // localStorage['mov.themeiframe'].themeiframeid  = 'light'

        // Whenever the user explicitly chooses dark mode
        // localStorage['mov.themeiframe'].themeiframeid  = 'dark'

        // Whenever the user explicitly chooses to respect the OS preference
        // localStorage.removeItem('mov.themeiframe')
    }
    
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
