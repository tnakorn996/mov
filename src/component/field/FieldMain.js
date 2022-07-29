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

}) {
  const {
    fieldmainstate, setfieldmainstate,

    authstate, setauthstate,
    taskdl,
    ticketdl,

  } = useContext(Context)
  const navigate = useNavigate()
  const param = useParams()
  const location = useLocation()
  const split = location.pathname.split('/');
  const [fieldmainid, setfieldmainid] = useState(uuidv4())

  const ref = useRef(null)
  const reftwo = useRef(null)
  const refthree = useRef(null)
  const reffour = useRef(null)
  const reffive = useRef(null)
  const refsix = useRef(null)
  const refseven = useRef(null)

  useEffect(() => {
    
  }, [])

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
              userimage: 'https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-1024.png',
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

    const ss = async () => {
        const user = supabase.auth.user()
        // console.log('user', user)
        const query = [            
            {
                fieldmainid: 'contractinput',
                fieldmainidtwo: 'contract',
                // fieldmainidthree: 'mov.contract',
                fieldmaindata: {
                    contractid: fieldmainid,
                  
                    userid: user?.id,
                    senderid: user?.id,
                    receiverid: split[3]
                },
                fieldmaindatatwo: {contractid: undefined}
            },
            {
                fieldmainid: 'taskinput',
                fieldmainidtwo: 'task',
                // fieldmainidthree: 'mov.task',
                fieldmaindata: {
                    taskid: fieldmainid,

                    weightid: refthree?.current?.value,
                    workoutid: split[3],
                    userid: user?.id,
                },
                fieldmaindatatwo: {taskid: param?.taskid}
            },
            {
                fieldmainid: 'ticketinput',
                fieldmainidtwo: 'ticket',
                // fieldmainidthree: 'mov.ticket',
                fieldmaindata: {
                    ticketid: fieldmainid,
                  
                    clubid: split[3],
                    userid: user?.id,
                },
                fieldmaindatatwo: {userid: undefined}
            },

        ]
        const filter = query.filter(data => data.fieldmainid === fieldmainstatic.fieldmainid)
        const ref = filter[0]
        // console.log('ref', ref)
        try {
            if(user && filter && Object.values(ref.fieldmaindatatwo)[0] === undefined){
                const { error } = await supabase.from(filter[0].fieldmainidtwo).upsert(filter[0].fieldmaindata, {returning: 'minimal'})
                alert(error)

                // const empty = []
                // const parse = JSON.parse(window.localStorage.getItem(filter[0].fieldmainidthree));
                // empty.push(...parse, filter[0].fieldmaindata)
                // window.localStorage.setItem(filter[0].fieldmainidthree, JSON.stringify(empty))

                setfieldmainstate(!fieldmainstate)
            }
            if(user && filter && Object.values(ref.fieldmaindatatwo)[0] !== undefined){
                const { error } = await supabase.from(filter[0].fieldmainidtwo).update(filter[0].fieldmaindata).match(filter[0].fieldmaindatatwo)
                alert(error)

                // const empty = []
                // const parse = JSON.parse(window.localStorage.getItem(filter[0].fieldmainidthree));
                // const filtertwo = parse.filter(data => Object.values(data).every(value => value !== Object.values(filter[0].fieldmaindatatwo)[0]))
                // empty.push(...filtertwo, filter[0].fieldmaindata)
                // window.localStorage.setItem(filter[0].fieldmainidthree, JSON.stringify(empty))

                setfieldmainstate(!fieldmainstate)
            } 
        } catch (error) {
            alert(error)
        }
    }

    const handledelete = async () => {
        const user = supabase.auth.user()
        const query = [
            {
                fieldmainid: 'contractinput',
                fieldmainidtwo: 'contract',
                // fieldmainidthree: 'mov.task',
                fieldmaindatatwo: {receiverid: param?.userid, senderid: user?.id}
            },
            {
                fieldmainid: 'taskinput',
                fieldmainidtwo: 'task',
                // fieldmainidthree: 'mov.task',
                fieldmaindatatwo: {taskid: param?.taskid,}
            },
            {
                fieldmainid: 'ticketinput',
                fieldmainidtwo: 'ticket',
                // fieldmainidthree: 'mov.ticket',
                fieldmaindatatwo: {ticketid: param?.ticketid,}
            },
        ]
        const filter = query.filter(data => data.fieldmainid === fieldmainstatic.fieldmainid)
        const ref = filter[0]
        console.log('ref', ref)
        if(user && filter && Object.values(ref.fieldmaindatatwo)[0] !== undefined){
                const { error } = await supabase.from(ref.fieldmainidtwo).delete().match(ref.fieldmaindatatwo)
                alert(error)

                // const parse = JSON.parse(window.localStorage.getItem(ref.fieldmainidthree));
                // const filtertwo = parse.filter(data => Object.values(data).every(value => value !== Object.values(ref.fieldmaindatatwo)[0]))
                // window.localStorage.setItem(ref.fieldmainidthree, JSON.stringify(filtertwo))
                
                setfieldmainstate(!fieldmainstate)
        }
    }

    // const hh = async () => {
    //     // const { data, error} = await supabase.from('post').select(`*`).eq('postid', param.postid).single()
    //     if(fieldmainrendertwo) {
    //         const filter = fieldmainrendertwo.filter(data => data.postid === param.postid)
    //         if(filter && filter.length >= 0){
    //             refthree.current.value = filter[0]?.posttitle
    //             reffour.current.value = filter[0]?.postsubtitle
    //             reffive.current.value = filter[0]?.categoryid
    //         }
    //     } 
    // }

  const authinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: 'signup',
      fieldmainentitle: 'Submit',
      fieldmainaction: ll,
      fieldmaindata: [
        {
          fieldmainsubtitle: 'email',
          fieldmainrender: <input ref={ref} type="email" className="m-input" />,

        },
        {
          fieldmainsubtitle: 'password',
          fieldmainrender: <input ref={reftwo} type='password' className="m-input" />,
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
          fieldmainrender: <input ref={ref} type="email" className="m-input" />,

        },
        {
          fieldmainsubtitle: 'password',
          fieldmainrender: <input ref={reftwo} type='password' className="m-input" />,
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
    }
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
      fieldmainentitle: 'Unfollow',
      fieldmainaction: handledelete,
      fieldmaindata: [],
    },
  ]


  const taskinput = [
    {
      fieldmainindex: 0,
      fieldmaintitle: null,
      fieldmainentitle: 'Start Workout',
      fieldmainaction: ss,
      // fieldmaindata: [
      //   {
      //     fieldmainsubtitle: 'Choose work',
      //     fieldmainrender: <ChoiceMain choicemainref={refthree} choicemainstatic={{choicemainid: 'worklabel', choicemainindex: 0}} />,
      //   },
      //   {
      //     fieldmainsubtitle: 'Choose emoji',
      //     fieldmainrender: <ChoiceMain choicemainref={reffour} choicemainstatic={{choicemainid: 'emojilabel', choicemainindex: 0}} />,
      //   },
      // ],
      fieldmaindatatwo: [
        {
          fieldmainsubtitle: null,
          fieldmainrender: <ChoiceMain choicemainref={refthree} choicemainstatic={{choicemainid: 'weightlabel', choicemainindex: 0}} />,
        },
      ],
    },
    {
      fieldmainindex: 1,
      fieldmaintitle: 'Danger zone',
      fieldmainentitle: 'Confirm',
      fieldmainaction: handledelete,
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
      fieldmaintitle: 'Danger zone',
      fieldmainentitle: 'Confirm',
      fieldmainaction: handledelete,
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
  ]

  const [appstatic, setappstatic] = useApp(fieldmain, fieldmainstatic.fieldmainid, fieldmainstatic.fieldmainindex)
  const fieldmainrender = appstatic && appstatic

  return (
    <div>
        <main className="">
            <section className="">
              {fieldmainrender?.map(data => (<>

              <figure className="">
                {data?.fieldmaintitle !== null && <h1 className="m-h6">{data?.fieldmaintitle}</h1>}
              </figure>

              <figcaption className="">
                {data?.fieldmaindata?.map(dat => (<>
                  <h1 className="m-h1">{dat?.fieldmainsubtitle}</h1>
                  <div className="">
                  {dat?.fieldmainrender}
                  </div>
                </>))}
              </figcaption>
              
              <figure className="grid grid-flow-col">
                <button onClick={() => {
                  (!authstate && location.pathname !== (`/auth/authform`)) ? navigate(`/auth/authform`) : data?.fieldmainaction()
                }} className={`w-full  m-button uppercase ${fieldmainstyle?.button}`}>
                  {data?.fieldmainentitle}
                </button>
                {data?.fieldmaindatatwo?.map(dat => (<>
                  <button className="">
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
