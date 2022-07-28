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
      <main className="">
        <section className="">
                  <CardMain />
                <CardMain />
          <FeedMain feedmainstatic={{feedmainid: 'taskarea', feedmainindex: null}} />
        </section>
      </main>
        
    </div>
  )
}

// <main className="">
//             <section className="">
//             {taskdl?.map(data => (<>
//               {data?.spraddata?.map(dat => (<>
//               <CardMain>
//                 <article onClick={() => {
//                   navigate(`/task/taskform/${dat?.taskid}`)
//                 }}  className="">
//                 {/* <h1 className="">{data?.taskid}</h1> */}
//                 <p className="">{dat?.workid}</p>
//                 <p className="">{dat?.emojiid}</p>
//                 </article>
//               </CardMain>
//               </>))}
//             </>))}
//             </section>
//         </main>