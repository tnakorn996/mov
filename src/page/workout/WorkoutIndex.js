import React, { useEffect, useState } from 'react'

import useSplit from '../../hook/useSplit'
import { workoutul } from '../../content/content'
// import PageMain from '../../layout/page/PageMain'
import PostMain from '../../layout/post/PostMain'

export default function WorkoutIndex() {
  const [workoutindexrender, setworkoutindexrender] = useState()

  const [splitstatic, setsplitstatic] = useSplit(3)

  useEffect(() => {
    if(splitstatic){
      const filter = workoutul?.filter(data => data?.breadid === splitstatic)
      setworkoutindexrender(filter[0])
    }
  }, [splitstatic])

  return (
    <div>
        <main className="min-h-screen ">
            {/* <section className="">
              <PageMain pagemainstatic={{pagemaintitle:"ddd"}} >
              <video autoPlay={true} loop={true} src=""></video>
              </PageMain>
            </section> */}
            <section className="">
              {workoutindexrender && (<>
              <PostMain postmaindata={workoutindexrender && workoutindexrender} postmainstatic={{postmainid: 'workoutaddress', postmainindex: null}} />
              </>)}
            </section>
        </main>
    </div>
  )
}
