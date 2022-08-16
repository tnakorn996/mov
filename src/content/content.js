import { RiBookmarkLine, RiClipboardLine, RiHomeLine, RiInboxLine, RiLifebuoyFill, RiLifebuoyLine, RiMedal2Fill, RiMedal2Line, RiMedalFill, RiMedalLine, RiParentLine, RiSettings4Fill, RiSettings5Fill, RiSettingsFill, RiTrophyLine, RiUserAddLine } from "react-icons/ri"

// export function contentAction(min = 5, max = 360, unit = 'rep', fullunit = 'reps') {
export function contentAction(min, max, unit, fullunit) {
    let number = 0;
    const div = Math.floor(max / min)
    const array = [];
    for(let i = 1; i <= div; i++){
        if(number < max){
            number = (min * 1)
            array.push({
                breadhead: `${min * i}${unit !== undefined && unit}`,
                breadbody: `${min * i} ${fullunit}`,
            })
        }
    }
    // console.log('number', number, array)
  return array
}

export const appul = [
    {
        breadid: 'authmain',
        breadaction: `/auth/authmain`,
        breadtitle: 'Home',
        breadicon: <RiHomeLine />,
    },
    {
        breadid: 'userindex',
        breadaction: `/user/userindex`,
        breadtitle: 'User',
        breadicon: <RiParentLine />,
    },
    {
        breadid: 'userform',
        breadaction: `/user/userform`,
        breadtitle: 'User',
        breadicon: <RiParentLine />,
    },
    {
        breadid: 'clubmain',
        breadaction: `/club/clubmain`,
        breadtitle: 'Club',
        breadicon: <RiParentLine />,
    },
    {
        breadid: 'achievementmain',
        breadaction: `/achievement/achievementmain`,
        breadtitle: 'Rewards',
        breadicon: <RiTrophyLine />,
    },
    {
        breadid: 'workoutmain',
        breadaction: `/workout/workoutmain`,
        breadtitle: 'Workouts',
        breadicon: <RiClipboardLine />,
    },
    {
        breadid: 'favouritemain',
        breadaction: `/favourite/favouritemain`,
        breadtitle: 'Favourites',
        breadicon: <RiBookmarkLine />,
    },
    {
        breadid: 'contractmain',
        breadaction: `/contract/contractmain`,
        breadtitle: 'Friends',
        breadicon: <RiUserAddLine />,
    },
    {
        breadid: 'messagemain',
        breadaction: `/message/messagemain`,
        breadtitle: 'Messages',
        breadicon: <RiInboxLine  />,
    },
]

export const settingul = [
    {
        breadid: 'picture',
        breadaction: `/picture/pictureform`,
        breadtitle: 'Updddd',
        breadsubtitle: 'aaaaaa',
    },
    {
        breadid: 'picture',
        breadaction: `/picture/pictureform`,
        breadtitle: 'Updddd',
        breadsubtitle: 'aaaaaa',
    },
]


