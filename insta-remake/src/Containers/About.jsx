import { useAuth0 } from '@auth0/auth0-react'
import Name from '../Components/Profile/Name'
import React from 'react'
import Image from '../Components/Profile/Image'
useAuth0
function About({handle, data, watchedStory, followedUser}) {
    const {isAuthenticated, user} = useAuth0()
    let personalAcc = false
    if (isAuthenticated && user.nickname === handle){personalAcc = !personalAcc}

  return (
    
    isAuthenticated && <div>
        <div className = 'flex mt-8 items-center'>
            {!personalAcc 
                ? <Image data = {data} user = {user} watchedStory = {watchedStory}/>
                : <button className = 'mr-20 ml-10'>
                    <img src = {user.picture} className = {'w-[175px] rounded-full border border-gray-500'}></img>
                </button>
            }
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