import React from "react"

import CtaMain from "../../component/cta/CtaMain"
import PtaMain from "../../component/pta/PtaMain"
import StaMain from "../../component/sta/StaMain"
import CardMain from "../card/CardMain"
import SheetMain from "../sheet/SheetMain"

  export function UserAddressRender({data, props}) {
    const {navigate, authstate} = props
    return (
      <div className="flex flex-row items-center justify-between" >
        <section>
          <figure className={`w-[25px] h-[25px] flex flex-col justify-center text-center  text-white rounded-full bg-gray-400`}>
            <p className="text-base  uppercase">{data?.user?.email?.slice(0, 1) || data.useremail.slice(0, 1)}</p>
          </figure>
        </section>
        <section className="">
          {authstate !== null && authstate !== undefined && authstate.user.id !== data?.user?.id &&
            <StaMain stamaindata={data} stamainstatic={{ stamainid: 'useriframe' }} stamainstyle={undefined} />
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
            <StaMain stamaindata={data} stamainstatic={{ stamainid: 'useriframe' }} stamainstyle={undefined}  /> }
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
            <figure className="col-span-3">
              <video onClick={navigate} src={data?.breadvideo} autoPlay={true} loop={true} >
              </video>
            </figure>
            <figcaption className="col-span-9 flex flex-row items-center justify-between">
                <CardMain>
                <h1 className="m-h5">{data?.breadtitle}</h1>
                <h1 className="l-h2">With {data?.breadauthor}</h1>
                </CardMain>
                <PtaMain ptamaindata={data} ptamainstatic={{ ptamainid: 'workoutiframe' }} ptamainstyle={undefined}  />
            </figcaption>
          </section>
        </CardMain>
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
              <video onClick={navigate} src={data?.breadvideo} autoPlay={true} loop={true} >
              </video>
            </figure>
            <figcaption className="col-span-9 flex flex-row items-center justify-between">
                <CardMain>
                <h1 className="m-h5">{data?.breadtitle}</h1>
                <h1 className="l-h2">With {data?.breadauthor}</h1>
                </CardMain>
                <PtaMain ptamaindata={data} ptamainstatic={{ ptamainid: 'workoutiframe' }} ptamainstyle={undefined}  />
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
        {/* <section className="">
            <CardMain>
            <CtaMain ctamainstatic={{ctamainid: 'taskembed', ctamainindex: 0}} />
            </CardMain>
        </section> */}
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
        <section className="w-full flex flex-row justify-between">
            <figcaption onClick={navigate} className="w-full  cursor-pointer">
              <p className="l-h4">{data?.userid?.username !== null ? `@` + data?.userid?.username : data?.userid?.useremail}</p>
            </figcaption>
            <figure className="">
              <p className="l-h4 uppercase">{data?.weightid}</p>
            </figure>
        </section>
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
        <SheetMain>
        <figure className="l-h4  cursor-pointer">
          {data?.breadsubtitle}
        </figure>
        </SheetMain>
      </div>
    )
  }


  export function MessageAddressRender({data, props}) {
    const {navigate} = props
    return (
      <div>
        <SheetMain>
        <figure onClick={navigate} className="l-h4  cursor-pointer">
          {data?.spreaddetail}
        </figure>
        </SheetMain>
      </div>
    )
  }




// export function handleDate(data) {
//   // console.log('data', data)
//     const slice = data.slice(0, 19) + `Z`
//     // console.log('slice', slice)
//         var floor = Math.floor((new Date() - slice) / 1000);
//         // console.log('floor', floor)
//         var interval = floor / 31536000;
//         if (interval > 1) {
//             return Math.floor(interval) + " years";
//         }
//         interval = floor / 2592000;
//         if (interval > 1) {
//             return Math.floor(interval) + " months";
//         }
//         interval = floor / 86400;
//         if (interval > 1) {
//             return Math.floor(interval) + " days";
//         }
//         interval = floor / 3600;
//         if (interval > 1) {
//             return Math.floor(interval) + " hours";
//         }
//         interval = floor / 60;
//         if (interval > 1) {
//             return Math.floor(interval) + " min";
//         }
//         return Math.floor(floor) + " seconds";
//     }