export const workoutul = [
    {
        breadid: 'lateral-bear-crawl',
        breadaction: `/workout/workoutindex/lateral-bear-crawl`,
        breadbool: true,
        breadpoint: 30,
        breadtitle: 'Lateral Bear Crawl',
        breadsubtitle: 'Get on all fours, hands directly below your shoulders, knees about shoulder-width apart. Tighten your abs and glutes, and lift your knees so your shins are parallel to the floor. This is the start. Keeping your back flat, move your body to the left 5 steps, aiming to move the opposite arm and leg at once. Then move to the right 5 steps. Work back and forth until time is up to challenge your abs, quads, and shoulders.',
        breadauthor: 'Milo Bryant',
        breadimage: '',
        breadvideo: 'https://hmg-h-cdn.hearstapps.com/videos/2021-mens-health-fitness-loops-ep17-ben-selects-lateralbearcrawl-01-1625160521.mp4',
        breaddata: contentAction(30, 300, `s`, `seconds`)
    },
    {
        breadid: 'squat-to-broad-jump',
        breadaction: `/workout/workoutindex/squat-to-broad-jump`,
        breadbool: true,
        breadpoint: 30,
        breadtitle: 'Squat to Broad Jump',
        breadsubtitle: 'Start standing, feet about shoulder-width apart. Push your butt back and bend your knees, lowering your torso until your thighs are parallel to the floor. Stand. Now push your butt back and bend your knees, throw your hands backward, and explosively jump forward. That’s 1 rep; repeat until time is up to build leg strength and elevate your heart rate.',
        breadauthor: 'Milo Bryant',
        breadimage: '',
        breadvideo: 'https://hmg-h-cdn.hearstapps.com/videos/2021-mens-health-fitness-loops-ep17-ben-selects-squattobroadjump-01-1625160622.mp4',
        breaddata: contentAction(30, 300, `s`, `seconds`)

    },
    {
        breadid: 'single-side-kick-through',
        breadaction: `/workout/workoutindex/single-side-kick-through`,
        breadbool: true,
        breadpoint: 30,
        breadtitle: 'Single-Side Kick Through',
        breadsubtitle: 'Get on all fours, hands directly below your shoulders, knees about shoulder-width apart. Tighten your abs and glutes, and lift your knees so your shins are parallel to the floor. This is the start. Keeping your back flat, move your body to the left 5 steps, aiming to move the opposite arm and leg at once. Then move to the right 5 steps. Work back and forth until time is up to challenge your abs, quads, and shoulders.',
        breadauthor: 'Milo Bryant',
        breadimage: '',
        breadvideo: 'https://hmg-h-cdn.hearstapps.com/videos/2021-mens-health-fitness-loops-ep17-ben-selects-singelsidekickthrough-01-1625160738.mp4',
        breaddata: contentAction(30, 300, `s`, `seconds`)
    },
    {
        breadid: 'mixed-style-skater-lunge',
        breadaction: `/workout/workoutindex/mixed-style-skater-lunge`,
        breadbool: true,
        breadpoint: 30,
        breadtitle: 'Mixed-Style Skater Lunge',
        breadsubtitle: `Start standing, feet shoulder-width apart, knees bent. Lift your left leg off the floor and
        leap to the left, landing on your left leg only. Quickly leap back to the right, then leap
        again to the left. After this third leap, hold for 4 counts. Repeat this pattern (3 explosive skaters followed by a hold), building glute balance and strength.`,
        breadauthor: 'Milo Bryant',
        breadimage: '',
        breadvideo: 'https://hmg-h-cdn.hearstapps.com/videos/2021-mens-health-fitness-loops-ep17-ben-selects-mixedstyleskaterlunges-01-1625161797.mp4',
        breaddata: contentAction(30, 300, `s`, `seconds`)
    },
    {
        breadid: 'black-widow',
        breadaction: `/workout/workoutindex/black-widow`,
        breadbool: true,
        breadpoint: 30,
        breadtitle: 'Back Widow',
        breadsubtitle: `Lie on your back, abs tight, heels near your butt. Place your upper arms on thefloor at a 45 degree angle to your torso and point your forearms upward. Squeezeyour shoulder blades and drive your elbows into the floor hard, tightening yourback muscles; this will lift your torso a few inches off the floor. Hold for 3 seconds,then lower. That’s 1 rep; repeat for 40 seconds. You’ll build mid-back strength andstrengthen your core more than you think.`,
        breadauthor: 'Milo Bryant',
        breadimage: '',
        breadvideo: 'https://hmg-h-cdn.hearstapps.com/videos/2021-mens-health-fitness-loops-ep17-ben-selects-backwidow-01-1625162059.mp4',
        breaddata: contentAction(10, 100, ``, `reps`)
    },
    {
        breadid: 'spiderman-crawl-pushup',
        breadaction: `/workout/workoutindex/black-widow`,
        breadbool: true,
        breadpoint: 30,
        breadtitle: 'Spiderman-Crawl Pushup',
        breadsubtitle: `Start in pushup position. Raise your right leg, drive your right knee toward your right elbow, then shift your left arm a few inches forward. Tighten your shoulder blades and bend at the shoulders and elbows, lowering into a pushup. Press up. Repeat on the other side. That’s 1 rep. Repeat this pattern, building chest and triceps strength while also alleviating hip tightness.`,
        breadauthor: 'Milo Bryant',
        breadimage: '',
        breadvideo: 'https://hmg-h-cdn.hearstapps.com/videos/2021-mens-health-fitness-loops-ep17-ben-selects-spidermancrawlpushup-01-1625162163.mp4',
        breaddata: contentAction(10, 100, ``, `reps`)
    },

    {
        breadid: 'bench',
        breadaction: `/workout/workoutindex/bench`,
        breadbool: false,
        breadpoint: 30,
        breadtitle: 'Bench',
        breadsubtitle: 'Start standing, feet about shoulder-width apart. Push your butt back and bend your knees, lowering your torso until your thighs are parallel to the floor. Stand. Now push your butt back and bend your knees, throw your hands backward, and explosively jump forward. That’s 1 rep; repeat until time is up to build leg strength and elevate your heart rate.',
        breadauthor: 'Milo Bryant',
        breadimage: '',
        breadvideo: '',
        breaddata: contentAction(5, 360, `kg`, `kilograms`)
    },
    {
        breadid: 'squat',
        breadaction: `/workout/workoutindex/squat`,
        breadbool: false,
        breadpoint: 30,
        breadtitle: 'Squat',
        breadsubtitle: 'Start standing, feet about shoulder-width apart. Push your butt back and bend your knees, lowering your torso until your thighs are parallel to the floor. Stand. Now push your butt back and bend your knees, throw your hands backward, and explosively jump forward. That’s 1 rep; repeat until time is up to build leg strength and elevate your heart rate.',
        breadauthor: 'Milo Bryant',
        breadimage: '',
        breadvideo: '',
        breaddata: contentAction(10, 500, `kg`, `kilograms`)
    },
    {
        breadid: 'deadlift',
        breadaction: `/workout/workoutindex/deadlift`,
        breadbool: false,
        breadpoint: 30,
        breadtitle: 'Deadlift',
        breadsubtitle: 'Start standing, feet about shoulder-width apart. Push your butt back and bend your knees, lowering your torso until your thighs are parallel to the floor. Stand. Now push your butt back and bend your knees, throw your hands backward, and explosively jump forward. That’s 1 rep; repeat until time is up to build leg strength and elevate your heart rate.',
        breadauthor: 'Milo Bryant',
        breadimage: '',
        breadvideo: '',
        breaddata: contentAction(10, 510, `kg`, `kilograms`)
    },
]

