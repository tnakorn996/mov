import React, { useEffect } from 'react'

import TabMain from '../../layout/tab/TabMain'

export default function SearchMain() {

  return (
    <div>
        <main className="">
            <section className="h-[80vh]">
                <TabMain 
                  tabmainstatic={{ 
                    tabmainid: 'searchfieldset', 
                    tabmainindex: null 
                  }} 
                    tabmainref={undefined} 
                    tabmainstyle={undefined} />
            </section>
        </main>
    </div>
  )
}
