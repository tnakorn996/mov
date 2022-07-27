import React from 'react'
import CtaMain from '../../component/cta/CtaMain'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import SheetMain from '../../layout/sheet/SheetMain'

export default function UserIndex() {

  return (
    <div>
        <main className="">
            <section className="">
                <PostMain postmainstatic={{postmainid: 'useraddress', postmainindex: 1}} />
            </section>
            <section className="">
              <CardMain>
                <CtaMain ctamainstatic={{ctamainid: 'userembed', ctamainindex: 0}} />
              </CardMain>
            </section>
        </main>
    </div>
  )
}
