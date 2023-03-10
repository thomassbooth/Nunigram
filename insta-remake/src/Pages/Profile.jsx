import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import About from '../Containers/About'
import ProfilePosts from '../Containers/ProfilePosts'

function Profile() {
    const {handle} = useParams();
    const [profileData, setProfile] = useState({
      nickname: 'thomassboothh',
      name: 'Tom Booth',
      pronouns: 'she/her',
      about: 'test datatest data123',
      occupation: 'Software Engineer',
      mutualFollowers: ['Dave', 'bigtimmy', 'stevenHawk', 'stinkyPeter'],
      posts: 15,
      followers: 388,
      following: 384,
      followed: false,
      story: {
        exists: true,
        watched: false
      },
    })

    const watchedStory = () => {setProfile({...profileData, story:{exists: true, watched: true}})}
    const followedUser = () => {setProfile({...profileData,followed: !profileData.followed})}


  return (
    <div className = 'w-4/5 flex justify-center'>
      <div className = 'w-[1000px]'>
        <About handle = {handle} data = {profileData} watchedStory = {watchedStory} followedUser = {followedUser}/>
        <ProfilePosts/>
      </div>
        
    </div>
  )
}

export default Profile