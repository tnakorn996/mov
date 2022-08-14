import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { RiFireLine, RiMailOpenLine, RiMoreLine, RiTimer2Line } from 'react-icons/ri'
import { motion } from 'framer-motion'

import { achievementul, appul, articleul, clubul, workoutul } from '../../content/content'
import { Context } from '../../context/context'
import MessageForm from '../../page/message/MessageForm.tsx'
import CtaMain from '../../component/cta/CtaMain'
import FieldMain from '../../component/field/FieldMain'
import PtaMain from '../../component/pta/PtaMain'
import StaMain from '../../component/sta/StaMain'
import SignMain from '../../component/sign/SignMain.tsx'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../card/CardMain'
import SheetMain from '../sheet/SheetMain'
import ScreenMain from '../screen/ScreenMain.tsx'
import AvaMain from '../ava/AvaMain.tsx'
import DtaMain from '../../component/dta/DtaMain.tsx'
import BadgeMain from '../badge/BadgeMain'
import ChipMain from '../chip/ChipMain.tsx'

export default function PostMain({
  postmainstatic,
  postmaindata,
  postmainstyle,

}) {

  const {
    fieldmainstate,
    postmainstate,
    signmainstate,
    setchoicemainstate, choicemainstate,

    authstate,
    appdl,
    userdl,
    taskdl,
    ticketdl,
    awarddl,
    messagedl,

  } = useContext(Context)
  // console.log('choicemainstate', choicemainstate)
  const navigate = useNavigate()
  const location = useLocation()
  // const param = useParams()
  const [splitstatictwo, setsplitstatictwo] = useSplit(2)
  const [splitstaticthree, setsplitstaticthree] = useSplit(3)

  function postMainRender() {
      window.history.replaceState(null, "", location.pathname)
  }

  const appaddress = [
    {
      postmainindex: 0,
      postmainrender: () => {
        const ref = [postmaindata]
        return appAddressRender({
            data: ref
          })
      },
    },
     {
      postmainindex: 1,
      postmainrender: () => {
        //  const array = []
        //   for(const data of appdl) {
        //     if(data.spreaddata().length > 0){
        //       data.spreaddata().forEach(dat => {
        //         array.push({
        //           spreadicon: data.spreadicon, ...dat
        //         })
        //       })
        //     }
        //   }
        //   const filter = array.filter(data => data.spreadidtwo === splitstaticthree)
        //   return appAddressRenderTwo({
        //     data: filter,
        //     signmainstate: signmainstate,
        //     navigate: () => {postMainRender()},
        // })
          return appAddressRenderTwo({
            // data: filter,
            signmainstate: signmainstate,
            navigate: () => {postMainRender()},
        })
      },
    },
  ]

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
    },
    {
      postmainindex: 2,
      postmainrender:() => {
        // const ref = userdl[1]?.spreaddata.filter(data => data.userid === splitstaticthree)
        return userAddressRenderThree({
          data: postmaindata,
        })
      }  
    }
  ]

  const contractaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = [postmaindata]
        return ref.map(data => (<>
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
        const ref = workoutul?.filter(data => data?.breadid === splitstaticthree)
          return ref.map(data => (<>
          <WorkoutAddressRenderTwo
          data={data} />
        </>))
      }  
    },
    {
      postmainindex: 2,
      postmainrender:() => {
        const ref = [postmaindata]
          return ref.map(data => 
            workoutAddressRenderThree({
              data: data,
              choicemainstate: choicemainstate,
              navigate: () => {
                setchoicemainstate(data?.breadhead)
              }
            })
        )
      }  
    },
  ]

  const taskaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = [Object.assign(postmaindata, workoutul.filter(data => [postmaindata].some(dat => dat.workoutid === data.breadid))[0])]
        // if(ref.length > 0){
        //  return ref.map(data => (<>
        //   <TaskAddressRender 
        //     data={data}
        //     props={{
        //       navigate: () => {navigate(`/task/taskindex/${data?.breadid}`)}
        //   }} />
        //   </>))
        // } else {
        //   return null
        // }
         return ref.map(data => (<>
          <TaskAddressRender 
            data={data}
            props={{
              navigate: () => {navigate(`/task/taskindex/${data?.breadid}`)}
          }} />
          </>))
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
            // navigate: () => {navigate(`/user/userindex/${data?.userid?.userid}`)}
            navigate: `/user/userindex/${data?.userid?.userid}`

          
          }}
           />
          </>)))
      }  
    },
  ]


  const achievementaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])]
        return (
          ref.map(data => (<>
            <AchievementAddressRender
            data={data}
            props={{
              navigate: () => {navigate(`/achievement/achievementindex/${data?.breadid}`)}
            }} />
        </>)))
      }  
    },
    {
      postmainindex: 1,
      postmainrender:() => {
        const ref = achievementul?.filter(data => data?.breadid === splitstaticthree)
        return (
          ref.map(data => (<>
            <AchievementAddressRenderTwo
            data={data}
            />
        </>)))
      }  
    },
    
  ]

  const awardaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = [Object.assign(postmaindata, achievementul.filter(data => [postmaindata].some(dat => dat.achievementid === data.breadid))[0])]
        return (
          ref.map(data => (<>
            <AchievementAddressRender
            data={data}
            props={{
              navigate: () => {navigate(`/award/awardindex/${data?.breadid}`)}
            }} />
        </>)))
      }  
    },
    {
    postmainindex: 1,
     postmainrender:() => {
        const filter = awarddl[0].spreaddata?.filter(data => data?.achievementid === splitstaticthree)
        const filtertwo = achievementul?.filter(data => data.breadid === splitstaticthree)
        // console.log('filter, filtertwo, filteddrthree', filter, filtertwo, filterthree)
        if(filter.length > 0 && filtertwo.length > 0) {
        // if(filter.length > 0) {
          const assign = [Object.assign(filter[0], filtertwo[0])]
          return  assign.map(data => (<>
          <AchievementAddressRenderTwo
            data={data} />
          </>))
        } else {
          return null
        }
      }  
    },
  ]


  const articleaddress = [
    {
    postmainindex: 1,
     postmainrender:() => {
        const filter = articleul?.filter(data => data.breadid === splitstaticthree)
        if(filter.length > 0) {
          return  filter.map(data => (<>
          <ArticleAddressRenderTwo
            data={data} />
          </>))
        } else {
          return null
        }
      }  
    },
  ]

  const messageaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        // const ref = [postmaindata].filter(data => data.spreadrender().bool === true)
        const ref = [postmaindata]
          if(ref.length > 0){
            return ref.map(data => (<>
            <MessageAddressRender
            data={data}
            props={{
              // navigate: () => {navigate(data?.spreadrcender())}
              navigate: () => {navigate(data?.spreadhref)}
            }} />
          </>))
          }
      }
    },
    {
      postmainindex: 1,
      postmainrender:() => {
        const array = []
        for(const data of messagedl) {
          if(data.spreaddata().length > 0){
            data.spreaddata().forEach(dat => {
              array.push({
                spreadicon: data.spreadicon, ...dat
              })
            })
          }
        }
        const filter = array.filter(data => data.spreadidtwo === splitstaticthree)
        return messageAddressRenderTwo({
          data: filter,
          navigate: () => {postMainRender()}
        })
      }
    },
  ]

  const searchaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        // const ref = [postmaindata]
        return searchAddressRender()
      }  
    },
  ]
