import React from 'react'

import StatMain from '../../component/stat/StatMain'

export default function ImageIndex() {
    
  return (
    <div>
        <main className="">
            <section className="">
              <StatMain 
              statmainstatic={{ 
                statmainid: 'imagetable', 
                statmainindex: 0 }} 
                statmaindata={undefined} 
                statmaindatatwo={undefined} />
            </section>
        </main>
    </div>
  )
}