export const clubul = [
    {
        breadid: 'bench',
        breadaction: `/club/clubindex/bench`,
        breadtitle: '100KG Bench',
        breadpoint: 90,
        breadsubtitle: 'Reach 100.0 kilogram this month',
        breadnumber: '100.0 KG',
        breadimage: 'https://humbleteam.com/images/covers/blog/1x/blog-img-35.webp',
    },
    {
        breadid: 'squat',
        breadaction: `/club/clubindex/squat`,
        breadtitle: '100KG Squat',
        breadpoint: 90,
        breadsubtitle: 'Reach 100.0 kilogram this month100.0 KG',
        breadnumber: '100.0 KG',
        breadimage: 'https://media.gq.com/photos/59ef7115f964810d9a9b8ef5/16:9/w_2560%2Cc_limit/gq-fitness-squats.jpg',
    },
    {
        breadid: 'deadlift',
        breadaction: `/club/clubindex/deadlift`,
        breadtitle: '100KG Deadlift',
        breadpoint: 90,
        breadsubtitle: 'Reach 100.0 kilogram this month',
        breadnumber: '100.0 KG',
        breadimage: 'https://media.gq.com/photos/5955492a363481058b1b2159/16:9/w_2560%2Cc_limit/2017-06_GQ_Deadlifts-July_3x2.jpg',
    },

    {
        breadid: 'lateral-bear-crawl',
        breadaction: `/club/clubindex/lateral-bear-crawl`,
        breadtitle: '60MIN Lateral Bear Crawl',
        breadpoint: 90,
        breadsubtitle: 'Reach 60.0 minutes this month',
        breadnumber: '60.0 minutes',
        breadimage: 'https://media.gq.com/photos/5b87ff48debb940f1cc007a3/16:9/w_2560%2Cc_limit/No-Gear-Workout-GQ-2018-082918.jpg',
    },
]

