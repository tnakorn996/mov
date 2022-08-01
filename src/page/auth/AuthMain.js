import React from 'react'

import './index.css'
import CtaMain from '../../component/cta/CtaMain'
import CardMain from '../../layout/card/CardMain'
import SplashMain from '../../layout/splash/SplashMain'
import SignMain from '../../component/sign/SignMain'

export default function AuthMain() {
    
  return (
    <div>
        <main className="">
            <section className="">
              <figure className="relative flex items-center">
                <video id='video' autoPlay={true} loop={true} >
                 <source src="https://cdn.videvo.net/videvo_files/video/free/2018-08/large_watermarked/180419_Boxing_01_06_preview.mp4" type="video/mp4"></source>
                </video>
                {/* <div className="absolute w-full h-full  bg-black opacity-60" />
                <div className="absolute text-2xl">
                  <CardMain>
                  <p className="flex flex-row items-center gap-1 text-white"><SplashMain splashmainstyle={`text-2xl`} /> BEASTY TRAING CLUB</p>
                  <p className="text-slate-400">Everything you need to reach your fitness goals. Let's get started.</p>
                  </CardMain>
                </div> */}
                <div className="absolute w-full h-full  bg-black opacity-60" />
                <div className="absolute">
                  <SignMain signmainstatic={{signmainid: 'appimg', signmainindex: 2, signmaindetail: `Everything you need to reach your fitness goals. Let's get started.`}} />
                </div>
              </figure>
            </section>
        </main>
    </div>
  )
}
