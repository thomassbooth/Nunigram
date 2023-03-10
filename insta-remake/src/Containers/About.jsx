import { useAuth0 } from '@auth0/auth0-react'
import Name from '../Components/Profile/Name'
import React from 'react'
useAuth0
function About({handle, data, watchedStory, followedUser}) {
    const {isAuthenticated, user} = useAuth0()
    let personalAcc = false
    if (isAuthenticated && user.nickname === handle){personalAcc = !personalAcc}
    let storyClass = ''
    if (!data.story.watched){
        storyClass = 'ring-offset-[5px] ring-rose-900 ring-[3.5px]'
    } else {
        storyClass = 'ring-offset-[5px] ring-grey-500 ring-[2px]'
    }

  return (
    
    isAuthenticated && <div>
        <div className = 'flex mt-8 items-center'>
            {data.story.exists ? 
            <button onClick = {() => {watchedStory()}} className = 'mr-20 ml-10'>
                <img src = 'images/cat.jpg' className = {'w-[175px] rounded-full border border-gray-500 ' + storyClass}></img>
            </button> : <div className = 'mr-20 ml-10'><img src = 'images/cat.jpg' className = 'w-[175px] rounded-full border border-gray-500'></img></div>}
            <div>
                <Name personalAcc = {personalAcc} handle = {handle} data = {data} followedUser = {followedUser}/>
                <div>
                    <p>a</p>
                    <p>s</p>
                    <p>c</p>
                    <p>d</p>
                    <p>e</p>
                    <p>f</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About