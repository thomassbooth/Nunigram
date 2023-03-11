import React, { useState } from 'react'
import ImageTypes from '../Components/Profile/ImageTypes'

function ProfilePosts() {
  const [postTypes, setTypes] = useState([
    {
      name: 'POSTS',
      icon: 'fa-th',
      active: true
    },
    {
      name: 'SAVED',
      icon: 'fa-bookmark-o',
      active: false
    },
    {
      name: 'TAGGED',
      icon: 'fa-th',
      active: false
    }
  ])
  return (
    <div className = 'border-t mt-10'>
      <div className = 'flex justify-center space-x-20'>
        {postTypes.map((tab) => {
          return <ImageTypes tab = {tab} allTabls = {postTypes}/>
        })}
      </div>
    </div>
  )
}

export default ProfilePosts 