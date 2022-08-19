import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import useSplit from '../../hook/useSplit'
import CardMain from '../../layout/card/CardMain'
import { supabase } from '../../lib/supabase'
import ChoiceMain from '../choice/ChoiceMain'
// import DtaMain from '../dta/DtaMain.tsx'
import { clubul, workoutul } from '../../content/content'

export default function FieldMain({
  fieldmainstatic,
  fieldmainstyle,
  fieldmaindata,

}) {
  const {
    setappstate, appstate,
    choicemainstate,
    fieldmainstate, setfieldmainstate,
    signmainstate, setsignmainstate,

    authstate, setauthstate,
    setsearch,

  } = useContext(Context)
  const navigate = useNavigate()
  const param = useParams()
  const location = useLocation()
  const split = location.pathname.split('/');
  const url = (new URL(window.location)).pathname.split('/')[3]
  const [fieldmainid, setfieldmainid] = useState(uuidv4())
  const [fieldmainbool, setfieldmainbool] = useState(true)
  const [splitstatictwo, setsplitstatictwo] = useSplit(2)
  const [splitstaticthree, setsplitstaticthree] = useSplit(3)

  const ref = useRef(null)
  const reftwo = useRef(null)
  const refthree = useRef(null)
  const reffour = useRef(null)
  const reffive = useRef(null)
  const refsix = useRef(null)
  const refseven = useRef(null)
  const refuserbio = useRef(null)

  function fieldMainAction(first, second) {
    for(const data of first) {
      if(data.breadid === splitstaticthree || data.breadid === split[3]){
        // console.log('datdddddddda', data[second])
        return data[second]
      }
    }
  }

  function fieldMainActionTwo(first) {
      // console.log('first', first)

      if(!first.fieldmaindetail) return null
          setappstate({
              appid: 'backdropmain',
              appidtwo: 'previewmain',
              appidthree: 'apparticle',
              appindex: 1,
            })
            setsignmainstate({
              signmainid: 'appimg',
              signmainindex: 0,
              signmaindetail: first.fieldmaindetail,
              signmainaction: first.fieldmainaction,
            })

      // setfieldmainstate(!fieldmainstate)
      //   if(!first.fieldmainhref) return null
      //     navigate(first.fieldmainhref + split[3])
    }

  const ll = async () => {
    const refvalue = ref?.current?.value
    const reftwovalue = reftwo?.current?.value
    const query = {
        email: refvalue, 
        password: reftwovalue,
      }
    const { error } = await supabase.auth.signUp(query)
    // setfieldmainstate(!fieldmainstate)
    // alert(error)
      // setfieldmainbool(!fieldmainbool)
      alert(`Successfully sent email to ${refvalue}`)
  }

  const kk = async () => {
    const refvalue = ref?.current?.value
    const reftwovalue = reftwo?.current?.value
    const query = {
          email: refvalue, 
          password: reftwovalue,
    }
    const { data, error } = await supabase.auth.signIn(query)
      alert(error)
      if(data) {
          alert('Successfully sign you in')
          const user = supabase.auth.user()
          const query = {
              userid: user.id,
              useremail: user.email,
              username: user.email.split(`@`)[0],
              // userimage: '',
          }
          const { error } = await supabase.from('user').upsert(query, {returning: 'minimal'})
          navigate(`/workout/workoutmain`)
          // setfieldmainbool(!fieldmainbool)
          // setfieldmainstate(!fieldmainstate)
      }

  }

  const jj = async () => {
          const { error } = await supabase.auth.signOut(authstate.access_token)
          alert(error)
          // setauthstate()
          // setfieldmainstate(!fieldmainstate)
          alert('Signed out successfully')
          // setfieldmainbool(!fieldmainbool)
          navigate(`/auth/authmain`)
  }

  //////////////////////////////////////

  const fieldMainSelect = async (first, second) => {
    const user = supabase.auth.user()
    const query = [       
            {
                fieldmainid: 'userinput',
                fieldmainidtwo: 'user',
            },     
        ]
        const filter = query.filter(data => data.fieldmainid === fieldmainstatic.fieldmainid)
        const ref = Object.assign(...filter)
        // console.log('ref', ref)

        const { data, error} = await supabase.from(ref.fieldmainidtwo).select(first).eq('userid', user.id)
        if(!Array.isArray(data)) return null
          const assign = Object.assign(...data)[first]
          // console.log('assign', assign)
          if(typeof assign === 'undefined') return null
          return second.current.value = assign
          
          // return `handleselect${ref.fieldmainid}`
  }

  // console.log('split', splitstaticthree || split[3] || param?.userid)

  const ss = async () => {
      // console.log('fieldmaindata', fieldmaindata)
        const user = supabase.auth.user()
        const refvaluefour = reffour?.current?.value
        const refvaluefive = reffive?.current?.value
        const refuserbiovalue = refuserbio?.current?.value
        // console.log('user', user)
        const query = [       
            {
                fieldmainid: 'userinput',
                fieldmainidtwo: 'user',
                fieldmainhref: `/user/userindex/`,
                fieldmaindetail: 'Successfully updated your profile',
                fieldmainaction: `/club/clubmain`,
                fieldmaindata: {
                  userid: user.id,
                  useremail: user.email,
                  // userimage: '',
                  userfullname: refvaluefour,
                  username: refvaluefive,
                  userbio: refuserbiovalue,
                },
                fieldmaindatatwo: {userid: split[3]}
            },     
            {
                fieldmainid: 'contractinput',
                fieldmainidtwo: 'contract',
                // fieldmainhref: `/user/userindex/`,
                // fieldmaindetail: 'Successfully following this user',
                // fieldmainaction: null,
                fieldmaindata: {
                    contractid: fieldmainid,
                  
                    userid: user?.id,
                    senderid: user?.id,
                    receiverid: splitstaticthree || split[3] || param?.userid,
                },
                fieldmaindatatwo: {contractid: undefined}
            },
            {
                fieldmainid: 'taskinput',
                fieldmainidtwo: 'task',
                fieldmainhref: `/task/taskindex/`,
                fieldmaindetail: 'Successfully added your personal best.',
                fieldmainaction: `/workout/workoutmain`,
                fieldmaindata: {
                    taskid: fieldmainid,
                    taskpoint: fieldMainAction(workoutul, 'breadpoint'),

                    weightid: refthree?.current?.value,
                    workoutid: split[3],
                    userid: user?.id,
                },
                fieldmaindatatwo: {userid: undefined}
            },
            {
                fieldmainid: 'ticketinput',
                fieldmainidtwo: 'ticket',
                fieldmainhref: `/ticket/ticketindex/`,
                fieldmaindetail: 'Thanks for working out with us',
                fieldmainaction: `/club/clubmain`,
                fieldmaindata: {
                    ticketid: fieldmainid,
                    ticketpoint: fieldMainAction(clubul, 'breadpoint'),
                  
                    clubid: split[3],
                    userid: user?.id,
                },
                fieldmaindatatwo: {userid: undefined}
            },
            {
                fieldmainid: 'awardinput',
                fieldmainidtwo: 'award',
                fieldmainhref: `/award/awardindex/`,
                fieldmaindetail: 'Successfully claimed your reward',
                fieldmainaction: `/achievement/achievementmain`,
                fieldmaindata: {
                    awardid: fieldmainid,
                  
                    userid: user?.id,
                    achievementid: split[3],
                },
                fieldmaindatatwo: {userid: undefined}
            },
            {
                fieldmainid: 'textinput',
                fieldmainidtwo: 'text',
                // fieldmainhref: `//awardindex/`,
                // fieldmaindetail: 'Successfully claim your reward',
                // fieldmainaction: `/achievement/achievementmain`,
                fieldmaindata: {
                    textid: fieldmainid,
                  
                    userid: user?.id,
                    spreadidtwo: url,
                },
                fieldmaindatatwo: {userid: undefined}
            },
            {
                fieldmainid: 'questinput',
                fieldmainidtwo: 'quest',
                // fieldmainhref: `//awardindex/`,
                // fieldmaindetail: 'Successfully claim your reward',
                // fieldmainaction: `/achievement/achievementmain`,
                fieldmaindata: {
                    questid: fieldmainid,
                  
                    userid: user?.id,
                    spreadidtwo: url,
                },
                fieldmaindatatwo: {userid: undefined}
            },
        ]
        const filter = query.filter(data => data.fieldmainid === fieldmainstatic.fieldmainid)
        const ref = Object.assign(...filter)
        // console.log('ref', ref)
        try {
            if(user && filter && Object.values(ref.fieldmaindatatwo)[0] === undefined){
                const { error } = await supabase.from(ref.fieldmainidtwo).upsert(ref.fieldmaindata, {returning: 'minimal'})
                // alert(error)

            }
            if(user && filter && Object.values(ref.fieldmaindatatwo)[0] !== undefined){
                const { error } = await supabase.from(ref.fieldmainidtwo).update(ref.fieldmaindata).match(ref.fieldmaindatatwo)
                // alert(error)

            } 
              setfieldmainstate(!fieldmainstate)
              // setfieldmainbool(!fieldmainbool)
              fieldMainActionTwo(ref)
        } catch (error) {
            alert(error)
            setfieldmainstate(!fieldmainstate)
            // setfieldmainbool(!fieldmainbool)
            fieldMainActionTwo(error)
        }
    }

    const fieldMainDelete = async () => {
      // console.log('fieldmaindata', fieldmaindata)
        const user = supabase.auth.user()
        const query = [
            {
                fieldmainid: 'contractinput',
                fieldmainidtwo: 'contract',
                // fieldmaindetail: 'Successfully unfollow this person',
                // fieldmainaction: null,
                fieldmaindatatwo: {
                  senderid: user?.id,
                  receiverid: splitstaticthree || param?.userid, 
                }
            },
            {
                fieldmainid: 'taskinput',
                fieldmainidtwo: 'task',
                fieldmaindetail: 'Successfully deleted your record',
                fieldmainaction: `/workout/workoutmain`,
                fieldmaindatatwo: {
                  userid: user?.id, 
                  workoutid: split[3],
                }
            },
            {
                fieldmainid: 'ticketinput',
                fieldmainidtwo: 'ticket',
                fieldmaindetail: 'Successfully left your program',
                fieldmainaction: `/club/clubmain`,
                fieldmaindatatwo: {
                  userid: user?.id, 
                  clubid: split[3],
                }
            },
            {
                fieldmainid: 'awardinput',
                fieldmainidtwo: 'award',
                fieldmaindetail: 'Successfully removed your reward',
                fieldmainaction: `/achievement/achievementmain`,
                fieldmaindatatwo: {
                  userid: user?.id, 
                  achievementid: split[3],
                }
            },
            {
                fieldmainid: 'textinput',
                fieldmainidtwo: 'text',
                // fieldmaindetail: 'Successfully mark this message',
                // fieldmainaction: `/achievement/achievementmain`,
                fieldmaindatatwo: {
                  userid: user?.id, 
                  spreadidtwo: url,
                }
            },
            {
                fieldmainid: 'questinput',
                fieldmainidtwo: 'quest',
                // fieldmaindetail: 'Successfully mark this message',
                // fieldmainaction: `/achievement/achievementmain`,
                fieldmaindatatwo: {
                  userid: user?.id, 
                  spreadidtwo: url,
                }
            },
        ]
        const filter = query.filter(data => data.fieldmainid === fieldmainstatic.fieldmainid)
        const ref = Object.assign(...filter)
        // console.log('ref', ref)
        if(user && filter && Object.values(ref.fieldmaindatatwo)[0] !== undefined){
                const { error } = await supabase.from(ref.fieldmainidtwo).delete().match(ref.fieldmaindatatwo)
                // alert(error)

                setfieldmainstate(!fieldmainstate)
                // setfieldmainbool(!fieldmainbool)
                fieldMainActionTwo(ref)
        }
    }


    const fieldMainSearch = async () => {
      const refsixvalue = refsix.current.value;
        const user = supabase.auth.user()
        const query = [
            {
                fieldmainid: 'searchinput',
                fieldmainidtwo: 'user',
                // fieldmaindetail: 'Successfully unfollow this person',
                // fieldmainaction: null,
                fieldmaindatatwo: {
                  select: undefined,
                }
            },
        ]
        const filter = query.filter(data => data.fieldmainid === fieldmainstatic.fieldmainid)
        const ref = Object.assign(...filter)
        // console.log('ref', ref)
        if(user && ref){
                const { data, error } = await supabase.from(ref.fieldmainidtwo).select(`*`).textSearch(`username`, refsixvalue, { config: 'english' })
                // alert(error)
                setsearch(data)

                // setfieldmainbool(!fieldmainbool)
                setfieldmainstate(!fieldmainstate)
                fieldMainActionTwo(ref)
        }
    }

    
    //////////////////////////////////////
    
    const fieldMainUpload = async () => {
      const user = supabase.auth.user()
      const refseventarget = refseven.current.files[0]
      // console.log('refseventarget', refseventarget)
      const { data, error } = await supabase.storage
        .from('image')
        .upload(`userimage/${fieldmainid}`, refseventarget, {
          cacheControl: '3600',
          upsert: false,
        })
        // console.log('data', data)
        // alert('error', error)
        if(data) {
          fieldMainGetpublicurl(fieldmainid, user)
        }
    }

    // const fieldMainUpdate = async () => {
    //   const user = supabase.auth.user()
    //   const refseventarget = refseven.current.files[0]
    //   // console.log('refseventarget', refseventarget)
    //   const { data, error } = await supabase.storage
    //     .from('image')
    //     .update(`userimage/${user.id}`, refseventarget, {
    //       cacheControl: '3600',
    //       upsert: false,
    //     })
    //     // console.log('data', data)
    //     // alert('error', error)
    //     if(data) {
    //       fieldMainGetpublicurl(user)
    //     }
    // }

    const fieldMainGetpublicurl = async (first, second) => {
      const { publicURL, error } = supabase.storage
      .from('image')
      .getPublicUrl(`userimage/${first}`)
      if(publicURL) {
        const { error } = await supabase
        .from('user').update({userimage: publicURL})
        .match({userid: second.id})
        alert(`Successfully updated your image`)
        // setfieldmainbool(!fieldmainbool)
        setfieldmainstate(!fieldmainstate)
        // fieldMainActionTwo(ref)
      }
    }

    //////////////////////////////////////



  const authinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: 'signup',
      fieldmainentitle: 'Submit',
      fieldmainaction: ll,
      fieldmaindata: [
        {
          fieldmainsubtitle: 'email',
          fieldmainrender:() => {
            return <input ref={ref} type="email" className="l-input" />
          }

        },
        {
          fieldmainsubtitle: 'password',
          fieldmainrender:() => {
            return <input ref={reftwo} type='password' className="l-input" />
          }
        },
      ],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: 'signin',
      fieldmainentitle: 'Submit',
      fieldmainaction: kk,
      fieldmaindata: [
        {
          fieldmainsubtitle: 'email',
          fieldmainrender:() => {
            return <input ref={ref} type="email" className="l-input" />
          }

        },
        {
          fieldmainsubtitle: 'password',
          fieldmainrender:() => {
            return <input ref={reftwo} type='password' className="l-input" />
          }
        },
      ],
    },
  ]

  const userinput = [
    {
      fieldmaintitle: 'Danger zone',
      fieldmainentitle: 'Sign out',
      fieldmainaction: jj,
      fieldmaindata: [],
    },
    {
      fieldmaintitle: 'User Settings',
      fieldmainentitle: 'Save changes',
      fieldmainaction: ss,
      fieldmaindata: [
         {
          fieldmainsubtitle: 'Full name',
          fieldmainrender:() => {
            return <input onLoad={fieldMainSelect(`userfullname`, reffour)} ref={reffour} className="l-input" placeholder={`Give your full name`} />
          }
          // fieldmaindetail: `Help people discover your account by using the name you're known by: either your full name, nickname or business name.` ,
        },
        // {
        //   fieldmainsubtitle: 'Username',
        //   fieldmainrender: <input ref={reffive} className="l-input" placeholder="eg. @johndoe" />,
        //   fieldmaindetail: `This will be displayed to viewers of your profile page.`,
        // },
        {
          fieldmainsubtitle: 'User bio',
          fieldmainrender:() => {
            return <textarea onLoad={fieldMainSelect(`userbio`, refuserbio)} ref={refuserbio} className="l-input" placeholder="Character 150" />
          }
          // fieldmaindetail: `This will be displayed to viewers of your profile page.`,
        },
      ],
    },
    {
      fieldmaintitle: 'Profile picture',
      fieldmainentitle: 'Upload picture',
      fieldmainaction: fieldMainUpload,
      fieldmaindata: [
        {
          fieldmainsubtitle: 'Upload profile photo',
          fieldmainrender:() => {
            return <input ref={refseven} type={`file`} className="l-input" />
          }
          // fieldmaindetail: `Help people discover your account by using the name you're known by: either your full name, nickname or business name.` ,
        },
      ],
    },
  ]

  const contractinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: null,
      fieldmainentitle: '+ Follow',
      fieldmainaction: ss,
      fieldmaindata: [],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: null,
      fieldmainentitle: 'Following',
      fieldmainaction: fieldMainDelete,
      fieldmaindata: [],
    },
  ]


  const taskinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: null,
      fieldmainentitle: 'add Workout',
      fieldmainaction: ss,
      fieldmaindatatwo: [
        {
          fieldmainsubtitle: null,
          fieldmainrender:() => {
            return <ChoiceMain choicemainref={refthree} choicemainstatic={{choicemainid: 'workoutlabel', choicemainindex: 0}} />
          }
        },
      ],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: 'Would you like to continue?',
      fieldmainentitle: 'Confirm',
      fieldmainaction: fieldMainDelete,
      fieldmaindata: [],
    },
  ]

  const ticketinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: null,
      fieldmainentitle: 'Join the club',
      fieldmainaction: ss,
      fieldmaindata: [],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: 'Would you like to continue?',
      fieldmainentitle: 'Confirm',
      fieldmainaction: fieldMainDelete,
      fieldmaindata: [],
    },
  ]

  const awardinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: null,
      fieldmainentitle: 'Claim reward',
      fieldmainaction: ss,
      fieldmaindata: [],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: 'Would you like to continue?',
      fieldmainentitle: 'Confirm',
      fieldmainaction: fieldMainDelete,
      fieldmaindata: [],
    },
  ]

  const textinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: null,
      fieldmainentitle: '✔️ Mark as read',
      fieldmainaction: ss,
      fieldmaindata: [],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: null,
      fieldmainentitle: 'Mark as un-read',
      fieldmainaction: fieldMainDelete,
      fieldmaindata: [],
    },
  ]

  const searchinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: null,
      fieldmainentitle: 'Search',
      fieldmainaction: fieldMainSearch,
      fieldmaindata: [
        {
          fieldmainsubtitle: null,
          fieldmainrender:() => {
            return <input ref={refsix} className="l-input" placeholder="Enter your friend's ID" />
          }
        },
      ],
    },
  ]

  const questinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: null,
      fieldmainentitle: '✔️ Mark as done',
      fieldmainaction: ss,
      fieldmaindata: [],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: null,
      fieldmainentitle: 'Mark as un-done',
      fieldmainaction: fieldMainDelete,
      fieldmaindata: [],
    },
  ]

  const fieldmain = [
    {
      fieldmainid: 'authinput',
      fieldmainref: authinput,
    },
    {
      fieldmainid: 'userinput',
      fieldmainref: userinput,
    },
    {
      fieldmainid: 'taskinput',
      fieldmainref: taskinput,
    },
    {
      fieldmainid: 'ticketinput',
      fieldmainref: ticketinput,
    },
    {
      fieldmainid: 'contractinput',
      fieldmainref: contractinput,
    },
    {
      fieldmainid: 'awardinput',
      fieldmainref: awardinput,
    },
    {
      fieldmainid: 'textinput',
      fieldmainref: textinput,
    },
    {
      fieldmainid: 'questinput',
      fieldmainref: questinput,
    },
    {
      fieldmainid: 'searchinput',
      fieldmainref: searchinput,
    },
  ]

  const [appstatic, setappstatic] = useApp(fieldmain, fieldmainstatic.fieldmainid, fieldmainstatic.fieldmainindex, splitstaticthree)
  const fieldmainrender = appstatic && appstatic

  // console.log('fieldmainbool', fieldmainbool)

  return (
    <div>
        <main className="">
            <section className="">
              {fieldmainrender?.map((data, index) => (<>
              <div key={index}>

              <figure className="">
                {data?.fieldmaintitle !== null && <div className="">
                  <h1 className="m-h5 pb-[20px] first-letter:uppercase">{data?.fieldmaintitle}</h1>
                  <hr />
                  <br />
                </div> }
              </figure>

              <figcaption className="">
                {data?.fieldmaindata?.map(dat => (<>
                  <h1 className="l-h4 py-[5px]   first-letter:uppercase">{dat?.fieldmainsubtitle}</h1>
                  <div className="">
                  {dat?.fieldmainrender()}
                  </div>
                  <h1 className="l-h1 py-[5px]">{dat?.fieldmaindetail}</h1>
                  <br />
                </>))}
              </figcaption>
              
              <figure className="flex flex-row gap-1">

                <motion.button 
                onClick={() => {
                  // setfieldmainbool(!fieldmainbool)
                  data?.fieldmainaction()
                }}
                // disabled={fieldmainbool === false} 
                className={`w-full flex flex-row gap-2 justify-center items-center  m-button uppercase duration-100 ${fieldmainstyle?.button} ${fieldmainbool === false && `opacity-40`}`}>
                   {data?.fieldmainentitle}
                </motion.button>

                <button className="">
                {data?.fieldmaindatatwo?.map(dat => (<>
                    {dat?.fieldmainrender()}
                </>))}
                </button>


              </figure>
              </div>

              </>))}
            </section>
        </main>
    </div>
  )
}


// export function FieldMainRender({ref, props}) {
//   const {type, placeholder} = props
//   return (
//     <div>
//       <input ref={ref} type={type && type} className="l-input" placeholder={placeholder && placeholder} />
//     </div>
//   )
// }
