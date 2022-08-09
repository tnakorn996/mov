import React from 'react'

import './index.css'
import video from '../../content/video/video.mp4'
import CtaMain from '../../component/cta/CtaMain'
import CardMain from '../../layout/card/CardMain'
import SplashMain from '../../layout/splash/SplashMain'
import SignMain from '../../component/sign/SignMain.tsx'

export default function AuthMain() {
    // console.log('video', video)
  return (
    <div>
        <main className="">
            <section className="">
              <figure className="relative flex items-center">
                <video id='video' autoPlay={true} loop={true} src={video} >
                </video>
                {/* <div className="absolute w-full h-full  bg-black opacity-60" />
                <div className="absolute text-2xl">
                  <CardMain>
                  <p className="flex flex-row items-center gap-1 text-white"><SplashMain splashmainstyle={`text-2xl`} /> BEASTY TRAING CLUB</p>
                  <p className="text-slate-400">Everything you need to reach your fitness goals. Let's get started.</p>
                  </CardMain>
                </div> */}
                <div className="absolute w-full h-full  bg-white opacity-10" />
                <div className="absolute">
                  <SignMain signmainstatic={{signmainid: 'appimg', signmainindex: 2, signmaindetail: `Everything you need to reach your fitness goals. Let's get started.`}} />
                </div>
              </figure>
            </section>
        </main>
    </div>
  )
}
