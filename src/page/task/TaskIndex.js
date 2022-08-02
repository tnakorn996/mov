import React from 'react'
import StatMain from '../../component/stat/StatMain'

import PostMain from '../../layout/post/PostMain'

export default function TaskIndex() {
  return (
    <div>
      <main className="">
        <section className="">
          <PostMain postmainstatic={{postmainid: 'taskaddress', postmainindex: 1}} />
        </section>
      </main>
    </div>
  )
}