export const achievementul = [
    // {
    //     breadid: 'user-one',
    //     breadaction: `/achievement/achievementindex/user-one`,
    //     breadtitle: 'Beginner',
    //     breadsubtitle: 'Finish your third workout to earn this achievement.',
    //     breadnumber: `1`,
    //     breadicon: <RiSettingsFill />,
    // },
    // {
    //     breadid: 'user-two',
    //     breadaction: `/achievement/achievementindex/user-two`,
    //     breadtitle: 'Intermediate',
    //     breadsubtitle: 'Finish your third workout to earn this achievement.',
    //     breadnumber: `2`,
    //     breadicon: <RiSettings4Fill />,
    // },
    // {
    //     breadid: 'user-three',
    //     breadaction: `/achievement/achievementindex/user-three`,
    //     breadtitle: 'Expert',
    //     breadsubtitle: 'Finish your third workout to earn this achievement.',
    //     breadnumber: `3`,
    //     breadicon: <RiSettings5Fill />,
    // },

    {
        breadid: 'task-one',
        breadaction: `/achievement/achievementindex/task-one`,
        breadtitle: '1 Workout',
        breadsubtitle: 'Finish your first workout to earn this achievement.',
        breadnumber: `1`,
        breadicon: <RiMedal2Line />,
    },
    {
        breadid: 'task-three',
        breadaction: `/achievement/achievementindex/task-three`,
        breadtitle: '3 Workouts',
        breadsubtitle: 'Finish your third workout to earn this achievement.',
        breadnumber: `3`,
        breadicon: <RiMedal2Fill />,
    },

    {
        breadid: 'ticket-one',
        breadaction: `/achievement/achievementindex/ticket-one`,
        breadtitle: '1 Club',
        breadsubtitle: 'Join your first club to earn this achievement.',
        breadnumber: `1`,
        breadicon: <RiMedalLine />,
    },
    {
        breadid: 'ticket-three',
        breadaction: `/achievement/achievementindex/ticket-three`,
        breadtitle: '3 Clubs',
        breadsubtitle: 'Join your third club to earn this achievement.',
        breadnumber: `3`,
        breadicon: <RiMedalFill />,
    },
]

export const articleul = [
    {
        breadid: 'article-one',
        breadaction: `/article/articleindex/article-one`,
        breadtitle: `👋Welcome to Beasty V2.0 !`,
        breadsubtitle: `
           Have got some questions?, please contract development issues at: tnakorn996@gmail.com

        `,
    },
    {
        breadid: 'article-two',
        breadaction: `/article/articleindex/article-two`,
        breadtitle: 'Hit Your Fitness Goals With Beasty',
        breadsubtitle: `

        Strength in numbers
        Instead of being led by a single Nike Master Trainer, the Breakthrough Challenge features a team of five, each with a specific expertise. It’s the most varied program in the app—and every workout builds on the previous one. One day might be dedicated to building core strength, the next to yoga for increased mobility. Then that strength and flexibility you’ve been working on may feed into high-intensity training.“If you’ve never done something—whether it’s yoga or crab walks—you may wonder why you should give it a shot,” says Nike Master Trainer Alex Silver-Fagan. “We’ll show you how these relate to one another—and help you see you’re capable of things you might not have realized.”
        `,
    },
]