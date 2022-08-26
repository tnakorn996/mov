import React from 'react'
import PostMain from '../../layout/post/PostMain'

export default function FeedbackIndex() {

    return (
        <div>
            <main className="">
                <section className="">
                    <PostMain postmainstatic={{ postmainid: `feedbackaddress`, postmainindex: 1 }} postmaindata={undefined} postmainstyle={undefined} />

                </section>
            </main>
        </div>
    )
}
