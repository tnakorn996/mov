import React, { useContext, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import CardMain from '../../layout/card/CardMain'
import { supabase } from '../../lib/supabase'
import ChoiceMain from '../choice/ChoiceMain'

export default function FieldMain({
  fieldmainstatic,
  fieldmainstyle,
  fieldmaindata,

}) {
  const {
    setappstate,
    fieldmainstate, setfieldmainstate,
    signmainstate, setsignmainstate,

    authstate, setauthstate,
    userdl,

  } = useContext(Context)
  const navigate = useNavigate()
  const param = useParams()
  const location = useLocation()
  const split = location.pathname.split('/');
  const [fieldmainid, setfieldmainid] = useState(uuidv4())
  const [fieldmainboolean, setfieldmainboolean] = useState(false)

  const ref = useRef(null)
  const reftwo = useRef(null)
  const refthree = useRef(null)
  const reffour = useRef(null)
  const reffive = useRef(null)
  const refsix = useRef(null)
  const refseven = useRef(null)

  useEffect(() => {
    setfieldmainboolean(!fieldmainboolean)
  }, [fieldmainstate])

  //////////////////////////////////////

  const ll = async () => {
    const refvalue = ref?.current?.value
    const reftwovalue = reftwo?.current?.value
    const query = {
        email: refvalue, 
        password: reftwovalue,
      }
    const { error } = await supabase.auth.signUp(query)
      // setfieldmainstate(!fieldmainstate)
      alert(error)
      alert('Please check your email')
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
          alert('Successfully sign-in')
          const user = supabase.auth.user()
          const query = {
              userid: user.id,
              useremail: user.email,
              userimage: '',
          }
          const { error } = await supabase.from('user').upsert(query, {returning: 'minimal'})
          navigate(`/workout/workoutmain`)
          // setfieldmainstate(!fieldmainstate)
      }

  }

  const jj = async () => {
          const { error } = await supabase.auth.signOut(authstate.access_token)
          alert(error)
          // setauthstate()
          // setfieldmainstate(!fieldmainstate)
          alert('jj ')
          navigate(`/auth/authmain`)
  }

  //////////////////////////////////////

  const handleSelect = async (first =this.props.first) => {
    const query = [       
            {
                fieldmainid: 'userinput',
                fieldmainidtwo: 'user',
                fieldmainidthree: 'username',
            },     
        ]
        const filter = query.filter(data => data.fieldmainid === fieldmainstatic.fieldmainid)
        const ref = filter[0]
        // console.log('ref', ref)

        const { data, error} = await supabase.from(ref.fieldmainidtwo).select(`*`).eq(ref.fieldmainidthree, first)
        if(data) {
          return `handleselect${ref.fieldmainid}`
        } else {
          return first
        }
  }
  
  const ss = async () => {
      // console.log('fieldmaindata', fieldmaindata)
        const user = supabase.auth.user()
        const refvaluefour = reffour?.current?.value
        const refvaluefive = reffive?.current?.value
        // console.log('user', user)
        const query = [       
            {
                fieldmainid: 'userinput',
                fieldmainidtwo: 'user',
                fieldmaindetail: 'You are ready to go',
                fieldmainaction: `/workout/workoutmain`,
                fieldmaindata: {
                  userid: user.id,
                  useremail: user.email,
                  userimage: '',
                  userfullname: refvaluefour,
                  username: refvaluefive,
                },
                fieldmaindatatwo: {userid: split[3]}
            },     
            {
                fieldmainid: 'contractinput',
                fieldmainidtwo: 'contract',
                // fieldmaindetail: 'Successfully following this user',
                // fieldmainaction: null,
                fieldmaindata: {
                    contractid: fieldmainid,
                  
                    userid: user?.id,
                    senderid: user?.id,
                    receiverid: fieldmaindata?.userid || split[3],
                },
                fieldmaindatatwo: {contractid: undefined}
            },
            {
                fieldmainid: 'taskinput',
                fieldmainidtwo: 'task',
                fieldmaindetail: 'Successfully add your personal best.',
                fieldmainaction: `/workout/workoutmain`,
                fieldmaindata: {
                    taskid: fieldmainid,

                    weightid: refthree?.current?.value,
                    workoutid: split[3],
                    userid: user?.id,
                },
                fieldmaindatatwo: {userid: undefined}
            },
            {
                fieldmainid: 'ticketinput',
                fieldmainidtwo: 'ticket',
                fieldmaindetail: 'Thanks for working out with us',
                fieldmainaction: `/club/clubmain`,
                fieldmaindata: {
                    ticketid: fieldmainid,
                  
                    clubid: split[3],
                    userid: user?.id,
                },
                fieldmaindatatwo: {userid: undefined}
            },
            {
                fieldmainid: 'awardinput',
                fieldmainidtwo: 'award',
                fieldmaindetail: 'Successfully claim your reward',
                fieldmainaction: `/achievement/achievementmain`,
                fieldmaindata: {
                    awardid: fieldmainid,
                  
                    userid: user?.id,
                    achievementid: split[3],
                },
                fieldmaindatatwo: {userid: undefined}
            },
        ]
        const filter = query.filter(data => data.fieldmainid === fieldmainstatic.fieldmainid)
        const ref = filter[0]
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
              handleCallback(ref)
        } catch (error) {
            alert(error)
            setfieldmainstate(!fieldmainstate)
            handleCallback(error)
        }
    }

    const handleDelete = async () => {
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
                  receiverid: fieldmaindata?.userid || param?.userid, 
                }
            },
            {
                fieldmainid: 'taskinput',
                fieldmainidtwo: 'task',
                fieldmaindetail: 'Successfully delete this record',
                fieldmainaction: `/workout/workoutmain`,
                fieldmaindatatwo: {
                  userid: user?.id, 
                  workoutid: split[3],
                }
            },
            {
                fieldmainid: 'ticketinput',
                fieldmainidtwo: 'ticket',
                fieldmaindetail: 'Successfully leave this program',
                fieldmainaction: `/club/clubmain`,
                fieldmaindatatwo: {
                  userid: user?.id, 
                  clubid: split[3],
                }
            },
            {
                fieldmainid: 'awardinput',
                fieldmainidtwo: 'award',
                fieldmaindetail: 'Successfully remove this reward',
                fieldmainaction: `/achievement/achievementmain`,
                fieldmaindatatwo: {
                  userid: user?.id, 
                  achievementid: split[3],
                }
            },
        ]
        const filter = query.filter(data => data.fieldmainid === fieldmainstatic.fieldmainid)
        const ref = filter[0]
        // console.log('ref', ref)
        if(user && filter && Object.values(ref.fieldmaindatatwo)[0] !== undefined){
                const { error } = await supabase.from(ref.fieldmainidtwo).delete().match(ref.fieldmaindatatwo)
                // alert(error)

                // const parse = JSON.parse(window.localStorage.getItem(ref.fieldmainidthree));
                // const filtertwo = parse.filter(data => Object.values(data).every(value => value !== Object.values(ref.fieldmaindatatwo)[0]))
                // window.localStorage.setItem(ref.fieldmainidthree, JSON.stringify(filtertwo))
                
                setfieldmainstate(!fieldmainstate)
                handleCallback(ref)
        }
    }

    //////////////////////////////////////

    function handleCallback(first) {
      // console.log('first', first)
      if(!first.fieldmaindetail) return null
            setappstate({
              appid: 'backdropmain',
              appidtwo: 'previewmain',
              appidthree: 'apparticle',
              appindex: 0,
            })
            setsignmainstate({
              signmainid: 'appimg',
              signmainindex: 0,
              signmaindetail: first.fieldmaindetail,
              signmainaction: first.fieldmainaction,
            })
            setfieldmainstate(!fieldmainstate)
    }

  const authinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: 'signup',
      fieldmainentitle: 'Submit',
      fieldmainaction: ll,
      fieldmaindata: [
        {
          fieldmainsubtitle: 'email',
          fieldmainrender: <input ref={ref} type="email" className="l-input" />,

        },
        {
          fieldmainsubtitle: 'password',
          fieldmainrender: <input ref={reftwo} type='password' className="l-input" />,
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
          fieldmainrender: <input ref={ref} type="email" className="l-input" />,

        },
        {
          fieldmainsubtitle: 'password',
          fieldmainrender: <input ref={reftwo} type='password' className="l-input" />,
        },
      ],
    },
  ]

  const userinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: 'Danger zone',
      fieldmainentitle: 'Sign out',
      fieldmainaction: jj,
      fieldmaindata: [],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: 'User Settings',
      fieldmainentitle: 'Save changes',
      fieldmainaction: ss,
      fieldmaindata: [
         {
          fieldmainsubtitle: 'Full name',
          fieldmainrender: <input ref={reffour} className="l-input" placeholder="eg. John Doe" />,
          fieldmaindetail: `Help people discover your account by using the name you're known by: either your full name, nickname or business name.` ,
        },
        {
          fieldmainsubtitle: 'Username',
          fieldmainrender: <input ref={reffive} className="l-input" placeholder="eg. @johndoe" />,
          fieldmaindetail: `This will be displayed to viewers of your profile page.`,
        },
      ],
    },
  ]

  const contractinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: null,
      fieldmainentitle: 'Follow',
      fieldmainaction: ss,
      fieldmaindata: [],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: null,
      fieldmainentitle: 'Following',
      fieldmainaction: handleDelete,
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
          fieldmainrender: <ChoiceMain choicemainref={refthree} choicemainstatic={{choicemainid: 'workoutlabel', choicemainindex: 0}} />,
        },
      ],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: 'Would you like to continue?',
      fieldmainentitle: 'Confirm',
      fieldmainaction: handleDelete,
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
      fieldmainaction: handleDelete,
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
      fieldmainaction: handleDelete,
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
  ]

  const [appstatic, setappstatic] = useApp(fieldmain, fieldmainstatic.fieldmainid, fieldmainstatic.fieldmainindex)
  const fieldmainrender = appstatic && appstatic

  return (
    <div>
        <main className="">
            <section className="">
              {fieldmainrender?.map(data => (<>

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
                  {dat?.fieldmainrender}
                  </div>
                  <h1 className="l-h1 py-[5px]">{dat?.fieldmaindetail}</h1>
                  <br />
                </>))}
              </figcaption>
              
              <figure className="flex flex-row gap-2">
                <button onClick={() => {
                  (!authstate && location.pathname !== (`/auth/authform`)) ? navigate(`/auth/authform`) : 
                    data?.fieldmainaction()
                    setfieldmainboolean(!fieldmainboolean)
                }} className={`w-full flex flex-row gap-2 justify-center items-center  m-button uppercase ${fieldmainstyle?.button}`}>
                  {fieldmainboolean === false && <div className="w-[10px] h-[10px] border-2 border-slate-400 rounded-full animate-ping" />}
                   {data?.fieldmainentitle}
                </button>
                {data?.fieldmaindatatwo?.map(dat => (<>
                  <button className="max-w-[55px]">
                  {dat?.fieldmainrender}
                  </button>
                </>))}
              </figure>

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
