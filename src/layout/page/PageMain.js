// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import PtaMain from '../../component/pta/PtaMain'
// import { clubul, workoutul } from '../../content/content'
// import { Context } from '../../context/context'
// import useApp from '../../hook/useApp'

// export default function PageMain({
//   pagemainstatic,
//   pagemaindata,

// }) {

//   const {
//     fieldmainstate,

//     userdl,

//   } = useContext(Context)
//   const [pagemainstyle, setpagemainstyle] = useState()
//   const navigate = useNavigate()

// //   useEffect(() => {
// //     if(pagemainstate === true) {
// //       setpagemainstyle(`flex flex-col`)
// //     } else {
// //       setpagemainstyle(`grid grid-cols-12`)
// //     }
// //   }, [pagemainstate])
  
//   const userdataset = [
//     {
//       pagemainindex: 0,
//       pagemaindata: [pagemaindata]
//     }
//   ]

//   const workoutdataset = [
//     {
//       pagemainindex: 0,
//       pagemaindata: (userdl[0].spreaddata) && [Object.assign(pagemaindata, userdl[0].spreaddata[0])],

//     }
//   ]

//   const taskdataset = [
//     {
//       pagemainindex: 0,
//       pagemaindata: [Object.assign(pagemaindata, workoutul.filter(data => [pagemaindata].some(dat => dat.workoutid === data.breadid))[0])]
//     }
//   ]

//   const clubdataset = [
//     {
//       pagemainindex: 0,
//       pagemaindata: (userdl[0].spreaddata) && [Object.assign(pagemaindata, userdl[0].spreaddata[0])],
//     }
//   ]

//   const ticketdataset = [
//     {
//       pagemainindex: 0,
//       pagemaindata: [Object.assign(pagemaindata, clubul.filter(data => [pagemaindata].some(dat => dat.clubid === data.breadid))[0])]
//     }
//   ]
  
//   const pagemain = [
//     {
//       pagemainid: 'userdataset',
//       pagemainref: userdataset,
//     },
//     {
//       pagemainid: 'workoutdataset',
//       pagemainref: workoutdataset,
//     },
//     {
//       pagemainid: 'taskdataset',
//       pagemainref: taskdataset,
//     },
//     {
//       pagemainid: 'clubdataset',
//       pagemainref: clubdataset,
//     },
//     {
//       pagemainid: 'ticketdataset',
//       pagemainref: ticketdataset,
//     },
//   ]

//   const [appstatic, setappstatic] = useApp(pagemain, pagemainstatic.pagemainid, pagemainstatic.pagemainindex, fieldmainstate)

//   return (
//     <div>
//         <main className="">
//             <section className={pagemainstyle && pagemainstyle}>
//               {appstatic?.map(data => (<>
//                 {data?.pagemaindata?.map(dat => (<>
//                   <figure onClick={() => {
//                     pagemainstatic.pagemainid === 'workoutdataset' && navigate(`/workout/workoutindex/${dat?.breadid}`)
//                     pagemainstatic.pagemainid === 'taskdataset' && navigate(`/task/taskindex/${dat?.taskid}`)
//                     pagemainstatic.pagemainid === 'clubdataset' && navigate(`/club/clubindex/${dat?.breadid}`)
//                     pagemainstatic.pagemainid === 'ticketdataset' && navigate(`/ticket/ticketindex/${dat?.ticketid}`)
//                   }} className="col-span-4">
//                   {dat?.breadvideo && (<>
//                     <video loading='lazy' autoPlay={true} loop={true} src={dat?.breadvideo}></video>
//                   </>)}
//                     <img loading='lazy' src={dat?.breadimage} alt="" className="" />
//                   </figure>
//                   <figcaption className="col-span-8 flex flex-row items-center justify-between">
//                     <h1 className="m-h3">{dat?.user?.email}</h1>
//                     <h1 className="m-h3">{dat?.breadtitle}</h1>
//                     {pagemainstatic.pagemainid === 'workoutdataset' && <PtaMain ptamaindata={dat} ptamainstatic={{ptamainid: 'workoutiframe'}} />}
//                   </figcaption>
//                 </>))}
//               </>))}
//             </section>
//         </main>
//     </div>
//   )
// }
