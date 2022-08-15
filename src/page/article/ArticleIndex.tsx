import React from 'react'

import CtaMain from '../../component/cta/CtaMain'
import CardMain from '../../layout/card/CardMain'
import PostMain from '../../layout/post/PostMain'
import StatMain from '../../component/stat/StatMain'
import StaMain from '../../component/sta/StaMain'
import SheetMain from '../../layout/sheet/SheetMain'

export default function ArticleIndex() {
    
  return (
    <div>
        <main className="">
            <section className="">
              <CardMain children={undefined} />
              <CardMain children={undefined} />
                <PostMain 
                      postmainstatic={{ 
                        postmainid: 'articleaddress', 
                        postmainindex: 0 }} 
                      postmaindata={undefined} 
                      postmainstyle={undefined} />
            </section>
            <section className="">
              <SheetMain>
                <StaMain 
                    stamainstatic={{ stamainid: 'messageiframe' }} 
                    stamaindata={undefined} 
                    stamainstyle={undefined}  
                    /> 
              </SheetMain>
            </section>
        </main>
    </div>
  )
}
