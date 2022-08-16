import { motion } from 'framer-motion'
import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StatMain from '../../component/stat/StatMain'
import '../modal/index.css'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import AppMain from '../../page/app/AppMain.tsx'
import MessageForm from '../../page/message/MessageForm.tsx'
import MessageIndex from '../../page/message/MessageIndex.tsx'
import CardMain from '../card/CardMain'
import SheetMain from '../sheet/SheetMain'
import SearchMain from '../../page/search/SearchMain.tsx'
import WeightIndex from '../../page/weight/WeightIndex.tsx'
import ContractForm from '../../page/contract/ContractForm'
import { RiCloseCircleFill, RiCloseCircleLine, RiCloseFill } from 'react-icons/ri'

export default function ModalMain() {
  const {
    appstate, setappstate,

  } = useContext(Context)
  // const navigate = useNavigate()
  const location = useLocation()

  // useEffect(() => {
  //     window.history.replaceState(null, "", location.pathname)
  // }, [])

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

  const contractdialog = [
    {
      modalmainindex: 0,
      modalmainrender: () => {
        return appDialogRender({
          component: <ContractForm />
        })
      }
    }
  ]

  const searchdialog = [
    {
      modalmainindex: 0,
      modalmainrender: () => {
        return appDialogRender({
          component: <SearchMain />
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

  const weightdialog = [
    {
      modalmainindex: 0,
      modalmainrender: () => {
        return appDialogRender({
          component: <WeightIndex />
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
      modalmainid: 'contractdialog',
      modalmainref: contractdialog,
    },
    {
      modalmainid: 'searchdialog',
      modalmainref: searchdialog,
    },
    {
      modalmainid: 'messagedialog',
      modalmainref: messagedialog,
    },
    {
      previewmainid: 'weightdialog',
      previewmainref: weightdialog,
    },

  ]

  const [appstatic, setappstatic] = useApp(modalmain, appstate.appidthree, appstate.appindex)
// console.log('appstatic', appstatic)
if(appstate.appidtwo !== 'modalmain') return null

  return (
    <div>
        <main className="">
            <motion.section initial={{y: 100}} animate={{ y:0}} exit={{y: 100}} className="w-full fixed bottom-0 left-0  bg-white rounded-3xl overflow-hidden duration-100">
              {/* <CardMain> */}
              <motion.figcaption className={` overflow-y-scroll no-scrollbar duration-100`}>
                {appstatic?.map(data => (<>
                  {data?.modalmainrender()}
                </>))}
              </motion.figcaption>
              {/* </CardMain> */}
              <hr />
              <figure className="">
                <CardMain>
                <button onClick={() => {
                  setappstate()
                  window.history.replaceState(null, "", location?.pathname)
                }} className="w-full flex flex-row items-center justify-center text-3xl  l-h6">
                    <RiCloseCircleLine />
                  </button>
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