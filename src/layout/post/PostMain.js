import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PtaMain from '../../component/pta/PtaMain'
import { clubul, workoutul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../card/CardMain'

export default function PostMain({
  postmainstatic,
  postmaindata,

}) {

  const {
    fieldmainstate,
    postmainstate,

    userdl,

  } = useContext(Context)
  const [postmainstyle, setpostmainstyle] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if(postmainstate === true) {
      setpostmainstyle(`flex flex-col`)
    } else {
      setpostmainstyle(`grid grid-cols-12`)
    }
  }, [postmainstate])
  
  const useraddress = [
    {
      postmainindex: 0,
      postmaindata: [postmaindata]
    }
  ]

  const workoutaddress = [
    {
      postmainindex: 0,
      // postmaindata: [postmaindata]
      postmaindata: (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])],

    }
  ]

  const taskaddress = [
    {
      postmainindex: 0,
      postmaindata: [Object.assign(postmaindata, workoutul.filter(data => [postmaindata].some(dat => dat.workoutid === data.breadid))[0])]
    }
  ]

  const clubaddress = [
    {
      postmainindex: 0,
      // postmaindata: [postmaindata],
      postmaindata: (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])],
    }
  ]

  const ticketaddress = [
    {
      postmainindex: 0,
      postmaindata: [Object.assign(postmaindata, clubul.filter(data => [postmaindata].some(dat => dat.clubid === data.breadid))[0])]
    }
  ]
  
  const postmain = [
    {
      postmainid: 'useraddress',
      postmainref: useraddress,
    },
        {
      postmainid: 'workoutaddress',
      postmainref: workoutaddress,
    },
    {
      postmainid: 'taskaddress',
      postmainref: taskaddress,
    },
    {
      postmainid: 'clubaddress',
      postmainref: clubaddress,
    },
    {
      postmainid: 'ticketaddress',
      postmainref: ticketaddress,
    },
  ]

  const [appstatic, setappstatic] = useApp(postmain, postmainstatic.postmainid, postmainstatic.postmainindex, fieldmainstate)
  const [splitstatic, setsplitstatic] = useSplit(2)

  // useEffect(() => {
  //   if(splitstatic && splitstatic.includes('index')) {
  //     console.log('tassy')
  //   }
  // }, [splitstatic])
  
  return (
    <div>
        <main className="">
            <section className={postmainstyle && postmainstyle}>
              {appstatic?.map(data => (<>
                {data?.postmaindata?.map(dat => (<>

                  {splitstatic && splitstatic.includes('main') && (<>
                  <CardMain>
                  <figure onClick={() => {
                    // postmainstatic.postmainid === 'useraddress' && navigate(`/user/userform/${dat?.userid}`)
                    postmainstatic.postmainid === 'workoutaddress' && navigate(`/workout/workoutindex/${dat?.breadid}`)
                    postmainstatic.postmainid === 'taskaddress' && navigate(`/task/taskindex/${dat?.taskid}`)
                    postmainstatic.postmainid === 'clubaddress' && navigate(`/club/clubindex/${dat?.breadid}`)
                    postmainstatic.postmainid === 'ticketaddress' && navigate(`/ticket/ticketindex/${dat?.ticketid}`)
                  }} className="relative">
                  {dat?.breadvideo && (<>
                    <video loading='lazy' autoPlay={true} loop={true} src={dat?.breadvideo}></video>
                  </>)}
                    <img loading='lazy' src={dat?.breadimage} alt="" className="" />
                    <h1 className="m-h3">{dat?.user?.email}</h1>
                    <div className="absolute bottom-0 left-0 w-full  bg-gradient-to-b from-transparent to-slate-700">
                      <CardMain>
                      <h1 className="max-w-[90%] text-3xl  text-white">{dat?.breadtitle}</h1>
                      </CardMain>
                    </div>
                    <div className="absolute top-0 right-0 w-full">
                      {postmainstatic.postmainid === 'workoutaddress' && <PtaMain ptamaindata={dat} ptamainstatic={{ptamainid: 'workoutiframe'}} />}
                    </div>
                  </figure>
                  </CardMain>
                  </>)}

                  {splitstatic && splitstatic.includes('index') && (<>
                  
                    <figure className="">
                    {dat?.breadvideo && (<>
                      <video loading='lazy' autoPlay={true} loop={true} src={dat?.breadvideo}></video>
                    </>)}
                    </figure>
                    <figcaption className="text-center">
                    <CardMain>
                      <CardMain>
                      <h1 className="m-h6">{dat?.breadtitle}</h1>
                      </CardMain>
                      <h1 className="l-h5">{dat?.breadsubtitle}</h1>                  
                    </CardMain>
                    </figcaption>
                  </>)}

                </>))}
              </>))}
            </section>
        </main>
    </div>
  )
}
