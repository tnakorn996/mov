import React from 'react'

export default function HoMain({
  homainstatic,

}) {
  const homainrender = homainstatic && homainstatic?.homaindata

  return (
    <div>
        <main className="">
          {homainstatic?.homaindata}
            <section className="">
                <figure className="">
                    
                </figure>
                <figcaption className="">

                </figcaption>
            </section>
        </main>
    </div>
  )
}
