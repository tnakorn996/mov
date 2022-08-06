import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import FeedMain from '../../component/feed/FeedMain';

import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain';

export default function TaskMain() {
  const {
    // taskdl,

  } = useContext(Context)

  // const parsetaskuserid = JSON.parse(window.localStorage.getItem("mov.taskuserid"));

  return (
    <div>
      <main>
        <section className="">
                  <CardMain />
                <CardMain />
          <FeedMain feedmainstatic={{feedmainid: 'taskarea', feedmainindex: null}} />
        </section>
      </main>
        
    </div>
  )
}
