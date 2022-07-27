import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CtaMain from '../../component/cta/CtaMain'
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
    taskdl,
    ticketdl,

  } = useContext(Context)
  const navigate = useNavigate()
  const [postmainstyle, setpostmainstyle] = useState()
  const [splitstatic, setsplitstatic] = useSplit(2)
  const [splitstaticthree, setsplitstaticthree] = useSplit(3)


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
      postmainrender: <UserAddressRender />
    },
    {
      postmainindex: 1,
      postmainrender: <UserAddressRenderTwo />
    }
  ]

  const workoutaddress = [
    {
      postmainindex: 0,
      postmainrender: <WorkoutAddressRender />
      
    },
    {
      postmainindex: 1,
      postmainrender: <WorkoutAddressRenderTwo />
    },
  ]

  const taskaddress = [
    {
      postmainindex: 0,
      postmainrender: <TaskAddressRender />
    },
    {
      postmainindex: 1,
      postmainrender: <TaskAddressRenderTwo />
    },
    // {
    //   postmainindex: 2,
    //   postmainrender: <TaskAddressRenderThree />
    // },
  ]

  const clubaddress = [
    {
      postmainindex: 0,
      postmainrender: <ClubAddressRender />
    },
    {
      postmainindex: 1,
      postmainrender: <ClubAddressRenderTwo />
    },
  ]

  const ticketaddress = [
    {
      postmainindex: 0,
      postmainrender: <TicketAddressRender />
    },
    {
      postmainindex: 1,
      postmainrender: <TicketAddressRenderTwo />
    },
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

  const [appstatic, setappstatic] = useApp(postmain, postmainstatic.postmainid, postmainstatic.postmainindex, splitstaticthree)
  

  function UserAddressRender() {
    const ref = [postmaindata]
    return (
      ref.map(data => (<>
      <div>
        <figure onClick={() => {
            navigate(`/user/userindex/${data.user.id}`)
        }} className="w-[35px] h-[35px] text-center  text-white rounded-full bg-gray-400">
          <p className="text-2xl">{data.user.email.slice(0, 1)}</p>
        </figure>
      </div>
      </>))
    )
  }

  function UserAddressRenderTwo() {
    const ref = userdl[0].spreaddata
    return (
      ref.map(data => (<>
      <div>
        <section className="flex flex-col justify-center items-center">
          <CardMain>
          <figure className="w-[70px] h-[70px] flex flex-col justify-center items-center  text-white rounded-full bg-gray-400">
            <p className="text-4xl">{data.useremail.slice(0, 1)}</p>
          </figure>
          </CardMain>
        </section>
        <section className="flex flex-col justify-center text-center">
          <p className="l-h3">{data?.useremail}</p>
          <p className="l-h3">Member since {data?.created_at}</p>
        </section>
      </div>
      </>))
    )
  }
  
  function WorkoutAddressRender() {
    const ref = (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])]
    return (
        ref.map(data => (<>
        <CardMain>
        <figure className="relative h-[50vh] overflow-hidden">
          <video onClick={() => {
            navigate(`/workout/workoutindex/${data?.breadid}`)
          }} loading='lazy' autoPlay={true} loop={true} src={data?.breadvideo}></video>
          {/* <img loading='lazy' src={data?.breadimage} alt="" className="" /> */}
          <div className="z-10 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
            <CardMain>
            <h1 className="text-xl  text-white">{data?.breadtitle}</h1>
            <h1 className="l-h2  text-white">By {data?.breadauthor}</h1>
            </CardMain>
            <CardMain>
            <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'workoutiframe'}} ptamainstyle={`text-white`} />
            </CardMain>
          </div>
        </figure>
        </CardMain>
        </>))
    )
  }

  function WorkoutAddressRenderTwo() {
    const ref = workoutul?.filter(data => data?.breadid === splitstaticthree)
    return (
      ref.map(data => (<>
        <figure className="">
          <video loading='lazy' autoPlay={true} loop={true} src={data?.breadvideo}></video>
        </figure>
        <figcaption className="text-center">
        <CardMain>
          <CardMain>
          <h1 className="m-h6">{data?.breadtitle}</h1>
          </CardMain>
          <h1 className="l-h5">{data?.breadsubtitle}</h1>                  
        </CardMain>
        </figcaption>
      </>))
    )
  }

  function TaskAddressRender() {
    const ref = [Object.assign(postmaindata, workoutul.filter(data => [postmaindata].some(dat => dat.workoutid === data.breadid))[0])]
    return (
        ref.map(data => (<>
        <CardMain>
        <figure className="relative h-[50vh]">
          <video onClick={() => {
          navigate(`/task/taskindex/${data?.breadid}`)
          }} loading='lazy' autoPlay={true} loop={true} src={data?.breadvideo}></video>
          {/* <img loading='lazy' src={data?.breadimage} alt="" className="" /> */}
          <div className="z-10 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
            <CardMain>
            <h1 className="text-xl  text-white">{data?.breadtitle}</h1>
            <h1 className="l-h2  text-white">By {data?.breadauthor}</h1>
            </CardMain>
            <CardMain>
            <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'workoutiframe'}} ptamainstyle={`text-white`} />
            </CardMain>
          </div>
        </figure>
        </CardMain>
        </>))
    )
  }


  function TaskAddressRenderTwo() {
    const ref = taskdl[0].spreaddata?.filter(data => data?.breadid === splitstaticthree)
    const reftwo = [Object.assign(ref, workoutul.filter(data => ref.some(dat => dat.workoutid === data.breadid))[0])]
    return (
        reftwo.map(data => (<>
        <figure className="">
          <video loading='lazy' autoPlay={true} loop={true} src={data?.breadvideo}></video>
        </figure>
        <figcaption className="text-center">
        <CardMain>
          <CardMain>
          <h1 className="m-h6">{data?.breadtitle}</h1>
          </CardMain>
          <h1 className="l-h5">{data?.breadsubtitle}</h1>                  
        </CardMain>
        </figcaption>
        <figure className="">
          <CardMain>
          <CtaMain ctamainstatic={{ctamainid: 'taskembed', ctamainindex: 0}} />
          </CardMain>
        </figure>
      </>))
    )
  }


  // function TaskAddressRenderThree() {
  //   const ref = taskdl[1].spreaddata?.filter(data => data?.breadid === splitstaticthree)
  //   return (
  //       ref.map(data => (<>
  //       <figure className="">
  //       </figure>
  //       <figcaption className="">


  //       </figcaption>
  //     </>))
  //   )
  // }

  function ClubAddressRender() {
    const ref = (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])]
    return (
      ref.map(data => (<>
        <CardMain>
        <figure className="relative">
          <img onClick={() => {
          navigate(`/club/clubindex/${data?.breadid}`)}} loading='lazy' src={data?.breadimage} alt="" className="" />
          <div className="z-10 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
            <CardMain>
            <h1 className="max-w-[90%] text-xl  text-white">{data?.breadtitle}</h1>
            </CardMain>
            <CardMain>
            <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'clubiframe'}}  ptamainstyle={`text-white`} />
            </CardMain>
          </div>
        </figure>
        </CardMain>
        </>))
    )
  }

  function ClubAddressRenderTwo() {
    const ref = clubul.filter(data => data.breadid === splitstaticthree)
    return (
      ref.map(data => (<>
        <figure className="h-[70vh] flex justify-center">
          <img src={data?.breadimage} alt="" className="max-w-[100ch] min-h-full" />
        </figure>
        <figcaption className="text-center">
        <CardMain>
          <CardMain>
          <h1 className="m-h6">{data?.breadtitle}</h1>
          </CardMain>
          <h1 className="l-h5">{data?.breadsubtitle}</h1>                  
        </CardMain>
        </figcaption>
      </>))
    )
  }

  function TicketAddressRender() {
    const ref = [Object.assign(postmaindata, clubul.filter(data => [postmaindata].some(dat => dat.clubid === data.breadid))[0])]
    return (
      ref.map(data => (<>
        <CardMain>
        <figure className="relative">
          <img onClick={() => {
          navigate(`/ticket/ticketindex/${data?.breadid}`)}} loading='lazy' src={data?.breadimage} alt="" className="" />
          <div className="z-10 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
            <CardMain>
            <h1 className="max-w-[90%] text-xl  text-white">{data?.breadtitle}</h1>
            </CardMain>
            <CardMain>
            <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'clubiframe'}}  ptamainstyle={`text-white`} />
            </CardMain>
          </div>
        </figure>
        </CardMain>
        </>))
    )
  }


  function TicketAddressRenderTwo() {
    const ref = ticketdl[0]?.spreaddata?.filter(data => data.breadid === splitstaticthree)
    const reftwo = [Object.assign(ref, clubul.filter(data => ref.some(dat => dat.clubid === data.breadid))[0])]
    return (
      reftwo.map(data => (<>
        <figure className="h-[70vh] flex justify-center overflow-hidden">
          <img src={data?.breadimage} alt="" className="max-w-[100ch] min-h-full" />
        </figure>
        <figcaption className="text-center">
        <CardMain>
          <CardMain>
          <h1 className="m-h6">{data?.breadtitle}</h1>
          </CardMain>
          <h1 className="l-h5">{data?.breadsubtitle}</h1>                  
        </CardMain>
        </figcaption>
        <figure className="">
          <CardMain>
            <CtaMain ctamainstatic={{ctamainid:'ticketembed', ctamainindex: 0}} />
          </CardMain>
        </figure>
      </>))
    )
  }

  return (
    <div>
        <main className="">
             <section className={postmainstyle && postmainstyle}>
              {appstatic?.map(data => (<>
                {data?.postmainrender}
              </>))}
            </section>
        </main>
    </div>
  )
}
