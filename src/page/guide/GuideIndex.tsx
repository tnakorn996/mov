import React from 'react'

import PostMain from '../../layout/post/PostMain'

export default function GuideIndex() {
  return (
    <div>
        <main className="">
            <section className="">
                <PostMain postmainstatic={{ postmainid: 'guideaddress', postmainindex: 1 }} postmaindata={undefined} postmainstyle={undefined} />
            </section>
        </main>
    </div>
  )
}
