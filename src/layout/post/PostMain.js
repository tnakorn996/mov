import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { RiCheckboxCircleLine, RiFireLine, RiMailOpenLine, RiMoreLine, RiTimer2Line } from 'react-icons/ri'
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
    userdl,
    taskdl,
    ticketdl,
    awarddl,
    messagedl,
    guidedl,

  } = useContext(Context)
  // console.log('choicemainstate', choicemainstate)
  const navigate = useNavigate()
  const location = useLocation()
  // const param = useParams()
  const [splitstatictwo, setsplitstatictwo] = useSplit(2)
  const [splitstaticthree, setsplitstaticthree] = useSplit(3)

  function postMainAction() {
      window.history.replaceState(null, "", location.pathname)
  }
  
  function postMainActionTwo(first) {
    if(typeof first === 'undefined') return null
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
        //     navigate: () => {postMainAction()},
        // })
          return appAddressRenderTwo({
            // data: filter,
            signmainstate: signmainstate,
        })
      },
    },
  ]

  const useraddress = [
    {
      postmainrender: () => {
        const ref = [postmaindata]
        return ref.map(data => (
          userAddressRender({
              data: data,
          })
        ))
      },
    },
    {
      postmainrender:() => {
        const ref = userdl[1]?.spreaddata.filter(data => data.userid === splitstaticthree)
        return ref.map(data => (
            userAddressRenderTwo({
              data: data,
              authstate: authstate,
              splitstaticthree: splitstaticthree
            })
          ))
      }  
    },
    {
      postmainrender:() => {
        // const ref = userdl[1]?.spreaddata.filter(data => data.userid === splitstaticthree)
        return userAddressRenderThree({
          data: postmaindata,
        })
      }  
    },
    {
      postmainrender:() => {
        for(const data of achievementul){
            postmaindata?.forEach(dat => {
              if(dat.achievementid === data.breadid){
                return Object.assign(dat, data)
              } 
            })
        }
        return userAddressRenderFour({
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
        return ref.map(data => (
          contractAddressRender({
            data: data,
            navigate: `/user/userindex/${data?.receiverid?.userid || data?.senderid?.userid}`
          })
      ))
      }  
    },
  ]

  const workoutaddress = [
    {
      postmainrender:() => {
      const ref = (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])]
          postMainActionTwo(ref)
          return ref.map(data => (
            workoutAddressRender({
              data: data,
              navigate: `/workout/workoutindex/${data?.breadid}`
            })
          )) 
        }  
    },
    {
      postmainrender:() => {
        const ref = workoutul?.filter(data => data?.breadid === splitstaticthree)
        postMainActionTwo(ref)
        return ref.map(data => (
          workoutAddressRenderTwo({
            data: data,
          })
        ))
      }  
    },
    {
      postmainrender:() => {
        const ref = [postmaindata]
        postMainActionTwo(ref)
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
      postmainrender:() => {
        const ref = [Object.assign(postmaindata, workoutul.filter(data => [postmaindata].some(dat => dat.workoutid === data.breadid))[0])]
        postMainActionTwo(ref)
        return ref.map(data => (
            taskAddressRender({
              data: data,
              navigate: `/task/taskindex/${data?.breadid}`
            })
        ))
      }  
    },
    {
      postmainrender:() => {
        const filter = taskdl[0].spreaddata?.filter(data => data?.workoutid === splitstaticthree)
        const filtertwo = workoutul?.filter(data => data.breadid === splitstaticthree)
        const filterthree = filtertwo[0]?.breaddata?.filter(data => data.breadhead === filter[0]?.weightid)
        // console.log('filter, filtertwo, filteddrthree', filter, filtertwo, filterthree)
        if(filter && filtertwo && filterthree
          && filter.length > 0 && filtertwo.length > 0 && filterthree.length > 0) {
        // if(filter.length > 0) {
          const assign = [Object.assign(filter[0], filtertwo[0], filterthree[0])]
          return  assign.map(data => (
            taskAddressRenderTwo({
              data:data
            })
          ))
        } 
      }  
    },
  ]

  const clubaddress = [
    {
      postmainrender:() => {
        const ref = (userdl[0].spreaddata) && [Object.assign(postmaindata, userdl[0].spreaddata[0])]
        postMainActionTwo(ref)
        return ref.map(data => (
            clubAddressRender({
              data: data,
              navigate: `/club/clubindex/${data?.breadid}`
            })
          ))
      }  
    },
    {
      postmainrender:() => {
        const ref = clubul.filter(data => data.breadid === splitstaticthree)
        postMainActionTwo(ref)
        return ref.map(data => (
          clubAddressRenderTwo({
            data: data
          })
        ))
      }  
    },
  ]

  const ticketaddress = [
    {
      postmainrender:() => {
        const ref = [Object.assign(postmaindata, clubul.filter(data => [postmaindata].some(dat => dat.clubid === data.breadid))[0])]
        postMainActionTwo(ref)
        return ref.map(data => (
            ticketAddressRender({
              data: data,
              navigate: `/ticket/ticketindex/${data?.breadid}`
            })
        ))
      }  
    },
    {
      postmainrender:() => {
        const ref = ticketdl[0]?.spreaddata?.filter(data => data.breadid === splitstaticthree)
        const reftwo = [Object.assign(ref, clubul.filter(data => ref.some(dat => dat.clubid === data.breadid))[0])]
        return reftwo.map(data => (
            ticketAddressRenderTwo({
              data: data
            })
        ))
      }  
    },
    {
      postmainrender:() => {
        const ref = [postmaindata]
        postMainActionTwo(ref)
        return ref.map((data) => (
            ticketAddressRenderThree({
              data: data,
              navigate: `/user/userindex/${data?.userid?.userid}`,
            })
          ))
      }  
    },
  ]


  const achievementaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        // const ref = [postmaindata]

        if(!Array.isArray(awarddl[0].spreaddata)) return null
        const filter = awarddl[0].spreaddata.filter(data => data.achievementid === postmaindata.breadid)
        const assign = [Object.assign(postmaindata, filter.length > 0 ? Object.assign(...filter) : null)]

        postMainActionTwo(assign)
        return assign.map(data => (
          achievementAddressRender({
            data: data,
            navigate: `/achievement/achievementindex/${data?.breadid}`
          })
        ))
      }  
    },
    {
      postmainindex: 1,
      postmainrender:() => {
        const ref = achievementul?.filter(data => data?.breadid === splitstaticthree)
        postMainActionTwo(ref)
        return ref.map(data => (achievementAddressRenderTwo({data})
        ))
      }  
    },
    
  ]

  const awardaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = [Object.assign(postmaindata, achievementul.filter(data => [postmaindata].some(dat => dat.achievementid === data.breadid))[0])]
        postMainActionTwo(ref)
        return (
          ref.map(data => (
              achievementAddressRender({
              data: data,
              navigate: `/award/awardindex/${data?.breadid}`
            })
          )))
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
          return assign.map(data => (
            achievementAddressRenderTwo({data})
          ))
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
        postMainActionTwo(filter)
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
        postMainActionTwo(ref)
          if(ref.length > 0){
            return ref.map(data => (
              messageAddressRender({
                data: data,
                navigate: data?.spreadhref
              })
            ))
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
        const filter = array.filter(data => data.spreadidtwo === splitstaticthree && data?.spreadrender()?.bool === true)
        // const filter = array.filter(data => data.spreadidtwo === splitstaticthree)
        return messageAddressRenderTwo({
          data: filter,
          navigate: () => {postMainAction()}
        })
      }
    },
  ]

  const guideaddress = [
    {
      postmainindex: 0,
      postmainrender:() => {
        const ref = [postmaindata]
        postMainActionTwo(ref)
          if(ref.length > 0){
            return ref.map(data => (
              guideAddressRender({
                data: data,
                navigate: data?.spreadhref
              })
            ))
          }
      }  
    },
    {
      postmainindex: 1,
      postmainrender:() => {
        const array = []
        for(const data of guidedl) {
          if(data.spreaddata().length > 0){
            data.spreaddata().forEach(dat => {
              array.push({
                spreadicon: data.spreadicon, ...dat
              })
            })
          }
        }
        const filter = array.filter(data => data.spreadidtwo === splitstaticthree)
        return guideAddressRenderTwo({
          data: filter,
          navigate: () => {postMainAction()}
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
      postmainid: 'guideaddress',
      postmainref: guideaddress,
    },
    {
      postmainid: 'searchaddress',
      postmainref: searchaddress,
    },


  ]

  const [appstatic, setappstatic] = useApp(postmain, postmainstatic.postmainid, postmainstatic.postmainindex, splitstatictwo, splitstaticthree, postmaindata, choicemainstate)

  if(typeof appstatic === 'undefined') return null
  for(const data of appstatic){
    if(typeof data.postmainrender() === 'undefined') return null
  }

  return (
    <div>
        <main className="">
             <section className={postmainstyle && postmainstyle.section}>
              {appstatic?.map((data, index) => (<>
              <div key={index}>
              {/* <ScreenMain> */}
                  {data?.postmainrender()}
              {/* </ScreenMain> */}
              </div>
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
        {data?.map((data, index) => (<>
        <article key={index}className="h-[10vh]">
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
  
  export function appAddressRenderTwo({signmainstate}) {
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
  
  export function userAddressRender({data}) {
  // console.log('data', data)
    return (
      <div className="flex flex-row items-center justify-between" >
        <section>
          <ChipMain>
          <figure className={`relative w-[30px] h-[30px] flex flex-col justify-center text-center  text-white bg-gray-400`}>
            <p className="text-base  uppercase">{data?.username?.slice(0, 1) || data?.username?.slice(0, 1)}</p>
            <img src={data?.userimage} alt="" className="absolute z-10 h-full w-full" />
          </figure>
          </ChipMain>
        </section>
      </div>
    )
  }

  // export function UserAddressRenderTwo({data, props}) {
  //   const {authstate, splitstaticthree} = props
  //   return (
  //     <div>
  //       <section className="flex flex-col justify-center items-center">
  //         <CardMain>
  //         <figure className="w-[170px] h-[170px] flex flex-col justify-center items-center  text-white rounded-full bg-gray-400">
  //           <p className="text-8xl  uppercase">{data.useremail.slice(0, 1)}</p>
  //         </figure>
  //         </CardMain>
  //       </section>
  //       <section className="flex flex-col justify-center text-center">
  //         <p className="l-h4">{data?.useremail}</p>
  //         <p className="l-h4">Member since {data?.created_at?.slice(0, 10)}</p>
  //       </section>
  //       <section className="">
  //         <CardMain>
  //           {authstate !== null && authstate !== undefined && authstate.user.id === splitstaticthree ?
  //           <CtaMain ctamainstatic={{ctamainid: 'userembed', ctamainindex: 0}} /> :
  //           <StaMain stamaindata={data} stamainstatic={{stamainid: 'useriframe'}}  /> }
  //         </CardMain>
  //       </section>
  //     </div>
  //   )
  // }


  export function userAddressRenderTwo({data, authstate, splitstaticthree}) {
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
        <CardMain>
        <section className='flex flex-row items-center gap-3'>
          <Link to={`/user/userindex/${data?.userid}`}>
          <figure className="">
            <ChipMain>
              <div className="relative w-[50px] h-[50px] flex justify-center items-center  bg-slate-400 text-white">
              <p className="absolute text-2xl m-h5  uppercase">{data?.username?.slice(0, 1)}</p>
              <img src={data?.userimage} alt="" className="absolute " />
              </div>
            </ChipMain>
          </figure>
          </Link>
          <div className="w-full flex flex-row justify-between items-center gap-3">
            <figcaption className="">
              <Link to={`/user/userindex/${data?.userid}`}>
                <p className="m-h4">{`@` + data?.username ||data?.useremail}</p>
              </Link>
            </figcaption>
            <figure className="">
              <DtaMain 
              dtamaindata={{spreadhref: `/contract/contractindex/${data?.userid}`}}  
              dtamainstatic={{
                dtamainid:'contractiframe', 
                dtamainindex: 0}} >
                  <RiMoreLine />
              </DtaMain>
            </figure>
          </div>
        </section>
        </CardMain>
      </div>
    )
  }


  export function userAddressRenderFour({data}) {
    // console.log('dasssssta', data)
    return (
      <div >
        <section className="w-full flex flex-row flex-wrap justify-center items-center">
        {data?.map((data, index) => (<>
        <div key={index}>
        <CardMain>
          <DtaMain 
          dtamaindata={{
            spreadhref: `/achievement/achievementindex/` + data?.breadid
          }}
          dtamainstatic={{
            dtamainid: 'achievementiframe',
            dtamainindex: 0
          }}>
          <ChipMain>
            <CardMain>
            <article className="text-3xl  m-h6">
            {data?.breadicon}
            </article>
              </CardMain>
            </ChipMain>
          </DtaMain>
        </CardMain>
        </div>
        </>))}
        </section>
      </div>
    )
  }

  export function contractAddressRender({data, navigate}) {
    return (
      <div className="" >
        <section className="">
          <SheetMain>
            <figcaption className="w-full l-h2  cursor-pointer">
              {data?.receiverid?.useremail && <p className="">You just followed 
              <Link to={navigate}>
              {data?.receiverid?.useremail}
              </Link>
              </p>}
              {data?.senderid?.useremail && <p className=""> 
              <Link to={navigate}>
              {data?.senderid?.useremail} 
              </Link>
              started to follow you.</p>}
            </figcaption>
          </SheetMain>
        </section>
      </div>
    )
  }

  export function workoutAddressRender({data, navigate}) {
    return (
  //   // <div>
  //   //     <CardMain>
  //   //     <figure className="relative h-[50vh] overflow-hidden">
  //   //         <video onClick={navigate} src={data?.breadvideo}  autoPlay={true} loop={true} >
  //   //         </video>
  //   //       {/* <img loading='lazy' src={data?.breadimage} alt="" className="" /> */}
  //   //       <div className="z-10 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
  //   //         <CardMain>
  //   //         <h1 className="text-xl  text-white">{data?.breadtitle}</h1>
  //   //         <h1 className="l-h2  text-white">With {data?.breadauthor}</h1>
  //   //         </CardMain>
  //   //         <CardMain>
  //   //         <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'workoutiframe'}} ptamainstyle={`text-white`} />
  //   //         </CardMain>
  //   //       </div>
  //   //     </figure>
  //   //     </CardMain>
  //   //   </div>
    <div>
        <CardMain>
          <section className="grid grid-cols-12">
            <figure  className="w-[90px] h-[90px] md:w-full md:h-full col-span-3">
            <Link to={navigate}>
            <ChipMain>
              <video className="w-full max-h-[100ch]" src={data?.breadvideo} autoPlay={true} loop={true} >
              </video>
            </ChipMain>
            </Link>
            </figure>
            <figcaption className="col-span-9 flex flex-row items-center justify-between">
                <CardMain>
                <Link to={navigate}>
                <h1 className="m-h5">{data?.breadtitle}</h1>
                </Link>
                <h1 className="l-h2">With {data?.breadauthor}</h1>
                </CardMain>
                <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'workoutiframe'}}  />
            </figcaption>
          </section>
        </CardMain>
      </div>
    )
  }

  export function workoutAddressRenderTwo({data}) {
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
          <CardMain>
        <motion.figure onClick={() => navigate()} className={`relative  rounded-full ${data.breadhead === choicemainstate && `!bg-slate-900 !text-white  !duration-1000`}`}>
          <CardMain>
            <CardMain>
              <div className="flex items-center ">
              {data.breadhead === choicemainstate && <RiCheckboxCircleLine className="text-6xl absolute left-3 " />} 
              <p className="w-full text-center  m-h6 uppercase">{data.breadbody}</p>
              </div>
            </CardMain>
          </CardMain>
        </motion.figure>
          </CardMain>
      </section>
    </div>
    )
  }

  export function taskAddressRender({navigate, data}) {
    return (
      <React.Fragment>
        {workoutAddressRender({navigate, data})}
      </React.Fragment>
    )
  }

  export function taskAddressRenderTwo({data}) {
    return (
      <div className="">
        {workoutAddressRenderTwo({data})}
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
                <p className="l-h5">{postMainFunction(data?.created_at)}</p>
            </figcaption>
            </CardMain>
        </section>
      </div>
    )
  }

  export function clubAddressRender({data, navigate}) {
    return (
      <CardMain>
            <Link to={navigate}>
          <ChipMain>
          <figure className="relative flex justify-center h-[30vh]  overflow-hidden">
            <img loading='lazy' src={data?.breadimage} alt="" className="min-w-full max-h-[100ch] md:min-w-full md:min-h-[100ch]" />
            <div className="z-20 absolute bottom-0 left-0 w-full flex flex-row justify-between items-center  bg-gradient-to-b from-transparent to-slate-700">
              <CardMain>
                <Link to={navigate}>
                <h1 className="max-w-[90%] text-xl  text-white">{data?.breadtitle}</h1>
                </Link>
              </CardMain>
              <CardMain>
              <PtaMain ptamaindata={data} ptamainstatic={{ptamainid: 'clubiframe'}}  ptamainstyle={`text-white`} />
              </CardMain>
            </div>
          </figure>
          </ChipMain>
            </Link>
        </CardMain>
    )
  }

  export function clubAddressRenderTwo({data}) {
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
      </div>
    )
  }

  export function ticketAddressRender({data, navigate}) {
    return (
        <div className="">
          {clubAddressRender({data, navigate})}
        </div>
    )
  }

  export function ticketAddressRenderTwo({data}) {
    return (
      <div className="">
        {clubAddressRenderTwo({data})}
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

  export function ticketAddressRenderThree({data, navigate}) {
    return (
       <div className="" >
        <section className="w-full flex flex-row items-center justify-between">
          {/* <DtaMain dtamaindata={{spreadhref: navigate}} dtamainstatic={{dtamainid: 'useriframe', dtamainindex: 0}} > */}
          <Link to={`/user/userindex/${data?.userid?.userid}`}>
            <div className="grid grid-flow-col items-center gap-3">
              <ChipMain>
              <figure className="relative h-[50px] w-[50px] flex justify-center items-center  bg-slate-300 text-white">
                <img src={data?.userid?.userimage} alt="" className="absolute z-10" />
                <p className="absolute m-h6  uppercase">{data?.userid?.username?.slice(0,1)}</p>
              </figure>
              </ChipMain>
            <figcaption className="w-full  cursor-pointer">
              <p className="m-h4">{data?.userid?.username !== null ? `@` + data?.userid?.username : data?.userid?.useremail}</p>
            </figcaption>
            </div>
          </Link>
          {/* </DtaMain> */}
            <figure className="">
              <AvaMain>
                <CardMain>
                <p className="m-h4 uppercase">{data?.weightid}</p>
                </CardMain>
              </AvaMain>
            </figure>
        </section>
      </div>
    )
  }

  export function achievementAddressRender({data, navigate}) {
    // console.log('data', data)
    return (
      <Link to={navigate}>
      <div className="w-full flex flex-row items-center justify-start" >
        <section className="">
          <CardMain>
            <ChipMain>
            <figure onClick={() => {navigate()}}>
              <p className="p-[10px] text-4xl  m-h6">{data?.breadicon}</p>
            </figure>
            </ChipMain>
          </CardMain>
        </section>
        <section className="w-full grid grid-flow-col items-center justify-between">
          <figcaption className="">{data?.breadtitle}</figcaption>
          {/* <figcaption className="">{handleDate(data?.created_at)}</figcaption> */}
          <CardMain>
            <ChipMain>
            {data?.achievementid ? (<>
            <figure className="uppercase bg-emerald-100">
            <CardMain>
            <figure className="m-h3  text-emerald-700">CLAIMED</figure>
            </CardMain>
            </figure>
            </>) : (<>
            <figure className="uppercase bg-slate-100">
            <CardMain>
            <figure className="m-h3  text-slate-700">NOT CLAIMED</figure>
            </CardMain>
            </figure>
            </>)}
            </ChipMain>
          </CardMain>
          {/* <figcaption className="">{handleDate(data?.created_at)}</figcaption> */}
        </section>
      </div>
      </Link>
    )
  }

  export function achievementAddressRenderTwo({data}) {
    return (
    <div className="">
        <figure className="flex flex-col h-[40vh] items-center justify-center  bg-slate-200">
          <CardMain >
           <p className="text-8xl">{data?.breadicon}</p>
          </CardMain>
        </figure>
        <figcaption className="text-center">
          <CardMain >
          <CardMain>
          <h1 className="text-2xl  m-h6 font-medium">{data?.breadtitle}</h1>
          </CardMain>
          <h1 className="l-h5">{data?.breadsubtitle}</h1>                  
          </CardMain>
        </figcaption>
    </div>
    )
  }

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


  export function messageAddressRender({data, navigate}) {
    return (
      <div>
        <section className={data?.spreadrender()?.booltwo && `bg-slate-100`}>
        <SheetMain>
          <article className="grid grid-cols-12">
            <section className="col-span-1">
              <p className="">💬</p>
            </section>
            <section className="col-span-10">
              <Link to={navigate}>
              <figure className="l-h4  cursor-pointer">
                {data?.spreaddetail}
              </figure>
              </Link>
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
        {data?.map((data, index) => (<>
        <div key={index}>
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
              <button onClick={() => {navigate()}} className="w-full  m-button uppercase">Go to page</button>
            </Link>
            <br /><br />
             <StaMain 
             stamainstatic={{ stamainid: 'messageiframe' }} 
             /> 
          </CardMain>
        </section>
        </div>
        </>))}
      </div>
    )
  }

  export function guideAddressRender({data, navigate}) {
    // console.log('data', data)
    return (
       <div>
        <section className={data?.spreadrender()?.booltwo}>
        <SheetMain>
          <article className="grid grid-cols-12">
            <section className="col-span-1">
              <p className="">✔️</p>
            </section>
            <section className="col-span-10">
              <Link to={navigate}>
              <figure className="l-h4  cursor-pointer">
                {data?.spreaddetail}
              </figure>
              </Link>
            </section>
            <section className="col-span-1 flex justify-end">
                <DtaMain dtamaindata={data} dtamainstatic={{dtamainid:'guideiframe', dtamainindex: 0}} ><RiMoreLine /></DtaMain>
            </section>
          </article>
        </SheetMain>
        </section>
      </div>
    )
  }

export function guideAddressRenderTwo({data, navigate}) {
    // console.log('data', data)
    return (
      <div className="">
        {data?.map((data, index) => (<>
        <div key={index}>
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
            <Link to={data?.spreadrender().navigation || `/guide/guidemain`}>
              <button onClick={() => {navigate()}} className="w-full  m-button uppercase">Go to page</button>
            </Link>
            <br /><br />
             <StaMain 
             stamainstatic={{ stamainid: 'guideiframe' }} 
             /> 
          </CardMain>
        </section>
        </div>
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

export function postMainFunction(date) {
    var timeSince = function(date) {
      // if (typeof date !== 'object') {
      //   date = new Date(date);
      // }

      var seconds = Math.floor((new Date() - date) / 1000);
      var intervalType;

      var interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        intervalType = 'year';
      } else {
        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
          intervalType = 'month';
        } else {
          interval = Math.floor(seconds / 86400);
          if (interval >= 1) {
            intervalType = 'day';
          } else {
            interval = Math.floor(seconds / 3600);
            if (interval >= 1) {
              intervalType = "hour";
            } else {
              interval = Math.floor(seconds / 60);
              if (interval >= 1) {
                intervalType = "minute";
              } else {
                interval = seconds;
                intervalType = "second";
              }
            }
          }
        }
      }

      if (interval > 1 || interval === 0) {
        intervalType += 's';
      }

      return interval + ' ' + intervalType;
    };
    var aDay = 24 * 60 * 60 * 1000;
    return `${timeSince(timeSince(new Date(date - aDay)))} ago`
    // console.log(timeSince(new Date(Date.now() - aDay)));
    // console.log(timeSince(new Date(Date.now() - aDay * 2)));
}