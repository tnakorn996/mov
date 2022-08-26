import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiGridFill, RiLayoutGridFill } from "react-icons/ri";

import { Context } from "../../context/context";
import useApp from "../../hook/useApp";
import CardMain from "../../layout/card/CardMain";
import PostMain from "../../layout/post/PostMain";
import SignMain from "../sign/SignMain.tsx";
import { appul, feedbackul } from "../../content/content";

export default function FeedMain({ feedmainstatic }) {
  const {
    fieldmainstate,
    feedmainstate,
    setfeedmainstate,
    postmainstate,
    setpostmainstate,
    stamainstate,

    // taskuserid,
    // appdl,
    userdl,
    contractdl,
    workoutdl,
    taskdl,
    clubdl,
    ticketdl,
    favouritedl,
    achievementdl,
    awarddl,
    messagedl,
    guidedl,
    searchdl,
  } = useContext(Context);
  // const navigate = useNavigate()

  const apparea = [
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: null,
          feedmainrender: () => {
            return appAreaRender({
              data: appul.filter((data) => data.breadid.includes("main")),
              postmainstatic: { postmainid: "appaddress", postmainindex: 0 },
            });
          },
        },
      ],
    },
  ];

  const contractarea = [
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: "People you may know",
          feedmainrender: () => {
            return appAreaRender({
              data: userdl[1].spreaddata,
              postmainstatic: { postmainid: "useraddress", postmainindex: 2 },
            });
          },
        },
      ],
    },
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: "Recent followers",
          feedmainrender: () => {
            return appAreaRender({
              data: contractdl[1].spreaddata,
              postmainstatic: {
                postmainid: "contractaddress",
                postmainindex: 0,
              },
            });
          },
          // feedmainrender: [],
        },
        {
          feedmaintitle: `Who you're following`,
          feedmainrender: () => {
            return appAreaRender({
              data: contractdl[0].spreaddata,
              postmainstatic: {
                postmainid: "contractaddress",
                postmainindex: 0,
              },
            });
          },
          // feedmainrender: [],
        },
      ],
    },
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: null,
          feedmainrender: () => {
            return appAreaRender({
              data: searchdl[0].spreaddata,
              postmainstatic: { postmainid: "useraddress", postmainindex: 2 },
            });
          },
          // feedmainrender: [],
        },
      ],
    },
  ];

  const workoutarea = [
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: "New Workouts",
          feedmainrender: () => {
            return appAreaRender({
              data: workoutdl[0].spreaddata,
              postmainstatic: {
                postmainid: "workoutaddress",
                postmainindex: 0,
              },
            });
          },
        },
      ],
    },
  ];

  const taskarea = [
    {
      feedmainslice: 3,
      feedmaindata: [
        {
          feedmaintitle: "Your Workouts",
          feedmainrender: () => {
            return appAreaRender({
              data: taskdl[0].spreaddata,
              postmainstatic: { postmainid: "taskaddress", postmainindex: 0 },
            });
          },
        },
      ],
    },
  ];

  const clubarea = [
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: "Join a Challenge",
          feedmainrender: () => {
            return appAreaRender({
              data: clubdl[0].spreaddata,
              postmainstatic: { postmainid: "clubaddress", postmainindex: 0 },
            });
          },
        },
      ],
    },
  ];

  const ticketarea = [
    {
      feedmainslice: 3,
      feedmaindata: [
        {
          feedmaintitle: "My Challenges",
          feedmainrender: () => {
            return appAreaRender({
              data: ticketdl[0].spreaddata,
              postmainstatic: { postmainid: "ticketaddress", postmainindex: 0 },
            });
          },
        },
      ],
    },
  ];

  const favouritearea = [
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: "Favourite workouts",
          feedmainrender: () => {
            return appAreaRender({
              data: favouritedl[0].spreaddata,
              postmainstatic: {
                postmainid: "workoutaddress",
                postmainindex: 0,
              },
            });
          },
        },
      ],
    },
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: "Favourite clubs",
          feedmainrender: () => {
            return appAreaRender({
              data: favouritedl[1].spreaddata,
              postmainstatic: { postmainid: "clubaddress", postmainindex: 0 },
            });
          },
        },
      ],
    },
  ];

  const achievementarea = [
    {
      feedmainslice: 10,
      feedmaindata: [
        // {
        //     feedmaintitle: 'Ranks',
        //     feedmainrender: () => {
        //         return achievementdl[0].spreaddata
        //         // return messagedl[1].spreaddata(),
        //     }
        // },
        {
          feedmaintitle: "Workouts",
          feedmainrender: () => {
            return appAreaRender({
              data: achievementdl[1].spreaddata,
              postmainstatic: {
                postmainid: "achievementaddress",
                postmainindex: 0,
              },
            });
          },
        },
        {
          feedmaintitle: "Clubs",
          feedmainrender: () => {
            return appAreaRender({
              data: achievementdl[2].spreaddata,
              postmainstatic: {
                postmainid: "achievementaddress",
                postmainindex: 0,
              },
            });
          },
        },
        {
          feedmaintitle: "Followers",
          feedmainrender: () => {
            return appAreaRender({
              data: achievementdl[3].spreaddata,
              postmainstatic: {
                postmainid: "achievementaddress",
                postmainindex: 0,
              },
            });
          },
        },
      ],
    },
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: "Your rewards",
          feedmainrender: () => {
            return appAreaRender({
              data: awarddl[0].spreaddata,
              postmainstatic: { postmainid: "awardaddress", postmainindex: 0 },
            });
          },
        },
      ],
    },
  ];

  const guidearea = [
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: `All to-do's`,
          feedmainrender: () => {
            return appAreaRender({
              data: guidedl[0].spreaddata().concat(
                guidedl[1].spreaddata(),

                guidedl[2].spreaddata()).filter((data) => data.spreadrender().booltwo === true),
              postmainstatic: { postmainid: "guideaddress", postmainindex: 0 },
            });
          },
        },
        {
          feedmaintitle: `Complete to-do's`,
          feedmainrender: () => {
            return appAreaRender({
              data: guidedl[0].spreaddata().concat(
                guidedl[1].spreaddata(),

                guidedl[2].spreaddata()).filter((data) => data.spreadrender().booltwo === false),
              postmainstatic: { postmainid: "guideaddress", postmainindex: 0 },
            });
          },
        },
      ],
    },
  ];


  const feedbackarea = [
    {
      feedmainslice: 10,
      feedmaindata: [
        {
          feedmaintitle: `All topics`,
          feedmainrender: () => {
            return appAreaRender({
              data: feedbackul,
              postmainstatic: {
                postmainid: "settingaddress",
                postmainindex: 0,
              },
            });
          },
        },
      ],
    },
  ];

  // console.log('messagedl', messagedl)

  const feedmain = [
    {
      feedmainid: "apparea",
      feedmainref: apparea,
    },
    {
      feedmainid: "contractarea",
      feedmainref: contractarea,
    },
    {
      feedmainid: "workoutarea",
      feedmainref: workoutarea,
    },
    {
      feedmainid: "taskarea",
      feedmainref: taskarea,
    },
    {
      feedmainid: "clubarea",
      feedmainref: clubarea,
    },
    {
      feedmainid: "ticketarea",
      feedmainref: ticketarea,
    },
    {
      feedmainid: "favouritearea",
      feedmainref: favouritearea,
    },
    {
      feedmainid: "achievementarea",
      feedmainref: achievementarea,
    },
    {
      feedmainid: "guidearea",
      feedmainref: guidearea,
    },
    {
      feedmainid: "feedbackarea",
      feedmainref: feedbackarea,
    },
  ];

  const [appstatic, setappstatic] = useApp(
    feedmain,
    feedmainstatic.feedmainid,
    feedmainstatic.feedmainindex,
    fieldmainstate,
    messagedl
  );

  // if(Array.isArray(appstatic) && )
  return (
    <div>
      <main className="">
        {/* <section className="w-screen flex flex-row justify-end">
                <button onClick={() => setpostmainstate(!postmainstate)} className="l-button"><RiGridFill /></button>
                <button onClick={() => setpostmainstate(!postmainstate)} className="l-button"><RiLayoutGridFill /></button>
            </section> */}
        {feedmainstatic.feedmainid === "contractarea" &&
          feedmainstatic.feedmainindex === 2 && (
            <section className="">
              <PostMain
                postmainstatic={{
                  postmainid: "searchaddress",
                  postmainindex: 0,
                }}
              />
            </section>
          )}
        {appstatic?.map((data, index) => (
          <>
            <section key={index} className="">
              {data?.feedmaindata?.map((dat, i) => (
                <>
                  <article key={i}>
                    {dat?.feedmaintitle !== null &&
                      dat?.feedmainrender().props.children.props.children.length > 0 && (
                        <>
                          <div className="flex flex-row items-center justify-between">
                            <CardMain>
                              <h1 className="m-h5">{dat?.feedmaintitle}</h1>
                            </CardMain>
                          </div>
                        </>
                      )}
                    {dat?.feedmainrender()}
                  </article>
                </>
              ))}
            </section>
          </>
        ))}
      </main>
    </div>
  );
}

export function appAreaRender({ data, postmainstatic }) {
  return (
    <div>
      <section className="">
        {data?.map((data, index) => (
          <>
            <PostMain
              key={Object.values[0] || index}
              postmaindata={data}
              postmainstatic={postmainstatic}
            />
          </>
        ))}
      </section>
    </div>
  );
}

// {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 0) && <PostMain postmaindata={post} postmainstatic={} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}
// {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 1) && <PostMain postmaindata={post} postmainstatic={} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}
// {(feedmainstatic.feedmainid === 'contractarea' && feedmainstatic.feedmainindex === 2) && <PostMain postmaindata={post} postmainstatic={} postmainstyle={{figure: `!w-[50px] !h-[50px]`}} />}
