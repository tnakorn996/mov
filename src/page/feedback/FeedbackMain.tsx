import React from 'react'
import BreadMain from '../../component/bread/BreadMain'
import FeedMain from '../../component/feed/FeedMain'
import CardMain from '../../layout/card/CardMain'

export default function FeedbackMain() {
    return (
        <div>
            <main className="">
                <section className="">
                    <CardMain children={undefined} />
                    <CardMain children={undefined} />
                    <BreadMain />
                </section>
                <section className="">
                    <FeedMain feedmainstatic={{ feedmainid: 'feedbackarea', feedmainindex: 0 }} />
                </section>
            </main>
        </div>
    )
}
