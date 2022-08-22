import { motion } from 'framer-motion'
import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StatMain from '../../component/stat/StatMain'
import ThemeMain from '../theme/ThemeMain.tsx'
import '../modal/index.css'

import { Context } from '../../context/context'
import useApp from '../../hook/useApp'
import AppMain from '../../page/app/AppMain.tsx'
import MessageForm from '../../page/message/MessageForm.tsx'
import GuideForm from '../../page/guide/GuideForm.tsx'
import CardMain from '../card/CardMain'
import ChipMain from '../chip/ChipMain.tsx'
import SheetMain from '../sheet/SheetMain'
import SearchMain from '../../page/search/SearchMain.tsx'
import WeightIndex from '../../page/weight/WeightIndex.tsx'
import ImageIndex from '../../page/image/ImageIndex.tsx'
import ContractForm from '../../page/contract/ContractForm'
import { RiCloseCircleFill, RiCloseCircleLine, RiCloseFill, RiCloseLine } from 'react-icons/ri'

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
      modalmainrender: () => {
        return appDialogRender({
          component: <AppMain />
        })
      }
    }
  ]

  const contractdialog = [
    {
      modalmainrender: () => {
        return appDialogRender({
          component: <ContractForm />
        })
      }
    }
  ]

  const searchdialog = [
    {
      modalmainrender: () => {
        return appDialogRender({
          component: <SearchMain />
        })
      }
    }
  ]

  const messagedialog = [
    {
      modalmainrender: () => {
        return appDialogRender({
          component: <MessageForm />
        })
      }
    }
  ]

  const guidedialog = [
    {
      modalmainrender: () => {
        return appDialogRender({
          component: <GuideForm />
        })
      }
    }
  ]

  const weightdialog = [
    {
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
      modalmainid: 'guidedialog',
      modalmainref: guidedialog,
    },
    {
      previewmainid: 'weightdialog',
      previewmainref: weightdialog,
    },

  ]

  const [appstatic, setappstatic] = useApp(modalmain, appstate.appidthree, appstate.appindex)
// console.log('appstatic', appstatic)
if(appstate.appidtwo !== 'modalmain') return null
if(typeof appstate === 'undefined') return null

  return (
    <div>
        <main className="w-full fixed bottom-0 left-0  rounded-t-3xl overflow-hidden duration-100">
        <ThemeMain>
            <section className="">
              <motion.figcaption className={` overflow-y-scroll no-scrollbar duration-100`}>
                {appstatic?.map((data) => (
                  data?.modalmainrender()
                ))}
              </motion.figcaption>
              </section>
              <section className="flex justify-center">
                <div onClick={() => {
                  setappstate()
                  window.history.replaceState(null, "", location?.pathname)}} className="">
                  <CardMain>
                  <ChipMain>
                    <figure className="">
                    <CardMain>
                    <RiCloseLine className="text-2xl" />
                    </CardMain>
                    </figure>
                  </ChipMain>
                  </CardMain>
                </div>
            </section>
        </ThemeMain>
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