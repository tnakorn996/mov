import React, { useEffect, useState } from 'react'
import CardMain from '../../layout/card/CardMain'

import PostMain from '../../layout/post/PostMain'

export default function WorkoutIndex() {

  return (
    <div>
        <main className="min-h-screen ">
            <section className="">
              <PostMain postmainstatic={{postmainid: 'workoutaddress', postmainindex: 1}} />
            </section>
        </main>
    </div>
  )
}
