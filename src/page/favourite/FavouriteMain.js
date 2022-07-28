import React, { useContext, useEffect, useState } from 'react'
import AlertMain from '../../component/alert/AlertMain'
import BreadMain from '../../component/bread/BreadMain'
import FeedMain from '../../component/feed/FeedMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'
// import useAlert from '../../hook/useAlert'

export default function FavouriteMain() {
  const {

    favouritedl,

  } = useContext(Context)
  const [alertmainstate, setalertmainstate] = useState()

  useEffect(() => {
    if(favouritedl && favouritedl[0].spreaddata.length === 0){
      setalertmainstate({
        alermainid: 'workoutcaption', 
        alermainindex: 0, 
        alertmaintitle: 'No', 
        alertmainsubtitle: [{error:'noooo'}, {error: 'not good'}]})
    }
  }, [])

  return (
    <div>
        <main className="">
            <section className="">
                      <CardMain />
                <CardMain />
                <BreadMain />
              {/* <AlertMain alertmainstatic={alertmainstate && alertmainstate} /> */}
              <FeedMain feedmainstatic={{feedmainid: 'favouritearea', feedmainindex: 0}} />
              <FeedMain feedmainstatic={{feedmainid: 'favouritearea', feedmainindex: 1}} />
            </section>
        </main>
    </div>
  )
}
