import React from 'react'

import StatMain from '../../component/stat/StatMain'
import PostMain from '../../layout/post/PostMain'

export default function AppIndex() {
    
  return (
    <div>
        <main className="">
            <section className="">
                <PostMain 
                postmainstatic={{ 
                  postmainid: 'appaddress', 
                  postmainindex: 1 }} 
                postmaindata={undefined} 
                postmainstyle={undefined} />
            </section>
        </main>
    </div>
  )
}
