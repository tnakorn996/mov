import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import CtaMain from '../../component/cta/CtaMain'
import FieldMain from '../../component/field/FieldMain'
import PtaMain from '../../component/pta/PtaMain'
import StaMain from '../../component/sta/StaMain'
import SignMain from '../../component/sign/SignMain.tsx'
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

  } = useContext(Context)
  const navigate = useNavigate()
  // const location = useLocation()
  // const param = useParams()
  const [splitstatictwo, setsplitstatictwo] = useSplit(2)
  const [splitstaticthree, setsplitstaticthree] = useSplit(3)

  const useraddress = [
    {
      postmainindex: 0,
      postmainrender: () => {
        const ref = [postmaindata]
        return ref.map(data => (<>
          <UserAddressRender 
          data={data} 
          props={{  
            navigate: () => {navigate(`/user/userindex/${data?.user?.id || data.userid}`)}  
          }} />
        </>))
      },
    },
    {
      postmainindex: 1,
      postmainrender:() => {
        const ref = userdl[1]?.spreaddata.filter(data => data.userid === splitstaticthree)
        return (
        ref.map(data => (<>
          <UserAddressRenderTwo 
          data={data} 
          props={{  
            authstate: authstate,
            splitstaticthree: splitstaticthree
          }} />
        </>))
        )
      }  
    }
  ]

  const contractaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = [postmaindata]
        ref.map(data => (<>
          <ContractAddressRender 
          data={data}
          props={{
            navigate: () => {navigate(`/user/userindex/${data?.receiverid?.userid || data?.senderid?.userid}`)}
          }} />
        </>))
      }  
    },
  ]

  const workoutaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
      const ref = (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])]
        return ref.map(data => (<>
            <WorkoutAddressRender 
            data={data}
            props={{
              navigate: () => { navigate(`/workout/workoutindex/${data?.breadid}`)}
            }} />
            </>))
        }  
    },
    {
      postmainindex: 1,
      postmainrender:() => {
        const ref = workoutul?.filter(data => data?.breadid === splitstaticthree && data?.breadbool === true)
        if(ref.length > 0){
          return ref.map(data => (<>
          <WorkoutAddressRenderTwo
          data={data} />
        </>))
        } else {
          return <SignMain signmainstatic={{signmainid: 'appimg', signmainindex: 0, signmaindetail: `This workout is not available at this time.`, signmainaction: `/workout/workoutmain`, signmainentitle: 'explore workout'}} />
        }
      }  
    },
  ]

  const taskaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = [Object.assign(postmaindata, workoutul.filter(data => [postmaindata].some(dat => dat.workoutid === data.breadid))[0])]
        return (
          ref.map(data => (<>
          <TaskAddressRender 
            data={data}
            props={{
              navigate: () => {navigate(`/task/taskindex/${data?.breadid}`)}
          }} />
          </>)))
      }  
    },
    {
      postmainindex: 1,
      postmainrender:() => {
        const filter = taskdl[0].spreaddata?.filter(data => data?.workoutid === splitstaticthree)
        const filtertwo = workoutul?.filter(data => data.breadid === splitstaticthree)
        const filterthree = workoutul[0]?.breaddata?.filter(data => data.breadhead === filter[0]?.weightid)
        // console.log('filter, filtertwo, filteddrthree', filter, filtertwo, filterthree)
        if(filter.length > 0 && filtertwo.length > 0 && filterthree.length > 0) {
        // if(filter.length > 0) {
          const assign = [Object.assign(filter[0], filtertwo[0], filterthree[0])]
          return  assign.map(data => (<>
          <TaskAddressRenderTwo
            data={data} />
          </>))
        } else {
          return null
          // return <SignMain signmainstatic={{signmainid: 'appimg', signmainindex: 0, signmaindetail: `This workout is not available at this time.`, signmainaction: `/workout/workoutmain`, signmainentitle: 'explore workout'}} />
        }
      }  
    },
  ]

  const clubaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])]
        return (
          ref.map(data => (<>
          <ClubAddressRender
            data={data}
            props={{
              navigate: () => {navigate(`/club/clubindex/${data?.breadid}`)}
          }} />
          </>))
        )
      }  
    },
    {
      postmainindex: 1,
      postmainrender:() => {
        const ref = clubul.filter(data => data.breadid === splitstaticthree)
        return (
          ref.map(data => (<>
          <ClubAddressRenderTwo
          data={data} />
        </>)))
      }  
    },
  ]

  const ticketaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = [Object.assign(postmaindata, clubul.filter(data => [postmaindata].some(dat => dat.clubid === data.breadid))[0])]
        return (
          ref.map(data => (<>
            <TicketAddressRender
            data={data}
            props={{
              navigate: () => {navigate(`/ticket/ticketindex/${data?.breadid}`)}
            }} />
        </>)))
      }  
    },
    {
      postmainindex: 1,
      postmainrender:() => {
        const ref = ticketdl[0]?.spreaddata?.filter(data => data.breadid === splitstaticthree)
        const reftwo = [Object.assign(ref, clubul.filter(data => ref.some(dat => dat.clubid === data.breadid))[0])]
        return (
          reftwo.map(data => (<>
            <TicketAddressRenderTwo 
            data={data}
             />
        </>)))
      }  
    },
    {
      postmainindex: 2,
      postmainrender:() => {
        const ref = [postmaindata]
        return (
          ref.map((data) => (<>
          <TicketAddressRenderThree
          data={data}
          props={{
            navigate: () => {navigate(`/user/userindex/${data?.userid?.userid}`)}
          }}
           />
          </>)))
      }  
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

  const [appstatic, setappstatic] = useApp(postmain, postmainstatic.postmainid, postmainstatic.postmainindex, splitstatictwo, splitstaticthree, postmaindata)

  return (
    <div>
        <main className="">
             <section className={postmainstyle && postmainstyle}>
              {appstatic?.map(data => (<>
                {data?.postmainrender()}
              </>))}
            </section>
        </main>
    </div>
  )
}

  export function UserAddressRender({data, props}) {
    return (
      <div className="flex flex-row items-center justify-between" >
        <section>
          <CardMain>
          <figure onClick={props.navigate} className={`w-[35px] h-[35px] flex flex-col justify-center text-center  text-white rounded-full bg-gray-400`}>
            <p className="text-xl  uppercase">{data?.user?.email?.slice(0, 1) || data.useremail.slice(0, 1)}</p>
          </figure>
          </CardMain>
        </section>
        <section className="">
          {props.authstate !== null && props.authstate !== undefined && props.authstate.user.id !== data?.user?.id &&
            <CardMain>
            <StaMain stamaindata={data} stamainstatic={{stamainid: 'useriframe'}} />
            </CardMain>
            }
        </section>
      </div>
    )
  }

  export function UserAddressRenderTwo({data, props}) {
    const {authstate, splitstaticthree} = props
    return (
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
    )
  }

  export function ContractAddressRender({data, props}) {
    const {navigate} = props
    return (
      <div className="" >
        <section className="">
          <SheetMain>
            <figcaption onClick={navigate} className="w-full  cursor-pointer">
              {data?.receiverid?.useremail && <p className="m-h2">You just followed {data?.receiverid?.useremail}</p>}
              {data?.senderid?.useremail && <p className="m-h2"> {data?.senderid?.useremail} started to follow you.</p>}
            </figcaption>
          </SheetMain>
        </section>
      </div>
    )
  }

  export function WorkoutAddressRender({data, props}) {
    const {navigate} = props
    return (
    <div>
        <CardMain>
        <figure className="relative h-[50vh] overflow-hidden">
            <video onClick={navigate} src={data?.breadvideo}  autoPlay={true} loop={true} >
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
      </div>
    )
  }

  export function WorkoutAddressRenderTwo({data}) {
    return (
    <div className="">
        <figure className="">
            <video src={data?.breadvideo} autoPlay={true} loop={true} >
            </video>
        </figure>
        <figcaption className="text-center">
        <CardMain>
          <CardMain>
          <h1 className="text-2xl  m-h6 font-medium">{data?.breadtitle}</h1>
          </CardMain>
          <h1 className="l-h4">{data?.breadsubtitle}</h1>                  
        </CardMain>
        </figcaption>
    </div>
    )
  }

  export function TaskAddressRender({props, data}) {
    const {navigate} = props
    return (
        <CardMain>
        <figure className="relative h-[50vh]">
          <video onClick={navigate} src={data?.breadvideo} autoPlay={true} loop={true} >
          </video>
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
    )
  }

  export function TaskAddressRenderTwo({data}) {
    // console.log('data', data)
    return (
      <div className="">
        <section className="">
          <video src={data?.breadvideo} autoPlay={true} loop={true} >
          </video>
        </section>
        <section className="text-center">
          <CardMain>
            <CardMain>
            <h1 className="text-2xl  m-h6 font-medium">{data?.breadtitle}</h1>
            </CardMain>
            <h1 className="l-h4">{data?.breadsubtitle}</h1>                  
          </CardMain>
        </section>
        <section className="">
            <CardMain>
            <figcaption className="flex justify-between items-center">
                <p className="m-h5">Personal Best(PB)</p>
                <p className="l-h5 truncate">{data?.breadbody}</p>
            </figcaption>
            </CardMain>
            <CardMain>
            <figcaption className="flex justify-between items-center">
                <p className="m-h5">Date created</p>
                <p className="l-h5">{handleDate(data?.created_at)}</p>
            </figcaption>
            </CardMain>
        </section>
        <section className="">
            <CardMain>
            <CtaMain ctamainstatic={{ctamainid: 'taskembed', ctamainindex: 0}} />
            </CardMain>
        </section>
      </div>
    )
  }

  export function ClubAddressRender({data, props}) {
    const {navigate} = props
    return (
        <CardMain>
        <figure className="relative flex justify-center h-[30vh]  overflow-hidden">
          <img onClick={navigate} loading='lazy' src={data?.breadimage} alt="" className="max-w-[100ch] max-h-full" />
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
    )
  }

  export function ClubAddressRenderTwo({data}) {
    return (
      <div className="">
        <figure className="h-[65vh] flex justify-center overflow-hidden">
          <img src={data?.breadimage} alt="" className="max-w-[100ch] min-h-full" />
        </figure>
        <figcaption className="text-center">
        <CardMain>
          <CardMain>
          <h1 className="text-2xl  m-h6 font-medium">{data?.breadtitle}</h1>
          </CardMain>
          <h1 className="l-h5">{data?.breadsubtitle}</h1>                  
        </CardMain>
        </figcaption>
      </div>
    )
  }

  export function TicketAddressRender({data, props}) {
    const {navigate} = props
    return (
        <CardMain>
        <figure className="relative flex justify-center h-[30vh]  overflow-hidden">
          <img onClick={navigate} loading='lazy' src={data?.breadimage} alt="" className="max-w-[100ch] max-h-full" />
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
    )
  }

  export function TicketAddressRenderTwo({data}) {
    return (
      <div className="">
        <figure className="h-[65vh] flex justify-center overflow-hidden">
          <img src={data?.breadimage} alt="" className="max-w-[100ch] min-h-full" />
        </figure>
        <figcaption className="text-center">
        <CardMain>
          <CardMain>
          <h1 className="text-2xl  m-h6 font-medium">{data?.breadtitle}</h1>
          </CardMain>
          <h1 className="l-h5">{data?.breadsubtitle}</h1>                  
        </CardMain>
        </figcaption>
      </div>
    )
  }

  export function TicketAddressRenderThree({data, props}) {
    const {navigate} = props
    return (
       <div className="" >
        <section className="">
            <figcaption onClick={navigate} className="w-full  cursor-pointer">
              <p className="m-h2">{data?.userid?.useremail}</p>
            </figcaption>
        </section>
      </div>
    )
  }

export function handleDate(data) {
    // console.log('data', data)
        var floor = Math.floor((new Date() - data) / 1000);
        // console.log('floor', floor)
        var interval = floor / 31536000;
        if (interval > 1) {
            return Math.floor(interval) + " years";
        }
        interval = floor / 2592000;
        if (interval > 1) {
            return Math.floor(interval) + " months";
        }
        interval = floor / 86400;
        if (interval > 1) {
            return Math.floor(interval) + " days";
        }
        interval = floor / 3600;
        if (interval > 1) {
            return Math.floor(interval) + " hours";
        }
        interval = floor / 60;
        if (interval > 1) {
            return Math.floor(interval) + " min";
        }
        return Math.floor(floor) + " seconds";
    }