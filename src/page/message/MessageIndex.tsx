import React from 'react'

import StaMain from '../../component/sta/StaMain'
import StatMain from '../../component/stat/StatMain'
import PostMain from '../../layout/post/PostMain'

export default function MessageIndex() {
  return (
    <div>
        <main className="">
            <section className="">
              <PostMain postmainstatic={{
                postmainid: 'messageaddress',
                postmainindex: 1
              }} 
              postmaindata={undefined} 
              postmainstyle={undefined} />
            </section>
        </main>
    </div>
  )
}
