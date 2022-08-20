import React from 'react'

import CardMain from '../../../layout/card/CardMain'
import PostMain from '../../../layout/post/PostMain'

export default function ThemeForm() {

  return (
    <div>
        <main className="">
            <section className="">
                <CardMain children={undefined} />
                <CardMain children={undefined} />
            </section>
            <section className="">
                {/* <PostMain postmainstatic={{postmainid:'themeaddress', postmainindex: 0 }} /> */}
            </section>
        </main>
    </div>
  )
}
