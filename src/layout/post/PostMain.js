import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CtaMain from '../../component/cta/CtaMain'
import FieldMain from '../../component/field/FieldMain'
import PtaMain from '../../component/pta/PtaMain'
import StaMain from '../../component/sta/StaMain'
import { clubul, workoutul } from '../../content/content'
import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../card/CardMain'
import SheetMain from '../sheet/SheetMain'

export default function PostMain({
  postmainstatic,
  postmaindata,
  postmainstyle,

}) {

  const {
    fieldmainstate,
    postmainstate,

    authstate,
    userdl,
    taskdl,
    ticketdl,
    frienddl,

  } = useContext(Context)
  const navigate = useNavigate()
  // const [postmainstyle, setpostmainstyle] = useState()
  const [splitstatic, setsplitstatic] = useSplit(2)
  const [splitstaticthree, setsplitstaticthree] = useSplit(3)

  // useEffect(() => {
  //   if(postmainstate === true) {
  //     setpostmainstyle(`flex flex-col`)
  //   } else {
  //     setpostmainstyle(`grid grid-cols-12`)
  //   }
  // }, [postmainstate])

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

  const contractaddress = [
    {
      postmainindex: 0,
      postmainrender: <ContractAddressRender />
    },
    // {
    //   postmainindex: 1,
    //   postmainrender: <ContractAddressRenderTwo />
    // },
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
    {
      postmainindex: 2,
      postmainrender: <TicketAddressRenderThree />
    },
  ]

  const postmain = [
    {
      postmainid: 'useraddress',
      postmainref: useraddress,
    },
    {
      postmainid: 'contractaddress',
      postmainref: contractaddress,
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
      <div className="flex flex-row items-center justify-between" >
        <section>
          <CardMain>
          <figure onClick={() => {
            navigate(`/user/userindex/${data?.user?.id || data.userid}`)
          }} className={`w-[35px] h-[35px] flex flex-col justify-center text-center  text-white rounded-full bg-gray-400 ${postmainstyle?.figure}`}>
            <p className="text-xl  uppercase">{ data?.user?.email?.slice(0, 1) || data.useremail.slice(0, 1)}</p>
          </figure>
          </CardMain>
        </section>
        <section className="">
          {authstate !== null && authstate !== undefined && authstate.user.id !== data?.user?.id &&
            <CardMain>
            <StaMain stamaindata={data} stamainstatic={{stamainid: 'useriframe'}} />
            </CardMain>
            }
        </section>
      </div>
      </>))
    )
  }

  function UserAddressRenderTwo() {
    const ref = userdl[1]?.spreaddata.filter(data => data.userid === splitstaticthree)
    return (
      ref.map(data => (<>
      <div>
        <section className="flex flex-col justify-center items-center">
          <CardMain>
          <figure className="w-[70px] h-[70px] flex flex-col justify-center items-center  text-white rounded-full bg-gray-400">
            <p className="text-4xl  uppercase">{data.useremail.slice(0, 1)}</p>
          </figure>
          </CardMain>
        </section>
        <section className="flex flex-col justify-center text-center">
          <p className="l-h4">{data?.useremail}</p>
          <p className="l-h4">Member since {data?.created_at?.slice(0, 10)}</p>
        </section>
        <section className="">
          <CardMain>
            {authstate !== null && authstate !== undefined && authstate.user.id === splitstaticthree ?
            <CtaMain ctamainstatic={{ctamainid: 'userembed', ctamainindex: 0}} /> :
            <StaMain stamaindata={data} stamainstatic={{stamainid: 'useriframe'}}  /> }
          </CardMain>
        </section>
      </div>
      </>))
    )
  }

  function ContractAddressRender() {
    const ref = [postmaindata]
    return (
      ref.map(data => (<>
      <div className="" >
        <section className="">
          <SheetMain>
            <figcaption onClick={() => {
              navigate(`/user/userindex/${data?.receiverid?.userid || data?.senderid?.userid}`)
            }} className="w-full  cursor-pointer">
              {data?.receiverid?.useremail && <p className="m-h2">You just followed {data?.receiverid?.useremail}</p>}
              {data?.senderid?.useremail && <p className="m-h2"> {data?.senderid?.useremail} started to follow you.</p>}
            </figcaption>
          </SheetMain>
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
            }} autoPlay={true} loop={true} >
              <source src={data?.breadvideo} type="video/mp4"></source>
            </video>
          {/* <img loading='lazy' src={data?.breadimage} alt="" className="" /> */}
          <div className="z-10 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
            <CardMain>
            <h1 className="text-xl  text-white">{data?.breadtitle}</h1>
            <h1 className="l-h2  text-white">With {data?.breadauthor}</h1>
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
    const reftwo = taskdl[0]?.spreaddata.filter(data => data.workoutid === splitstaticthree)
    console.log('reftwo', reftwo)
    return (
      ref.map(data => (<>
        <figure className="">
            <video autoPlay={true} loop={true} >
              <source src={data?.breadvideo} type="video/mp4"></source>
            </video>
        </figure>
        <figcaption className="text-center">
        <CardMain>
          <CardMain>
          <h1 className="m-h6">{data?.breadtitle}</h1>
          </CardMain>
          <h1 className="l-h4">{data?.breadsubtitle}</h1>                  
        </CardMain>
        </figcaption>
        <figure className="">
          {(reftwo && reftwo?.length > 0) && (<>
          <CardMain>
            <CtaMain ctamainstatic={{ctamainid: 'workoutembed', ctamainindex: 0}} />
          </CardMain>
          </>)}
        </figure>
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
            <h1 className="l-h2  text-white">With {data?.breadauthor}</h1>
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
          <video autoPlay={true} loop={true} >
            <source src={data?.breadvideo} type="video/mp4"></source>
          </video>
        </figure>
        <figcaption className="text-center">
          <CardMain>
            <CardMain>
            <h1 className="m-h6">{data?.breadtitle}</h1>
            </CardMain>
            <h1 className="l-h4">{data?.breadsubtitle}</h1>                  
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

  function ClubAddressRender() {
    const ref = (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])]
    return (
      ref.map(data => (<>
        <CardMain>
        <figure className="relative flex justify-center h-[30vh]  overflow-hidden">
          <img onClick={() => {
          navigate(`/club/clubindex/${data?.breadid}`)}} loading='lazy' src={data?.breadimage} alt="" className="max-w-[100ch] max-h-full" />
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
        <figure className="h-[65vh] flex justify-center overflow-hidden">
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
        <figure className="relative flex justify-center h-[30vh]  overflow-hidden">
          <img onClick={() => {
          navigate(`/ticket/ticketindex/${data?.breadid}`)}} loading='lazy' src={data?.breadimage} alt="" className="max-w-[100ch] max-h-full" />
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
        <figure className="h-[65vh] flex justify-center overflow-hidden">
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

  function TicketAddressRenderThree() {
    const ref = [postmaindata]
    return (
      ref.map((data) => (<>
       <div className="" >
        <section className="">
            <figcaption onClick={() => {
              navigate(`/user/userindex/${data?.userid?.userid}`)
            }} className="w-full  cursor-pointer">
              <p className="m-h2">{data?.userid?.useremail}</p>
            </figcaption>
        </section>
      </div>
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
