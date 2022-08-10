import { motion } from 'framer-motion'
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StatMain from '../../component/stat/StatMain'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import AppMain from '../../page/app/AppMain.tsx'
import MessageForm from '../../page/message/MessageForm.tsx'
import MessageIndex from '../../page/message/MessageIndex.tsx'
import CardMain from '../card/CardMain'
import SheetMain from '../sheet/SheetMain'

export default function ModalMain() {
  const {
    appstate, setappstate,

  } = useContext(Context)
  // const navigate = useNavigate()
  const location = useLocation()

  const appdialog = [
    {
      modalmainindex: 0,
      modalmainrender: () => {
        return appDialogRender({
          component: <AppMain />
        })
      }
    }
  ]

  const messagedialog = [
    {
      modalmainindex: 0,
      modalmainrender: () => {
        return appDialogRender({
          component: <MessageForm />
        })
      }
    }
  ]

  const modalmain = [
    {
      modalmainid: 'appdialog',
      modalmainref: appdialog,
    },
    {
      modalmainid: 'messagedialog',
      modalmainref: messagedialog,
    },

  ]

  const [appstatic, setappstatic] = useApp(modalmain, appstate.appidthree, appstate.appindex)
// console.log('appstatic', appstatic)
if(appstate.appidtwo !== 'modalmain') return null

  return (
    <div>
        <main className="">
            <motion.section initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className="w-full fixed bottom-0 left-0  bg-white duration-100 rounded-t-3xl overflow-hidden">
              <figcaption className="">
                <SheetMain>
                {appstatic?.map(data => (<>
                  {data?.modalmainrender()}
                </>))}
                </SheetMain>
              </figcaption>
              <figure className="">
                <CardMain>
                <button onClick={() => {
                  window.history.replaceState(null, "", location?.pathname)
                  setappstate()
                }} className="w-full  uppercase">Cancle</button>
                </CardMain>
              </figure>
            </motion.section>
        </main>
    </div>
  )
}

export function appDialogRender({component}) {
  return (
    <div>
      <section className="">
        {component}
      </section>
    </div>
  )
}