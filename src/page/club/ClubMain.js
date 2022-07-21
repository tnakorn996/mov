import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import CtaMain from '../../component/cta/CtaMain'
import { Context } from '../../context/context'
import CardMain from '../../layout/card/CardMain'

export default function ClubMain() {
  const {

    ticketdl,
    clubdl,

  } = useContext(Context)
  const navigate = useNavigate()

  // if(ticketdl && ticketdl[0]?.spreaddata?.length > 0) return null

  return (
    <div>
        <main className="">
            <section className="">
              <CardMain>
              <CtaMain ctamainstatic={{ctamainid: 'clubembed', ctamainindex: 0}} />
              </CardMain>
            </section>
             <section className="">
              {ticketdl?.map(data => (<>
              <CardMain>
                  <h1 className="">{data?.spreadtitle}</h1>
                  {data?.spreaddata?.map(dat => (<>
                  <p onClick={() => {
                    navigate(`/ticket/ticketindex/${dat?.ticketid}`)
                  }} className="">{dat?.clubid}</p>
                  </>))}
              </CardMain>
              </>))}
            </section>
            <section className="">
              {clubdl?.map(data => (<>
              <CardMain>
                  <h1 className="">{data?.spreadtitle}</h1>
                  {data?.spreaddata?.map(dat => (<>
                  <p onClick={() => {
                    navigate(`/club/clubindex/${dat?.breadid}`)
                  }} className="">{dat?.breadtitle}</p>
                  </>))}
              </CardMain>
              </>))}
            </section>
            {/* <section className="">
              {clubdl?.map(data => (<>
              <CardMain>
                  <h1 className="">{data?.spreadtitle}</h1>
                  {data?.spreaddata?.map(dat => (<>
                  <p onClick={() => {
                    navigate(`/club/clubindex/${dat?.clubid}`)
                  }} className="">{dat?.clubid}</p>
                  </>))}
              </CardMain>
              </>))}
            </section> */}
        </main>
    </div>
  )
}
