import React from 'react'
import CtaMain from '../../component/cta/CtaMain'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'

export default function ClubIndex() {
    
  return (
    <div>
        <main className="">
            <section className="">
                <PostMain postmainstatic={{postmainid: 'clubaddress', postmainindex: 1}} />
            </section>
        </main>
    </div>
  )
}
