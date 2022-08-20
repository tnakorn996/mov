import React from 'react'
import FeedMain from '../../component/feed/FeedMain'
import ThemeMain from '../../layout/theme/ThemeMain.tsx'

export default function AppMain() {

  return (
    <div>
        <main className="">
            <section className="">
              <ThemeMain>
              <FeedMain feedmainstatic={{feedmainid:'apparea', feedmainindex: 0}} />
              </ThemeMain>
            </section>
        </main>
    </div>
  )
}
