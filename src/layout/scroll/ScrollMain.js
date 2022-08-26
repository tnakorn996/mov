import React, { useEffect, useState } from 'react'

export default function ScrollMain({
  scrollmainstatic,
  children

}) {
    const [scrollmainoffset, setscrollmainoffset] = useState()

    useEffect(() => {
      window.addEventListener('scroll', scrollMainFunction)

      return () => window.removeEventListener('scroll', scrollMainFunction)
    }, [])

    const scrollMainFunction = () => {
        setscrollmainoffset(window.pageYOffset)
    }

  return (
        <div style={{transform: `translateY(${scrollmainoffset * (scrollmainstatic?.scrollmaintransform)}px)`}} className={`min-w-fit min-h-full md:min-w-full flex justify-center  duration-100 md:duration-[0ms] scroll-smooth `}>
            {children}
        </div>
  )
}