// console.log('messagedl', messagedl)

  const postmain = [
    {
      postmainid: 'appaddress',
      postmainref: appaddress,
    },

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

    {
      postmainid: 'achievementaddress',
      postmainref: achievementaddress,
    },
    {
      postmainid: 'awardaddress',
      postmainref: awardaddress,
    },

    {
      postmainid: 'articleaddress',
      postmainref: articleaddress,
    },

    {
      postmainid: 'messageaddress',
      postmainref: messageaddress,
    },
    {
      postmainid: 'searchaddress',
      postmainref: searchaddress,
    },


  ]

  const [appstatic, setappstatic] = useApp(postmain, postmainstatic.postmainid, postmainstatic.postmainindex, splitstatictwo, splitstaticthree, postmaindata, choicemainstate)

  return (
    <div>
        <main className="">
             <section className={postmainstyle && postmainstyle.section}>
              {appstatic?.map(data => (<>
              <ScreenMain>
                  {data?.postmainrender()}
              </ScreenMain>
              </>))}
            </section>
        </main>
    </div>
  )
}

  export function appAddressRender({data, props}) {
    return (
      <div className="">
        <section className="">
        {data?.map(data => (<>
        <article className="h-[10vh]">
          <Link to={data?.breadaction}>
          <CardMain>
            <button className="w-full flex flex-row gap-2 justify-center items-center  m-h5 first-letter:uppercase">
              {data?.breadicon}
              {data?.breadtitle}
              {(data?.breadid === 'achievementmain') &&  <AvaMain><span className="px-[5px]  l-h1">NEW</span></AvaMain>}
              {(data?.breadid === 'messagemain') &&  <BadgeMain badgemainstatic={{badgemainid: 'messagespan', badgemainindex: 0}}  />}
            </button>
          </CardMain>
          </Link>
        </article>
        </>))}
        </section>
      </div>
    )
  }
  
  export function appAddressRenderTwo({data, navigate, signmainstate}) {
    // console.log('data', data)
    // console.log('signmainstate', signmainstate)
    return (
      <div>
        {/* {data?.map(data => (<> */}
        <section className="">
           <SignMain signmainstatic={{
              signmainid: signmainstate?.signmainid, 
              signmainindex: signmainstate?.signmainindex, 
              signmaindetail: signmainstate?.signmaindetail,
              signmainaction: signmainstate?.signmainaction,
                    // signmainid: 'appimg', 
                    // signmainindex: 0, 
                    // signmaindetail: data?.spreaddetail,
                    // signmainaction: data?.spreadrender()?.navigation,
                  }} /> 
        </section>
        {/* </>))} */}
      </div>
    )
  }
  

  export function UserAddressRender({data, props}) {
    const {navigate, authstate} = props
    return (
      <div className="flex flex-row items-center justify-between" >
        <section>
          <figure className={`w-[25px] h-[25px] flex flex-col justify-center text-center  text-white rounded-full bg-gray-400`}>
            <p className="text-base  uppercase">{data?.user?.email?.slice(0, 1) || data.useremail.slice(0, 1)}</p>
          </figure>
        </section>
        {/* <section className="">
          {authstate !== null && authstate !== undefined && authstate.user.id !== data?.user?.id &&
            <StaMain stamaindata={data} stamainstatic={{stamainid: 'useriframe'}} />
            }
        </section> */}
      </div>
    )
  }

  export function UserAddressRenderTwo({data, props}) {
    const {authstate, splitstaticthree} = props
    return (
      <div>
        <section className="flex flex-col justify-center items-center">
          <CardMain>
          <figure className="w-[170px] h-[170px] flex flex-col justify-center items-center  text-white rounded-full bg-gray-400">
            <p className="text-8xl  uppercase">{data.useremail.slice(0, 1)}</p>
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

  export function userAddressRenderThree({data}) {
    // console.log('data', data)
    return (
      <div >
        <SheetMain>
        <section className='flex flex-row  justify-between items-center'>
          <div className="col-span-11 flex flex-row items-center gap-3">
            <figure className="">
            <Link to={`/user/userindex/${data?.userid}`}>
              <div className="w-[25px] h-[25px] flex justify-center items-center  text-white bg-slate-400 rounded-full">
              <p className="m-h5  uppercase">{data?.username?.slice(0, 1)}</p>
              </div>
            </Link>
            </figure>
            <figcaption className="">
              <Link to={`/user/userindex/${data?.userid}`}>
                <p className="l-h4">{`@` + data?.username ||data?.useremail}</p>
              </Link>
            </figcaption>
          </div>
          <figure className="col-span-1 flex justify-end">
              <DtaMain 
              dtamaindata={{spreadhref: `/contract/contractindex/${data?.userid}`}}  
              dtamainstatic={{
                dtamainid:'contractiframe', 
                dtamainindex: 0}} >
                  <RiMoreLine />
              </DtaMain>
          </figure>
        </section>
        </SheetMain>
      </div>
    )
  }

  export function ContractAddressRender({data, props}) {
    const {navigate} = props
    return (
      <div className="" >
        <section className="">
          <SheetMain>
            <figcaption onClick={navigate} className="w-full l-h2  cursor-pointer">
              {data?.receiverid?.useremail && <p className="">You just followed {data?.receiverid?.useremail}</p>}
              {data?.senderid?.useremail && <p className=""> {data?.senderid?.useremail} started to follow you.</p>}
            </figcaption>
          </SheetMain>
        </section>
      </div>
    )
  }

  export function WorkoutAddressRender({data, props}) {
    const {navigate} = props
    return (
    // <div>
    //     <CardMain>
    //     <figure className="relative h-[50vh] overflow-hidden">
    //         <video onClick={navigate} src={data?.breadvideo}  autoPlay={true} loop={true} >
    //         </video>
    //       {/* <img loading='lazy' src={data?.breadimage} alt="" className="" /> */}
    //       <div className="z-10 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
    //         <CardMain>
    //         <h1 className="text-xl  text-white">{data?.breadtitle}</h1>
    //         <h1 className="l-h2  text-white">With {data?.breadauthor}</h1>
    //         </CardMain>
    //         <CardMain>
    //         <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'workoutiframe'}} ptamainstyle={`text-white`} />
    //         </CardMain>
    //       </div>
    //     </figure>
    //     </CardMain>
    //   </div>
        <CardMain>
          <section className="grid grid-cols-12">
            <figure onClick={navigate}  className="col-span-3">
            <ChipMain>
              <video src={data?.breadvideo} autoPlay={true} loop={true} >
              </video>
            </ChipMain>
            </figure>
            <figcaption className="col-span-9 flex flex-row items-center justify-between">
                <CardMain>
                <h1 onClick={navigate} className="m-h5">{data?.breadtitle}</h1>
                <h1 className="l-h2">With {data?.breadauthor}</h1>
                </CardMain>
                <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'workoutiframe'}}  />
            </figcaption>
          </section>
        </CardMain>
    )
  }

  export function WorkoutAddressRenderTwo({data}) {
    return (
    <div className="">
      <section className="">
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
      </section>
      <CardMain>
        <section className="flex flex-row gap-1 justify-center">
           <CardMain>
              <p className="flex flex-row items-center gap-1  m-h4"><RiTimer2Line /> 1 month</p>
            </CardMain>
           <CardMain>
              <p className="flex flex-row items-center gap-1  m-h4"><RiFireLine /> {data?.breadpoint} XP</p>
           </ CardMain>
        </section>
      </CardMain>
    </div>
    )
  }

  export function workoutAddressRenderThree({data, navigate, choicemainstate}) {
    return (
    <div className=" ">
      <section className="">
        <motion.figure onClick={navigate} className={data.breadhead === choicemainstate && `!bg-slate-100  !duration-1000`}>
          <CardMain>
            <CardMain>
            <p className=" m-h5 uppercase">{data.breadbody}</p>
            </CardMain>
          </CardMain>
        </motion.figure>
      </section>
    </div>
    )
  }

  export function TaskAddressRender({props, data}) {
    const {navigate} = props
    return (
        // <CardMain>
        // <figure className="relative h-[50vh]">
        //   <video onClick={navigate} src={data?.breadvideo} autoPlay={true} loop={true} >
        //   </video>
        //   <div className="z-10 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
        //     <CardMain>
        //     <h1 className="text-xl  text-white">{data?.breadtitle}</h1>
        //     <h1 className="l-h2  text-white">With {data?.breadauthor}</h1>
        //     </CardMain>
        //     <CardMain>
        //     <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'workoutiframe'}} ptamainstyle={`text-white`} />
        //     </CardMain>
        //   </div>
        // </figure>
        // </CardMain>
        <CardMain>
          <section className="grid grid-cols-12">
            <figure className="col-span-3">
            <ChipMain>
              <video onClick={navigate} src={data?.breadvideo} autoPlay={true} loop={true} >
              </video>
            </ChipMain>
            </figure>
            <figcaption className="col-span-9 flex flex-row items-center justify-between">
                <CardMain>
                <h1 className="m-h5">{data?.breadtitle}</h1>
                <h1 className="l-h2">With {data?.breadauthor}</h1>
                </CardMain>
                <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'workoutiframe'}}  />
            </figcaption>
          </section>
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
         <CardMain>
        <section className="flex flex-row gap-1 justify-center">
            {/* <AvaMain> */}
           <CardMain>
                <p className="flex flex-row items-center gap-1  m-h4"><RiTimer2Line /> 1 month</p>
            </CardMain>
            {/* </AvaMain> */}
            {/* <AvaMain> */}
           <CardMain>
                <p className="flex flex-row items-center gap-1  m-h4"><RiFireLine /> {data?.breadpoint} XP</p>
           </ CardMain>
            {/* </AvaMain> */}
        </section>
          </CardMain>
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
      </div>
    )
  }

  export function ClubAddressRender({data, props}) {
    const {navigate} = props
    return (
      <CardMain>
          <ChipMain>
          <figure className="relative flex justify-center h-[30vh]  overflow-hidden">
            <img loading='lazy' src={data?.breadimage} alt="" className="min-w-full max-h-[100ch] md:min-w-full md:min-h-[100ch]" />
            <div className="z-20 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
              <CardMain>
              <h1 onClick={navigate} className="max-w-[90%] text-xl  text-white">{data?.breadtitle}</h1>
              </CardMain>
              <CardMain>
              <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'clubiframe'}}  ptamainstyle={`text-white`} />
              </CardMain>
            </div>
          </figure>
          </ChipMain>
        </CardMain>
    )
  }

  export function ClubAddressRenderTwo({data}) {
    return (
      <div className="">
        <section className="">
          <figure className="h-[65vh] flex justify-center overflow-hidden">
            <img src={data?.breadimage} alt="" className="max-w-[100ch] max-h-[100ch] md:min-w-full md:min-h-[100ch]" />
          </figure>
          <figcaption className="text-center">
          <CardMain>
            <CardMain>
            <h1 className="text-2xl  m-h6 font-medium">{data?.breadtitle}</h1>
            </CardMain>
            <h1 className="l-h5">{data?.breadsubtitle}</h1>                  
          </CardMain>
          </figcaption>
        </section>
          <CardMain>
        <section className="flex flex-row gap-1 justify-center">
            {/* <AvaMain> */}
           <CardMain>
                <p className="flex flex-row items-center gap-1  m-h4"><RiTimer2Line /> 1 month</p>
            </CardMain>
            {/* </AvaMain> */}
            {/* <AvaMain> */}
           <CardMain>
                <p className="flex flex-row items-center gap-1  m-h4"><RiFireLine /> {data?.breadpoint} XP</p>
           </ CardMain>
            {/* </AvaMain> */}
        </section>
          </CardMain>
      </div>
    )
  }

  export function TicketAddressRender({data, props}) {
    const {navigate} = props
    return (
        <CardMain>
          <ChipMain>
          <figure className="relative flex justify-center h-[30vh]  overflow-hidden">
            <img loading='lazy' src={data?.breadimage} alt="" className="min-w-full max-h-[100ch] md:min-w-full md:min-h-[100ch]" />
            <div className="z-20 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
              <CardMain>
              <h1 onClick={navigate} className="max-w-[90%] text-xl  text-white">{data?.breadtitle}</h1>
              </CardMain>
              <CardMain>
              <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'clubiframe'}}  ptamainstyle={`text-white`} />
              </CardMain>
            </div>
          </figure>
          </ChipMain>
        </CardMain>
    )
  }

  export function TicketAddressRenderTwo({data}) {
    return (
      <div className="">
        <section className="">
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
        </section>
        <CardMain>
        <section className="flex flex-row gap-1 justify-center">
            {/* <AvaMain> */}
           <CardMain>
                <p className="flex flex-row items-center gap-1  m-h4"><RiTimer2Line /> 1 month</p>
            </CardMain>
            {/* </AvaMain> */}
            {/* <AvaMain> */}
           <CardMain>
                <p className="flex flex-row items-center gap-1  m-h4"><RiFireLine /> {data?.breadpoint} XP</p>
           </ CardMain>
            {/* </AvaMain> */}
        </section>
          </CardMain>
      </div>
    )
  }

  export function TicketAddressRenderThree({data, props}) {
    const {navigate} = props
    return (
       <div className="" >
        <DtaMain dtamaindata={{spreadhref: navigate}} dtamainstatic={{dtamainid: 'useriframe', dtamainindex: 0}} >
        <section className="w-full flex flex-row items-center justify-between">
            <figcaption className="w-full  cursor-pointer">
              <p className="l-h4">{data?.userid?.username !== null ? `@` + data?.userid?.username : data?.userid?.useremail}</p>
            </figcaption>
            <figure className="">
              <p className="l-h4 uppercase">{data?.weightid}</p>
            </figure>
        </section>
        </DtaMain>
      </div>
    )
  }

  export function AchievementAddressRender({data, props}) {
    return (
      <div className="flex flex-row items-center justify-between" >
        <section>
          <CardMain>
          <AvaMain>
          <figure onClick={props.navigate} className={``}>
            <p className="p-[10px] m-h6">{data?.breadicon}</p>
          </figure>
          </AvaMain>
          </CardMain>
        </section>
        <section className="">
          <CardMain>
          <figcaption className="">{data?.breadtitle}</figcaption>
          {/* <figcaption className="">{handleDate(data?.created_at)}</figcaption> */}
          </CardMain>
        </section>
      </div>
    )
  }

  export function AchievementAddressRenderTwo({data}) {
    return (
    <div className="">
        <figure className="flex flex-col h-[65vh] items-center justify-center  bg-slate-200">
          <CardMain >
           <p className="text-9xl">{data?.breadicon}</p>
          </CardMain>
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

  // export function AchievementAddressRenderThree({data, props}) {
  //   return (
  //   <div >
  //       <section>
  //         <CardMain>
  //         <AvaMain>
  //         <figure onClick={props.navigate}>
  //           <p className="p-[10px] m-h6">{data?.breadicon}</p>
  //         </figure>
  //         </AvaMain>
  //         </CardMain>
  //       </section>
  //     </div>
  //   )
  // }

  export function ArticleAddressRenderTwo({data}) {
    // console.log('data', data)
    return (
      <div>
          <CardMain>
          <AvaMain>
              <CardMain>
              <CardMain>
              <figure className="l-h4">
                {data?.breadsubtitle}
              </figure>
              </CardMain>
              </CardMain>
          </AvaMain>
          </CardMain>
      </div>
    )
  }


  export function MessageAddressRender({data, props}) {
    const {navigate} = props
    return (
      <div>
        <section className={data?.spreadrender().booltwo && `bg-slate-100`}>
        <SheetMain>
          <article className="grid grid-cols-11">
            <section className="col-span-10">
              <figure onClick={navigate} className="l-h4  cursor-pointer">
                {data?.spreaddetail}
              </figure>
            </section>
            <section className="col-span-1 flex justify-end">
                <DtaMain dtamaindata={data} dtamainstatic={{dtamainid:'messageiframe', dtamainindex: 0}} ><RiMoreLine /></DtaMain>
            </section>
          </article>
        </SheetMain>
        </section>
      </div>
    )
  }

  export function messageAddressRenderTwo({data, navigate}) {
    // console.log('data', data)
    return (
      <div className="">
        {data?.map(data => (<>
        <section className="max-h-[60vh] grid justify-items-center bg-slate-200">
            <CardMain />
            <CardMain />
            <CardMain>
            {/* <RiMailOpenLine className="text-3xl" /> */}
            <p className="text-7xl">{data?.spreadicon}</p>
            </CardMain>
            <CardMain />
            <CardMain />
        </section>
        <section className="text-center">
          <CardMain>
            <CardMain>
              <p className="l-h5">{data?.spreaddetail}</p>
            </CardMain>
          </CardMain>
          <CardMain>
            <Link to={data?.spreadrender().navigation || `/club/clubmain`}>
              <button onClick={navigate} className="w-full  m-button uppercase">Check the link</button>
            </Link>
            <br /><br />
             <StaMain 
             stamainstatic={{ stamainid: 'messageiframe' }} 
            /> 
          </CardMain>
        </section>
        </>))}
      </div>
    )
  }

  export function searchAddressRender() {
    // const {navigate} = props
    return (
      <div className="" >
        <section className="">
          <SheetMain>
            <FieldMain fieldmainstatic={{fieldmainid: 'searchinput', fieldmainindex: 0}}  />
          </SheetMain>
        </section>
      </div>
    )
  }


export function handleDate(data) {
  // console.log('data', data)
    const slice = data.slice(0, 19) + `Z`
    // console.log('slice', slice)
        var floor = Math.floor((new Date() - slice) / 1000);
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