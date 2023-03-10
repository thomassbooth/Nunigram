import { useAuth0 } from '@auth0/auth0-react'
import Name from '../Components/Profile/Name'
import React from 'react'
import Image from '../Components/Profile/Image'
import Followed from '../Components/Profile/Mutuals'
useAuth0
function About({handle, data, watchedStory, followedUser}) {
    const {isAuthenticated, user} = useAuth0()
    let personalAcc = false
    if (isAuthenticated && user.nickname === handle){personalAcc = !personalAcc}

  return (
    
    isAuthenticated && <section>
        <div className = 'flex mt-8 items-center'>
            <Image data = {data} user = {user} watchedStory = {watchedStory}/>
            <div>
                <Name personalAcc = {personalAcc} handle = {handle} data = {data} followedUser = {followedUser}/>
                <div className='my-6'></div>
                <ul className = 'flex text-lg tracking-wide '>
                    <li className = 'mr-12'>
                        <div>
                            <span>{data.posts}</span>
                            <span className = 'font-extralight'> posts</span>
                        </div>
                    </li>
                    <li className = 'mr-8'>
                        <div>
                            <span>{data.followers}</span>
                            <span className = 'font-extralight '> follwers</span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span>{data.following}</span>
                            <span className = 'font-extralight '> following</span>
                        </div>
                    </li>
                </ul>
                <div className = 'mt-6'>
                    <span className = 'text-sm'>{data.name}</span>
                    {'pronouns' in data 
                        ? <span className = 'ml-2 text-xs text-gray-400 opacity-50'>{data.pronouns}</span>
                        : ''}
                    {'occupation' in data
                        ? <p className = 'opacity-50 text-sm font-light'>{data.occupation}</p>
                        : ''}
                    <p className = 'text-sm font-light'>{data.about}</p>
                    {'mutualFollowers' in data
                        ? <Followed mutualFollowers = {data.mutualFollowers}/>
                        : ''
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default About